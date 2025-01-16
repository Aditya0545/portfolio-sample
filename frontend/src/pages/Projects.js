import React from 'react';

const projects = [
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
        title: "Smart Home Automation System",
        description: "Created a comprehensive IoT-based home automation system that controls lighting, temperature, and security using voice commands and mobile app interface.",
        technologies: ["Python", "React Native", "IoT", "MongoDB", "Node.js", "AWS"],
        github_url: "https://github.com/username/smart-home",
        live_url: "https://smart-home-demo.com",
        image_url: "https://via.placeholder.com/800x600?text=Smart+Home+System"
    },
    {
        id: 3,
        title: "Health & Fitness Tracker",
        description: "Built a comprehensive fitness tracking application that monitors workouts, nutrition, and provides personalized recommendations using machine learning algorithms.",
        technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow", "GraphQL", "AWS"],
        github_url: "https://github.com/username/fitness-tracker",
        live_url: "https://fitness-tracker-demo.com",
        image_url: "https://via.placeholder.com/800x600?text=Fitness+Tracker"
    },
    {
        id: 4,
        title: "Sustainable Energy Monitor",
        description: "Designed a system to monitor and optimize energy consumption in buildings using IoT sensors and providing real-time analytics and recommendations.",
        technologies: ["Python", "React", "IoT", "InfluxDB", "TensorFlow", "Docker"],
        github_url: "https://github.com/username/energy-monitor",
        live_url: "https://energy-monitor-demo.com",
        image_url: "https://via.placeholder.com/800x600?text=Energy+Monitor"
    }
];

function Projects() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center md:text-left">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                            <img 
                                src={project.image_url} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h2>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map(tech => (
                                <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-300 transition-colors duration-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.github_url && (
                                <a 
                                    href={project.github_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                            )}
                            {project.live_url && (
                                <a 
                                    href={project.live_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects; 