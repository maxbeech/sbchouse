'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, PhoneIcon, ChatBubbleLeftRightIcon, ClockIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

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

export default function CallHandling() {
  // Features
  const features = [
    {
      title: "Professional Call Answering",
      description: "Our professional receptionists answer all your calls in your company name, ensuring a consistent and professional image.",
      icon: <PhoneIcon className="h-6 w-6" />
    },
    {
      title: "Message Forwarding",
      description: "We promptly forward messages to you via email, SMS, or direct call transfer, ensuring you never miss important information.",
      icon: <ArrowsRightLeftIcon className="h-6 w-6" />
    },
    {
      title: "Call Screening",
      description: "Our team can screen calls according to your criteria, prioritizing important calls and minimizing disruptions.",
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />
    },
    {
      title: "Extended Hours Coverage",
      description: "Benefit from call handling outside normal business hours, ensuring you never miss important calls.",
      icon: <ClockIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-indigo-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg"
            alt="Professional Call Handling"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Call Handling</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Never miss an important call with our professional telephone answering service.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Make Every Call Count</h2>
                <p className="text-lg text-gray-600 mb-6">
                  First impressions matter. When potential clients call your business, their experience can determine whether they choose your services or move on to a competitor. Our professional call handling service ensures every caller receives a prompt, professional response.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're in meetings, working remotely, or focusing on other aspects of your business, our experienced team acts as an extension of your company, answering calls in your company name and handling inquiries with the professionalism your business deserves.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Professional call answering in your company name",
                    "Prompt message taking and forwarding",
                    "Call screening based on your requirements",
                    "Appointment scheduling and management",
                    "Overflow call handling during busy periods"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
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
                  alt="Professional call handling services"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Call Handling Services</h2>
              <p className="text-lg text-gray-600">
                We offer a range of call handling services to ensure your business never misses an important call.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div className="p-3 bg-indigo-50 rounded-xl w-fit mb-6 text-indigo-600">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-lg text-gray-600">
                Our call handling service is designed to be seamless and efficient, providing your callers with a professional experience.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Call Reception</h3>
                <p className="text-gray-600">
                  When someone calls your business number, our professional receptionists answer promptly in your company name, creating a seamless experience for your callers.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Message Taking</h3>
                <p className="text-gray-600">
                  Our team accurately records caller details and messages, ensuring all important information is captured. We can also screen calls based on your criteria.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Message Delivery</h3>
                <p className="text-gray-600">
                  Messages are promptly delivered to you via your preferred method—email, SMS, or direct call transfer—ensuring you always stay informed and can respond appropriately.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <Image
                  src="/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg"
                  alt="Professional telephone receptionist"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Call Handling</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our call handling service provides numerous advantages for businesses of all sizes.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Never Miss Important Calls</h3>
                    <p className="text-gray-600">
                      Ensure every call is answered professionally, even when you're unavailable, preventing missed business opportunities.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Image</h3>
                    <p className="text-gray-600">
                      Present a professional, established business image with consistent call handling, enhancing client confidence.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective Solution</h3>
                    <p className="text-gray-600">
                      Enjoy the benefits of a professional receptionist without the cost of a full-time employee. Pay only for the service you need.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Focus on Your Core Business</h3>
                    <p className="text-gray-600">
                      Concentrate on your primary business activities without interruptions, knowing your calls are being handled professionally.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Call Handling Packages</h2>
              <p className="text-lg text-gray-600">
                Choose the call handling package that best suits your business needs and budget.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Package</h3>
                  <p className="text-gray-600 mb-4">For small businesses and solo entrepreneurs</p>
                  <p className="text-3xl font-bold text-gray-900">Starting at £99/mo</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "50 calls per month",
                      "Call answering in your company name",
                      "Message taking",
                      "Email message delivery",
                      "Monday to Friday, 9am-5pm coverage"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Package</h3>
                  <p className="text-gray-600 mb-4">For growing businesses with higher call volumes</p>
                  <p className="text-3xl font-bold text-gray-900">Starting at £199/mo</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "150 calls per month",
                      "Call answering in your company name",
                      "Detailed message taking",
                      "Email & SMS message delivery",
                      "Call screening",
                      "Monday to Friday, 8am-6pm coverage",
                      "Basic appointment scheduling"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Package</h3>
                  <p className="text-gray-600 mb-4">For established businesses needing comprehensive coverage</p>
                  <p className="text-3xl font-bold text-gray-900">Starting at £349/mo</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "Unlimited calls",
                      "Priority call answering",
                      "Comprehensive message taking",
                      "Email, SMS & direct transfer options",
                      "Advanced call screening",
                      "Extended hours coverage (8am-8pm)",
                      "Weekend coverage available",
                      "Full appointment scheduling",
                      "Custom call scripts",
                      "Monthly service reports"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">
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
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100">
                    <Image
                      src="/media/Stock photos/pexels-lexovertoom-1109543.jpg"
                      alt="Business client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <svg className="h-8 w-8 text-indigo-400 mb-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-600 italic mb-6">
                    "The call handling service from SBC House has transformed our business. We never miss an important call now, and our clients always comment on how professional our telephone service is. It's like having our own receptionist at a fraction of the cost."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Director, Johnson & Partners Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Never Miss Another Important Call</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to discuss how our professional call handling service can benefit your business and ensure you never miss an opportunity.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-indigo-900 font-medium rounded-md hover:bg-indigo-50 transition-colors duration-300 inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 