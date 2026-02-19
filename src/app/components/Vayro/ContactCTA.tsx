import React from 'react';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-4xl mx-auto px-6 text-center fade-in relative z-10">
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-heading italic">
                    Let’s Grow Your Brand <span className="text-vayroOrange italic">Digitally.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed font-sans italic">
                    We&apos;d love to explore how the right digital strategy can scale your business and reach the right audience.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="tel:8253035707" className="px-10 py-5 bg-vayroOrange text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 font-heading text-sm">
                        8253035707
                    </a>
                    <a href="https://wa.me/918253035707" className="group flex items-center gap-3 text-lg font-bold text-white hover:text-vayroOrange transition-colors">
                        Chat on WhatsApp
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
