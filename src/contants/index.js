export const myProjects = [
  {
    id: 1, // Sesuaikan dengan urutan id di daftar proyek Anda
    title: "Authentication & Authorization System",
    description:
      "A robust and secure backend API built with Express and TypeScript to handle modern authentication flows and role-based authorization.",
    subDescription: [
      "Implemented JWT-based authentication using secure HttpOnly cookies for refresh tokens and JSON payloads for access tokens to prevent client-side token exposure.",
      "Developed a token rotation and revocation system utilizing a database-stored token version to support multi-device logouts and active session invalidation.",
      "Integrated Google OAuth 2.0 via google-auth-library, enabling seamless single sign-on (SSO) and automatic account creation for verified Google users.",
      "Built a secure email-based verification pipeline and a 15-minute expiring password reset workflow using Nodemailer with SHA-256 cryptographically secure tokens.",
      "Enforced robust request validation and payload sanitization using Zod schemas for endpoints like registration, login, and password resetting.",
      "Established Role-Based Access Control (RBAC) with custom Express middlewares to restrict API access based on 'user' and 'admin' privileges.",
      "Connected to MongoDB using Mongoose ODM, utilizing timestamps and strict schema constraints for secure user data persistence.",
    ],

    href: "https://github.com/Raditdwipratomo/auth-express",
    logo: "",
    image: "/assets/projects/no-image.png", // Sesuaikan dengan path gambar project Anda
    tags: [
      {
        id: 1,
        name: "Express.js",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "JWT (JSON Web Token)",
        path: "/assets/logos/jwt.svg",
      },
      {
        id: 5,
        name: "Google OAuth",
        path: "/assets/logos/google.svg",
      },
      {
        id: 6,
        name: "Zod",
        path: "/assets/logos/zod.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Employee Management System",
    description:
      "A comprehensive web-based HR and employee management platform built with Laravel to streamline daily workforce operations.",
    subDescription: [
      "Implemented secure session-based authentication with role-based access control (RBAC) supporting Admin, Manager, and Employee roles.",
      "Developed an attendance system enabling daily check-in and check-out tracking, location logging, and automatic work-hour calculations.",
      "Built a leave request workflow featuring automated working day calculations, approval pipelines, and Excel/CSV report exports.",
      "Integrated a payroll management system that calculates net salaries based on allowances and deductions, and generates digital payslips.",
      "Designed a responsive user interface using Laravel Blade templates styled with Tailwind CSS and compiled via Vite.",
      "Connected to a secure database environment supporting MySQL and SQLite for reliable data storage.",
    ],

    href: "https://github.com/Raditdwipratomo/manajemen-karyawan",
    logo: "",
    image: "/assets/projects/manajemen-karyawan.png",

    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/logos/PHP.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/assets/logos/Laravel.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "AI Interview Prep Web Application",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "https://github.com/Raditdwipratomo/interview-prep-ai",
    logo: "",
    image: "/assets/projects/interview-prep.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "AI Resume Critiquer",
    description:
      "An AI-powered web application that analyzes resumes and provides tailored, constructive feedback based on targeted job roles.",
    subDescription: [
      "Developed a user-friendly frontend using Streamlit for resume uploads and interactive analysis.",
      "Integrated Groq API with the Llama 3.1 model for high-speed, expert-level resume evaluation.",
      "Implemented PDF and TXT file parsers utilizing PyPDF2 to extract resume content.",
      "Designed dynamic AI prompts focusing on content clarity, skills presentation, and job alignment.",
    ],

    href: "https://github.com/Raditdwipratomo/resume-critique",
    logo: "",
    image: "/assets/projects/resume-critiq.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/Streamlit.svg",
      },
    ],
  },
  {
    id: 6,
    title: "EduTrack",
    description:
      "A robust learning log platform enabling students to track daily activities and allowing teachers to monitor progress and provide feedback.",
    subDescription: [
      "Designed a responsive and intuitive frontend with React, React Router DOM, and Tailwind CSS for cross-device accessibility.",
      "Developed a secure backend REST API utilizing Node.js and Express, handling all application logic and routing.",
      "Implemented role-based access control with JWT authentication and bcrypt password hashing to distinguish between student and teacher features.",
      "Integrated a MySQL database to securely store structured data, including user profiles, daily learning notes, and teacher comments.",
    ],
    href: "https://github.com/Raditdwipratomo/proyek-lomba",
    logo: "",
    image: "/assets/projects/edutrack.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 7,
    title: "NutriStunting",
    description:
      "A robust learning log platform enabling students to track daily activities and allowing teachers to monitor progress and provide feedback.",
    subDescription: [
      "Designed a responsive and intuitive frontend with React, React Router DOM, and Tailwind CSS for cross-device accessibility.",
      "Developed a secure backend REST API utilizing Node.js and Express, handling all application logic and routing.",
      "Implemented role-based access control with JWT authentication and bcrypt password hashing to distinguish between student and teacher features.",
      "Integrated a MySQL database to securely store structured data, including user profiles, daily learning notes, and teacher comments.",
    ],
    href: "https://github.com/Raditdwipratomo/noting-webapp",
    logo: "",
    image: "/assets/projects/nutristunting.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/logos/Express.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 8, // Silakan sesuaikan ID ini dengan urutan proyek Anda
    title: "Hilink",
    description:
      "A premium, highly responsive landing page for an outdoor adventure and camping application, designed to showcase travel navigation, camping listings, and scheduling features for hikers.",
    subDescription: [
      "Built a modern and interactive user interface using Next.js (App Router), React, and TypeScript for optimized web performance.",
      "Designed clean and eye-catching layouts with Tailwind CSS, utilizing custom configurations, smooth spacing, and mobile-first responsiveness.",
      "Created modular and reusable UI components, including dynamic campsite lists, a detailed route guidance interface, and app store call-to-actions.",
      "Highlighted key product capabilities such as offline map routing, augmented reality trail guidance, adventure scheduling, and global climbing community updates.",
    ],
    href: "https://travel-app-ten-jade.vercel.app/", // Kosongkan atau isi dengan link GitHub / Live Demo jika ada
    logo: "", // Kosongkan atau isi dengan path logo aplikasi jika ada
    image: "/assets/projects/hilink.png", // Sesuaikan dengan path screenshot proyek Anda
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 9,
    title: "VirtualR",
    description:
      "A modern landing page and build tool platform for Virtual Reality developers, designed to streamline VR application development, testing, and collaboration.",
    subDescription: [
      "Built with React 19 and Vite as the primary development framework and bundler using modern JavaScript (ES Modules).",
      "Styled using Tailwind CSS v4 featuring responsive flex/grid layouts, eye-catching gradients, and a sleek dark theme aesthetic.",
      "Architected with a modular, component-driven frontend including dedicated components for Hero, Features, Workflow, Pricing, Testimonials, and Footer.",
      "Enables interactive features including real-time video previews, customizable feature highlights with Lucide React icons, and detailed pricing plan matrices.",
    ],
    href: "https://virtual-r-red.vercel.app/",
    logo: "",
    image: "/assets/projects/virtualr.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vite.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 5,
        name: "Lucide React",
        path: "/assets/logos/lucide-react.svg",
      },
    ],
  },
  {
    id: 10, // Silakan sesuaikan ID ini dengan urutan pada portofolio Anda
    title: "Monks Estate",
    description:
      "A modern and premium real estate landing page designed to showcase property listings, agent services, client testimonials, and industry insights with a clean, elegant aesthetic.",
    subDescription: [
      "Designed and developed a fully responsive web interface using React and Vite for fast load times and smooth rendering.",
      "Styled a premium UI using Tailwind CSS and DaisyUI, implementing custom color schemes, typography, hover animations, and a cohesive design system.",
      "Structured sections for statistics display, property categories with interactive visual grids, and a services overview for buying, renting, and property management.",
      "Integrated mobile-responsive side navigation drawer, newsletter subscription form, and social media integration in the footer.",
    ],
    href: "https://real-estate-landing-page-three-flax.vercel.app/", // Silakan sesuaikan URL repository GitHub Anda
    logo: "",
    image: "/assets/projects/real-estate.png", // Silakan sesuaikan dengan path tangkapan layar proyek Anda
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vite.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "DaisyUI",
        path: "/assets/logos/daisyui.svg", // Silakan sesuaikan dengan path file logo DaisyUI Anda
      },
    ],
  },
  {
    id: 11, // Silakan sesuaikan ID ini dengan urutan pada portofolio Anda
    title: "Simple E-Commerce with Stripe",
    description:
      "A modern and responsive e-commerce web application built using Next.js and Stripe, featuring a dynamic shopping cart, product detail pages, and a seamless checkout experience.",
    subDescription: [
      "Designed a clean and responsive user interface using Next.js App Router, Tailwind CSS, and Lucide React icons.",
      "Developed a persistent and global shopping cart state management leveraging Zustand with local storage persistence middleware.",
      "Integrated Stripe API on the server side to dynamically fetch, list, and display products and prices from the Stripe Dashboard.",
      "Implemented secure Stripe Checkout flows by utilizing Next.js Server Actions to safely create and redirect users to payment sessions.",
    ],
    href: "https://simple-ecommerce-with-stripe.vercel.app/",
    logo: "",
    image: "/assets/projects/next-ecommerce.png", // Silakan sesuaikan dengan letak gambar preview proyek Anda
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 3,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },
  {
    id: 12, // Silakan sesuaikan ID ini dengan urutan pada portofolio Anda
    title: "FavLib",
    description:
      "A responsive full-stack book cataloging and sharing web application that allows users to discover new reads, search books, and share personal reviews along with purchase links.",
    subDescription: [
      "Designed a sleek, dark-themed responsive user interface using React, React Router 7, and Tailwind CSS v4.",
      "Developed a secure RESTful API using Express.js and Mongoose to handle book catalog records, search queries, and reviews.",
      "Implemented secure JWT user authentication with HTTP-only cookies and Bcrypt password hashing.",
      "Integrated Cloudinary API to manage cloud-based storage and dynamic uploading of book cover images.",
      "Leveraged Zustand for clean client-side state management and Axios for seamless API integration.",
    ],
    href: "https://github.com/Raditdwipratomo/bookapp",
    logo: "",
    image: "/assets/projects/bookapp.png", // Silakan sesuaikan dengan nama atau path file gambar preview portofolio Anda
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 6,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
    ],
  },
  {
    id: 13, // Silakan sesuaikan ID ini dengan urutan pada portofolio Anda
    title: "ExpenseTracker AI",
    description:
      "A modern, AI-powered financial companion and expense tracking web application that allows users to seamlessly log transactions, analyze budgets with interactive charts, and receive tailored financial advice.",
    subDescription: [
      "Designed a highly responsive and interactive dashboard with Next.js App Router, Tailwind CSS, and Chart.js for real-time spending visualization.",
      "Developed robust transaction CRUD functionalities leveraging secure Next.js Server Actions and Prisma ORM.",
      "Integrated Clerk for seamless user authentication and automatic user profile synchronization with a PostgreSQL database.",
      "Implemented an AI-driven financial advisor using OpenAI (via OpenRouter/DeepSeek) to automatically categorize expenses and answer questions about budgets.",
    ],
    href: "https://github.com/Raditdwipratomo/expense-tracker",
    logo: "",
    image: "/assets/projects/expense-tracker.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Prisma",
        path: "/assets/logos/prisma.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgree.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Clerk",
        path: "/assets/logos/clerk.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: `https://wa.me/6289686899447?text=${encodeURIComponent(
      "Halo Radit,\nSaya ingin berdiskusi lebih lanjut.",
    )}`,
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Fullstack Developer Internship",
    job: "Point of Sale System & Blog",
    date: "Okt 2025 - Jan 2026",
    contents: [
      "Developed and integrated frontend and backend components to enhance application responsiveness and improve user experience",
      "Implemented automated testing frameworks to increase code reliability and reduce post-deployment defects.",
      "Collaborated with cross-functional teams to align technical solutions with business requirements, optimizing project delivery timelines.",
      "Refined database schemas and queries to boost data retrieval speed and maintain system scalability",
      "Monitored application performance and resolved critical issues to ensure high availability and system stability",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "Feb 2026 - Present",
    contents: [
      "Created and managed various personal software projects to gain hands-on experience in full-stack web development.",
      "Implemented features such as authentication, database integration, REST APIs, responsive design, and interactive user interfaces using modern development tools.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
