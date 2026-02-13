import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../data/content';

const About = () => {
    return (
        <section id="about" className="bg-gray-50 dark:bg-dark-card/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Professional Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {about.summary}
                        </p>

                        <div className="space-y-3">
                            {about.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                                    <p className="text-gray-600 dark:text-gray-300">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {about.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass-light dark:glass p-6 rounded-xl text-center card-hover"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
