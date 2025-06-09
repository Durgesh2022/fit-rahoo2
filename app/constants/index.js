import {
  backend,
  // c,
  carrent,
  creator,
  // css,
  // figma,
  // html,
  docker,
  git,
  github,
  pSQL,
  prisma,
  javascript,
  jobit,
  mongodb,
  nodejs,
  express,
  // python,
  reactjs,
  redux,
  next,
  shopify,
  // sql,
  starbucks,
  tailwind,
  tesla,
  tripguide,
  // typescript,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About Us",
    },
    
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
   
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
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
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgresSQL",
      icon: pSQL,
    },
 
    {
      name: "Prisma",
      icon: prisma,
    },
    
   
    {
      name: "Docker",
      icon: docker,
    }, 
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "Fashion Finds",
      image: carrent,
      icon: starbucks,
      iconBg: "white",
      date: "project 1",
      points: [
        "Developed a fully functional e-commerce platform using Next.js, React.js, Node.js, MongoDB, Stripe, and Firebase, designed to provide an optimized and engaging shopping experience. Key features include product search, filtering, and efficient cart management, enhancing usability and simplifying the shopping journey. Stripe integration enables seamless payment processing, ensuring secure and quick transactions, while Firebase is leveraged for real-time database management and authentication, delivering fast, secure access and improving overall platform performance.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "FireBase",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "blue-text-gradient",
        },
      ],
      source_link: "",
      source_code_link: "https://github.com/Durgesh2022/E-commerce",
    },
    {
      title: "Copy Tube",
      image: jobit,
      icon: tesla,
      iconBg: "white",
      date: "project 2",
      points: [
        "Developed a robust video-sharing platform using React.js, MongoDB, Node.js, Express.js, and Cloudinary. This platform offers a complete suite of features for video upload, real-time streaming, and interactive user engagement, designed to create a smooth and immersive experience. I incorporated a unique social media integration that allows users to tweet directly from the platform, enhancing engagement and encouraging cross-platform interaction. Cloudinary was used for seamless media storage and optimized streaming, which resulted in faster load times and an improved overall user experience.",
      ],
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "blue-text-gradient",
        },
      ],
      source_link: "",
      source_code_link: "https://github.com/Durgesh2022/CopyTube",
    },
    {
      title: "Alcruit",
      image: tripguide,
      icon: shopify,
      iconBg: "black",
      date: "project 3",
      points: [
        "Developed a video conferencing platform using Next.js, Clerk, and Socket.io, providing real-time communication, group chat, and secure user authentication for a seamless experience across devices. With Socket.io powering video conferencing, the platform achieves low-latency, real-time interactions. Clerk is integrated for efficient, secure user authentication, ensuring smooth access. Server-side rendering (SSR) in Next.js improves page load times, making the platform accessible even on low-bandwidth networks. To prioritize user privacy, I implemented end-to-end encryption for secure streaming, reinforcing data protection and safeguarding user interactions.",
      ],
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "green-text-gradient",
        },
        {
          name: "Clark",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
      ],
      source_link: "https://zoom-clone-sigma-seven.vercel.app/",
      source_code_link: "https://github.com/Durgesh2022/Zoom_clone",
    },
  ];
  
  
  export { experiences, services, technologies };
