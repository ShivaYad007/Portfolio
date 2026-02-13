import React from 'react';
import { motion } from 'framer-motion';
import { Code, Network, Database, Container, Activity, CheckCircle } from 'lucide-react';
import { skills } from '../data/content';

const iconMap = {
    code: Code,
    network: Network,
    database: Database,
    container: Container,
    activity: Activity,
    'check-circle': CheckCircle,
};

const Skills = () => {
    const skillCategories = Object.values(skills);

    return (
        <section id="skills">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const IconComponent = iconMap[category.icon];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-light dark:glass p-6 rounded-xl card-hover"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-gradient-to-r from-accent-teal to-accent-blue rounded-lg">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-card rounded-full text-gray-700 dark:text-gray-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
