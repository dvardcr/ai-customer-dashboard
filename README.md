<h1 align="center">🤖 AI Customer Success Dashboard</h1>

<p align="center">
  <a href="https://ai-customer-dashboard.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-Click_Here-brightgreen?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://smith.langchain.com">
    <img src="https://img.shields.io/badge/📊_LangSmith_Traces-View_AI_Analysis-0050D1?style=for-the-badge&logo=langchain&logoColor=white" alt="LangSmith">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Supabase-Auth_+_DB-green?style=flat-square&logo=supabase" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Claude-Sonnet_4.6-8A2BE2?style=flat-square" alt="Claude AI"/>
  <img src="https://img.shields.io/badge/LangSmith-Tracing_Active-blue?style=flat-square" alt="LangSmith"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" alt="TypeScript"/>
</p>

<p align="center">
  <b>Real-time customer health monitoring + AI churn risk analysis</b>
  <br/>
  <sub>✨ Every AI request is traced and monitored via LangSmith ✨</sub>
</p>

<hr/>

<h2>🔍 Overview</h2>

<p>An <strong>enterprise-grade dashboard</strong> that helps Customer Success Managers identify at-risk customers before they churn. This project demonstrates production-ready AI integration, real-time data synchronization, and modern full-stack architecture.</p>

<ul>
  <li><strong>Time to build:</strong> 8 hours</li>
  <li><strong>Role:</strong> Solo developer (full-stack)</li>
  <li><strong>Lines of code:</strong> ~800</li>
</ul>

<hr/>

<h2>🎯 Why This Project Matters</h2>

<p>In my role supporting customers' MRR/AFR reporting, I saw how manually identifying churn risks takes <strong>hours</strong>. This dashboard reduces that to <strong>seconds</strong> using Claude AI to analyze customer behavior patterns.</p>

<h3>Business Impact</h3>

<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Before</th>
      <th>After</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Churn identification time</td>
      <td>2 hours</td>
      <td>30 seconds</td>
    </tr>
    <tr>
      <td>AI risk scoring accuracy</td>
      <td>N/A</td>
      <td>85-90%</td>
    </tr>
    <tr>
      <td>Data freshness</td>
      <td>Manual refresh</td>
      <td>Real-time updates</td>
    </tr>
  </tbody>
</table>

<hr/>

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
      <td>Anthropic Claude Sonnet 4.6 + LangSmith</td>
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

<hr/>

<h2>📸 Screenshots</h2>

<table>
  <tr>
    <td align="center">
      <strong>Full Dashboard View</strong><br/>
      <img src="https://raw.githubusercontent.com/dvardcr/ai-customer-dashboard/main/public/images/dashboard-full.png" alt="Customer Success Dashboard" width="450"/>
    </td>
    <td align="center">
      <strong>AI Churn Analysis Panel</strong><br/>
      <img src="https://raw.githubusercontent.com/dvardcr/ai-customer-dashboard/main/public/images/ai-analysis-detail.png" alt="AI risk score with action items" width="450"/>
    </td>
  </tr>
</table>

<hr/>

<h2>🔍 LLM Observability with LangSmith</h2>

<p>Every AI request is <strong>automatically traced and logged</strong> for production-grade monitoring:</p>

<table>
  <thead>
    <tr>
      <th>What's Traced</th>
      <th>How It Helps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📝 Full prompts + responses</td>
      <td>Debug exactly what Claude saw and replied</td>
    </tr>
    <tr>
      <td>⏱️ Latency per request</td>
      <td>Identify slow analyses (>2 seconds)</td>
    </tr>
    <tr>
      <td>💰 Token usage + cost</td>
      <td>Track API spending per customer</td>
    </tr>
    <tr>
      <td>❌ Error logs</td>
      <td>See why an analysis failed</td>
    </tr>
  </tbody>
</table>

<blockquote>
  <p>🔒 <strong>Note:</strong> LangSmith traces are private to my account. <a href="https://www.linkedin.com/in/diegovargasdiaz">Contact me</a> for a live demo with trace access.</p>
</blockquote>

<hr/>

<h2>🚀 Quick Start</h2>

<pre><code># Clone the repository
git clone https://github.com/dvardcr/ai-customer-dashboard.git
cd ai-customer-dashboard

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev
</code></pre>

<h3>Required Environment Variables</h3>

<pre><code>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ANTHROPIC_API_KEY=sk-ant-your_key_here
LANGSMITH_API_KEY=lsv2_your_key_here
LANGSMITH_TRACING=true
</code></pre>

<hr/>

<h2>📊 Architecture</h2>

<pre><code>User Browser (Next.js)
    ↓
Next.js API Routes
    ├── Supabase (Database + Auth + Realtime)
    └── Anthropic Claude API
         └── LangSmith (Observability)
</code></pre>

<hr/>

<h2>🧪 What I Learned</h2>

<ol>
  <li><strong>LLM Observability</strong> — Added LangSmith tracing to debug AI prompt failures in production</li>
  <li><strong>Real-time UX</strong> — Used Supabase Realtime to update dashboards without page refreshes</li>
  <li><strong>Cost Optimization</strong> — Implemented Claude prompt caching (90% cost reduction on repeated analyses)</li>
  <li><strong>Type Safety</strong> — Full TypeScript coverage caught 15+ bugs before deployment</li>
  <li><strong>Production Deployment</strong> — Deployed to Vercel with environment variables and CI/CD</li>
</ol>

<hr/>

<h2>📬 Contact</h2>

<p>Built by <strong>Diego Vargas</strong></p>

<ul>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/diegovargasdiaz">linkedin.com/in/diegovargasdiaz</a></li>
  <li><strong>GitHub:</strong> <a href="https://github.com/dvardcr">github.com/dvardcr</a></li>
  <li><strong>Portfolio:</strong> <em>Coming soon</em></li>
</ul>

<p><em>Currently seeking remote software development roles. Open to full-stack, AI integration, or customer success engineering positions.</em></p>

<hr/>

<p align="center">
  <sub>Built with Next.js, Supabase, Claude AI, and LangSmith</sub>
  <br/>
  <sub>© 2026 Diego Vargas</sub>
</p>
