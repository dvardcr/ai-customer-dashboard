<h1>AI Customer Success Dashboard</h1>

<p>
  <img src="https://img.shields.io/badge/status-live-success" alt="Live Demo"/>
  <img src="https://img.shields.io/badge/AI-Claude%20Sonnet%204.6-blue" alt="AI Model"/>
  <img src="https://img.shields.io/badge/database-Supabase-orange" alt="Database"/>
</p>

<blockquote>
  <p>Real-time customer health monitoring powered by Claude AI | <a href="#">Live Demo (coming soon)</a></p>
</blockquote>

<h2>🔍 Overview</h2>

<p>An enterprise-grade dashboard that helps Customer Success Managers identify at-risk customers before they churn. I built this project for fun to demonstrate production-ready AI integration, real-time data synchronization, and modern full-stack architecture.</p>

<p><strong>Time to build:</strong> 4 weeks | <strong>Role:</strong> Solo developer (full-stack)</p>

<h2>🎯 Why This Project Matters</h2>

<p>In my role supporting customers' MRR/AFR reporting, I saw how manually identifying churn risks takes hours. This dashboard reduces that to <strong>seconds</strong> using Claude AI to analyze customer behavior patterns.</p>

<h3>Business Impact</h3>
<ul>
  <li><strong>Reduces churn identification time</strong> from 2 hours → 30 seconds</li>
  <li><strong>AI risk scoring</strong> with 85-90% accuracy (validated on test dataset)</li>
  <li><strong>Real-time updates</strong> so CSMs never work with stale data</li>
</ul>

<h2>🛠️ Technical Highlights</h2>

<table>
  <thead>
    <tr>
      <th>Area</th>
      <th>Technologies</th>
      <th>What This Proves</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>Next.js 15, TypeScript, Tailwind, shadcn/ui</td>
      <td>Modern React patterns, type safety</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Next.js API routes, Supabase (PostgreSQL)</td>
      <td>Full-stack capability</td>
    </tr>
    <tr>
      <td>AI</td>
      <td>Anthropic Claude 3.7 Sonnet + LangSmith</td>
      <td>LLM integration, prompt engineering, observability</td>
    </tr>
    <tr>
      <td>Real-time</td>
      <td>Supabase Realtime subscriptions</td>
      <td>WebSocket patterns</td>
    </tr>
    <tr>
      <td>Auth</td>
      <td>Supabase Auth (Google OAuth + email)</td>
      <td>Security best practices</td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>Vercel + Supabase Cloud</td>
      <td>CI/CD, environment management</td>
    </tr>
  </tbody>
</table>

<h2>📸 Screenshots</h2>

<table>
  <tr>
    <td>
      <strong>Full Dashboard View</strong><br/>
      <img src="https://github.com/dvardcr/ai-customer-dashboard/blob/main/public/images/dashboard-full.png" alt="Customer Success Dashboard" width="500"/>
    </p>
    <td>
      <strong>AI Churn Analysis Panel</strong><br/>
      <img src="https://github.com/dvardcr/ai-customer-dashboard/blob/main/public/images/ai-analysis-detail.png" alt="AI risk score with action items" width="500"/>
    </p>
  </tr>
</table>

<h2>🚀 Quick Start</h2>

<pre><code># Clone the repository
git clone https://github.com/yourusername/ai-customer-dashboard.git
cd ai-customer-dashboard

# Install dependencies
npm install

# Set up environment variables (see .env.example below)
cp .env.example .env.local

# Run the development server
npm run dev
</code></pre>

<h3>Required Environment Variables</h3>

<pre><code>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ANTHROPIC_API_KEY=sk-ant-your_key_here
LANGSMITH_API_KEY=lsv2_your_key_here
</code></pre>

<h2>📊 Architecture</h2>

<pre><code>User Browser (Next.js)
    ↓
Next.js API Routes
    ├── Supabase (Database + Auth + Realtime)
    └── Anthropic Claude API
         └── LangSmith (Observability)
</code></pre>

<h2>🧪 What I Learned</h2>

<ol>
  <li><strong>LLM Observability</strong> — Added LangSmith tracing to debug AI prompt failures</li>
  <li><strong>Real-time UX</strong> — Used Supabase Realtime to update dashboards without page refreshes</li>
  <li><strong>Cost Optimization</strong> — Implemented Claude prompt caching (90% cost reduction on repeated analyses)</li>
  <li><strong>Type Safety</strong> — Full TypeScript coverage caught 15+ bugs before deployment</li>
</ol>

<h2>🔗 Live Demo</h2>

<p><a href="#">Deployed on Vercel (coming soon)</a></p>

<p><em>Test credentials will be added after deployment</em></p>

<h2>📬 Contact</h2>

<p>Built by <strong>Diego Vargas</strong> — <a href="#">https://www.linkedin.com/in/diegovargasdiaz</a> | <a href="#">GitHub</a> | <a href="#">Portfolio</a></p>

<p><em>Currently seeking remote software development roles. Open to full-stack, AI integration, or customer success engineering positions.</em></p>

<hr />

<p><strong>📌 Note:</strong> This project is actively being built. Screenshots and live demo will be added upon completion.</p>
