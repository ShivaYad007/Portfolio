import React from 'react';
import { motion } from 'framer-motion';
import { architecturePatterns } from '../data/content';
import BillingArchitectureDiagram from './BillingArchitectureDiagram';

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

                <div className="grid md:grid-cols-2 gap-6 mb-16">
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

                {/* Animated Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Microservices <span className="gradient-text">Architecture Flow</span></h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Visualizing the end-to-end flow of our billing service, from client requests
                            through API Gateway to microservices, storage, and centralized observability.
                        </p>
                    </div>

                    <BillingArchitectureDiagram />
                </motion.div>
            </div>
        </section>
    );
};

export default Architecture;
