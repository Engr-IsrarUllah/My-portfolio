import { Code2, Server, Database, Brain, Globe, Box } from "lucide-react";

export const personalInfo = {
  name: "Israr Ullah",
  title: "Fullstack Developer & Software Engineer",
  email: "engrisrar256@gmail.com",
  location: "Lahore, Pakistan",
  phone: "923063813405",
  displayPhone: "+92-3063813405",
  linkedin: "https://www.linkedin.com/in/engr-israr-20a619224",
  about: "...",
};

export const skills = [
  { name: "Next.js & React", icon: <Code2 size={20} /> },
  { name: "Node.js & Express", icon: <Server size={20} /> },
  { name: "MongoDB & Postgresql", icon: <Database size={20} /> },
  { name: "Tailwind CSS", icon: <Globe size={20} /> },
  { name: "Python & AI", icon: <Brain size={20} /> },
  { name: "C# & .NET", icon: <Box size={20} /> },
];

export const experience = [
  {
    company: "Cyberify",
    role: "Fullstack Developer",
    duration: "Present",
    description:
      "Developing robust full-stack solutions using the MERN stack and Next.js. Designing and implementing scalable database schemas with MongoDB and PostgreSQL.",
  },
  {
    company: "Edusoft System Solutions",
    role: "React Developer",
    duration: "Mar 2025 – Oct 2025",
    description:
      "Collaborated with cross-functional teams to optimize React components, reducing load times and integrating RESTful APIs for seamless data flow.",
  },
];

export const projects = [
  {
    title: "Nexus (Task Manager)",
    category: "SaaS / Productivity",
    description:
      "A high-performance project management dashboard built with Prisma 6. Features include relational data handling for teams, task status tracking, and optimized database queries.",
    tech: ["React.js", "Prisma 6", "PostgreSQL", "Server Actions"],
    link: "https://github.com/Engr-IsrarUllah/project-manager-fullstack",
    image: "/projects/nexus.png",
  },
  {
    title: "GourmetFinds",
    category: "Full Stack Web App",
    description:
      "A comprehensive platform for finding Nearby restaurants. Features geolocation to find nearby dining and an admin dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Google Maps API"],
    link: "https://github.com/Engr-IsrarUllah/Nearby-Resturant-Finder-App",
    image: "/projects/gourmet.png",
  },
  {
    title: "Plant Disease AI",
    category: "Machine Learning",
    description:
      "Real-time plant disease detection system. Trained a model on 57,000 images to classify diseases with high accuracy using Python.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    link: "https://github.com/Engr-IsrarUllah/Plant-Leaves-Disease-Detection",
    image: "/projects/plant.png",
  },
  {
    title: "SkyCast Global",
    category: "API Integration",
    description:
      "A responsive weather dashboard providing real-time forecasts, humidity levels, and wind speeds for global locations using third-party RESTful APIs.",
    tech: ["JavaScript", "OpenWeather API", "CSS3"],
    link: "https://github.com/Engr-IsrarUllah/WeatherApp",
    image: "/projects/weather.png",
  },
  {
    title: "Intelligent Electric Stove",
    category: "IoT / Embedded",
    description:
      "Smart stove with custom functionalities using Arduino, sensors, and relays. Enables real-time monitoring of cooking parameters.",
    tech: ["C", "Arduino", "IoT Sensors"],
    link: "#", // Added a placeholder link since it was missing
    image: "/projects/iot.png",
  },
];
