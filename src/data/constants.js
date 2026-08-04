import {
  Code,
  Cpu,
  Layers,
  LayoutGrid,
  Database,
  Globe,
  Github,
  Zap,
  FileText,
  MessageSquare,
  Monitor,
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
  { name: 'JavaScript', icon: Code, cssColor: 'var(--color-nodejs)' },
  { name: 'HTML5/CSS3', icon: LayoutGrid, cssColor: 'var(--color-nodejs)' },
  { name: 'React', icon: Layers, cssColor: 'var(--color-nodejs)' },
  { name: 'Node.js', icon: Cpu, cssColor: 'var(--color-nodejs)' },
  { name: 'Express.js', icon: Globe, cssColor: 'var(--color-nodejs)' },
  { name: 'Python (basic)', icon: FileText, cssColor: 'var(--color-nodejs)' },
  { name: 'REST APIs', icon: Globe, cssColor: 'var(--color-nodejs)' },
  { name: 'Responsive Web Design', icon: LayoutGrid, cssColor: 'var(--color-nodejs)' },
  { name: 'MySQL', icon: Database, cssColor: 'var(--color-nodejs)' },
  { name: 'PostgreSQL', icon: Database, cssColor: 'var(--color-nodejs)' },
  { name: 'SQL (basic)', icon: Database, cssColor: 'var(--color-nodejs)' },
  { name: 'Git/GitHub', icon: Github, cssColor: 'var(--color-nodejs)' },
  { name: 'Render', icon: Zap, cssColor: 'var(--color-nodejs)' },
  { name: 'Vercel', icon: Zap, cssColor: 'var(--color-nodejs)' },
  { name: 'Clever Cloud', icon: Zap, cssColor: 'var(--color-nodejs)' },
  { name: 'Netlify', icon: Zap, cssColor: 'var(--color-nodejs)' },
  { name: 'JWT / bcrypt', icon: FileText, cssColor: 'var(--color-nodejs)' },
  { name: 'NodeMailer', icon: MessageSquare, cssColor: 'var(--color-nodejs)' },
  { name: 'Microsoft Suite', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Google Suite', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Outlook', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Slack', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Wordpress', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Shopify', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  { name: 'Figma', icon: Monitor, cssColor: 'var(--color-nodejs)' },
  
];

export const PROJECTS = [
  {
    title: 'FaviconMagic Pro',
    description: 'A polished favicon and branding utility project focused on asset creation and fast, user-friendly visual output.',
    stack: 'Vercel, React, Frontend UI',
    liveLink: 'https://favicon-by-jmdev.netlify.app/',
    githubLink: 'https://github.com/GeorgeZa01/FaviconMagic_Pro',
  },
  {
    title: 'Kairo-sKoffee',
    description: 'A coffee brand showcase site designed to present a modern, inviting digital storefront experience.',
    stack: 'Vercel, React, Branding, Landing Page',
    liveLink: 'https://kairo-s-koffee.vercel.app/',
    githubLink: 'https://github.com/GeorgeZa01/Kairo-sKoffee',
  },
  {
    title: 'A-Z Maintenance',
    description: 'A service website for a maintenance brand, built to highlight professionalism, responsiveness, and service offerings.',
    stack: 'Vercel, Responsive Web Design, Business Site',
    liveLink: 'https://a-z-maintanence.vercel.app/',
  },
  {
    title: 'Tastes By T',
    description: 'A branded food and hospitality website focused on visual identity, customer experience, and effective online presentation.',
    stack: 'Vercel, Branding, Hospitality Web Design',
    liveLink: 'https://www.tastesbyt.co.za/',
  },
  {
    title: '2Guyz',
    description: 'A modern portfolio-style landing page project combining a clean layout with easy-to-navigate presentation.',
    stack: 'Vercel, React, Landing Page',
    liveLink: 'https://2guyz.vercel.app/',
  },
  {
    title: 'Arize Electronics E-commerce Store',
    description: 'Developed a full-stack online store with user authentication, JWT-based admin verification, and RESTful API integration.',
    stack: 'Node.js, Express.js, MySQL, JavaScript, JWT, REST APIs',
    liveLink: 'https://arize-e-commerce.vercel.app/',
    githubLink: 'https://github.com/GeorgeZa01/Arize-E-commerce',
    image: 'https://georgeza01.github.io/Project-Screenshots/arize.png',
  },
  {
    title: 'VOB Macaws',
    description: 'A community and brand-focused website project highlighting visual storytelling and clear navigation.',
    stack: 'Vercel, Frontend Design, Responsive UI',
    liveLink: 'https://vob-macaws.vercel.app/',
  },
  {
    title: 'CSS Space Rescue',
    description: 'A browser game built with CSS and JavaScript mechanics, showcasing playful interaction and game design skills.',
    stack: 'HTML, CSS, JavaScript, Game Dev',
    liveLink: 'https://georgeza01.github.io/CSS_Space_Rescue/',
    githubLink: 'https://github.com/GeorgeZa01/CSS_Space_Rescue',
  },
  {
    title: 'Tower Block Game',
    description: 'A small game project demonstrating logic, UI feedback, and web-based interaction design.',
    stack: 'HTML, CSS, JavaScript, Game Dev',
    liveLink: 'https://georgeza01.github.io/Tower-Block-Game/',
    githubLink: 'https://github.com/GeorgeZa01/Tower-Block-Game',
  },
  {
    title: 'Multi-tenant CRM Platform',
    description: 'Designed a multi-tenant CRM platform for the recycling and commodity trading industry, covering data architecture and role-based access.',
    stack: 'Data Architecture, Role-based Access, CRM',
  },
  {
    title: 'OT Enterprise Systems APEX Dashboard',
    description: 'Built an Oracle APEX web application using the OT sample schema, with four interactive reports and four visualizations to support enterprise decision-making.',
    stack: 'Oracle APEX, SQL, Data Visualization',
  },
  {
    title: 'Employee Management System',
    description: 'Built a modular Node.js/Express/MySQL API using MVC architecture and connection pooling, integrated with a dynamic frontend for CRUD operations.',
    stack: 'Node.js, Express.js, MySQL, MVC, CRUD, REST APIs',
  },
];

export const EXPERIENCE_DATA = [
  {
    title: 'Freelance IT Technician & Web Developer',
    company: 'JM dev (self-employed), Cape Town',
    duration: 'Ongoing',
    description: [
      'Provide PC and gaming console repair, diagnostics, and technical support for individual and small business clients.',
      'Design, build, and maintain client websites end-to-end, including branding, SEO, and deployment, for hospitality, retail, and non-profit clients.',
      'Manage client relationships independently, from scoping and proposals to delivery and ongoing support.',
    ],
  },
  {
    title: 'Bartender (Part-time)',
    company: 'Escobar CPT, Cape Town',
    duration: 'Jan 2023 - Dec 2023',
    description: [
      'Managed daily cash register cash-ups and stock takes with accuracy and coordinated corporate and promotional events.',
      'Held responsibility for lock-up procedures and security measures, and performed minor repair work to maintain operational readiness.',
      'Serviced a high volume of clients in a fast-paced environment while resolving customer issues effectively.',
    ],
  },
  {
    title: 'Waiter (Part-time)',
    company: 'The Castle Hotel Bar, Cape Town',
    duration: 'Dec 2021 - Jan 2023',
    description: [
      'Managed daily cash-ups, stock takes, and restocking, and assisted with in-store promotions and events.',
      'Held responsibility for lock-up and security procedures and performed minor repair work as needed.',
    ],
  },
  {
    title: 'Sales Assistant (Part-time)',
    company: 'C & N Clothing, Cape Town',
    duration: 'Jan 2018 - Dec 2018',
    description: [
      'Consistently achieved daily sales targets through proactive customer engagement.',
      'Managed stocktake and restocking, and designed product displays to attract customers.',
    ],
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Life Choices Academy',
    degree: 'Coding Course (Full Stack)',
    duration: 'April 2025',
    details: 'Completed a full-stack coding course covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL, Git, and GitHub.',
  },
  {
    institution: 'Norman Henshilwood High School',
    degree: 'Matric',
    duration: 'December 2023',
    details: 'National Senior Certificate from Norman Henshilwood High School.',
  },
];
