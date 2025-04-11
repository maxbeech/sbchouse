'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  PhoneIcon, 
  VideoCameraIcon, 
  PrinterIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

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

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  imageUrl: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 group hover:translate-y-[-5px]">
        <div className="relative h-48">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-4 left-4">
              <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-900 w-fit">
                {icon}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <Link 
            href={link} 
            className="mt-4 inline-flex items-center font-medium text-[#4C9D43] group-hover:text-[#3E8035]"
          >
            Learn more 
            <span className="ml-1 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Services() {
  // Service data
  const services = [
    {
      title: "Secretarial Support",
      description: "Professional administrative assistance, document preparation, and email management to help your business operate efficiently.",
      icon: <DocumentTextIcon className="h-5 w-5" />,
      imageUrl: "/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg",
      link: "/services/secretarial-support"
    },
    {
      title: "Call Handling",
      description: "Professional telephone answering service ensuring your calls are handled promptly and professionally at all times.",
      icon: <PhoneIcon className="h-5 w-5" />,
      imageUrl: "/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg",
      link: "/services/call-handling"
    },
    {
      title: "Meeting Rooms",
      description: "Modern, fully-equipped meeting rooms available by the hour, half-day, or full day to host your business meetings.",
      icon: <VideoCameraIcon className="h-5 w-5" />,
      imageUrl: "/media/SBC House specific photos/MEETING-ROOM.jpg",
      link: "/services/meeting-rooms"
    },
    {
      title: "Printing Services",
      description: "Comprehensive printing, copying, and scanning services for all your business documentation needs.",
      icon: <PrinterIcon className="h-5 w-5" />,
      imageUrl: "/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg",
      link: "/services/printing"
    },
    {
      title: "24/7 Access",
      description: "Round-the-clock access to your office, storage unit, or workshop, ensuring you can work on your schedule.",
      icon: <ClockIcon className="h-5 w-5" />,
      imageUrl: "/media/SBC House specific photos/Reception.jpg",
      link: "/services/access"
    },
    {
      title: "Security",
      description: "State-of-the-art security systems and protocols to keep your business and assets safe at all times.",
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      imageUrl: "/media/SBC House specific photos/Reception.jpg",
      link: "/services/security"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/meeting-room-2.jpg"
            alt="SBC House Services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Comprehensive support services to help your business thrive at SBC House.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Business Support</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SBC House, we go beyond providing exceptional workspace solutions. Our range of business services is designed to support your operations, enhance productivity, and create a professional environment for your business.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From professional call handling and secretarial support to modern meeting rooms and printing services, we provide everything your business needs to operate efficiently and professionally.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Professional secretarial support",
                    "Expert call handling",
                    "Modern meeting facilities",
                    "Comprehensive printing services",
                    "24/7 secure access",
                    "State-of-the-art security"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4C9D43] mr-3"></div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/SBC House specific photos/Reception.jpg"
                  alt="SBC House Services"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600">
                Explore our range of business services designed to support your operations and help your business thrive.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                link={service.link}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-[#4C9D43]/5 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-2/5">
                  <svg className="h-10 w-10 text-[#4C9D43] mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl text-gray-800 mb-6">
                    "The services at SBC House have been instrumental in our business growth. The professional call handling and secretarial support have allowed us to focus on our core business while maintaining a highly professional image. Their meeting rooms are perfect for client presentations."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Michael Davies</p>
                    <p className="text-gray-600">CEO, Tech Solutions UK</p>
                  </div>
                </div>
                <div className="w-full md:w-3/5 h-72 md:h-96 relative rounded-xl overflow-hidden">
                  <Image
                    src="/media/SBC House specific photos/meeting-room-2.jpg"
                    alt="SBC House Meeting Room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Business Operations?</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to discuss how our comprehensive business services can support your operations and help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-[#4C9D43] text-white font-medium rounded-md hover:bg-[#3E8035] transition-colors duration-300 text-center"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/facilities" 
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-colors duration-300 text-center"
                >
                  Explore Facilities
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 