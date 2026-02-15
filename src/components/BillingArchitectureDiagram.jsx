import React from 'react';
import { motion } from 'framer-motion';

const BillingArchitectureDiagram = () => {
    // Animation Variants
    const nodeVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pathVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" }
        }
    };

    const flowVariants = {
        animate: {
            strokeDashoffset: [0, -20],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-white/5 dark:bg-dark-bg/20 rounded-xl p-4 md:p-8 border border-white/10 dark:border-dark-border/50">
            <svg viewBox="0 0 800 500" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- Connections (Paths) --- */}

                {/* Client to Gateway */}
                <motion.path
                    d="M 400 60 L 400 120"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    variants={pathVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />

                {/* Gateway to Services */}
                <motion.path
                    d="M 400 180 L 150 250 M 400 180 L 400 250 M 400 180 L 650 250"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    variants={pathVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />

                {/* Services to DB/Cache */}
                <motion.path
                    d="M 150 310 L 150 380 M 400 310 L 400 380 M 650 310 L 650 380"
                    stroke="#14B8A6"
                    strokeWidth="1"
                    fill="none"
                    variants={pathVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />

                {/* Observability Connection */}
                <motion.path
                    d="M 150 280 L 70 280 L 70 450 L 730 450 L 730 280 L 650 280"
                    stroke="#F43F5E"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4,4"
                    variants={pathVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />

                {/* --- Nodes --- */}

                {/* Client */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
                    <rect x="340" y="20" width="120" height="40" rx="8" fill="#1e293b" stroke="#334155" />
                    <text x="400" y="45" textAnchor="middle" fill="white" fontSize="12" className="font-mono">Client Request</text>
                </motion.g>

                {/* API Gateway */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <motion.rect
                        variants={pulseVariants}
                        animate="animate"
                        x="330" y="120" width="140" height="60" rx="10" fill="url(#nodeGradient)" filter="url(#glow)"
                    />
                    <text x="400" y="150" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">API Gateway</text>
                    <text x="400" y="165" textAnchor="middle" fill="white" fontSize="10" opacity="0.8">(Security / Routing)</text>
                </motion.g>

                {/* Service Registry */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    <rect x="580" y="120" width="120" height="40" rx="8" fill="#334155" stroke="#475569" />
                    <text x="640" y="145" textAnchor="middle" fill="white" fontSize="10">Service Discovery</text>
                </motion.g>

                {/* Microservices Row */}

                {/* Auth Service */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                    <rect x="80" y="250" width="140" height="60" rx="10" fill="#1e293b" stroke="#3B82F6" strokeWidth="2" />
                    <text x="150" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Auth Service</text>
                    <text x="150" y="295" textAnchor="middle" fill="#3B82F6" fontSize="9">JWT / Roles</text>
                </motion.g>

                {/* Billing Service */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.5 }}>
                    <motion.rect
                        variants={pulseVariants}
                        animate="animate"
                        x="330" y="250" width="140" height="60" rx="10" fill="url(#nodeGradient)" filter="url(#glow)"
                    />
                    <text x="400" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Billing Service</text>
                    <text x="400" y="295" textAnchor="middle" fill="white" fontSize="9" opacity="0.9">Schedulers / Async</text>
                </motion.g>

                {/* Account Service */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.6 }}>
                    <rect x="580" y="250" width="140" height="60" rx="10" fill="#1e293b" stroke="#3B82F6" strokeWidth="2" />
                    <text x="650" y="280" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Account Service</text>
                    <text x="650" y="295" textAnchor="middle" fill="#3B82F6" fontSize="9">Customer Data</text>
                </motion.g>

                {/* Storage Row */}

                {/* Redis */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.7 }}>
                    <ellipse cx="150" cy="410" rx="50" ry="30" fill="#334155" stroke="#ef4444" />
                    <text x="150" y="415" textAnchor="middle" fill="white" fontSize="11">Redis Cache</text>
                </motion.g>

                {/* MySQL */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.8 }}>
                    <path d="M 350 410 C 350 390, 450 390, 450 410 L 450 440 C 450 460, 350 460, 350 440 Z" fill="#334155" stroke="#3B82F6" />
                    <ellipse cx="400" cy="410" rx="50" ry="10" fill="#475569" stroke="#3B82F6" />
                    <text x="400" y="435" textAnchor="middle" fill="white" fontSize="11">MySQL DB</text>
                </motion.g>

                {/* ELK Stack */}
                <motion.g variants={nodeVariants} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.9 }}>
                    <rect x="600" y="390" width="100" height="60" rx="5" fill="#334155" stroke="#F43F5E" />
                    <text x="650" y="425" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ELK Stack</text>
                    <text x="650" y="440" textAnchor="middle" fill="#F43F5E" fontSize="8">(Centralized Logs)</text>
                </motion.g>

                {/* Flow Indicators (Animated Dots) */}
                <motion.circle r="3" fill="#14B8A6" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 400 60 L 400 120" />
                </motion.circle>
                <motion.circle r="3" fill="#3B82F6" filter="url(#glow)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 400 180 L 400 250" />
                </motion.circle>
                <motion.circle r="3" fill="#3B82F6" filter="url(#glow)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 400 180 L 150 250" />
                </motion.circle>
                <motion.circle r="3" fill="#F43F5E" filter="url(#glow)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 150 280 L 70 280 L 70 450 L 730 450 L 730 280 L 650 280" />
                </motion.circle>

            </svg>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent-teal"></span>
                    <span>Entry Flow</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent-blue"></span>
                    <span>Service Communication</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent-red"></span>
                    <span>Log Aggregation</span>
                </div>
            </div>
        </div>
    );
};

export default BillingArchitectureDiagram;
