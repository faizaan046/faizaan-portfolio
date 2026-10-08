
import type {
  PersonalInfo,
  Project,
  ResearchItem,
  ExperienceItem,
  SkillCategory,
  Article,
} from "@/types/portfolio";


export const personalInfo: PersonalInfo = {
  name: "FaizaanUllah Shaik",
  firstName: "Faizaan",
  title: "CS Master's Student · AI & Computer Vision",
  location: "",
  degree: "M.S. Computer Science",
  institution: "University of Texas at Arlington",
  email: "shaikfaizaanullah@gmail.com",
  github: "https://github.com/faizaan046",
  linkedin: "https://www.linkedin.com/in/faizaanshaik/",
  medium: "https://medium.com/@shaikfaizaanullah",
  resumePath: "/resume/resume.pdf",
  heroHeadline: "Hi, I'm Faizaan.",
  heroParagraph1:
    "I'm a Computer Science master's student at UT Arlington, exploring computer vision, machine learning, and the engineering behind intelligent systems.",
  heroParagraph2: "I enjoy turning complex ideas into useful, working software.",
  metaDescription:
    "FaizaanUllah Shaik — Computer Science graduate student at UT Arlington exploring machine learning, computer vision, and useful software.",
};


export const projects: Project[] = [
  {
    id: "ai-incident-assistant",
    index: 1,
    title: "AI Incident Assistant",
    category: "Applied AI / Backend",
    status: "completed",
    problem:
      "Operations teams face alert fatigue when diagnosing production incidents. Manual investigation is slow, context-switching is costly, and critical signals are buried in logs and metrics.",
    contribution:
      "An AI-powered incident analysis assistant built with Python and FastAPI. The system ingests incident context and surfaces relevant diagnostics, suggested root causes, and recommended actions through a structured API.",
    stack: ["Python", "FastAPI"],
    links: [],
    featured: true,
    image: {
      src: "",
      alt: "AI Incident Assistant interface showing incident analysis dashboard",
      width: 1600,
      height: 900,
      placeholderLabel: "Add project screenshot",
      placeholderDimensions: "Recommended 1600 × 900",
    },
  },
  {
    id: "image-forgery-detection",
    index: 2,
    title: "CNN-Based Image Forgery Detection",
    category: "Computer Vision / Research",
    status: "completed",
    problem:
      "Manipulated images spread rapidly across digital platforms. Identifying subtle forgeries — splicing, copy-move, and inpainting — requires methods that go beyond pixel-level inspection.",
    contribution:
      "Convolutional neural networks trained to detect image forgeries by learning spatial inconsistencies and noise patterns that reveal tampering. Research focused on evaluation across standard benchmark datasets.",
    stack: ["Python", "CNNs", "Computer Vision"],
    links: [],
    featured: false,
    image: {
      src: "",
      alt: "Image forgery detection model pipeline showing original and tampered image analysis",
      width: 1200,
      height: 800,
      placeholderLabel: "Add research figure",
      placeholderDimensions: "Recommended 1200 × 800",
    },
  },
  {
    id: "automotive-llm-chatbot",
    index: 3,
    title: "Automotive LLM Chatbot",
    category: "NLP / Conversational AI",
    status: "completed",
    problem:
      "Automotive customers and service advisors need quick, accurate answers to complex questions about vehicle diagnostics, part compatibility, and maintenance schedules.",
    contribution:
      "An LLM-based conversational assistant for automotive-related queries. Integrates language model capabilities with domain-specific knowledge to handle natural-language questions about vehicles.",
    stack: ["LLMs", "NLP"],
    links: [],
    featured: false,
    image: {
      src: "",
      alt: "Automotive LLM chatbot interface showing a conversation about vehicle diagnostics",
      width: 1600,
      height: 900,
      placeholderLabel: "Add chatbot screenshot",
      placeholderDimensions: "Recommended 1600 × 900",
    },
  },
];


export const research: ResearchItem[] = [];


export const experience: ExperienceItem[] = [
  {
    id: "instructional-design",
    role: "Instructional Design Student Assistant",
    organization: "University of Texas at Arlington",
    dates: "Sept 2026 to Present",
    description:
      "Accessibility remediation, digital learning material development, captioning workflows, and document quality assurance for academic content.",
    highlights: [],
  },
  {
    id: "parking-transportation",
    role: "Parking & Transportation Student Assistant",
    organization: "University of Texas at Arlington",
    dates: "Jan 2026 to Sept 2026",
    description:
      "Provided operational support for campus parking and transportation services, assisting students and faculty with permit inquiries, and managing traffic flow during university events.",
    highlights: [],
  },
  {
    id: "it-assistant",
    role: "IT Assistant",
    organization: "Diamond House Pvt Ltd",
    dates: "Nov 2023 to Dec 2024",
    description:
      "Technical support, point-of-sale system maintenance, hardware troubleshooting, and IT infrastructure assistance.",
    highlights: [],
  },
];


export const skills: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Deep Learning",
      "CNNs",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    items: [
      "Java",
      "React.js",
      "REST APIs",
      "Socket.io",
      "Web Development",
      "MySQL",
      "GitHub",
      "JWT",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Systems",
    items: [
      "Big Data Analytics",
      "Data Modeling",
      "Data Management",
      "Intelligent Systems",
      "Data Structures",
    ],
  },
  {
    id: "llm-nlp",
    title: "Core Competencies",
    items: [
      "Machine Learning Algorithms",
      "Supervised & Unsupervised Learning",
      "Software Project Management",
      "Research Skills",
    ],
  },
];


export const articles: Article[] = [];
