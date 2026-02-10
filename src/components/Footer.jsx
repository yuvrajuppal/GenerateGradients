import React from 'react';
import { Github, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0a1a] border-t border-gray-900 py-12 px-6 mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand/Copyright Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-black tracking-tighter text-xl">GooseCodes</span>

                        </div>
                        <p className="text-gray-500 text-sm flex items-center gap-1.5">
                            Built with <Heart size={14} className="text-red-500 fill-red-500" /> by
                            <span className="text-gray-300 font-semibold">Yuvraj Uppal</span>
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-[#6322ff] transition-colors p-2 hover:bg-[#161527] rounded-lg"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-[#6322ff] transition-colors p-2 hover:bg-[#161527] rounded-lg"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                       
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-900/50 flex flex-col sm:flex-row justify-center items-center gap-4 text-[11px] text-gray-600 font-bold uppercase tracking-widest">
                    <p>© 2026 GOOSECODES</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;