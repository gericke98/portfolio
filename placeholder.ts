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
      "Shameless Collective began as a nascent dream among three friends but transformed into a serious venture over the last two years. Fueled by passion and a relentless drive for innovation, we achieved a 200% increase in monthly sales by automating key processes and implementing strategic growth initiatives. My entrepreneurial path was also shaped by a year at Santa Clara University, where I immersed myself in Silicon Valley's startup culture. Alongside Shameless Collective, I pursued two additional ventures, developing MVPs that attracted over 100 potential users and engaging in discussions to raise a €100,000 pre-seed round—proving my ability to turn ideas into impactful, scalable businesses.",
  },
  {
    title: "Consulting Solutions & Expansion Strategy",
    date: "2020 - Present",
    description:
      "In my consulting career, starting at AT Kearney and advancing at Monstarlab, I put my problem-solving and communication skills into practice by collaborating with a team on diverse projects aimed at solving large-scale challenges for major and startup companies, from optimizing revenue to developing market expansion strategies.",
  },
  {
    title: "Mastering Full-Stack Development & Generative AI Innovation",
    date: "2020 - Present",
    description:
      "In last years, I have proactively dedicated my free time to mastering full-stack development and generative AI, building over 10 innovative solutions to gain advanced, hands-on experience. Key accomplishments include a production-ready platform that allows Shameless Collective users to track their orders seamlessly. I also developed two high-impact Python scripts that automate essential operations: one managing order fulfillment and client communication, while the other handles monthly invoice extraction for accounting. Additionally, I trained, customized, and deployed a multi-class text classification model using DistilBERT on AWS Lambda and API Gateway, underscoring my commitment to cutting-edge, applied AI solutions.",
  },
  {
    title: "The Next Chapter – Bay Area & Beyond",
    date: "Present & Future",
    description:
      "After making the most of the experiences along my journey, I am ready to embrace the next adventure: growing in the Bay Area, a global hub of innovation and entrepreneurship. This opportunity will allow me to channel my diverse background, relentless curiosity, and unwavering dedication to contributing to a project I deeply believe in and collaborating with a team committed to creating meaningful impact and shaping the future.",
  },
];

export const projects = [
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
