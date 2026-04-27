import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { traceable } from 'langsmith/traceable';
import { Client } from 'langsmith';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Initialize LangSmith client
    const langsmithClient = new Client({
    apiKey: process.env.LANGSMITH_API_KEY,
    apiUrl: 'https://api.smith.langchain.com',
    });

    // Wrap the AI analysis function with tracing
    const analyzeCustomerWithTrace = traceable(
    async (customer: any) => {
        const prompt = `You are a Customer Success AI assistant. Analyze this customer and return ONLY valid JSON (no other text, no markdown, just the JSON object):

    Customer:
    - Name: ${customer.name}
    - Total spent: $${customer.total_spent}
    - Last active: ${customer.last_active}
    - Support tickets: ${customer.support_tickets}

    Return JSON in this exact format:
    {
    "risk_score": (number 1-10, where 10 = high churn risk),
    "reason": (string explaining why in 1 sentence),
    "action_items": (array of 2-3 strings)
    }

    Base risk on: Low total spent, old last_active date, high support tickets = higher risk.`;

        const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        temperature: 0.3,
        messages: [{ role: 'user', content: prompt }],
        });

        const contentBlock = response.content[0];
        
        if (!contentBlock || contentBlock.type !== 'text') {
        throw new Error('Invalid response format from Claude');
        }
        
        let text = contentBlock.text;
        text = text.trim();
        
        // Remove markdown code blocks if present
        if (text.startsWith('```json')) {
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        } else if (text.startsWith('```')) {
        text = text.replace(/```\n?/g, '');
        }
        
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        
        if (!jsonMatch) {
        throw new Error('No JSON found in Claude response');
        }
        
        const analysis = JSON.parse(jsonMatch[0]);
        
        return {
        analysis,
        rawResponse: text,
        usage: response.usage,
        };
    },
    {
        name: 'churn_risk_analysis',
        run_type: 'llm',
        project_name: process.env.LANGSMITH_PROJECT || 'customer-dashboard',
    }
    );

    export async function POST(request: Request) {
    try {
        const { customer } = await request.json();
        
        // This call is automatically traced to LangSmith
        const result = await analyzeCustomerWithTrace(customer);
        
        return NextResponse.json(result.analysis);
        
    } catch (error: any) {
        console.error('AI Analysis Error:', error.message);
        
        const fallback = {
        risk_score: 5,
        reason: `Analysis temporarily unavailable: ${error.message.substring(0, 100)}`,
        action_items: ["Check server logs for details", "Try again in a moment"]
        };
        
        return NextResponse.json(fallback);
    }
}