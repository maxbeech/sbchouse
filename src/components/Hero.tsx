'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';

// Hero image paths
const heroMedia = [
  '/media/home_hero_slider/SBC-Office-pic-1-1.jpg',
  '/media/home_hero_slider/green-area-light.jpg',
  '/media/home_hero_slider/Reception.jpg',
  '/media/home_hero_slider/cafe-sbc-house.jpg',
];

const Hero = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen overflow-hidden" ref={scrollRef}>
      {/* Media slider */}
      <div className="absolute inset-0">
        {isClient && (
          <>
            {/* Current media with fade effect */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroMedia[currentMediaIndex]}
                  alt="SBC House commercial property"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Dark overlay with pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 mix-blend-multiply" />
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </>
        )}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Business Space Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              SBC House provides flexible, high-specification commercial property solutions including offices, storage, and workshop units
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#4C9D43] text-white font-medium rounded-md hover:bg-[#3E8035] transition-colors duration-300 text-center"
              >
                Request a Quote
              </Link>
              <Link 
                href="/facilities" 
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-colors duration-300 text-center"
              >
                Explore Our Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.button
          onClick={handleScrollDown}
          className="text-white bg-transparent p-2 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <BsArrowDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">Established 1987</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">24/7 Access</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center"
            >
              <span className="text-white font-semibold text-sm">High Specification</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 