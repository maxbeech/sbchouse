'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, DocumentTextIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

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

export default function SecretarialSupport() {
  // Features
  const features = [
    {
      title: "Administrative Support",
      description: "General administrative tasks including data entry, correspondence, and file management.",
      icon: <DocumentTextIcon className="h-6 w-6" />
    },
    {
      title: "Email Management",
      description: "Professional handling of your email correspondence, ensuring timely responses and organization.",
      icon: <EnvelopeIcon className="h-6 w-6" />
    },
    {
      title: "Document Preparation",
      description: "Creation and formatting of professional documents, presentations, and reports.",
      icon: <DocumentTextIcon className="h-6 w-6" />
    },
    {
      title: "Communication Services",
      description: "Professional communication with clients and stakeholders on your behalf when needed.",
      icon: <PhoneIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
            alt="Secretarial Support Services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Secretarial Support</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Professional secretarial and administrative support to help your business operate efficiently.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Administrative Support</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SBC House, we understand that running a business requires significant administrative work that can take time away from your core activities. Our professional secretarial support services provide the administrative assistance you need to keep your business running smoothly.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you need occasional help with specific tasks or regular ongoing support, our experienced team can handle your administrative needs with efficiency and professionalism.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Professional document preparation and formatting",
                    "Email and correspondence management",
                    "Data entry and database maintenance",
                    "File organization and management",
                    "Calendar and scheduling assistance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
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
                  src="/media/Stock photos/pexels-mohammad-danish-290641-891059.jpg"
                  alt="Professional secretarial services"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Secretarial Services</h2>
              <p className="text-lg text-gray-600">
                Our comprehensive secretarial support services can be tailored to meet your specific business needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="p-3 bg-blue-50 rounded-xl w-fit mb-6 text-blue-600">
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
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Secretarial Support</h2>
              <p className="text-lg text-gray-600">
                Let our professional team handle your administrative tasks while you focus on growing your business.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Save Time</h3>
                <p className="text-gray-600">
                  Free up your valuable time by delegating administrative tasks to our professional team, allowing you to focus on your core business activities and growth.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reduce Costs</h3>
                <p className="text-gray-600">
                  Our secretarial services are more cost-effective than hiring full-time administrative staff, with no costs for equipment, training, benefits, or office space.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Representation</h3>
                <p className="text-gray-600">
                  Ensure your business is represented professionally at all times with experienced administrative support handling your communications and documentation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Service Options</h2>
              <p className="text-lg text-gray-600">
                Choose from our range of service packages or request a custom solution tailored to your needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Support</h3>
                  <p className="text-gray-600 mb-4">Perfect for occasional assistance</p>
                  <p className="text-3xl font-bold text-gray-900">Pay Per Use</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "Document preparation and formatting",
                      "Basic email management",
                      "Data entry services",
                      "File organization",
                      "Priority based on availability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-white border border-[#4C9D43] text-[#4C9D43] hover:bg-[#4C9D43] hover:text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md border-2 border-[#4C9D43] overflow-hidden h-full flex flex-col relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#4C9D43] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
                <div className="p-8 bg-green-50 border-b border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Support</h3>
                  <p className="text-gray-600 mb-4">Ideal for regular ongoing support</p>
                  <p className="text-3xl font-bold text-gray-900">Monthly Package</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "All Basic Support services",
                      "Dedicated support hours each month",
                      "Comprehensive email management",
                      "Calendar and scheduling assistance",
                      "Basic correspondence handling",
                      "Guaranteed response times"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-green-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-[#4C9D43] text-white hover:bg-[#3E8035] font-medium rounded-md transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Support</h3>
                  <p className="text-gray-600 mb-4">Complete administrative assistance</p>
                  <p className="text-3xl font-bold text-gray-900">Custom Quote</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "All Standard Support services",
                      "Dedicated administrative assistant",
                      "Priority response times",
                      "Complex document preparation",
                      "Meeting and event coordination",
                      "Comprehensive correspondence management",
                      "Customized administrative solutions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-white border border-[#4C9D43] text-[#4C9D43] hover:bg-[#4C9D43] hover:text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to discuss how our secretarial support services can help your business operate more efficiently.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-blue-50 transition-colors duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 