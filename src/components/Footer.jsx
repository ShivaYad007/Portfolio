import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/content';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-bg text-gray-300 py-8">
            <div className="container-custom">
                <div className="text-center">
                    <p className="text-sm mb-2">
                        Built with <Heart className="w-4 h-4 inline text-red-500 fill-current" /> by{' '}
                        <span className="gradient-text font-semibold">{personalInfo.name}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                        © {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
