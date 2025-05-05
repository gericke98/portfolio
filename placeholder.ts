export const timelineData = [
  {
    title: "Foundations in Tech & Strategy",
    date: "2016 – 2020",
    description:
      "At Universidad Pontificia Comillas, I developed a strong technical foundation in engineering and trained a structured mindset to approach and solve complex problems. This period sharpened my analytical and strategic thinking. It was also when I discovered software development — a creative tool to build, automate, and innovate.",
  },
  {
    title: "Entrepreneurial Spark – Shameless Collective & Beyond",
    date: "2016 – Present",
    description:
      "Shameless Collective started as a hobby with two friends, and in recent years evolved into a serious venture. To scale it, I built a full-stack returns platform and an AI-powered chatbot that improved customer retention and doubled sales. During my year at Santa Clara University, I immersed myself in Silicon Valley’s startup culture and pursued two other ventures, building MVPs with 100+ potential users and engaging investors for a €100k pre-seed round.",
  },
  {
    title: "Scaling Solutions – Data, Strategy & AI in Consulting",
    date: "2020 – Present",
    description:
      "My consulting path, from AT Kearney to Monstarlab, gave me the opportunity to apply data and AI to solve complex business problems. I led the development of pricing optimization features, sales clustering models, and go-to-market strategies for global F&B clients — combining Python, R, SQL, and AWS to deliver scalable, revenue-driving tools.",
  },
  {
    title: "Full-Stack & AI Innovation – Learning by Building",
    date: "2022 – Present",
    description:
      "Beyond formal roles, I’ve built 10+ production-grade apps across AI, full-stack, and automation — from real-time order trackers to generative AI interfaces. Each project helped me sharpen core skills in React, Next.js, Python, OpenAI, and AWS, and reinforced my belief in building things that solve real problems and scale with impact.",
  },
  {
    title: "Tayliq – Building AI Infrastructure for DTC Brands",
    date: "2025 – Present",
    description:
      "As CEO & Co-founder of Tayliq, I launched a Shopify App that equips DTC brands with AI-powered customer support. I built secure authentication, embedded UI, and real-time backend architecture using Remix, GraphQL, and GPT-4. We onboarded early clients organically, demonstrating tangible gains in CX and cost efficiency. Tayliq is the product of everything I’ve learned — tech, design, product, and execution — coming together.",
  },
  {
    title: "The Next Chapter – Bay Area & Beyond",
    date: "Present & Future",
    description:
      "After years of building, learning, and leading, I’m ready for the next challenge: growing in the Bay Area — a global hub of innovation. I’m looking to join a high-impact tech company where I can combine my engineering skills, product mindset, and entrepreneurial energy to shape the future with AI-powered solutions that matter.",
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
    liveDemoLink: "https://shamelesscollective.com",
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
