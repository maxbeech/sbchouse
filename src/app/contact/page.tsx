'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

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

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/Reception.jpg"
            alt="SBC House Reception"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Our friendly, professional team is here to help with all your business space requirements.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Card */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <MapPinIcon className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Address</h3>
                        <address className="mt-1 text-gray-600 not-italic">
                          SBC House<br />
                          Restmor Way<br />
                          Wallington<br />
                          SM6 7AH
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <PhoneIcon className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="tel:02082552040" className="hover:text-green-600 transition-colors">
                            020 8255 2040
                          </a>
                        </p>
                        <p className="mt-1 text-gray-600">
                          Fax: 020 8773 0406
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <EnvelopeIcon className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="mailto:info@sbc-house.com" className="hover:text-green-600 transition-colors">
                            info@sbc-house.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <ClockIcon className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <p className="mt-1 text-gray-600">
                          Monday–Friday: 08:00–17:30
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-8 py-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Transport Links</h3>
                  <p className="text-gray-600 mb-4">
                    Conveniently located just 5 minutes from Hackbridge railway station (20 minutes to Victoria/London Bridge). Easily accessible from London, Croydon, Sutton and the M25/M23.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Contact Form */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#4C9D43] text-white font-medium rounded-md hover:bg-[#3E8035] transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Location</h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="h-96 bg-gray-300 rounded-xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.4876771416586!2d-0.15342518423869!3d51.37691297961219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760753404a95cd%3A0xab7c27e2072b650!2sSBC%20House!5e0!3m2!1sen!2suk!4v1623243719087!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Business Space?</h2>
              <p className="text-white/90 text-lg mb-8">
                Whether you need an office, storage unit, workshop, or virtual office - we have the perfect solution for your business needs.
              </p>
              <Link 
                href="/facilities" 
                className="px-8 py-3 bg-white text-green-900 font-medium rounded-md hover:bg-green-50 transition-colors duration-300 inline-block"
              >
                Explore Facilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 