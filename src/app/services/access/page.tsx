'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, KeyIcon, ClockIcon, ShieldCheckIcon, FingerPrintIcon } from '@heroicons/react/24/outline';

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

export default function AccessServices() {
  // Access features data
  const accessFeatures = [
    {
      title: "24/7 Building Access",
      description: "Secure access to the building at any time, day or night, giving you complete flexibility to work on your schedule.",
      icon: <ClockIcon className="h-6 w-6" />
    },
    {
      title: "Key Card Entry System",
      description: "Modern electronic key card system for secure and convenient access to the building and your designated areas.",
      icon: <KeyIcon className="h-6 w-6" />
    },
    {
      title: "Secure Door Systems",
      description: "All entrances are secured with advanced locking mechanisms to ensure only authorized personnel can enter.",
      icon: <ShieldCheckIcon className="h-6 w-6" />
    },
    {
      title: "Biometric Options",
      description: "Optional biometric access control for areas requiring enhanced security measures.",
      icon: <FingerPrintIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyan-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-pixabay-261047.jpg"
            alt="SBC House Secure Access"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Secure Building Access</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Modern, secure, and convenient building access systems for your business.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure and Flexible Access</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SBC House, we provide state-of-the-art building access systems that combine security with convenience. Our modern access control solutions ensure that your business premises remain secure while allowing authorized personnel to enter whenever needed.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  With 24/7 access available, you can work on your schedule, whether that's traditional business hours or late into the evening. Our secure systems use the latest technology to protect your business assets while providing the flexibility you need to operate efficiently.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Electronic key card access system",
                    "24/7 building access for tenants",
                    "Monitored security systems",
                    "Visitor management protocols",
                    "Emergency access procedures"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 mt-0.5">
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
                  src="/media/Stock photos/pexels-pixabay-261047.jpg"
                  alt="SBC House Secure Access"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Access Features</h2>
              <p className="text-lg text-gray-600">
                Our building access systems offer a range of features designed to provide security and convenience.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessFeatures.map((feature, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                  <div className="p-3 bg-cyan-50 rounded-xl w-fit mb-6 text-cyan-600">
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
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Access System Works</h2>
              <p className="text-lg text-gray-600">
                A simple yet secure process for accessing the building and your business space.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Receive Access Credentials</h3>
                <p className="text-gray-600">
                  Upon becoming a tenant, you'll receive personalized key cards for each team member who needs access. Each card is programmed with specific access permissions based on your requirements.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Access the Building</h3>
                <p className="text-gray-600">
                  Simply present your key card to the reader at the building entrance. The system verifies your credentials instantly, granting access if authorized. Our main entrance is equipped with an intercom system for visitors.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Internal Access Control</h3>
                <p className="text-gray-600">
                  Your key card also grants access to your specific office space and any common areas you're authorized to use. The system maintains logs of access for security purposes and can be updated as your needs change.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <Image
                  src="/media/Stock photos/pexels-pavel-danilyuk-8112185.jpg"
                  alt="SBC House Security Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhanced Security Measures</h2>
                <p className="text-lg text-gray-600 mb-8">
                  In addition to our access control systems, SBC House implements comprehensive security measures to protect your business and give you peace of mind.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">CCTV Monitoring</h3>
                    <p className="text-gray-600">
                      Security cameras throughout common areas and entrances provide continuous monitoring, deterring unauthorized access and providing evidence if incidents occur.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Alarm Systems</h3>
                    <p className="text-gray-600">
                      The building is equipped with modern alarm systems that are monitored 24/7, triggering immediate responses to any security breaches.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visitor Management</h3>
                    <p className="text-gray-600">
                      Our reception area manages visitor access during business hours, ensuring all guests are properly identified and authorized before entering.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Access Logs</h3>
                    <p className="text-gray-600">
                      Our system maintains detailed access logs, allowing you to review who entered your space and when, providing accountability and security.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Access Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Access Options</h2>
              <p className="text-lg text-gray-600">
                We offer flexible access options to suit different business needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Business Hours</h3>
                <p className="text-gray-600 mb-6">
                  Access during regular business hours (Monday to Friday, 8:00 AM to 6:00 PM) is included with all tenancy agreements.
                </p>
                <ul className="space-y-2">
                  {["Reception support during business hours", "Visitor management", "Standard security protocols", "Basic access card system"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute top-0 right-0 bg-cyan-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl font-medium text-sm">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Hours Access</h3>
                <p className="text-gray-600 mb-6">
                  Extended access hours from 6:00 AM to 10:00 PM, seven days a week, providing flexibility for businesses with longer operating hours.
                </p>
                <ul className="space-y-2">
                  {["All standard features", "Weekend access", "Early morning/evening access", "Additional security monitoring", "Multiple access cards"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Unlimited Access</h3>
                <p className="text-gray-600 mb-6">
                  Complete round-the-clock access to the building and your office space, ideal for businesses that operate outside traditional hours.
                </p>
                <ul className="space-y-2">
                  {["All extended features", "Unrestricted 24/7 access", "Enhanced security protocols", "Biometric access options", "Customized access settings", "Priority support"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about our building access and security systems.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What happens if I lose my access card?</h3>
                <p className="text-gray-600">
                  If you lose your access card, notify our administration immediately. We'll deactivate the lost card to prevent unauthorized use and issue a replacement card. A small fee may apply for replacement cards.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can I get additional access cards for my team?</h3>
                <p className="text-gray-600">
                  Yes, additional access cards can be issued for your team members. Each card can be programmed with specific access permissions. Please contact administration to request additional cards.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How do visitors access the building?</h3>
                <p className="text-gray-600">
                  During business hours, visitors check in at reception. After hours, visitors must be pre-authorized and can use the intercom system at the main entrance. The tenant will be notified to approve access.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Can I upgrade my access option later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade your access option at any time. Please contact our administration office to discuss changing your access level. Changes typically take effect within 1-2 business days.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Secure Access for Your Business</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to learn more about our building access systems and security measures, or to arrange a tour of our facilities.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-cyan-900 font-medium rounded-md hover:bg-cyan-50 transition-colors duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 