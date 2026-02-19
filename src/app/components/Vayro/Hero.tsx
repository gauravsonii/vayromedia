import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-vayroOrange/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="fade-in">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-vayroOrange uppercase bg-vayroOrange/10 rounded-full">
                        We are creative
                    </span>
                    <div className="max-w-2xl fade-in">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white mb-8">
                            Digital Marketing Agency
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-sans">
                            We help businesses grow online through strategy, design, and performance driven digital marketing.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:8253035707" className="px-8 py-4 bg-vayroOrange text-black font-black uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 text-center shadow-lg font-heading text-sm">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="relative fade-in delay-200">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Image container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                alt="Marketing Team"
                                fill
                                className="object-cover mix-blend-overlay opacity-80"
                                priority
                            />
                        </div>
                        {/* Floating Card Element */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-vayroOrange rounded-full flex items-center justify-center text-white font-bold">
                                    99%
                                </div>
                                <div>
                                    <h4 className="font-bold">Success Rate</h4>
                                    <p className="text-xs text-gray-400">Measured digital growth for our partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
