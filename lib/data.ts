// ─── EDIT THIS FILE to personalise every section of your portfolio ──────────

export const personal = {
  name: "Muhammad Imam Al Paqih",
  title: "Mathematics Student",
  subtitle: "Computation · Research · Data",
  university: "University of Mataram",
  location: "Indonesia",
  email: "muhammadimam.alpaqih@gmail.com",
  github: "https://github.com/Imam-Al",
  linkedin: "www.linkedin.com/in/muhammad-imam-al-paqih",
  bio: `I am a mathematics student with a strong interest in computational methods, mathematical modelling, and data-driven research. I enjoy bridging abstract mathematics with practical software — building tools, exploring datasets, and contributing to academic research.`,
  avatar: "/avatar.jpg", // put '/avatar.jpg' after adding the file to /public
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Mathematics",
    items: [
      "Linear Algebra",
      "Calculus",
      "Statistics",
      "Discrete Mathematics",
      "Numerical Methods",
      "Graph Theory",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript / TypeScript", "R", "MATLAB", "C++", "SQL"],
  },
  {
    category: "Web & Tools",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "LaTeX",
      "Git",
      "Jupyter",
      "VS Code",
    ],
  },
  {
    category: "Data & ML",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "TensorFlow (basics)",
    ],
  },
];

export const projects = [
  {
    id: "numerical-ode",
    title:
      "Simulation of Spring Oscillations in Second-Order Differential Equations Using the Finite Difference Method",
    description:
      "A Python library implementing Runge-Kutta methods for solving ordinary differential equations, with interactive visualisations.",
    tags: ["Python", "NumPy", "Matplotlib"],
    github: "https://github.com/yourusername/ode-solver",
    demo: "",
    year: "2025",
    featured: true,
  },
  {
    id: "graph-viz",
    title: "Graph Algorithm Visualiser",
    description:
      "Web-based interactive tool for visualising BFS, DFS, Dijkstra, and Kruskal algorithms step-by-step.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/graph-viz",
    demo: "https://graph-viz.vercel.app",
    year: "2024",
    featured: true,
  },
  {
    id: "stat-dashboard",
    title: "Statistics Dashboard",
    description:
      "An exploratory data analysis dashboard built with Next.js, offering descriptive stats and distribution plots for uploaded CSV data.",
    tags: ["Next.js", "Recharts", "Papa Parse"],
    github: "https://github.com/yourusername/stat-dashboard",
    demo: "",
    year: "2023",
    featured: false,
  },
];

export const experience = [
  {
    role: "Research Assistant",
    org: "Department of Mathematics, University Name",
    period: "Jan 2024 – Present",
    description:
      "Assisting in numerical analysis research; implementing algorithms and producing reproducible computational experiments.",
    type: "research",
  },
  {
    role: "Mathematics Tutor",
    org: "University Tutoring Centre",
    period: "Aug 2023 – Dec 2023",
    description:
      "Tutored first- and second-year students in calculus, linear algebra, and discrete mathematics.",
    type: "work",
  },
  {
    role: "B.Sc. Mathematics",
    org: "University Name",
    period: "2022 – Present",
    description:
      "GPA: 3.9 / 4.0. Coursework in real analysis, abstract algebra, probability, numerical methods, and mathematical computing.",
    type: "education",
  },
];

export const research = [
  {
    title: "Convergence Analysis of Adaptive Runge-Kutta Methods",
    abstract:
      "We analyse the error bounds and convergence properties of adaptive step-size RK45 integrators applied to stiff ODEs arising in chemical kinetics.",
    status: "In progress",
    year: "2024",
    collaborators: ["Dr. Supervisor Name"],
  },
  {
    title: "Graph Colouring Heuristics for Scheduling Problems",
    abstract:
      "Exploration of greedy and backtracking graph colouring algorithms applied to university timetabling optimisation.",
    status: "Completed",
    year: "2023",
    collaborators: [],
  },
];

export const publications = [
  {
    title: "A Note on Adaptive Numerical Integration for Stiff Systems",
    venue: "Undergraduate Research Journal of Mathematics, Vol. 4",
    year: "2024",
    doi: "",
    type: "Journal",
  },
  {
    title: "Graph Colouring Approaches to Timetabling",
    venue: "National Undergraduate Mathematics Conference 2023",
    year: "2023",
    doi: "",
    type: "Conference",
  },
];

export const certificates = [
  {
    title: "Machine Learning Specialisation",
    issuer: "DeepLearning.AI / Coursera",
    year: "2024",
    url: "",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    year: "2023",
    url: "",
  },
  {
    title: "Mathematics for Machine Learning",
    issuer: "Imperial College London / Coursera",
    year: "2023",
    url: "",
  },
  {
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard / edX",
    year: "2022",
    url: "",
  },
];

export const blogPosts = [
  {
    slug: "understanding-runge-kutta",
    title: "Understanding Runge-Kutta Methods Intuitively",
    date: "2024-03-15",
    excerpt:
      "A visual and intuitive explanation of why RK4 is so accurate, without losing yourself in Taylor series expansions.",
    tags: ["Numerical Methods", "Python"],
    readingTime: "6 min",
  },
  {
    slug: "graph-theory-daily-life",
    title: "Graph Theory in Everyday Life",
    date: "2024-01-20",
    excerpt:
      "From social networks to navigation apps — how the abstract structures of graph theory are quietly powering the modern world.",
    tags: ["Graph Theory", "Mathematics"],
    readingTime: "5 min",
  },
  {
    slug: "latex-tips",
    title: "LaTeX Tips Every Math Student Should Know",
    date: "2023-11-08",
    excerpt:
      "A practical collection of LaTeX tricks I wish I knew in my first year — from aligning equations to drawing commutative diagrams.",
    tags: ["LaTeX", "Productivity"],
    readingTime: "4 min",
  },
];
