// index.js

export const servicesData = [
  {
    title: "Frontend Development",
    description:
"I craft high-performance, intuitive, and visually stunning UIs that don’t just look good—they feel effortless to use. From dynamic dashboards to real-time data visualizations, I turn complex information into seamless, interactive experiences powered by modern frameworks.", 
   items: [
    {
      title: "React Ecosystem (React, Next.js, Redux, TypeScript, TailwindCSS, GSAP, Jotai)",
      description: "",
    },
    {
      title: "Real-time Visualization (Leaflet, PIXI.js, Charts, Maps)",
      description: "",
    },
    {
      title: "Responsive & Pixel Perfect (Cross-device compatibility, animations, HTML5, CSS3, Flexbox, Grid, Figma to Code)",
      description: "" ,
    },
    {
      title: "Performance Engineering (Code-splitting, Lazy loading, Memoization, Lighthouse optimization)",
      description: "",
    },
    {
      title: "Accessibility & Standards (WCAG compliance, ARIA roles, Semantic HTML)",
      description: "",
    },
    {
      title: "Testing & Quality (Jest, React Testing Library, Cypress, Storybook)",
      description: "",
    },
    {
      title: "Agile & Impact-driven Development (SCRUM, CI/CD workflows, rapid prototyping)",
      description: "",
    },
  ],
  },
  {
    title: "Backend & API Development",
    description:
      "I design APIs and backend logic to support complex systems. My focus is on reliability and performance at scale.",
    items: [
      {
        title: "Backend Engineering (Node.js, Express, REST APIs, WebSockets)",
        description: "",
      },
      {
        title: "Database Design (MongoDB, PostgreSQL basics, Query Optimization)",
        description: "",
      },
      {
        title: "Authentication & Security (JWT, OAuth, Role-based Access)",
        description: "",
      },
    ],
  },
  {
    title: "Deployment & Optimization",
    description:
      "I deploy and maintain scalable applications, optimizing performance for better user experiences.",
    items: [
      {
        title: "Deployment (Docker, Vercel, Netlify, Firebase Hosting) ",
        description: "",
      },
      {
        title: "Performance Tuning (Caching, Compression, Lighthouse 90+ Scores)",
        description: "",
      },
    ],
  },
  {
    title: "AI, OSINT & Automation",
    description:
      "Exploring new technologies—integrating AI APIs, OSINT tools, and Python scripts for real-world automation.",
    items: [
      {
        title: "AI Integrations (Gemini API, Hugging-Face Integration , LLM-powered features)",
        description: "",
      },
      {
        title: "OSINT Systems (Node-RED automation, data gathering pipelines)",
        description: "",
      },
      {
        title: "Python Tooling (Data parsing, automation scripts, Augment Toolkit)",
        description: "",
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    name: "Platonix",
    description:
      "Worked as a full-stack developer on Platonix, an OTT and real-time meeting platform built with React, TypeScript, Node.js, and AWS. Contributed to authentication with Cognito, live meetings with Amazon Chime SDK, streaming workflows with Amazon IVS, and cloud-backed product features across the platform.",
    link: "",
    image: "",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "Current",
    outcome: "Built features across streaming, meetings, auth, APIs, and serverless AWS services in a real-time event-driven architecture.",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "AWS Amplify" },
      { id: 5, name: "Cognito" },
      { id: 6, name: "Amazon Chime SDK" },
      { id: 7, name: "Amazon IVS" },
      { id: 8, name: "PostgreSQL" },
      { id: 9, name: "DynamoDB" },
      { id: 10, name: "AWS CDK" },
      { id: 11, name: "Serverless" },
    ],
  },
  {
    id: 1,
    name: "Sensai",
    description:
      "A full-stack Next.js product that blends authentication, API integrations, and a polished interface into a fast everyday workflow.",
    link: "https://sensaiproject-rust.vercel.app",
    image: "/images/sensai.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2026",
    outcome: "Built a smoother end-to-end experience across auth, data flow, and UI states.",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Crypto Sleuth",
    description:
      "A crypto analytics dashboard built to help users track trends, filter noise, and make sense of market behavior quickly.",
    link: "https://cryptobyaman.netlify.app",
    image: "/images/crypto.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2025",
    outcome: "Turned volatile data into a cleaner, more usable monitoring experience.",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "REST APIs" },
      { id: 3, name: "Chart.js" },
    ],
  },
  {
    id: 3,
    name: "Gemini Clone",
    description:
      "A conversational AI interface that focuses on clarity, responsiveness, and familiar interaction patterns around the Gemini API.",
    link: "https://new-gemini-lovat.vercel.app/",
    image: "/images/gemini.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2025",
    outcome: "Explored AI UX patterns while keeping the interface lightweight and approachable.",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Gemini API" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "NavDrishti",
    description:
      "A real-time maritime intelligence system with interactive maps, anomaly overlays, and dynamic filters for coastal awareness.",
    link: "",
    image: "/images/common.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2026",
    outcome: "Designed for high-density spatial data and fast operational decision-making.",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Leaflet" },
      { id: 3, name: "Pixi.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "Deepdarshak",
    description:
      "A large-scale visualization platform handling 30,000+ ships with search, anomaly detection, and live operational updates.",
    link: "",
    image: "/images/common.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2026",
    outcome: "Focused on performance, discoverability, and reliable real-time tracking at scale.",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Debouncing Search" },
      { id: 3, name: "Charts & Tables" },
    ],
  },
  {
    id: 6,
    name: "Python Automation Toolkit",
    description:
      "A collection of Python automation workflows for parsing, analysis, repetitive tasks, and productivity-heavy internal tooling.",
    link: "",
    image: "/images/common.png",
    bgImage: "/assets/backgrounds/map.jpg",
    year: "2024",
    outcome: "Reduced manual effort through practical scripts and reusable data-processing helpers.",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Automation Scripts" },
    ],
  },
];



export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-6b7a64194" },
];
