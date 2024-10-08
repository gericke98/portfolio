import { Skill } from "./types";
import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaHandsHelping,
  FaRocket,
  FaBook,
} from "react-icons/fa";

export const timelineData = [
  {
    title: "Foundations in Tech & Strategy",
    date: "2016 - 2020",
    description:
      "At Universidad Pontificia Comillas, I developed a strong technical foundation in engineering and trained a structured mindset to approach and solve complex problems, building analytical and strategic thinking skills.",
  },
  {
    title: "Entrepreneurial Journey – Shameless Collective & Beyond",
    date: "2016 - Present",
    description:
      "Shameless Collective began as a hobby between friends but transformed into a serious venture over the last two years. Fueled by passion and a relentless drive for innovation, we achieved a 200% increase in monthly sales by automating key processes and implementing strategic growth initiatives. My entrepreneurial path was also shaped by a year at Santa Clara University, where I immersed myself in Silicon Valley's startup culture. Alongside Shameless Collective, I pursued two additional ventures, developing MVPs that attracted over 100 potential users and engaging in discussions to raise a €100,000 pre-seed round—proving my ability to turn ideas into impactful, scalable businesses.",
  },
  {
    title: "Consulting Solutions & Expansion Strategy",
    date: "2020 - Present",
    description:
      "In my consulting career, starting at AT Kearney and advancing at Metyis, I put my problem-solving and communication skills into practice by collaborating with a team on diverse projects aimed at solving large-scale challenges for major and startup companies, from optimizing revenue to developing market expansion strategies.",
  },
  {
    title: "The Next Chapter – Silicon Valley & Beyond",
    date: "Present & Future",
    description:
      "After making the most of all the experiences along the journey, I am determined to embark on the new adventure of growing at a vibrant startup in Silicon Valley - a hub woven by the fabric of entrepreneurship. This opportunity will not only unleash my full potential but also enable me to bring my diverse background, endless eagerness to learn and unwavering commitment to achieving my goals.",
  },
];

export const skillsData: Skill[] = [
  {
    title: "Technical Skills",
    description:
      "Experienced in full-stack development with technologies like React, Next.js, Node.js, and Python. Proficient in designing and optimizing algorithms, building APIs, and deploying scalable web applications.",
    icon: FaCode, // No JSX, just passing the function reference for the icon
    projects: [
      {
        name: "Shameless Locator",
        link: "https://shameless-locator-web.vercel.app/",
        description:
          "An order tracking tool built with Next.js and Tailwind CSS.",
        techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      },
      {
        name: "Personal Portfolio",
        link: "https://your-portfolio-link.vercel.app/",
        description: "A modern portfolio showcasing my work and skills.",
        techStack: ["React", "Next.js", "Vercel"],
      },
    ],
  },
  {
    title: "Data Science & Analytics",
    description:
      "Skilled in data analysis, visualization, and predictive modeling. Proficient in Python, pandas, scikit-learn, and data visualization libraries like Matplotlib.",
    icon: FaChartBar, // Icon reference, not JSX
    projects: [
      {
        name: "Sales Prediction Model",
        link: "https://github.com/your-username/sales-prediction",
        description:
          "A machine learning model predicting sales trends using time series data and regression analysis.",
        techStack: ["Python", "Pandas", "scikit-learn", "Jupyter Notebook"],
      },
    ],
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
