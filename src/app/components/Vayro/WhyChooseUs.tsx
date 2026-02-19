import React from 'react';

const WhyChooseUs = () => {
    const points = [
        "Strategy-first approach",
        "Data-driven campaigns",
        "Creative brand positioning",
        "Measurable growth focus",
        "Dedicated partnership mindset"
    ];

    return (
        <section id="why-us" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-vayroOrange/10 blur-3xl -z-0" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="fade-in">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                                Why Vayro Media?
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-sans italic mb-8">
                                Strategic Excellence. Unwavering Collaboration. Tangible Results.
                            </p>
                            <div className="space-y-6">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-vayroOrange flex items-center justify-center flex-shrink-0 group-hover:bg-vayroOrange transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-vayroOrange group-hover:bg-white" />
                                        </div>
                                        <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="fade-in delay-200">
                            <div className="aspect-video bg-gray-800 rounded-3xl border border-gray-700 p-8 flex flex-col justify-center">
                                <div className="text-vayroOrange text-6xl font-bold mb-4 italic">“</div>
                                <p className="text-2xl text-white font-medium leading-relaxed mb-8">
                                    We don&apos;t just run ads; we build digital ecosystems that scale.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-vayroOrange/20 border border-vayroOrange/50" />
                                    <div>
                                        <div className="text-white font-bold">Vayro Leadership</div>
                                        <div className="text-gray-400 text-sm">Marketing Strategy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
