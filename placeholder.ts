import { Skill } from "./types";
import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaHandsHelping,
  FaRocket,
  FaBook,
  FaRobot,
} from "react-icons/fa";

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

export const skillsData: Skill[] = [
  {
    title: "Full-Stack Development & Automation",
    description:
      "Experienced in building scalable, production-level web applications using React, Next.js, Node.js, and Python. Skilled in API development, creating automation scripts, and deploying applications. Developed over 10 custom solutions, including a production platform for Shameless Collective and automated scripts for order fulfillment and accounting.",
    icon: FaCode, // No JSX, just passing the function reference for the icon
    projects: [
      {
        name: "Shameless Locator",
        link: "https://locator.shamelesscollective.com",
        description:
          "An order tracking tool built with Next.js and Tailwind CSS. This tool integrates with an external logistics company (Tipsa) via API and uses SOAP responses to retrieve and display real-time order status updates.",
        techStack: [
          "Next.js",
          "Tailwind CSS",
          "Vercel",
          "Typescript",
          "SOAP API",
          "TIPSA integration",
        ],
      },
      {
        name: "Order Fulfillment Automation",
        link: "https://github.com/gericke98/shameless-order_automation",
        description:
          "A Python-based automation script for handling Shameless Collective's order fulfillment. This script integrates with Shopify's API and the external logistics provider Tipsa, dynamically generating shipping labels based on destination country and updating order statuses in real-time. It uses SOAP requests to log in and obtain session IDs, fetch tracking numbers, and manage multi-country fulfillment workflows.",
        techStack: [
          "Python",
          "Shopify API",
          "SOAP API",
          "Tipsa Integration",
          "Pandas",
        ],
      },
      {
        name: "Monthly Invoice Automation",
        link: "https://github.com/gericke98/shameless-invoice_automation",
        description:
          "A Python script that automates the generation of monthly invoices for Shameless Collective. Integrates with Shopify's API to retrieve order details, applies VAT based on location, and uses ReportLab to create formatted PDF invoices with client and product details. This automation significantly reduces manual invoice processing time each month.",
        techStack: ["Python", "Shopify API", "ReportLab", "Requests"],
      },
      {
        name: "Shameless Website - Shopify Clone",
        link: "https://shamelessweb.vercel.app",
        description:
          "A comprehensive e-commerce solution built with Next.js that replicates key Shopify functionalities. It includes product management, payment processing, order tracking, and user authentication. The site integrates with multiple APIs and leverages TypeScript for type safety, Drizzle for database management, Clerk for authenthication and Stripe for payments management",
        techStack: [
          "Next.js",
          "Tailwind CSS",
          "Typescript",
          "Drizzle",
          "Stripe",
          "Clerk",
        ],
      },
      {
        name: "Duolingo Clone",
        link: "https://next14-duolingo.vercel.app",
        description:
          "A language learning platform inspired by Duolingo, built with Next.js and TypeScript. This application simulates core Duolingo functionalities, including user progress tracking, subscription management, and an interactive learning interface. Optimized for performance with React components and includes efficient state management for seamless user experiences.",
        techStack: [
          "React",
          "Next.js",
          "Drizzle",
          "Stripe",
          "Clerk",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    title: "Generative AI Solutions",
    description:
      "Proficient in generative AI, with expertise in model customization, deployment, and practical applications. Developed a multi-class text classification model using DistilBERT, deployed on AWS Lambda and API Gateway for scalable, serverless API access.",
    icon: FaRobot,
    projects: [
      {
        name: "Multi-Class Text Classification Model",
        link: "https://github.com/gericke98/GENAI-text-classificiation-model",
        description:
          "Built a text classification model using Hugging Face's DistilBERT, fine-tuned to categorize titles into Science, Business, Health, and Entertainment. The model is deployed in a serverless architecture on AWS Lambda and API Gateway, with load testing for performance validation. The project showcases expertise in NLP, model fine-tuning, and efficient cloud-based deployment.",
        techStack: [
          "AWS Lambda",
          "AWS API Gateway",
          "Hugging Face Transformers",
          "DistilBERT",
          "PyTorch",
          "Python",
        ],
      },
    ],
  },
  {
    title: "Data Science & Analytics",
    description:
      "Skilled in data analysis, visualization, and predictive modeling. Proficient in Python, pandas, scikit-learn, and data visualization libraries like Matplotlib.",
    icon: FaChartBar,
  },
  {
    title: "Problem-Solving & Strategy",
    description:
      "Trained in structured problem-solving through engineering and consulting experiences. Capable of analyzing complex challenges and providing data-driven, strategic solutions to optimize business operations.",
    icon: FaBrain, // Icon reference
  },
  {
    title: "Leadership & Teamwork",
    description:
      "Led multiple projects in entrepreneurial and consulting roles, managing teams, and driving key initiatives to successful outcomes. Skilled at fostering collaboration and aligning teams with business goals.",
    icon: FaHandsHelping,
  },
  {
    title: "Entrepreneurship & Innovation",
    description:
      "Experienced in co-founding and scaling businesses, driving 200% sales growth through process automation and strategic scaling. Proficient in developing MVPs, engaging with investors for pre-seed funding, and navigating dynamic markets. Skilled in agile problem-solving, product development, and bringing creative, scalable solutions to any team or project.",
    icon: FaRocket,
  },
  {
    title: "Continuous Learning & Growth",
    description:
      "Constantly exploring and learning new technologies, including advancements in frontend frameworks, cloud technologies, and modern web development tools.",
    icon: FaBook,
    learning: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "AI & Machine Learning",
    ],
  },
];
