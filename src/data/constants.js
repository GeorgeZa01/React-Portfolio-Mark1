import {
  Code,
  Cpu,
  Layers,
  LayoutGrid,
  Database,
  Globe,
  Github,
  Zap,
  Clock,
  GraduationCap,
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Linkedin,
  Mail,
  FileText,
  User,
  Slack,
  MessageSquare,
  GitBranch,
  Monitor,
  Briefcase
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const SKILLS = [
  // Core Languages & Frontend
  { name: 'JavaScript', icon: Code, cssColor: 'var(--color-nodejs)' },
  { name: 'HTML5/CSS3', icon: LayoutGrid, cssColor: 'var(--color-nodejs)' },
  { name: 'PHP', icon: Code, cssColor: 'var(--color-nodejs)' },

  // Frameworks & Libraries
  { name: 'React', icon: Layers, cssColor: 'var(--color-nodejs)' },
  { name: 'Vue.js', icon: Globe, cssColor: 'var(--color-nodejs)' }, // Re-using Globe for JS Framework

  // Backend & Runtime
  { name: 'Node.js', icon: Cpu, cssColor: 'var(--color-nodejs)' },
  { name: 'Python', icon: FileText, cssColor: 'var(--color-nodejs)' }, // New: General programming language

  // Databases
  { name: 'MySQL', icon: Database, cssColor: 'var(--color-nodejs)' },
  { name: 'Oracle APEX', icon: Database, cssColor: 'var(--color-nodejs)' }, // New: Database tool
  { name: 'PostgreSQL', icon: Database, cssColor: 'var(--color-nodejs)' }, // New: Database tool

  // Tools & Platforms
  { name: 'Git/GitHub', icon: Github, cssColor: 'var(--color-nodejs)' },
  { name: 'Vercel', icon: Zap, cssColor: 'var(--color-nodejs)' }, // New: Deployment platform
  { name: 'WordPress', icon: Globe, cssColor: 'var(--color-nodejs)' }, // New: CMS/Web platform
  { name: 'Slack', icon: Slack, cssColor: 'var(--color-nodejs)' }, // New: Collaboration tool
  { name: 'VS Code', icon: Monitor, cssColor: 'var(--color-nodejs)' }, // New: Code editor/IDE
  { name: 'nodemailer', icon: MessageSquare, cssColor: 'var(--color-nodejs)' }, // New: Email sending library
];

export const PROJECTS = [
  {
    title: 'Arize E-commerce Store',
    description: 'A full-stack e-commerce platform demonstrating end-to-end functionality, from user authentication to product inventory management. Built with Node.js and MySQL.',
    stack: 'Node.js, MySQL, JavaScript, HTML/CSS',
    liveLink: 'https://arize-e-commerce.vercel.app/index.html',
    githubLink: 'https://github.com/GeorgeZa01/Arize-E-commerce',
    image: 'https://georgeza01.github.io/Project-Screenshots/arize.png',
  },
  {
    title: 'TastesByT Orders Website',
    description: 'A dedicated platform designed for streamlined customer order processing, enhancing efficiency and user experience for a modern business.',
    stack: 'JavaScript, HTML, CSS',
    liveLink: 'https://www.tastesbyt.co.za/index.html',
    githubLink: 'https://github.com/GeorgeZa01/TastesByT',
    image: 'https://georgeza01.github.io/Project-Screenshots/tastesbyt.png', // Updated image URL for TastesByT projectg',
  },
  {
    title: 'Tower Block Game',
    description: 'A frontend interactive game showcasing logic implementation and DOM manipulation skills. It provides an engaging user experience entirely within the browser.',
    stack: 'Pure JavaScript, HTML/CSS',
    liveLink: 'https://georgeza01.github.io/Tower-Block-Game/',
    githubLink: 'https://github.com/GeorgeZa01/Tower-Block-Game',
    image: 'https://georgeza01.github.io/Project-Screenshots/towerblock.png',
  },
  {
    title: 'Digital Tracking system',
    description: 'Digital Time Attendance System using python, and a rasberry pi. The system tracks employees attendance and working hours.',
    stack: 'Python, Raspberry Pi, MySQL, PHP, Javascript',
    liveLink: 'https://placeholder.com',
    githubLink: 'https://github.com/surur-samaai/iliso_digital_tracking_system/tree/main',
    image: 'https://surur-portfolio.netlify.app/images/iliso.png',
  },
];

export const EXPERIENCE_DATA = [
  {
    title: 'Technical and Program Director',
    company: 'D & C Consultants SA, Cape Town',
    duration: 'June 2025 - Present',
    description: [
      "Contributed to the organization’s  Digital Transformation  initiatives, specifically focusing on building and developing systems for social impact programs.",
      "Aided in the technical development of projects related to  4IR skills training  (Fourth Industrial Revolution) and  youth employment  (e.g., EVOLVE Nation or SkillBridge initiatives).",
      "Worked in an environment powered by  Google Cloud , applying modern development practices to ensure reliable and scalable community platforms and digital services.",
    ],
  },
  {
    title: 'Junior Devloper Intern',
    company: 'Life Choices Studio, Cape Town',
    duration: 'Apr 2025 - Jun 2025',
    description: [
      "Participated in a hands-on internship program at LC Studio.",
      "Collaborated on multiple real-world software projects.",
      "Gained experience across various technologies including web, mobile, and IoT development.",
    ],
  },
  {
    title: 'Bartender & Waiter (Part-time/Casual)',
    company: 'Escobar_Cpt / Castle Hotel',
    duration: 'Dec 2021 - Jan 2024',
    description: [
      "Delivered exceptional  client service  in fast-paced bar and restaurant settings over two years, resulting in high customer satisfaction and repeat business.",
      "Managed all aspects of bar operations, including expert  drink preparation ,  cash handling , inventory, and executing promotional activities and events.",
      "Contributed to  smooth shift transitions  and overall operational efficiency by proactively managing orders, stock, and completing accurate  cash-ups .",
    ],
  },
  {
    title: 'Sales Assistant (Part-time)',
    company: 'C&N Clothing',
    duration: '2018 - 2022',
    description: [
      "Drove sales performance and consistently  achieved sales targets  by delivering proactive and engaging customer assistance in a retail environment.",
      "Enhanced the shopping experience by  creating and maintaining appealing product displays  and ensuring the visual merchandising standards were met.",
      "Managed  daily stock operations , including receiving, processing, inventory organization, and ensuring sales floor readiness.",
    ],
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Life Choices Academy',
    degree: 'Certificate of Excellence in Full-Stack Web Development',
    duration: 'Sep 2024 - Apr 2025',
    details: 'Completed an intensive 6-month Full-Stack Web Development program focused on modern web technologies, including HTML, CSS, JavaScript, Node.js, Express, MySQL, and project-based learning.',
  },
  {
    institution: 'Norman Henshilwood High School',
    degree: 'NQF Level 4 - National Senior Certificate',
    duration: 'Jan 2019 – Dec 2023',
    details: 'Achieved a National Senior Certificate (NQF Level 4), with a strong academic foundation in technology, mathematics, and the sciences.',
  },
  {
    institution: 'SA Baseball Union',
    degree: 'Level A Coaching Certification',
    duration: 'Oct 2021',
    details: 'Earned Level A Coaching Certification from the South African Baseball Union, focusing on fundamental coaching techniques, player development, and leadership in youth sports.',
  },
];