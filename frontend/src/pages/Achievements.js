import React from 'react';
import { achievements } from '../data/content';

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