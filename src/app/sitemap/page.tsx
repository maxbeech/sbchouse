'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// Animation component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = ""
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Define the sitemap structure
const sitemapData = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Facilities', path: '/facilities' },
      { name: 'SBC Café', path: '/cafe' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ]
  },
  {
    title: 'Facilities',
    links: [
      { name: 'Offices', path: '/facilities/offices' },
      { name: 'Storage Units', path: '/facilities/storage' },
      { name: 'Virtual Office', path: '/facilities/virtual-office' },
      { name: 'Workshop Units', path: '/facilities/workshop' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'All Services', path: '/services' },
      { name: 'Secretarial Support', path: '/services/secretarial-support' },
      { name: 'Call Handling', path: '/services/call-handling' },
      { name: 'Meeting Rooms', path: '/services/meeting-rooms' },
      { name: 'Printing Services', path: '/services/printing' },
      { name: '24/7 Access', path: '/services/access' },
      { name: 'Security', path: '/services/security' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Sitemap', path: '/sitemap' },
    ]
  }
];

export default function Sitemap() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/green-area-light.jpg"
            alt="SBC House Green Area"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sitemap</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              A complete map of all pages on the SBC House website.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Sitemap Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {sitemapData.map((section, sectionIndex) => (
              <FadeIn key={sectionIndex} delay={0.1 * sectionIndex} direction="up">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.path} 
                          className="group flex items-center text-gray-700 hover:text-[#4C9D43] transition-colors"
                        >
                          <ChevronRightIcon className="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#4C9D43]" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* XML Sitemap Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">XML Sitemap</h2>
              <p className="text-gray-600 mb-6">
                For search engines and web crawlers, we provide an XML sitemap that lists all pages on our site.
              </p>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-[#4C9D43] text-[#4C9D43] hover:bg-[#4C9D43] hover:text-white font-medium rounded-md transition-colors duration-300"
              >
                View XML Sitemap
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 