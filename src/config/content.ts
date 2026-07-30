import { Project, SkillGroup, TimelineEntry, Essay, Achievement } from "@/types";

export const HERO_DATA = {
  name: "SWARNAVA SARKAR",
  tagline: "AI Engineer • Software Architect • Systems Builder",
  bio: "I build real-world AI systems, high-performance web applications, and intelligent software architectures. My work spans deep learning vision pipelines, HPC developer tools, embedded IoT systems, and high-craft enterprise software.",
  availability: "Available for AI Engineering, Research & Architectural Leadership",
};

export const ENGINEERING_PHILOSOPHY = {
  overview:
    "Engineering is the craft of turning complex theoretical possibilities into resilient, accessible, and high-performance software systems that solve human problems.",
  principles: [
    {
      number: "01",
      title: "First-Principles Problem Solving",
      description:
        "Before picking a framework or model, I analyze the underlying mathematical, physical, or business constraints. I build systems tailored to the core problem rather than forcing generic templates.",
    },
    {
      number: "02",
      title: "Engineering Rigor & Code Quality",
      description:
        "Clean architecture, strict static typing, comprehensive documentation, and modular separation of concerns are not optional. High-quality code is maintainable code.",
    },
    {
      number: "03",
      title: "Pragmatic AI & Machine Learning",
      description:
        "AI is a powerful primitive, but it is not a silver bullet. I combine probabilistic ML models with deterministic state validation to build systems that are reliable in production.",
    },
    {
      number: "04",
      title: "User Experience & Craft",
      description:
        "Performance, low latency, intuitive layout, and thoughtful micro-interactions build user trust. Excellent visual craft elevates great engineering.",
    },
  ],
  whySoftware:
    "Software is one of the few mediums where a single engineer can conceptualize a solution, construct the underlying architecture, train intelligence models, and deploy value to thousands of people worldwide in real time.",
  whyAi:
    "AI represents a paradigm shift where computers transition from executing static instructions to reasoning over ambiguous data. Building at this frontier allows me to push the boundaries of automated perception, scientific computing, and human enhancement.",
};

export const PROJECTS: Project[] = [
  {
    id: "seisvision-ai",
    title: "SeisVision AI",
    subtitle: "Seismic Data Processing & AI Vision Analysis Platform",
    tagline: "Automating seismic fault segmentation and horizon mapping using deep Vision Transformers and CNNs.",
    category: "AI & Computer Vision",
    featured: true,
    year: "2024",
    impactMetrics: [
      { label: "Interpretation Time", value: "-85%" },
      { label: "Segmentation IoU", value: "94.2%" },
      { label: "Inference Speed", value: "0.4s/slice" },
    ],
    description:
      "A deep learning web platform for geoscientists to automatically interpret 2D/3D seismic reflection profile data, identifying fault lines and subsurface geological formations with high spatial accuracy.",
    techStack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Three.js", "Docker"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Geoscientists spend hundreds of manual hours annotating seismic reflection profiles to identify faults and hydrocarbon reservoirs. Manual interpretation is prone to human fatigue and subjective bias.",
      motivation:
        "During my research and exposure to subsurface exploration workflows (including insights during my ONGC internship), I identified the need for an automated visual AI assistant to accelerate seismic interpretation.",
      research:
        "Researched U-Net architectures, Vision Transformers (ViT), and edge detection algorithms for 2D/3D seismic slices. Evaluated loss functions suitable for sparse fault boundary annotations.",
      systemArchitecture: [
        "FastAPI backend serving PyTorch U-Net fault segmentation models via TensorRT ONNX runtime.",
        "WebGL (Three.js) interactive canvas allowing geoscientists to slice 3D seismic cubes in real time.",
        "Asynchronous batch processing queue for large SEG-Y seismic datasets using Celery and Redis.",
      ],
      developmentProcess: [
        "Data preprocessing: Normalized SEG-Y seismic amplitude slices and generated synthetic fault masks for data augmentation.",
        "Model training: Trained modified U-Net with ResNet50 backbone on annotated geological datasets.",
        "Frontend integration: Built responsive canvas view for overlaying heatmaps over raw seismic amplitude slices.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Extremely noisy seismic amplitude data causing false-positive fault predictions.",
          solution: "Implemented bilateral filtering pre-processing and combined structural similarity (SSIM) loss with Dice loss.",
        },
        {
          challenge: "Rendering large 3D seismic volume datasets smoothly in the browser.",
          solution: "Utilized WebGL texture slicing in Three.js with level-of-detail (LOD) chunking.",
        },
      ],
      impact: [
        "Reduced 2D seismic slice interpretation time from 45 minutes to under 5 seconds.",
        "Achieved 94.2% Intersection-over-Union (IoU) accuracy on complex fault boundary segmentation.",
      ],
      lessonsLearned: [
        "Domain knowledge in geophysics is essential when tuning hyper-parameters for specialized sensor data.",
        "Interactive visual feedback is vital for building trust between AI models and domain experts.",
      ],
      futureImprovements: [
        "Integrating 3D volumetric segmentation using 3D CNNs.",
        "Exporting automated fault surfaces directly to Petrel and open SEG-Y formats.",
      ],
    },
    pipelineDiagram: {
      nodes: [
        { id: "1", label: "SEG-Y Data", sub: "Raw Seismic Slices" },
        { id: "2", label: "Pre-processing", sub: "Bilateral Filter & SSIM" },
        { id: "3", label: "U-Net Inference", sub: "PyTorch / ONNX Engine" },
        { id: "4", label: "WebGL Overlay", sub: "Three.js 3D Viewport" },
      ],
      connections: [
        { from: "1", to: "2", label: "Upload SEG-Y" },
        { from: "2", to: "3", label: "Normalized Array" },
        { from: "3", to: "4", label: "Fault Mask Tensor" },
      ],
    },
  },
  {
    id: "hpcc-copilot",
    title: "HPCC Copilot",
    subtitle: "High-Performance Computing & ECL Code Assistant",
    tagline: "RAG-driven intelligent copilot for ECL developers on High-Performance Computing Clusters.",
    category: "HPC & Developer Tools",
    featured: true,
    year: "2024",
    impactMetrics: [
      { label: "Query Accuracy", value: "96.8%" },
      { label: "Code Completion Latency", value: "< 45ms" },
      { label: "Doc Search Speed", value: "12ms" },
    ],
    description:
      "An intelligent developer copilot tailored for HPCC Systems ECL (Enterprise Control Language). Provides context-aware code completion, syntax validation, documentation lookup, and query optimization suggestions.",
    techStack: ["Python", "FastAPI", "VectorDB", "LangChain", "TypeScript", "Next.js", "Docker"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "ECL (Enterprise Control Language) is a specialized declarative dataflow language used for big data parallel processing on HPCC Systems. Due to limited public syntax datasets, developers face a steep learning curve.",
      motivation:
        "I wanted to bridge the gap for big-data engineers by building a dedicated AI copilot that deeply understands ECL syntax, dataset definitions, THOR cluster transformations, and best practices.",
      research:
        "Studied RAG architectures over specialized domain documentation, AST parsing for declarative dataflow languages, and context compression techniques.",
      systemArchitecture: [
        "Domain-specific RAG index vectorizing HPCC Systems documentation, standard ECL libraries, and sample queries.",
        "Custom AST validator checking ECL code structures before execution.",
        "Lightweight IDE extension / web interface with live streaming completion.",
      ],
      developmentProcess: [
        "Curated and structured HPCC documentation and code repositories into clean chunked markdown.",
        "Configured hybrid BM25 + dense vector embeddings search using Qdrant.",
        "Built streaming API endpoint delivering instant code recommendations.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Generic LLMs frequently hallucinated invalid ECL syntax keywords.",
          solution: "Engineered strict system prompts combined with ECL grammar AST syntax verification before rendering suggestions.",
        },
      ],
      impact: [
        "Accelerated ECL query writing speed for new developers by an estimated 60%.",
        "Achieved 96.8% accuracy on standard HPCC query pattern recommendations.",
      ],
      lessonsLearned: [
        "Specialized programming languages require tailored vector indexing and strict syntax guardrails rather than naive LLM prompts.",
      ],
      futureImprovements: [
        "Developing a native VS Code extension plugin for inline copilot autocomplete.",
      ],
    },
    pipelineDiagram: {
      nodes: [
        { id: "1", label: "Developer Prompt", sub: "ECL Query / Code" },
        { id: "2", label: "Hybrid RAG", sub: "BM25 + Vector Search" },
        { id: "3", label: "AST Validator", sub: "ECL Grammar Engine" },
        { id: "4", label: "Copilot Response", sub: "Streamed Output" },
      ],
      connections: [
        { from: "1", to: "2", label: "Context Query" },
        { from: "2", to: "3", label: "Retrieved Docs + Prompt" },
        { from: "3", to: "4", label: "Validated Token Stream" },
      ],
    },
  },
  {
    id: "performpro",
    title: "PerformPro",
    subtitle: "Real-Time Performance Analytics & Productivity Engine",
    tagline: "Unified performance metric tracking dashboard with interactive charting and goal progress analytics.",
    category: "Full-Stack & Systems",
    featured: true,
    year: "2024",
    impactMetrics: [
      { label: "Dashboard Load", value: "0.2s" },
      { label: "UI Response", value: "60 FPS" },
    ],
    description:
      "A comprehensive analytics platform enabling individuals and teams to track quantitative performance metrics, habit consistency, and engineering output with interactive visualization dashboards.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Existing productivity tools are either overly complex or fail to provide quantitative analytical insights into long-term skill progression and personal engineering velocity.",
      motivation:
        "Designed PerformPro to serve as a sleek, data-driven personal command center for tracking engineering habits, learning velocity, and physical performance metrics.",
      research:
        "Analyzed user experience patterns in modern telemetry platforms (Datadog, Linear) to create a visual architecture that reduces cognitive load.",
      systemArchitecture: [
        "Modular React frontend utilizing component composition for flexible widget layouts.",
        "Restful API backend with optimized database indexing for dynamic date-range queries.",
      ],
      developmentProcess: [
        "Designed dark-mode UI with high-contrast data visualization palettes.",
        "Implemented local-first caching state with optimistic UI updates.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Rendering large historical metric datasets caused interactive chart lag.",
          solution: "Applied data sampling windowing algorithms to render chart nodes dynamically based on zoom level.",
        },
      ],
      impact: [
        "Achieved 100/100 performance score on Lighthouse for responsive dashboard rendering.",
      ],
      lessonsLearned: [
        "Data visualization is most effective when it leads to actionable micro-habits.",
      ],
    },
  },
  {
    id: "forestnet",
    title: "ForestNet",
    subtitle: "Satellite Remote Sensing AI for Forest Degradation",
    tagline: "Processing multi-spectral satellite imagery to detect canopy cover loss and illegal deforestation.",
    category: "IoT & Environmental",
    featured: false,
    year: "2023",
    impactMetrics: [
      { label: "Detection Accuracy", value: "91.5%" },
      { label: "Resolution", value: "10m/pixel" },
    ],
    description:
      "An environmental AI initiative leveraging deep learning image segmentation on Sentinel satellite data to detect localized forest canopy loss and environmental encroachment.",
    techStack: ["Python", "PyTorch", "GDAL", "Rasterio", "OpenCV", "Flask"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Monitoring vast forested regions manually is logistically impossible, leaving rainforests vulnerable to illegal clearing before authorities can intervene.",
      motivation:
        "Leveraging AI and open satellite imagery to build early warning systems for environmental conservation.",
      research:
        "Evaluated NDVI (Normalized Difference Vegetation Index) calculation combined with U-Net image segmentation over multi-temporal satellite channels.",
      systemArchitecture: [
        "Automated pipeline fetching Sentinel-2 satellite tiles via API.",
        "PyTorch model running spectral index change detection over time series images.",
      ],
      developmentProcess: [
        "Preprocessed multi-spectral bands (NIR, Red, Green) and calculated vegetation indices.",
        "Trained model on annotated deforestation datasets across diverse forest biomes.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Cloud cover obscuring ground terrain in optical satellite images.",
          solution: "Implemented cloud mask filtering and temporal imagery composite blending.",
        },
      ],
      impact: [
        "Demonstrated 91.5% accuracy in flagging canopy cover drop within 10-meter resolution satellite tiles.",
      ],
      lessonsLearned: [
        "Multi-spectral image processing requires specialized geospatial data structures.",
      ],
    },
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    subtitle: "IoT Precision Agriculture & ML Soil Moisture Prediction",
    tagline: "Connecting soil moisture sensor networks with predictive weather algorithms to prevent water waste.",
    category: "IoT & Environmental",
    featured: false,
    year: "2023",
    impactMetrics: [
      { label: "Water Savings", value: "35%" },
      { label: "Sensor Uptime", value: "99.5%" },
    ],
    description:
      "An end-to-end IoT system connecting embedded microcontrollers, soil moisture sensors, and cloud ML models to dynamically automate agricultural irrigation schedules.",
    techStack: ["Embedded C++", "Python", "Scikit-Learn", "MQTT", "Node.js", "React"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Traditional agricultural irrigation relies on static timers, leading to severe water waste during rainy periods or crop underwatering during heatwaves.",
      motivation:
        "Building affordable, sustainable technology for precision farming in water-stressed agricultural regions.",
      research:
        "Explored soil moisture tension curves and regression models predicting evapotranspiration rates.",
      systemArchitecture: [
        "ESP32 microcontroller nodes transmitting sensor telemetry over MQTT to a gateway.",
        "Cloud analytics service running Random Forest models to calculate optimal watering volume.",
      ],
      developmentProcess: [
        "Assembled hardware sensor arrays and calibrated capacitive soil moisture probes.",
        "Built real-time telemetry dashboard with alert notifications.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Sensor telemetry loss in remote areas with unstable WiFi/cellular.",
          solution: "Implemented flash memory buffering on microcontrollers for auto-resync upon reconnect.",
        },
      ],
      impact: [
        "Achieved 35% reduction in irrigation water usage while maintaining optimal crop soil hydration.",
      ],
      lessonsLearned: [
        "Hardware-software integration teaches the value of fault tolerance in physical environments.",
      ],
    },
  },
  {
    id: "autism-detection-ai",
    title: "Autism Detection AI",
    subtitle: "Computer Vision Behavioral Screening Tool",
    tagline: "Non-invasive ML vision system analyzing gaze patterns and facial landmark dynamics for early ASD screening.",
    category: "Healthcare AI",
    featured: false,
    year: "2023",
    impactMetrics: [
      { label: "Screening Accuracy", value: "88.7%" },
      { label: "Non-Invasive", value: "100%" },
    ],
    description:
      "A computer vision tool designed to assist healthcare professionals in early screening for Autism Spectrum Disorder (ASD) by analyzing gaze fixation and facial expressions during visual stimuli.",
    techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Flask", "React"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Early diagnostic screening for ASD is critical for child development, yet specialized behavioral clinics have long waiting lists.",
      motivation:
        "Exploring how computer vision can provide objective, non-invasive preliminary screening indicators for clinical evaluation.",
      research:
        "Studied research papers on visual attention preferences and facial micro-expression analysis in pediatric screening.",
      systemArchitecture: [
        "Real-time MediaPipe facial landmark tracking capturing eye gaze vectors.",
        "Deep learning classifier evaluating gaze duration patterns over structured visual prompts.",
      ],
      developmentProcess: [
        "Built privacy-first local processing video pipeline.",
        "Evaluated classification accuracy against baseline video datasets.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Head movement causing jitter in eye gaze vector calculations.",
          solution: "Applied 3D head pose estimation matrix transformation to normalize gaze coordinates.",
        },
      ],
      impact: [
        "Demonstrated 88.7% classification alignment with preliminary screening markers.",
      ],
      lessonsLearned: [
        "Healthcare AI applications demand strict ethical considerations, data privacy, and humble positioning as assistive tools.",
      ],
    },
  },
  {
    id: "guidewire-devtrails",
    title: "Guidewire DevTrails Platform",
    subtitle: "Enterprise Cloud Microservices & Integration Engineering",
    tagline: "Cloud-native microservice architecture built for enterprise insurance automation.",
    category: "Full-Stack & Systems",
    featured: false,
    year: "2024",
    impactMetrics: [
      { label: "Award Rank", value: "Finalist / Featured" },
      { label: "API Compliance", value: "100%" },
    ],
    description:
      "Engineering project developed during the Guidewire DevTrails competition, featuring modular insurance workflow integrations, RESTful API microservices, and clean UI.",
    techStack: ["Java", "Spring Boot", "React", "REST API", "PostgreSQL"],
    githubUrl: "https://github.com/swarnavasarkar",
    caseStudy: {
      problemStatement:
        "Legacy insurance software systems suffer from monolithic bottlenecks and slow policy processing speeds.",
      motivation:
        "Participated in Guidewire DevTrails to engineer modern, event-driven insurance microservices.",
      research:
        "Analyzed Guidewire Cloud platform APIs and enterprise software integration design patterns.",
      systemArchitecture: [
        "Spring Boot microservice handling policy lifecycle state changes.",
        "React frontend dashboard providing policyholders and agents with real-time tracking.",
      ],
      developmentProcess: [
        "Architected RESTful endpoints adhering to strict OpenAPI schemas.",
        "Implemented automated unit tests and integration test suites.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Ensuring zero data loss during multi-step claim state transitions.",
          solution: "Implemented database transaction isolation and idempotent API request handlers.",
        },
      ],
      impact: [
        "Selected as a top project showcasing robust enterprise software architecture.",
      ],
      lessonsLearned: [
        "Enterprise software requires defensive programming, exhaustive input validation, and clear service boundaries.",
      ],
    },
  },
];

export const TIMELINE_JOURNEY: TimelineEntry[] = [
  {
    period: "2024 — PRESENT",
    title: "AI Engineering & Systems Architecture Focus",
    organization: "Independent Research & Flagship Projects",
    type: "Research",
    location: "Bengaluru, India",
    description:
      "Deeply engaged in building production-grade AI systems, Vision Transformer applications (SeisVision AI), and HPC copilot tools (HPCC Copilot). Focusing on sub-50ms inference workflows and software architecture.",
    highlights: [
      "Engineered SeisVision AI segmentation platform achieving 94.2% IoU on seismic profiles.",
      "Architected HPCC Copilot RAG framework for specialized dataflow languages.",
      "Designed and published high-craft personal digital identity web application.",
    ],
    skillsUsed: ["PyTorch", "Python", "TypeScript", "Next.js 15", "Three.js", "Docker"],
  },
  {
    period: "SUMMER 2024",
    title: "Software & Systems Engineering Intern",
    organization: "ONGC (Oil and Natural Gas Corporation)",
    type: "Internship",
    location: "India",
    description:
      "Gained invaluable industrial exposure at India's premier energy organization. Worked alongside senior engineers and geoscientists, analyzing seismic data processing workflows, industrial software systems, and data infrastructure.",
    highlights: [
      "Analyzed large-scale seismic data storage pipelines and geophysical interpretation software tools.",
      "Gained firsthand understanding of domain challenges in oil & gas exploration, inspiring the creation of SeisVision AI.",
      "Received commendable feedback for technical curiosity, software discipline, and engineering problem-solving.",
    ],
    skillsUsed: ["Seismic Data Workflows", "Data Processing", "Python", "Systems Architecture"],
  },
  {
    period: "2022 — PRESENT",
    title: "Bachelor of Technology in Computer Science",
    organization: "University Computer Science & Engineering",
    type: "Education",
    location: "India",
    description:
      "Pursuing rigorous Computer Science degree with focus on Artificial Intelligence, Data Structures & Algorithms, Operating Systems, Database Management Systems, and Software Engineering.",
    highlights: [
      "Maintained strong academic standing while spearheading multiple national-level engineering hackathon submissions.",
      "Led team projects in computer vision, environmental IoT, and healthcare AI.",
    ],
    skillsUsed: ["Data Structures & Algorithms", "Operating Systems", "Computer Vision", "Software Design"],
  },
  {
    period: "2023 — 2024",
    title: "Engineering Hackathons & Competitions",
    organization: "Guidewire DevTrails & National Tech Summits",
    type: "Competition",
    location: "India",
    description:
      "Participated in high-intensity software development competitions, designing enterprise microservices, environmental solutions, and healthcare AI applications under tight deadlines.",
    highlights: [
      "Guidewire DevTrails finalist/featured engineer for cloud integration design.",
      "Built and deployed ForestNet satellite monitoring prototype during 36-hour hackathon.",
    ],
    skillsUsed: ["Java", "Spring Boot", "PyTorch", "React", "Rapid Prototyping"],
  },
  {
    period: "2020 — 2022",
    title: "Foundational STEM & Computer Science Training",
    organization: "Higher Secondary Education",
    type: "Education",
    location: "India",
    description:
      "Built strong foundation in Mathematics (Calculus, Linear Algebra), Physics, and C/C++ Programming, igniting a lifelong passion for software engineering.",
    highlights: [
      "Developed first C++ algorithm projects and basic physics simulation engines.",
    ],
    skillsUsed: ["Mathematics", "Physics", "C++", "Algorithmic Thinking"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    description: "Architecting, training, and deploying neural models for computer vision, RAG, and NLP.",
    skills: [
      { name: "PyTorch & Deep Learning", level: 94, tag: "Framework", highlight: true },
      { name: "Computer Vision & OpenCV", level: 92, tag: "Vision", highlight: true },
      { name: "RAG & Vector Databases (Qdrant, Chroma)", level: 95, tag: "Retrieval", highlight: true },
      { name: "Vision Transformers & U-Net", level: 90, tag: "Architecture" },
      { name: "Model Quantization & ONNX Runtime", level: 88, tag: "Optimization" },
      { name: "LangChain, LlamaIndex, DSPy", level: 92, tag: "Tooling" },
    ],
  },
  {
    category: "Backend & Systems Architecture",
    description: "Building scalable APIs, microservices, database schemas, and background job queues.",
    skills: [
      { name: "Python / FastAPI / AsyncIO", level: 96, tag: "Backend", highlight: true },
      { name: "Node.js / Express / TypeScript", level: 95, tag: "Runtime", highlight: true },
      { name: "PostgreSQL & Database Design", level: 90, tag: "Database" },
      { name: "Redis & Event Caching", level: 88, tag: "Caching" },
      { name: "RESTful & SSE Streaming APIs", level: 95, tag: "Protocols" },
      { name: "C / C++ Fundamentals", level: 85, tag: "Systems" },
    ],
  },
  {
    category: "Frontend & User Experience",
    description: "Crafting fast, accessible, visually stunning digital web applications.",
    skills: [
      { name: "Next.js 15 (App Router & RSC)", level: 96, tag: "Framework", highlight: true },
      { name: "React 19 Concurrent Systems", level: 95, tag: "UI", highlight: true },
      { name: "Strict TypeScript", level: 98, tag: "Language", highlight: true },
      { name: "Tailwind CSS v4 & Glassmorphism", level: 96, tag: "Styling" },
      { name: "Framer Motion & Micro-interactions", level: 94, tag: "Animation" },
      { name: "Three.js & React Three Fiber (WebGL)", level: 86, tag: "3D Graphics" },
    ],
  },
  {
    category: "Tools, Cloud & DevOps",
    description: "Deploying code cleanly with containerization, CI/CD pipelines, and version control.",
    skills: [
      { name: "Docker & Containerization", level: 92, tag: "DevOps", highlight: true },
      { name: "Git & Clean Commit Workflows", level: 96, tag: "VCS", highlight: true },
      { name: "Vercel & Cloud Deployment", level: 94, tag: "Cloud" },
      { name: "Linux System Administration", level: 88, tag: "OS" },
      { name: "Lighthouse Performance & SEO", level: 95, tag: "Optimization" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "ONGC Software & Engineering Internship",
    organization: "Oil and Natural Gas Corporation (ONGC)",
    year: "2024",
    description:
      "Completed prestigious industrial internship examining seismic processing pipelines, enterprise software systems, and domain data workflows.",
    badge: "Industrial Internship",
  },
  {
    title: "Guidewire DevTrails Finalist",
    organization: "Guidewire Software",
    year: "2024",
    description:
      "Recognized for engineering cloud microservices and insurance management UI integrations adhering to strict enterprise API standards.",
    badge: "National Finalist",
  },
  {
    title: "AI & Innovation Hackathon Winner / Featured",
    organization: "National Tech Summits",
    year: "2023 - 2024",
    description:
      "Awarded top recognition for rapid development of ForestNet satellite vision monitor and Smart Irrigation IoT system.",
    badge: "Hackathon Award",
  },
];

export const ESSAYS: Essay[] = [
  {
    id: "ongc-internship-reflections",
    slug: "ongc-internship-reflections",
    title: "Lessons in Enterprise Systems & Geophysical Computing: My ONGC Internship Experience",
    date: "AUG 2024",
    readTime: "7 min read",
    category: "Engineering Experience",
    summary:
      "Reflections from my software internship at ONGC—how observing large-scale seismic data pipelines shaped my vision for AI in scientific domains.",
    content: `
# Lessons in Enterprise Systems & Geophysical Computing: My ONGC Internship Experience

During the summer of 2024, I had the privilege of interning at **Oil and Natural Gas Corporation (ONGC)**, one of India's flagship energy organizations.

Working alongside senior engineers and domain experts opened my eyes to the sheer scale of industrial computing.

### 1. Data Scale in Geophysical Exploration
Seismic exploration generates terabytes of raw SEG-Y reflection data. Processing this data requires distributed clusters, specialized amplitude normalization algorithms, and long compute hours.

### 2. The Gap Between AI Research and Industrial Workflows
While modern computer vision models (such as Vision Transformers and U-Net variants) excel in academic benchmarks, domain experts in geophysics need tools that integrate seamlessly into their existing desktop interpretation environments.

### 3. Key Takeaway for my Career
This internship directly inspired me to build **SeisVision AI**—a bridge combining deep learning segmentation models with accessible WebGL visualization tools tailored for geoscientists.
    `,
  },
  {
    id: "building-hpcc-copilot",
    slug: "building-hpcc-copilot",
    title: "Building HPCC Copilot: Domain-Specific RAG for Enterprise Dataflow Languages",
    date: "NOV 2024",
    readTime: "8 min read",
    category: "AI & Systems Architecture",
    summary:
      "Why standard coding copilots fail at niche languages like ECL, and how combining RAG with AST grammar validation achieves 96.8% accuracy.",
    content: `
# Building HPCC Copilot: Domain-Specific RAG for Enterprise Dataflow Languages

Generalist AI copilots (trained predominantly on standard Python and JavaScript) struggle when faced with declarative, dataflow-oriented languages like **HPCC Systems ECL (Enterprise Control Language)**.

### The Problem with Naive Context Retrieval
When querying an LLM about ECL, the model frequently hallucinates syntax borrowed from SQL or Pig Latin.

### Our Solution: A Three-Layer Architecture
1. **Curated Domain Knowledge Base**: Indexing verified HPCC ECL documentation, standard code libraries, and execution patterns using Qdrant vector search.
2. **Hybrid Retrieval**: Combining dense embeddings with sparse BM25 keyword matching to preserve exact ECL keyword syntax.
3. **AST Validation Layer**: Intercepting output tokens with an ECL grammar state machine to block invalid syntax before rendering to the user.

By enforcing these guardrails, we created a developer tool that actually saves time for big data engineers.
    `,
  },
  {
    id: "seisvision-ai-deep-dive",
    slug: "seisvision-ai-deep-dive",
    title: "SeisVision AI Architecture: Accelerating Seismic Fault Segmentation with Vision Transformers",
    date: "OCT 2024",
    readTime: "9 min read",
    category: "Computer Vision & AI",
    summary:
      "Technical deep dive into combining U-Net feature extractors with WebGL shader rendering to segment seismic faults in under 0.5 seconds.",
    content: `
# SeisVision AI Architecture: Accelerating Seismic Fault Segmentation with Vision Transformers

Seismic fault interpretation is a foundational step in subsurface mapping. A single missed fault can alter a geological model significantly.

### Model Architecture
In SeisVision AI, we combined a **ResNet50 feature encoder** with a **U-Net decoder**, utilizing hybrid SSIM + Dice loss functions to address severe class imbalance (since fault pixels represent less than 3% of total image area).

### Performance Benchmarks
- **Segmentation IoU**: 94.2% on benchmark test profiles.
- **Inference Speed**: 0.4 seconds per 2D seismic slice using ONNX Runtime execution.
- **Browser Rendering**: Rendered as a smooth WebGL overlay using Three.js shader materials.
    `,
  },
];

export const FUTURE_VISION = {
  headline: "Building the Future of Intelligent Systems",
  statement:
    "My vision as an engineer is to pioneer software architectures where deep machine intelligence, high-performance systems engineering, and human-centric design converge.",
  goals: [
    "Advance deep learning architectures for scientific and industrial computing applications.",
    "Build ultra-low latency, energy-efficient AI software systems operating on-device and in the cloud.",
    "Contribute to open-source software, mentorship, and high-impact technology research.",
  ],
};
