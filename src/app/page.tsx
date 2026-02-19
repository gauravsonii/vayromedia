'use client';

import { useEffect } from 'react';
import Navbar from './components/Vayro/Navbar';
import Hero from './components/Vayro/Hero';
import About from './components/Vayro/About';
import Services from './components/Vayro/Services';
import Partners from './components/Vayro/Partners';
import WhyChooseUs from './components/Vayro/WhyChooseUs';
import ContactCTA from './components/Vayro/ContactCTA';
import Footer from './components/Vayro/Footer';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('fade-in');
          target.style.opacity = ''; // Remove manual opacity
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      // If the browser doesn't support IntersectionObserver, show immediately
      if (!window.IntersectionObserver) {
        htmlEl.style.opacity = '1';
        return;
      }

      htmlEl.style.opacity = '0';
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white min-h-screen selection:bg-vayroOrange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  );
}
