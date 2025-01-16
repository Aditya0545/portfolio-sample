import React from 'react';

const achievements = [
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
    {
        id: 3,
        title: "Environmental Tech Innovation",
        description: "Developed a machine learning model that helps reduce energy consumption in buildings by 25%, recognized by Green Tech Awards.",
        date: "2023-09-10",
        url: "https://greentech-awards.com/2023"
    },
    {
        id: 4,
        title: "Full Stack Development Certification",
        description: "Completed advanced certification in Full Stack Development with specialization in AI and Cloud Technologies.",
        date: "2023-07-15",
        url: "https://certification.dev/verify"
    },
    {
        id: 5,
        title: "Open Source Impact",
        description: "Created a popular open-source library for AI model optimization, garnering over 1000+ stars on GitHub.",
        date: "2023-05-01",
        url: "https://github.com/username/ai-optimizer"
    },
    {
        id: 6,
        title: "Tech Community Leadership",
        description: "Led a community of 500+ developers, organizing workshops and mentoring sessions on AI and web development.",
        date: "2023-03-20",
        url: "https://tech-community.org/leadership"
    }
];

function Achievements() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Achievements & Recognition</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map(achievement => (
                    <div key={achievement.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start justify-between">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h2>
                            <span className="text-sm text-gray-500">
                                {new Date(achievement.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long'
                                })}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                            {achievement.description}
                        </p>
                        {achievement.url && (
                            <a
                                href={achievement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                            >
                                <span>Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements; 