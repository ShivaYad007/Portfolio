import React from 'react';
import { motion } from 'framer-motion';
import { architecturePatterns } from '../data/content';

const Architecture = () => {
    return (
        <section id="architecture" className="bg-gray-50 dark:bg-dark-card/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Architecture & <span className="gradient-text">System Design</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {architecturePatterns.map((pattern, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-light dark:glass p-6 rounded-xl card-hover"
                        >
                            <h3 className="text-xl font-bold mb-3 gradient-text">
                                {pattern.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {pattern.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="font-semibold text-sm">Components:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {pattern.components.map((component, compIndex) => (
                                        <span
                                            key={compIndex}
                                            className="px-3 py-1 text-xs bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/30 rounded-full"
                                        >
                                            {component}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Architecture Diagram Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 glass-light dark:glass p-8 rounded-xl text-center"
                >
                    <h3 className="text-xl font-bold mb-4">Microservices Architecture Diagram</h3>
                    <div className="bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 rounded-lg p-12 border-2 border-dashed border-accent-teal/30">
                        <p className="text-gray-600 dark:text-gray-400">
                            Interactive architecture diagram showcasing microservices communication,
                            API Gateway routing, service discovery, and distributed logging flow.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Architecture;
