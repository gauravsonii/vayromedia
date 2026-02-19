import React from 'react';
import Image from 'next/image';

const partners = [
    {
        name: 'Gwalior DAO',
        image: '/partners/gwaliordao.png',
        link: 'https://gwaliordao.vercel.app/',
        hoverClass: 'hover:bg-black',
    },
    {
        name: 'Aurvyx',
        image: '/partners/aurvyx.png',
        link: 'https://auradex.vercel.app/',
        hoverClass: 'hover:bg-red-600',
    },
    {
        name: 'Unseen Gwalior',
        image: '/partners/unseengwalior.png',
        link: 'https://www.instagram.com/unseen_gwalior',
        hoverClass: 'hover:bg-gradient-to-br hover:from-green-400 hover:to-yellow-400',
    },
    {
        name: 'Gwalior Glory',
        image: '/partners/gwaliorglory.png',
        link: 'https://www.instagram.com/gwalior_glory_/',
        hoverClass: 'hover:bg-pink-500',
    },
];

const Partners = () => {
    return (
        <section id="support" className="py-24 overflow-hidden relative bg-black">
            <div className="max-w-7xl mx-auto px-6 mb-16 fade-in text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight font-heading uppercase italic">
                    Our Support System
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans italic">
                    Empowering our partners with strategic digital excellence and unwavering collaborative growth.
                </p>
            </div>

            <div className="relative fade-in delay-200 z-10">
                <div className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
                    <div className="flex flex-nowrap px-6 gap-4">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-none w-72 h-44 rounded-[2.5rem] overflow-hidden snap-center flex items-center justify-center p-8 bg-[#0a0a0a]"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
