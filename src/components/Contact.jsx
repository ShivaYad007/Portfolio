import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/content';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-50 dark:bg-dark-card/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-teal to-accent-blue mx-auto mb-6"></div>
                    <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                        I'm currently open to new opportunities and exciting projects. Whether you're a recruiter,
                        tech lead, or just want to connect, feel free to reach out!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-r from-accent-teal to-accent-blue rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="font-semibold hover:text-accent-teal transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-r from-accent-teal to-accent-blue rounded-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <a
                                        href={`tel:${personalInfo.phone}`}
                                        className="font-semibold hover:text-accent-teal transition-colors"
                                    >
                                        {personalInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-r from-accent-teal to-accent-blue rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="font-semibold">{personalInfo.location}</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6">
                                <h4 className="font-semibold mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 glass-light dark:glass rounded-lg hover:scale-110 transition-transform"
                                    >
                                        <Linkedin className="w-6 h-6 text-accent-blue" />
                                    </a>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 glass-light dark:glass rounded-lg hover:scale-110 transition-transform"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="glass-light dark:glass p-8 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I'm actively seeking opportunities in backend development, microservices architecture,
                                and scalable system design. Let's build something amazing together!
                            </p>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="btn-primary w-full text-white flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Email
                                </a>

                                <a
                                    href={personalInfo.resumeUrl}
                                    download
                                    className="btn-secondary w-full text-center block"
                                >
                                    Download Resume
                                </a>
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 rounded-lg border border-accent-teal/30">
                                <p className="text-sm text-center">
                                    <span className="font-semibold">Open to:</span> Full-time positions, Contract work, Consulting
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
