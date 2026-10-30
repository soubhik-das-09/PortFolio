// ============================================================
// DATA.JS — Centralized content for Soubhik Das Portfolio
// Edit this file to update your portfolio content easily.
// ============================================================

const personal = {
  name: "Soubhik Das",
  title: "Aspiring Software Developer",
  subtitle: "Cloud & DevOps Enthusiast",
  tagline: "Building Backend Applications | Exploring Cloud Engineering | Automating with DevOps",
  intro:
    "I build backend applications, explore cloud technologies, and automate software deployment workflows. Passionate about Java, AWS, Docker, Linux, and modern DevOps practices.",
  about: `I am a BCA student and aspiring software developer passionate about backend development, cloud computing, and DevOps. I work with Java and Spring Boot to build backend applications and REST APIs, while exploring AWS cloud services, Docker, Linux, and CI/CD automation.

I enjoy understanding how applications work behind the scenes — managing databases, deploying applications to cloud infrastructure, and automating software delivery workflows.

My goal is to grow as a software developer with strong knowledge of backend engineering, cloud technologies, and modern DevOps practices.`,
  quote:
    "I believe in understanding how software works beyond the user interface — from backend architecture and databases to cloud infrastructure and deployment automation.",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/soubhik-das-09",
  linkedin: "https://www.linkedin.com/in/soubhik-das-b810b1352/", // Replace with real URL
  email: "dassoubhik1101@example.com", // Replace with real email
  resume: "./resume.pdf", // Replace with actual resume PDF
  typingTexts: [
    "Java Backend Developer",
    "Software Developer",
    "Cloud Computing Enthusiast",
    "DevOps Enthusiast",
    "AWS Learner",
  ],
};

const skills = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🗄️" },
    { name: "Python", icon: "🐍" },
  ],
  backend: [
    { name: "Spring Boot", icon: "🍃" },
    { name: "Spring Security", icon: "🔐" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Hibernate", icon: "🏗️" },
    { name: "JPA", icon: "📦" },
    { name: "JWT Auth", icon: "🪙" },
    { name: "Maven", icon: "🔧" },
  ],
  databases: [
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "⚡" },
  ],
  cloud: [
    { name: "AWS EC2", icon: "☁️" },
    { name: "AWS S3", icon: "🪣" },
    { name: "AWS RDS", icon: "🗄️" },
    { name: "AWS IAM", icon: "🔑" },
  ],
  devops: [
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
    { name: "Git", icon: "📋" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "CI/CD", icon: "🔄" },
  ],
  tools: [
    { name: "IntelliJ IDEA", icon: "💡" },
    { name: "VS Code", icon: "📝" },
    { name: "Postman", icon: "📮" },
    { name: "Git Bash", icon: "💻" },
  ],
  exploring: [
    { name: "Kubernetes", icon: "☸️" },
    { name: "Advanced CI/CD", icon: "🚀" },
    { name: "Infrastructure Automation", icon: "🤖" },
    { name: "Cloud Architecture", icon: "🏛️" },
    { name: "Docker Advanced", icon: "🐳" },
    { name: "Cloud Deployment Automation", icon: "☁️" },
  ],
};

const projects = [
  {
    id: 1,
    title: "ZooCapDelivery",
    subtitle: "Food Delivery Application",
    description:
      "A backend-focused food delivery application developed using Java and Spring Boot, designed to manage users, restaurants, food items, shopping carts, and orders through REST APIs.",
    tech: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Redis", "JWT", "Razorpay", "Cloudinary", "AWS EC2"],
    features: [
      "User authentication & authorization",
      "Role-based access control (Admin / Restaurant / Customer)",
      "Restaurant and food management",
      "Shopping cart functionality",
      "Order management system",
      "Razorpay payment integration",
      "Cloud-based image management (Cloudinary)",
      "Email notifications",
      "AWS EC2 cloud deployment",
    ],
    github: "#", // Replace with actual GitHub URL
    live: null,
    status: "Completed",
    type: "Backend",
    highlight: true,
  },
  {
    id: 2,
    title: "Modachik",
    subtitle: "E-Commerce Fashion Website",
    description:
      "An e-commerce fashion website developed to showcase and sell fashion products, including kurti sets, dupatta sets, and co-ord sets.",
    tech: ["HTML", "CSS", "JavaScript", "AWS S3"],
    features: [
      "Product catalog and categories",
      "Fashion product presentation",
      "Responsive layout design",
      "Product image management",
      "E-commerce website deployment",
    ],
    github: "#", // Replace with actual GitHub URL
    live: "https://www.modachik.com/",
    status: "Live",
    type: "Frontend",
    highlight: false,
  }
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Indira College of Commerce and Science",
    location: "Pune, Maharashtra",
    year: "2024 – 2027",
    cgpa: "9.14 / 10",
    icon: "🎓",
  },
];

const journey = {
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    color: "blue",
    steps: [
      "Java Programming",
      "Advanced Java",
      "SQL & Database Management",
      "Spring Boot",
      "REST API Development",
      "Spring Security & JWT",
      "Backend Application Development",
    ],
  },
  cloud: {
    title: "Cloud Engineering",
    icon: "☁️",
    color: "cyan",
    steps: [
      "Cloud Computing Fundamentals",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS IAM",
      "Cloud Application Deployment",
    ],
  },
  devops: {
    title: "DevOps Engineering",
    icon: "🔄",
    color: "violet",
    steps: [
      "Linux",
      "Git & GitHub",
      "Docker",
      "Containerization",
      "GitHub Actions",
      "CI/CD Automation",
      "Kubernetes (learning)",
    ],
  },
};
