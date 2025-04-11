'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ShieldCheckIcon, LockClosedIcon, EyeIcon, BellAlertIcon } from '@heroicons/react/24/outline';

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

export default function SecurityServices() {
  // Security features data
  const securityFeatures = [
    {
      title: "CCTV Monitoring",
      description: "State-of-the-art CCTV cameras strategically placed throughout the premises for comprehensive surveillance.",
      icon: <EyeIcon className="h-6 w-6" />
    },
    {
      title: "Alarm Systems",
      description: "Modern alarm systems with 24/7 monitoring for immediate response to any security incidents.",
      icon: <BellAlertIcon className="h-6 w-6" />
    },
    {
      title: "Access Control",
      description: "Advanced access control systems to ensure only authorized personnel can enter specific areas.",
      icon: <LockClosedIcon className="h-6 w-6" />
    },
    {
      title: "Security Protocols",
      description: "Comprehensive security protocols and procedures designed to protect your business and assets.",
      icon: <ShieldCheckIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
            alt="SBC House Security Systems"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Security Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Comprehensive security solutions to protect your business assets and provide peace of mind.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Security Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SBC House, we prioritize the security of your business and assets. Our comprehensive security systems are designed to provide round-the-clock protection, giving you peace of mind that your business space is safe and secure at all times.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our integrated security solutions combine state-of-the-art technology with proven security protocols to create a safe environment for your business. From CCTV monitoring to advanced access control systems, we ensure that your business premises remain protected against unauthorized access and potential security threats.
                </p>
                
                <div className="space-y-4">
                  {[
                    "24/7 CCTV surveillance coverage",
                    "Modern alarm systems with continuous monitoring",
                    "Secure building access controls",
                    "Professional security management",
                    "Immediate response protocols for security incidents"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mt-0.5">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
                  alt="SBC House Security Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Features</h2>
              <p className="text-lg text-gray-600">
                Our comprehensive security solutions include a range of features designed to protect your business.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                  <div className="p-3 bg-slate-50 rounded-xl w-fit mb-6 text-slate-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CCTV & Monitoring */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg"
                  alt="SBC House CCTV Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CCTV & Monitoring Systems</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our CCTV surveillance system provides comprehensive coverage of the entire premises, including entrances, exits, hallways, and common areas. The system is monitored 24/7, allowing for immediate response to any security incidents.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  All footage is stored securely and can be accessed if needed for security investigations. Our monitoring systems are designed to be unobtrusive while providing maximum security coverage, ensuring your business operates in a safe environment without feeling constantly under surveillance.
                </p>
                
                <div className="space-y-4">
                  {[
                    "HD quality video surveillance",
                    "Strategically placed cameras for optimal coverage",
                    "24/7 monitoring for immediate response",
                    "Secure footage storage",
                    "Regular system maintenance and updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mt-0.5">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Alarm Systems */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Alarm Systems</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our advanced alarm systems provide an additional layer of security for your business. These systems are connected to our central monitoring station, which is staffed 24/7 to respond to any security alerts.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  In the event of an unauthorized entry or security breach, the alarm system immediately notifies our security team, who can take appropriate action. This may include notifying the relevant authorities or dispatching security personnel to investigate, depending on the nature of the alert.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Modern motion detection systems",
                    "Door and window sensors",
                    "Immediate alert notifications",
                    "Integration with CCTV systems",
                    "Customizable security zones"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mt-0.5">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/Stock photos/pexels-lexovertoom-1109543.jpg"
                  alt="SBC House Alarm Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about our security systems and protocols.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <FadeIn delay={0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Are the security systems active 24/7?</h3>
                  <p className="text-gray-600">
                    Yes, all our security systems, including CCTV cameras and alarm systems, are active and monitored 24 hours a day, 7 days a week, ensuring your business is protected at all times.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Who has access to the security footage?</h3>
                  <p className="text-gray-600">
                    Access to security footage is strictly controlled and limited to authorized security personnel. Footage is only reviewed in the event of a security incident or upon specific request from a tenant with the appropriate authorization.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can I request additional security measures for my specific business space?</h3>
                  <p className="text-gray-600">
                    Yes, we understand that different businesses have different security requirements. We can work with you to implement additional security measures specific to your business needs, such as additional cameras or specialized access controls.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What happens in the event of a power outage?</h3>
                  <p className="text-gray-600">
                    Our security systems are equipped with backup power supplies that activate automatically in the event of a power outage. This ensures that security monitoring continues uninterrupted, keeping your business protected even during unexpected power failures.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-mohammad-danish-290641-891059.jpg"
            alt="SBC House Security"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">Secure Your Business Today</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Contact us today to learn more about our comprehensive security systems and how they can protect your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4C9D43] hover:bg-[#3E8035] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C9D43] transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 