import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: FaInstagram, href: 'https://instagram.com/vayromedia', label: 'Instagram' },
        { icon: FaLinkedin, href: 'https://linkedin.com/company/vayromedia', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com/vayromedia', label: 'X (Twitter)' },
        { icon: FaWhatsapp, href: 'https://wa.me/918253035707', label: 'WhatsApp' },
    ];

    return (
        <footer className="py-20 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-12">
                    <div className="text-3xl font-black tracking-tight text-white mb-2 font-heading">
                        Vayro <span className="text-vayroOrange">Media</span>
                    </div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs font-heading">Digital Marketing Agency</p>
                </div>

                <div className="flex justify-center gap-8 mb-12">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-vayroOrange transition-all duration-300 text-xl"
                            aria-label={social.label}
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>

                <div className="mb-12 space-y-4">
                    <div className="block">
                        <a
                            href="mailto:hello@vayromedia.com"
                            className="text-xl font-bold text-white hover:text-vayroOrange transition-colors underline decoration-vayroOrange underline-offset-8 font-heading"
                        >
                            hello@vayromedia.com
                        </a>
                    </div>
                    <div className="block">
                        <a
                            href="tel:8253035707"
                            className="text-2xl font-black text-white hover:text-vayroOrange transition-colors font-heading"
                        >
                            +91 8253035707
                        </a>
                    </div>
                </div>

                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest font-heading">
                    © {currentYear} Vayro Media. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
