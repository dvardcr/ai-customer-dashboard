import { Anthropic } from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    });

    export async function POST(request: Request) {
    try {
        const { customer } = await request.json();

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
        model: 'claude-sonnet-4-6',  // ✅ The working model from curl test
        max_tokens: 500,
        temperature: 0.3,
        messages: [{ role: 'user', content: prompt }],
        });

        const contentBlock = response.content[0];
        
        if (!contentBlock || contentBlock.type !== 'text') {
        throw new Error('Invalid response format from Claude');
        }
        
        let text = contentBlock.text;
        
        // Clean up common issues
        text = text.trim();
        
        // Remove markdown code blocks if present
        if (text.startsWith('```json')) {
        text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
        } else if (text.startsWith('```')) {
        text = text.replace(/```\n?/g, '');
        }
        
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        
        if (!jsonMatch) {
        console.error('No JSON found in:', text);
        throw new Error('No JSON found in Claude response');
        }
        
        const analysis = JSON.parse(jsonMatch[0]);
        
        // Validate the response has required fields
        if (!analysis.risk_score || !analysis.reason || !analysis.action_items) {
        throw new Error('Missing required fields in Claude response');
        }
        
        return NextResponse.json(analysis);
        
    } catch (error: any) {
        console.error('AI Analysis Error:', error.message);
        
        // Return a fallback so UI doesn't break
        const fallback = {
        risk_score: 5,
        reason: `Analysis temporarily unavailable: ${error.message.substring(0, 100)}`,
        action_items: ["Check server logs for details", "Try again in a moment"]
        };
        
        return NextResponse.json(fallback);
    }
}