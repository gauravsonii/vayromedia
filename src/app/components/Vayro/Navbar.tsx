import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
            <nav className="max-w-7xl w-full bg-nav-gradient rounded-full px-8 h-16 flex items-center justify-between shadow-lg pointer-events-auto border border-white/10">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20">
                        <Image src="/favicon.ico" alt="Vayro Media Logo" fill className="object-contain" />
                    </div>
                    <div className="text-xl font-black tracking-tight text-white font-heading">
                        Vayro <span className="text-black">Media</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    <a href="#home" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">About</a>
                    <a href="#services" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Services</a>
                    <a href="#why-us" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Why Us</a>
                    <a href="tel:8253035707" className="px-6 py-2 bg-white text-gray-900 text-xs font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all duration-300">
                        Contact Us
                    </a>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <button className="p-2 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
