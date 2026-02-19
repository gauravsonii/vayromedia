import React from 'react';

const services = [
    { title: "Brand Building", desc: "Creating unique and memorable identities." },
    { title: "Digital Marketing", desc: "Comprehensive online presence strategies." },
    { title: "Graphic Design", desc: "Visual storytelling for your brand." },
    { title: "Video Editing & Production", desc: "High-quality content for all platforms." },
    { title: "Marketing Strategy", desc: "Data-driven plans for scalable growth." },
    { title: "Social Media & Influencer Marketing", desc: "Engaging communities and building authority." },
    { title: "Meta & Google Ads", desc: "Performance-driven paid advertising." },
    { title: "Measurable Growth", desc: "Analytics and ROI focused execution." }
];

const Services = () => {
    return (
        <section id="services" className="py-24 overflow-hidden relative bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-20 fade-in relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-heading italic">
                            Elevate Your <br />
                            <span className="text-vayroOrange italic">Digital Footprint.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed italic font-sans italic">
                            Unlock your brand&apos;s full potential with our high-impact marketing solutions engineered for the modern digital landscape.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 border-t border-white/10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`group relative p-10 h-[320px] border-b border-r border-white/10 transition-all duration-700 overflow-hidden fade-in delay-${index * 100} hover:bg-white/5`}
                    >
                        <div className="text-xs font-black text-vayroOrange mb-4 uppercase tracking-widest font-heading group-hover:text-white">
                            {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <h3 className="text-xl font-black text-white mb-4 font-heading group-hover:text-white leading-tight">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-sans group-hover:text-white/70 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
