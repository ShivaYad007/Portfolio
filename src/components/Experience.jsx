import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/content';

const Experience = () => {
    return (
        <section id="experience" className="bg-gray-50 dark:bg-dark-card/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative mb-12 last:mb-0"
                        >
                            {/* Timeline Line */}
                            {index !== experience.length - 1 && (
                                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-teal to-accent-blue hidden md:block"></div>
                            )}

                            <div className="glass-light dark:glass p-6 md:p-8 rounded-xl card-hover">
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-8 w-4 h-4 bg-accent-teal rounded-full border-4 border-white dark:border-dark-bg hidden md:block"></div>

                                <div className="md:ml-8">
                                    {/* Company & Role */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                                            <div className="flex items-center gap-2 text-accent-teal font-semibold mb-2">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.role}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="mb-4 p-4 bg-gray-100 dark:bg-dark-card rounded-lg">
                                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span className="font-semibold">Project:</span> {exp.project}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Domain:</span> {exp.domain}
                                            </div>
                                            {exp.client && (
                                                <div className="md:col-span-2">
                                                    <span className="font-semibold">Client:</span> {exp.client}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Responsibilities */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <li key={respIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                                        {resp}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="font-semibold mb-3">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 border border-accent-teal/30 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
