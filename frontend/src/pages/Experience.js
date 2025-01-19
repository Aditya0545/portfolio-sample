import React from 'react';
import { experiences } from '../data/content';

function Experience() {
    return (
        // Main container with responsive padding
        <div className="container mx-auto px-4 py-8">
            {/* Section title - centered on mobile, left-aligned on desktop */}
            <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Professional Experience</h1>

            {/* Experience cards container with vertical spacing */}
            <div className="space-y-6">
                {/* Map through experiences array to create individual cards */}
                {experiences.map(experience => (
                    // Experience card with hover effect
                    <div key={experience.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        {/* Header section with position and dates */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            {/* Company and position information */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{experience.position}</h2>
                                <h3 className="text-lg text-blue-600">{experience.company}</h3>
                            </div>

                            {/* Date range with formatting */}
                            <div className="text-sm text-gray-500 mt-2 md:mt-0">
                                {new Date(experience.start_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long'
                                })} - {
                                    experience.end_date === "Present" ? "Present" :
                                    new Date(experience.end_date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long'
                                    })
                                }
                            </div>
                        </div>

                        {/* Job description */}
                        <p className="text-gray-600 mb-4">
                            {experience.description}
                        </p>

                        {/* Technologies used - displayed as tags */}
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map(tech => (
                                <span 
                                    key={tech} 
                                    className="bg-gray-200 px-2 py-1 rounded text-xs md:text-sm text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience; 