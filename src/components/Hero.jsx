import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/content';

const Hero = () => {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container-custom">
                <div className="text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-accent-teal font-semibold text-lg mb-4">
                            Hi, I'm
                        </p>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text mb-6"
                    >
                        {personalInfo.title}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="btn-primary text-white"
                        >
                            View Projects
                        </button>

                        <a
                            href={personalInfo.resumeUrl}
                            download
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>

                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-300 dark:border-dark-border hover:border-accent-teal dark:hover:border-accent-teal hover:scale-105 active:scale-95"
                        >
                            <Mail className="w-5 h-5 inline mr-2" />
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="animate-bounce"
                    >
                        <ArrowDown className="w-6 h-6 mx-auto text-accent-teal" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
