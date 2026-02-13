import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Wrench } from 'lucide-react';
import { achievements } from '../data/content';

const iconMap = {
    zap: Zap,
    shield: Shield,
    'trending-up': TrendingUp,
    tool: Wrench,
};

const Achievements = () => {
    return (
        <section id="achievements">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Key <span className="gradient-text">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => {
                        const IconComponent = iconMap[achievement.icon];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-light dark:glass p-6 rounded-xl card-hover text-center"
                            >
                                <div className="inline-flex p-4 bg-gradient-to-r from-accent-teal to-accent-blue rounded-full mb-4">
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>

                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                    {achievement.description}
                                </p>

                                <div className="pt-3 border-t border-gray-200 dark:border-dark-border">
                                    <p className="text-xs text-accent-teal font-semibold">
                                        {achievement.impact}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
