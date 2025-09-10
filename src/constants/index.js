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
    id: 1,
    name: "NavDrishti",
    description:
      "A real-time maritime intelligence system with interactive maps, anomaly detection overlays, and dynamic filters for Indian coastal security.",
    href: "",
    image: "/assets/projects/navdrishti.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Leaflet" },
      { id: 3, name: "Pixi.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Deepdarshak",
    description:
      "Visualization platform handling 30,000+ ships with search, anomaly detection, and real-time updates—built for high-performance maritime tracking.",
    href: "",
    image: "/assets/projects/deepdarshak.jpg",
    bgImage: "/assets/backgrounds/ocean.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Debouncing Search" },
      { id: 3, name: "Charts & Tables" },
    ],
  },
  {
    id: 3,
    name: "OSINT Project",
    description:
      "Developed backend data automation using Node-RED and JavaScript for open-source intelligence workflows.",
    href: "",
    image: "/assets/projects/osint.jpg",
    bgImage: "/assets/backgrounds/terminal.jpg",
    frameworks: [
      { id: 1, name: "Node-RED" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "MongoDB" },
    ],
  },
  {
    id: 4,
    name: "Sensai",
    description:
      "A full-stack Next.js app integrating authentication, APIs, and responsive UI—bridging backend and frontend seamlessly.",
    href: "",
    image: "/assets/projects/sensai.jpg",
    bgImage: "/assets/backgrounds/gradient.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "Crypto Sleuth",
    description:
      "A React-based crypto analytics dashboard designed to track, filter, and analyze market behavior with a focus on security and insights.",
    href: "",
    image: "/assets/projects/crypto-sleuth.jpg",
    bgImage: "/assets/backgrounds/dark.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "REST APIs" },
      { id: 3, name: "Chart.js" },
    ],
  },
  {
    id: 6,
    name: "Gemini Clone",
    description:
      "A frontend project integrating Google's Gemini API for conversational AI—designed with a clean and interactive UI.",
    href: "",
    image: "/assets/projects/gemini-clone.jpg",
    bgImage: "/assets/backgrounds/futuristic.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Gemini API" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 7,
    name: "Python Automation Toolkit",
    description:
      "Implemented Python-based automation workflows and augment toolkit for parsing, analysis, and enhancing productivity.",
    href: "",
    image: "/assets/projects/python-toolkit.jpg",
    bgImage: "/assets/backgrounds/code.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Automation Scripts" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-6b7a64194" },
  { name: "GitHub", href: "https://github.com/aman" },
];
