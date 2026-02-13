import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projects } from '../data/content';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-light dark:glass p-6 rounded-xl card-hover"
                        >
                            {/* Category Badge */}
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent-teal to-accent-blue text-white text-xs font-semibold rounded-full mb-4">
                                {project.category}
                            </div>

                            {/* Project Name */}
                            <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

                            {/* Problem Statement */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm text-accent-teal mb-2">Problem Statement</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {project.problem}
                                </p>
                            </div>

                            {/* Architecture */}
                            <div className="mb-4 p-3 bg-gray-100 dark:bg-dark-card rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Layers className="w-4 h-4 text-accent-teal" />
                                    <h4 className="font-semibold text-sm">Architecture</h4>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {project.architecture}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-dark-card rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-sm font-semibold text-accent-teal hover:text-accent-blue transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-2 text-sm font-semibold text-accent-teal hover:text-accent-blue transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
