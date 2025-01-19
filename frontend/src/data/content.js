// Home Page Content
export const homeContent = {
    greeting: "Hello , I'm",
    name: "Aditya Kumar",
    role: "Full Stack Developer | Python Expert | Open Source Contributor",
    profileImage: process.env.PUBLIC_URL + '/images/aditya1.jpg',
    buttons: {
        projects: "View Projects",
        contact: "Contact Me"
    }
};

// Projects Data
export const projects = [
    {
        id: 1,
        title: "AI-Powered Code Assistant",
        description: "Developed an intelligent code assistant that helps developers write better code by providing real-time suggestions and identifying potential bugs using machine learning.",
        technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React", "Docker"],
        github_url: "https://github.com/username/code-assistant",
        live_url: "https://code-assistant-demo.com",
        image_url: "https://via.placeholder.com/800x600?text=AI+Code+Assistant"
    },
    {
        id: 2,
        title: "Your New Project",
        description: "New project description",
        technologies: ["React", "Node.js", "MongoDB"],
        github_url: "https://github.com/yourusername/newproject",
        live_url: "https://new-project-demo.com",
        image_url: "/images/projects/project2.jpg"
    },
    {
        id: 5,
        title: "New Portfolio Project",
        description: "Created a modern portfolio website using React and Tailwind CSS",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github_url: "https://github.com/yourusername/portfolio",
        live_url: "https://your-portfolio.com",
        image_url: "/images/projects/portfolio.jpg"
    },
    {
        id: 5,
        title: "New Portfolio Project",
        description: "Created a modern portfolio website using React and Tailwind CSS",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github_url: "https://github.com/yourusername/portfolio",
        live_url: "https://your-portfolio.com",
        image_url: "/images/projects/portfolio.jpg"
    }
];

// Experience Data
export const experiences = [
    {
        id: 1,
        company: "Aditya AI",
        position: "Senior Full Stack Developer",
        start_date: "2022-06",
        end_date: "Present",
        description: "Leading a team of developers in building AI-powered web applications. Implemented machine learning models for predictive analytics and automated decision-making systems.",
        technologies: ["Python", "React", "TensorFlow", "AWS", "Docker", "PostgreSQL"]
    },
    {
        id: 2,
        company: "CloudScale Solutions",
        position: "Full Stack Developer",
        start_date: "2020-03",
        end_date: "2022-05",
        description: "Developed scalable cloud applications and microservices. Improved system performance by 40% through optimization and implementing caching strategies.",
        technologies: ["Node.js", "React", "MongoDB", "Redis", "Azure", "Kubernetes"]
    },
];

// Achievements Data
export const achievements = [
    {
        id: 1,
        title: "Innovation Award - Smart City Hackathon",
        description: "Won first place for developing an AI-powered traffic management system that reduced congestion by 30% in simulation tests.",
        date: "2024-01-15",
        url: "https://smartcity-hackathon.com/winners"
    },
    {
        id: 2,
        title: "Published Research Paper",
        description: "Research on 'Optimizing Neural Networks for Edge Devices' published in IEEE International Conference on AI & Mobile Computing.",
        date: "2023-11-20",
        url: "https://ieee.org/papers/neural-networks"
    },
];

// Contact Data
export const contactContent = {
    title: "Contact Me",
    email: "email@example.com",
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername"
    },
    form: {
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        messagePlaceholder: "Your message",
        submitButton: "Send Message"
    },
    connectSection: {
        title: "Other Ways to Connect",
        email: "email@example.com",
        github: "GitHub",
        linkedin: "LinkedIn"
    }
};