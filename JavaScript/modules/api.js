// Función para obtener datos simulados desde la API
export default function getDataFromAPI() {
  // Datos simulados para cada sección
  const heroData = {
    title: "My introduction",
    subtitle: "Web developer & designer",
    description:
      "An enthusiastic web developer, enjoying the creation of websites and finding great satisfaction in this creative process.",
    cta1Text: "Why me?",
    cta1Link: "#whyMe",
    cta2Text: "My skills",
    cta2Link: "#mySkills",
  };

  const whyMeData = {
    title: "Why me?",
    subtitle: "Why To Hire Me Its A Great Idea?",
    description:
      "Hiring me means gaining a dedicated and skilled web developer who is passionate about creating outstanding websites. I am confident in my abilities to contribute to your projects and help you achieve your goals.",
    listItems: [
      "Attention to detail",
      "Collaborative approach",
      "Continuous learning",
    ],
    images: [
      "./public/images/whats-netbook-003.jpg",
      "./public/images/whats-netbook-001.jpg",
      "./public/images/whats-netbook-002.jpg",
    ],
  };

  const achievementData = {
    ratingTitle: "10 Rating",
    ratingIcon: "./images/ico-star.svg",
    ratingSubtitle: "+250 Students",
    ratingAvatars: [
      "./public/images/avatar-001.jpg",
      "./public/images/avatar-002.jpg",
      "./public/images/avatar-003.jpg",
    ],
    ratingContent:
      "I always exceeded expectations, standing out among the best in completing my assignments.",
    ratingLink: "#",
    learningTitle: "Learning",
    learningIcon: "./public/images/ico-trophy.svg",
    learningSubtitle: "#MaratonLatam 2023 at Cisco",
    learningContent:
      "I have successfully completed the Cisco Academy program focused on learning the Python language.",
    learningLink: "https://skillsforall.com/",
  };

  const skillsData = {
    title: "My Skills",
    subtitle: "Tools Experience",
    description:
      "Languages and tools in which I have experience are those I have acquired through past and current work and projects I have carried out.",
    skills: [
      {
        icon: "./public/images/react-original.svg",
        name: "React",
        description: "JSX, Components, State, Props, Hooks",
      },
      {
        icon: "./public/images/nextjs-original-wordmark.svg",
        name: "NextJS",
        description:
          "Pages, Static Generation, Server-side Rendering, API Routes, Dynamic Routes",
      },
      {
        icon: "./public/images/chakraUI.svg",
        name: "ChakraUI",
        description:
          "Responsive Design, Accessibility, Customizable Visual Components",
      },
      {
        icon: "./public/images/figma-original.svg",
        name: "Figma",
        description:
          "Interactive Prototyping, Plugins and Automation, Variants and Reusable Components",
      },
      {
        icon: "./public/images/javascript-original.svg",
        name: "JavaScript",
        description: "DOM, Design Patterns, OOP, API’s",
      },
      {
        icon: "./public/images/sass-original.svg",
        name: "SASS",
        description: "Features like variables, nesting, mixins, and functions.",
      },
      {
        icon: "./public/images/python-original.svg",
        name: "PYTHON",
        description:
          "My experience includes a strong command of key concepts such as syntax, data structures, flow control, and file manipulation.",
      },
      {
        icon: "./public/images/git-original.svg",
        name: "GIT",
        description:
          "Version control system that allows for efficient and collaborative management of code repositories.",
      },
      {
        icon: "./public/images/html5-original.svg",
        name: "HTML",
        description:
          "Standard markup language used to create and structure the content of web pages.",
      },
      {
        icon: "./public/images/css3-original.svg",
        name: "CSS",
        description:
          "Strong understanding of applying styles, creating responsive designs, implementing positioning, and incorporating visual effects.",
      },
    ],
  };

  const interestsData = {
    title: "My Interests",
    subtitle: "Know Me a Little Bit More",
    description:
      "I am always in search of new experiences and knowledge, driven by my insatiable curiosity.",
    categories: {
      Hobbies: [
        {
          icon: "./public/images/crossfit-icon.svg",
          name: "CrossFit",
          username: "@crossfit",
        },
        {
          icon: "./public/images/moto-icon.svg",
          name: "Rider",
          username: "@motorider",
        },
        {
          icon: "./public/images/golf-icon.svg",
          name: "Golf",
          username: "@golf",
        },
        {
          icon: "./public/images/hiking-icon.svg",
          name: "Hiking",
          username: "@trailwalker",
        },
      ],
      Knowledge: [
        {
          icon: "./public/images/cooking-icon.svg",
          name: "Cooking",
          username: "@Cooking",
        },
        {
          icon: "./public/images/AI-icon.svg",
          name: "Artif. Inteligence",
          username: "@AI",
        },
        {
          icon: "./public/images/tech-icon.svg",
          name: "Technology",
          username: "@techenthusiast",
        },
        {
          icon: "./public/images/mechanic-icon.svg",
          name: "Mechanic",
          username: "@mechanic",
        },
      ],
      Books: [
        {
          icon: "./public/images/finance.svg",
          name: "Finance",
          username: "@books",
        },
        {
          icon: "./public/images/motivation.svg",
          name: "Motivation",
          username: "@books",
        },
        {
          icon: "./public/images/programming.svg",
          name: "Programming",
          username: "@books",
        },
        {
          icon: "./public/images/adventure.svg",
          name: "Adventures",
          username: "@books",
        },
      ],
    },
  };

  const contactData = {
    title: "How To Reach Me?",
    subtitle: "You Can Easily Find Me In These Apps!",
    description:
      "I am always available and willing to connect with you. Here are some of the applications where you can find me without difficulty.",
    linkedinLink: "https://www.linkedin.com/in/ignacio-marin-garro-0b826916a/",
    githubLink: "https://github.com/Igna24",
    screenshot: "./public/images/app-screenshot.svg",
    shine: "./public/images/app-screenshot-shine.svg",
  };

  const newsData = {
    title: "Know my works",
    subtitle: "Latest Works",
    articles: [
      {
        image: "./public/images/CETAV-2023.svg",
        title: "CETAV's official website.",
        link: "https://lalibertad-cetav.vercel.app/",
      },
      {
        image: "./public/images/EVENTS-2023.svg",
        title: "Search and schedule events project",
        link: "https://events-side.vercel.app/",
      },
      {
        image: "./public/images/WILD-2023.svg",
        title: "A hotel management application",
        link: "https://hotel-appv-3.vercel.app",
      },
    ],
  };
  const footerData = {
    name: "Ignacio Marin Garro",
    email: "ignaciomaringarro@gmail.com",
    linkedinUsername: "@ignaciomaringarro",
    linkedinLink: "https://www.linkedin.com/in/ignacio-marin-garro-0b826916a/",
    githubUsername: "@igna24",
    githubLink: "https://github.com/Igna24",
    contactMessage: "Hope to hear from you soon!",
    logo: "./public/images/logo-invert.svg",
    linkedinIcon: "./public/images/linkedin-icon.svg",
    githubIcon: "./public/images/github-icon.svg",
  };

  return {
    heroData,
    whyMeData,
    achievementData,
    skillsData,
    interestsData,
    contactData,
    newsData,
    footerData,
  };
}
