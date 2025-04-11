'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingOffice2Icon, ArchiveBoxIcon, ComputerDesktopIcon, BuildingStorefrontIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Feature card component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="p-3 bg-green-50 rounded-xl w-fit mb-4 text-[#4C9D43]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

// Facility card component
interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
  delay?: number;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ 
  title, 
  description, 
  image, 
  link, 
  icon, 
  delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up" fullWidth>
      <div className="group relative overflow-hidden rounded-xl shadow-lg h-full">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
          <div className="p-3 bg-[#4C9D43] bg-opacity-90 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="mb-6 text-gray-200">{description}</p>
          <Link 
            href={link} 
            className="inline-flex items-center font-medium text-white border-b-2 border-[#4C9D43] pb-1 w-fit group-hover:border-white transition-all duration-300"
          >
            Learn more 
            <motion.span 
              className="ml-1 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRightIcon className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

const FacilitiesPage = () => {
  // Common amenities data
  const commonAmenities = [
    {
      title: "24/7 Access",
      description: "Secure access to your space whenever you need it, day or night.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "High-Speed Internet",
      description: "Fast, reliable connectivity throughout all our facilities.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
    },
    {
      title: "Security Systems",
      description: "State-of-the-art security with CCTV monitoring and alarm systems.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Parking",
      description: "Ample on-site parking for you and your visitors.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
    }
  ];

  // Facilities data
  const facilities = [
    {
      title: "Offices",
      description: "High-specification office suites designed for productivity and professionalism.",
      image: "/media/SBC House specific photos/SBC-Office-pic-1-1.jpg",
      link: "/facilities/offices",
      icon: <BuildingOffice2Icon className="h-6 w-6 text-white" />,
    },
    {
      title: "Storage Units",
      description: "Secure, accessible storage solutions for businesses of all sizes.",
      image: "/media/SBC House specific photos/image5.jpg",
      link: "/facilities/storage",
      icon: <ArchiveBoxIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Virtual Office",
      description: "Professional business address and services without the physical space.",
      image: "/media/SBC House specific photos/Reception.jpg",
      link: "/facilities/virtual-office",
      icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
    },
    {
      title: "Workshop Units",
      description: "Versatile workshop spaces ideal for light industrial and creative businesses.",
      image: "/media/SBC House specific photos/meeting-room-2.jpg",
      link: "/facilities/workshop",
      icon: <BuildingStorefrontIcon className="h-6 w-6 text-white" />,
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/RIVERSIDE.jpg"
            alt="SBC House Facilities"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Facilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Flexible, high-quality spaces designed for your business success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Spaces Tailored to Your Business Needs</h2>
              <p className="text-lg text-gray-600">
                At SBC House, we understand that every business has unique space requirements. 
                That's why we offer a diverse range of facilities, from premium office suites to 
                secure storage units, all designed to adapt to your changing needs.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {facilities.map((facility, index) => (
              <FacilityCard
                key={facility.title}
                title={facility.title}
                description={facility.description}
                image={facility.image}
                link={facility.link}
                icon={facility.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <FadeIn delay={0.3}>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                Not sure which option is right for you? Contact us for personalized advice on the 
                best solution for your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common Amenities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Amenities</h2>
              <p className="text-lg text-gray-600">
                All our facilities come with these standard features to ensure comfort, 
                security, and convenience for your business.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonAmenities.map((amenity, index) => (
              <FeatureCard
                key={amenity.title}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our facilities.
              </p>
            </FadeIn>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What are your opening hours?</h3>
                  <p className="text-gray-600">
                    Our reception is open Monday to Friday, 8:00am to 5:30pm. However, tenants have 24/7 access to their rented spaces via secure electronic key fobs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Do you offer short-term rentals?</h3>
                  <p className="text-gray-600">
                    Yes, we offer flexible rental terms starting from just one month, allowing you to adapt as your business needs change.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What's included in the rental fee?</h3>
                  <p className="text-gray-600">
                    Our all-inclusive pricing covers business rates, utilities (heating and electricity), building insurance, maintenance, and 24/7 security. There are no hidden costs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Is parking available?</h3>
                  <p className="text-gray-600">
                    Yes, we provide ample on-site parking for tenants and visitors at no additional cost.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/media/SBC House specific photos/green-area-light.jpg" 
            alt="SBC House exterior"
            fill
            className="object-cover brightness-[0.15]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Our Facilities?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Book a viewing or request more information about our spaces today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage; 