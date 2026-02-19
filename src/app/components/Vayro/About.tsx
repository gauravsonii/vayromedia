import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative fade-in">
                        <div className="aspect-square rounded-full bg-vayroOrange/5 absolute -top-12 -left-12 w-64 h-64 -z-10" />
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight font-heading uppercase italic">
                            Pushing the Boundaries of Social Excellence.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-sans italic">
                            <p>
                                Vayro Media isn&apos;t just a marketing agency; it&apos;s a strategic engine for brand elevation. We transcend traditional digital boundaries to create authentic connections that resonate.
                            </p>
                            <p>
                                Our philosophy is built on unwavering collaboration and strategic excellence. By merging data driven insights with creative intuition, we empower our partners to achieve sustainable growth and market leadership.
                            </p>
                        </div>
                        <p className="font-semibold text-white border-l-4 border-vayroOrange pl-6 italic">
                            We believe the right digital strategy turns attention into real business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 fade-in delay-200">
                        <div className="space-y-6 pt-12">
                            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div className="text-4xl font-bold text-vayroOrange mb-2">12+</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Global Partners</div>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div className="text-4xl font-bold text-vayroOrange mb-2">50%</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">ROI Focused</div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div className="text-4xl font-bold text-vayroOrange mb-2">24/7</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Support</div>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div className="text-4xl font-bold text-vayroOrange mb-2">100%</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Execution</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
