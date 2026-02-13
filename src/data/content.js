export const personalInfo = {
    name: "Shivakumar Yadav G",
    title: "Java Backend Developer | Spring Boot | Microservices",
    tagline: "Building scalable backend systems with clean architecture and modern tech stack",
    email: "shivakumar.yadav787@gmail.com",
    phone: "9493744357",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/shivakumar-yadav",
    github: "https://github.com/shivakumar-yadav",
    resumeUrl: "/resume.pdf"
};

export const about = {
    summary: "Java Backend Developer with 3.6 years of hands-on experience in designing, developing, and maintaining scalable Spring Boot and Microservices-based applications. Strong experience in Telecom BSS Billing systems, REST API design, JWT-based security, MySQL, Redis, schedulers, async processing, and centralized logging using ELK Stack.",
    highlights: [
        "3.6+ years of backend development experience",
        "Expert in Spring Boot & Microservices architecture",
        "Production-ready applications with high scalability",
        "Strong problem-solving and debugging skills"
    ],
    stats: [
        { label: "Years Experience", value: "3.6+" },
        { label: "Projects Delivered", value: "10+" },
        { label: "Technologies", value: "20+" },
        { label: "Code Reviews", value: "100+" }
    ]
};

export const skills = {
    backend: {
        title: "Backend Development",
        icon: "code",
        skills: ["Java 8/11/17", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Spring IOC & MVC"]
    },
    microservices: {
        title: "Microservices & APIs",
        icon: "network",
        skills: ["RESTful APIs", "JWT Authentication", "API Gateway", "Service Registry", "Role-Based Auth", "JSON"]
    },
    databases: {
        title: "Databases & Caching",
        icon: "database",
        skills: ["MySQL", "MS SQL Server", "Redis", "Query Optimization", "Database Design"]
    },
    devops: {
        title: "DevOps & Tools",
        icon: "container",
        skills: ["Docker", "Kubernetes (Basic)", "Git", "GitHub", "Maven", "GitHub Actions", "Postman"]
    },
    observability: {
        title: "Observability",
        icon: "activity",
        skills: ["ELK Stack", "SLF4J", "Logback", "Centralized Logging", "Monitoring", "Trace IDs"]
    },
    testing: {
        title: "Testing & Quality",
        icon: "check-circle",
        skills: ["JUnit", "Mockito", "Unit Testing", "TDD", "Code Reviews", "Clean Code"]
    }
};

export const experience = [
    {
        company: "Versaflex India Pvt Ltd",
        role: "Software Developer",
        duration: "Sep 2024 - Present",
        location: "Hyderabad, India",
        project: "BSS Billing Service",
        domain: "Telecom / ISP",
        client: "Ziply Fiber",
        description: "Ziply Fiber is a telecommunications provider delivering fiber-optic internet and connectivity services across Washington, Oregon, Idaho, and Montana.",
        responsibilities: [
            "Built and maintained scalable RESTful backend services using Spring Boot and Microservices",
            "Worked on Telecom BSS Billing Service, handling billing cycles and daily automated billing runs",
            "Implemented scheduler-driven and asynchronous processing for long-running billing workflows",
            "Developed REST APIs for billing runs, billing cycles, and account-level billing operations",
            "Implemented centralized structured logging with trace IDs and request metadata for observability",
            "Integrated backend services with internal platforms (CXP, LAC, ZCN, Dynamics 360)",
            "Actively involved in production issues debugging and root cause analysis",
            "Contributed to unit testing, code reviews and continuous improvement"
        ],
        techStack: ["Spring Boot", "Microservices", "MySQL", "Redis", "REST APIs", "JWT", "ELK Stack", "Swagger", "Git"]
    },
    {
        company: "Inquipo Technology Pvt Ltd",
        role: "Software Developer",
        duration: "Jun 2022 - Aug 2024",
        location: "Bangalore, India",
        project: "Internal Business Applications (Fortress)",
        domain: "Business Development",
        description: "Developed internal enterprise applications including CRM and Inventory Management systems to streamline core business operations.",
        responsibilities: [
            "Developed web-based back-end systems using Java Spring Boot",
            "Built reusable and modular components for authentication, data access, and business logic",
            "Designed and implemented REST APIs for CRM and Inventory Management systems",
            "Managed relational data using MySQL and optimized SQL queries",
            "Validated APIs using Postman and documented endpoints using Swagger",
            "Worked on bug fixes, feature enhancements, and performance improvements",
            "Participated in daily stand-ups, sprint planning, and code reviews"
        ],
        techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Swagger", "Postman", "Git", "Agile"]
    }
];

export const projects = [
    {
        name: "BSS Billing Service - Ziply Fiber",
        category: "Telecom Billing",
        problem: "Need for automated, scalable billing system to handle thousands of customer accounts across multiple states with real-time billing cycles and account management.",
        architecture: "Microservices-based architecture with API Gateway, Service Registry, and distributed logging",
        features: [
            "Automated daily billing runs with scheduler-driven processing",
            "Account-level billing operations with async processing",
            "Centralized structured logging with trace IDs",
            "Integration with CXP, LAC, ZCN, and Dynamics 360",
            "Real-time billing cycle management",
            "Production issue monitoring and resolution"
        ],
        techStack: ["Spring Boot", "Microservices", "MySQL", "Redis", "REST APIs", "JWT", "ELK Stack", "Swagger"],
        github: "#",
        demo: "#"
    },
    {
        name: "CRM & Inventory Management System",
        category: "Enterprise Application",
        problem: "Internal stakeholders needed a unified system for customer relationship management and real-time inventory monitoring with reporting capabilities.",
        architecture: "Monolithic Spring Boot application with modular architecture and layered design",
        features: [
            "Customer relationship management with contact tracking",
            "Real-time inventory monitoring and stock management",
            "Role-based authentication and authorization",
            "Reporting and analytics dashboard",
            "RESTful API design with Swagger documentation",
            "Optimized SQL queries for performance"
        ],
        techStack: ["Spring Boot", "MySQL", "Spring Security", "REST APIs", "Swagger", "Postman"],
        github: "#",
        demo: "#"
    }
];

export const architecturePatterns = [
    {
        title: "Microservices Architecture",
        description: "Distributed system design with independent services communicating via REST APIs",
        components: ["API Gateway", "Service Registry", "Config Server", "Load Balancer", "Service Mesh"]
    },
    {
        title: "JWT Authentication Flow",
        description: "Secure token-based authentication with role-based access control",
        components: ["Auth Service", "Token Generation", "Token Validation", "Role Management", "Session Management"]
    },
    {
        title: "API Gateway Pattern",
        description: "Single entry point for all client requests with routing, authentication, and rate limiting",
        components: ["Request Routing", "Authentication", "Rate Limiting", "Load Balancing", "Response Aggregation"]
    },
    {
        title: "Centralized Logging with ELK",
        description: "Distributed logging system with trace IDs for request tracking across microservices",
        components: ["Elasticsearch", "Logstash", "Kibana", "Trace IDs", "Log Aggregation"]
    }
];

export const achievements = [
    {
        title: "Performance Optimization",
        description: "Optimized billing service queries reducing processing time by 40%",
        impact: "Improved system throughput and reduced server load",
        icon: "zap"
    },
    {
        title: "Security Implementation",
        description: "Implemented JWT-based authentication with role-based access control",
        impact: "Enhanced application security and prevented unauthorized access",
        icon: "shield"
    },
    {
        title: "Scalability Enhancement",
        description: "Designed async processing for long-running billing workflows",
        impact: "Enabled system to handle 10x more concurrent billing operations",
        icon: "trending-up"
    },
    {
        title: "Production Issue Resolution",
        description: "Debugged and resolved critical production billing issues with minimal downtime",
        impact: "Maintained 99.9% uptime for billing service",
        icon: "tool"
    }
];

export const education = [
    {
        degree: "Master of Technology",
        institution: "Jawaharlal Nehru Technological University",
        location: "Anantapur, AP",
        duration: "2019 - 2021"
    },
    {
        degree: "Bachelor of Technology",
        institution: "St. Johns College of Engineering and Technology",
        location: "Yemmiganur, AP",
        duration: "2015 - 2019"
    }
];
