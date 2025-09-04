// index.js

export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I specialize in building high-performance, intuitive, and responsive UIs that scale. From dashboards to real-time data visualizations, I ensure seamless user experiences with modern frameworks.",
    items: [
      {
        title: "React Ecosystem",
        description: "(React, Next.js, Redux, TypeScript, TailwindCSS)",
      },
      {
        title: "Real-time Visualization",
        description: "(Leaflet, PIXI.js, Charts, Maps)",
      },
      {
        title: "Responsive & Pixel Perfect",
        description: "(Cross-device compatibility, animations, UI polish)",
      },
    ],
  },
  {
    title: "FullStack & API Development",
    description:
      "Beyond frontend, I design robust APIs and backend logic to support complex systems. From Node.js microservices to data pipelines, I bring reliability to every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(Node.js, Express, REST APIs, WebSockets, Node-RED)",
      },
      {
        title: "Database Design",
        description: "(MongoDB, PostgreSQL, SQL Optimization)",
      },
      {
        title: "Authentication & Security",
        description: "(JWT, OAuth, Role-based Access, Best Practices)",
      },
    ],
  },
  {
    title: "Cloud, DevOps & Automation",
    description:
      "I deploy, optimize, and maintain scalable applications with cloud platforms and automation pipelines.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes basics)",
      },
      {
        title: "Cloud & Hosting",
        description: "(AWS, Vercel, Render, Netlify, Firebase)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "AI, OSINT & Emerging Tech",
    description:
      "Exploring the frontier of technology—integrating AI APIs, OSINT tools, and advanced toolkits for real-world applications.",
    items: [
      {
        title: "AI Integrations",
        description: "(Gemini API, LangChain, LLM-powered features)",
      },
      {
        title: "OSINT Systems",
        description: "(Node-RED automation, data gathering pipelines)",
      },
      {
        title: "Python Tooling",
        description: "(Augment Toolkit, data parsing, automation scripts)",
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
      { id: 2, name: "Augment Toolkit" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "www.linkedin.com/in/aman-kumar-6b7a64194" },
  { name: "GitHub", href: "https://github.com/aman" },
];
