export const timelineData = [
  {
    title: "Foundations in Tech & Strategy",
    date: "2016 - 2020",
    description:
      "At Universidad Pontificia Comillas, I developed a strong technical foundation in engineering and trained a structured mindset to approach and solve complex problems, building analytical and strategic thinking skills.During this time, I discovered my passion for software development and began deep diving into programming, exploring its potential to create impactful solutions and drive innovation.",
  },
  {
    title: "Entrepreneurial Journey – Shameless Collective & Beyond",
    date: "2016 - Present",
    description:
      "Shameless Collective began as a nascent dream among three friends but transformed into a serious venture over the last two years. Noticing we were suffering in client service and retention, I developed a full-stack returns portal and an AI-powered chatbot that drove us to boost our recurring customers and our sales by 200%.\u2028\u2028My entrepreneurial spirit was significantly spurred during my time at Santa Clara University, where I immersed myself in Silicon Valley's startup culture. Alongside Shameless Collective, I pursued two additional ventures, developing MVPs that attracted over 100 potential users and engaging in discussions to raise a €100,000 pre-seed round",
  },
  {
    title: "Consulting Solutions & Expansion Strategy",
    date: "2020 - Present",
    description:
      "In my consulting career, starting at AT Kearney and advancing at Monstarlab, I leveraged my technical expertise to develop data-driven solutions for enterprise clients. I built pricing optimization models for top-tier beverage companies in Spain using R and Python, and defined go-to-market strategies for FMCG companies by implementing advanced analytics with SQL and AWS. These technical implementations helped clients solve large-scale challenges, from optimizing revenue streams to developing data-backed market expansion strategies.",
  },
  {
    title: "Mastering Full-Stack Development & Generative AI Innovation",
    date: "2020 - Present",
    description:
      "In recent years, I've built a diverse portfolio of production-ready applications spanning full-stack development and generative AI. My projects include customer-facing web applications using Next.js and React, backend automation systems with Python, and advanced AI solutions leveraging AWS services. I've implemented real-time API integrations, developed intelligent chatbots, created operational automation tools, and deployed machine learning models.",
  },
  {
    title: "The Next Chapter – Bay Area & Beyond",
    date: "Present & Future",
    description:
      "After making the most of the experiences along my journey, I am ready to embrace the next adventure: growing in the Bay Area, a global hub of innovation and entrepreneurship. I'm excited to join a tech company where I can apply my technical skills and business experience to solve meaningful problems. My goal is to work with a talented team on products I believe in, while continuing to develop as both an engineer and entrepreneur.",
  },
];

export const projects = [
  {
    name: "Multi-Agent AWS Bedrock System",
    liveDemoLink: "", // You can add this when you have a live demo
    githubLink: "https://github.com/gericke98/multiagent-aws-bedrock",
    liveDemo: false, // Change to true when you have a live demo
    description:
      "The <strong>Multi-Agent AWS Bedrock System</strong> implements an intelligent recommendation engine using a multi-agent architecture. Built with <strong>AWS Bedrock</strong> and <strong>Lambda</strong>, it features specialized agents that provide tailored information about hotels, Airbnbs, and restaurants. The system leverages <strong>AI-powered agents</strong> to handle complex user queries while a supervisor agent coordinates the workflow. It integrates with <strong>Amazon S3</strong> to access accommodation and restaurant data, processing filters like location, amenities, and dining preferences. The system is accessible via <strong>API Gateway</strong>, allowing seamless integration with frontend applications through HTTP requests.",
    techStack: [
      "AWS Bedrock",
      "AWS Lambda",
      "Amazon S3",
      "API Gateway",
      "Python",
      "Pandas",
      "Boto3",
      "Environment Variables",
      "Multi-Agent Architecture",
      "Serverless",
    ],
  },
  {
    name: "AI Customer Support Chat",
    liveDemoLink: "https://shopify-chatbot-two.vercel.app",
    githubLink: "https://github.com/gericke98/shopify_chatbot",
    liveDemo: true,
    description:
      "The <strong>AI Customer Support Chat</strong> provides real-time customer assistance with intelligent ticket management. Built with <strong>Next.js 14</strong> and <strong>Server Actions</strong>, it features a responsive UI and real-time updates across multiple sessions. The system leverages <strong>AI-powered responses</strong> to handle customer inquiries while enabling actionable operations like <strong>changing delivery addresses</strong> and <strong>processing returns</strong>. It integrates with <strong>Shopify</strong> via <strong>GraphQL API</strong> to access order data and utilizes <strong>Twilio</strong> for voice calls and <strong>Elevenlabs AI</strong> for natural-sounding voice synthesis during customer interactions. Administrators can seamlessly take over conversations for complex issues while maintaining context.",
    techStack: [
      "Elevenlabs AI",
      "Twilio",
      "OpenAI API",
      "Shopify GraphQL API",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Server Components",
      "Server Actions",
      "PostgreSQL",
      "Drizzle ORM",
      "Vercel",
    ],
  },
  {
    name: "Shameless Returns",
    liveDemoLink: "https://shameless-returns-web.vercel.app",
    githubLink: "https://github.com/gericke98/shameless-returns-web",
    liveDemo: true,
    description:
      "The <strong>Shameless Returns Portal</strong> streamlines returns, improves customer experience, and reduces manual workload. Built with <strong>Next.js</strong>, <strong>React</strong>, and <strong>Neon Serverless</strong>, it integrates with <strong>Shopify (CRM)</strong> via <strong>GraphQL API</strong> and <strong>Correos</strong> using <strong>SOAP requests</strong> for real-time tracking.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Typescript",
      "GraphQL API",
      "SOAP API",
      "Shopify",
      "Neon Serverless",
    ],
  },
  {
    name: "Gmail AI Response System",
    liveDemoLink: "",
    githubLink: "https://github.com/gericke98/gmail-ai-response",
    liveDemo: false,
    description:
      "An intelligent email responder powered by <strong>OpenAI</strong> and the <strong>Gmail API</strong>. It monitors incoming emails in real-time, categorizes each message using advanced natural language processing to decide if it qualifies for an AI-generated reply, and then dispatches a context-aware response to streamline communication.",
    techStack: [
      "Python",
      "OpenAI API",
      "Gmail API",
      "Google Cloud Functions",
      "Pub/Sub",
      "REST API",
    ],
  },
  {
    name: "Duolingo Clone",
    liveDemoLink: "https://next14-duolingo.vercel.app",
    githubLink: "https://github.com/gericke98/next14-duolingo",
    liveDemo: true,
    description:
      "A <strong>Next.js</strong> language platform inspired by Duolingo with interactive features. Created <strong>AI Voices</strong> using Elevenlabs AI, implemented ORM with <strong>DrizzleORM</strong> and a PostgresDB via <strong>NeonDB</strong>, integrated an admin dashboard using React Admin, and handled subscriptions using <strong>Stripe</strong>.",
    techStack: [
      "React",
      "Next.js",
      "DrizzleORM",
      "Stripe",
      "Clerk",
      "Tailwind CSS",
      "Elevenlabs AI",
      "NeonDB",
      "React Admin",
    ],
  },
  {
    name: "Shameless Locator",
    liveDemoLink: "https://locator.shamelesscollective.com",
    githubLink: "https://github.com/gericke98/shameless-locator-web",
    liveDemo: true,
    description:
      "A <strong>Next.js</strong> tracker integrating with <strong>Tipsa</strong> for real‑time updates. Made API integrations using SOAP requests and employed <strong>Neon Serverless</strong> for efficient data storage.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Typescript",
      "SOAP API",
      "Tipsa",
      "Neon Serverless",
    ],
  },
  {
    name: "Order Fulfillment Automation",
    liveDemoLink: "",
    githubLink: "https://github.com/gericke98/shameless-order_automation",
    liveDemo: false,
    description:
      "A <strong>Python</strong> script that automates Shopify orders with <strong>Tipsa</strong> integration. Utilized <strong>GraphQL</strong> for API connectivity to our Shopify CRM.",
    techStack: [
      "Python",
      "Shopify API",
      "SOAP API",
      "Tipsa",
      "Pandas",
      "GraphQL",
    ],
  },
  {
    name: "Shameless Website - Shopify Clone",
    liveDemoLink: "https://shamelessweb.vercel.app",
    githubLink: "https://github.com/gericke98/shamelessweb",
    liveDemo: true,
    description:
      "A <strong>Next.js</strong> e-commerce clone featuring <strong>Clerk</strong> for authentication, <strong>Neon</strong> for data storage, <strong>Drizzle</strong> for ORM, and <strong>Stripe</strong> for payment processing.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Typescript",
      "Drizzle",
      "Stripe",
      "Clerk",
      "Neon",
    ],
  },
  {
    name: "Monthly Invoice Automation",
    liveDemoLink: "",
    githubLink: "https://github.com/gericke98/shameless-invoice_automation",
    liveDemo: false,
    description:
      "Automates monthly invoices using <strong>Python</strong> and <strong>ReportLab</strong>. Leveraged <strong>GraphQL</strong> for Shopify CRM connectivity and the <strong>Gmail API</strong> to send emails.",
    techStack: [
      "Python",
      "Shopify API",
      "ReportLab",
      "Requests",
      "GraphQL",
      "Gmail API",
    ],
  },
  {
    name: "Multi-Class Text Classification Model",
    liveDemoLink: "",
    githubLink: "https://github.com/gericke98/GENAI-text-classificiation-model",
    liveDemo: false,
    description:
      "A fine‑tuned <strong>DistilBERT</strong> model for multi‑category text classification. Fine‑tuned with <strong>AWS SageMaker</strong> and deployed with an endpoint connected via <strong>LangChain</strong>.",
    techStack: [
      "AWS Lambda",
      "AWS API Gateway",
      "Hugging Face",
      "DistilBERT",
      "PyTorch",
      "Python",
      "AWS SageMaker",
      "LangChain",
    ],
  },
];
