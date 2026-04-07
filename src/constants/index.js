import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Anroid Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Desktop Application Developer",
    icon: creator,
  },

];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Personal Projects",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Built dynamic and interactive web applications using React.js and modern JavaScript.",
      "Integrated REST APIs and managed application state using hooks and context.",
      "Optimized website performance and improved loading speed.",
      "Deployed projects and maintained code using Git and GitHub.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Code Pulse",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "Developed cross-platform mobile applications using React Native.",
      "Implemented user authentication and real-time database features.",
      "Integrated third-party APIs and push notifications.",
      "Tested and debugged apps to ensure smooth performance.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Foodio",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - Jan 2026",
    points: [
      "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
      "Created user-friendly UI with modern animations and effects.",
      "Connected frontend with backend services and databases.",
      "Improved SEO and website accessibility standards.",
    ],
  },
  {
    title: "Desktop Application Developer",
    company_name: "Personal Projects",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed desktop applications using C++, Qt, and Python.",
      "Designed clean and user-friendly interfaces for desktop software.",
      "Implemented file handling, database connectivity, and system features.",
      "Debugged and optimized applications for better performance.",
    ],
  },
];


const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "name",
  //   designation: "CFO",
  //   company: "Foodio",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
  
];

const projects = [
  {
 name: "Foodio",
description: "Web-based platform that allows users to search, order, and manage food from various restaurants, providing a convenient and efficient solution for their dining needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ravikaushal2005/Foodio",
  },

  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ravikaushal2005/Trip-Guide",
  },
];

export { services, technologies, experiences, testimonials, projects };
