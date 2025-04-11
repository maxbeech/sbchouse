'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
        <div className="p-3 bg-green-50 rounded-xl w-fit mb-4 text-[#4C9D43]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

// Gallery component with lightbox
interface GalleryProps {
  images: { src: string; alt: string; }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <FadeIn key={index} delay={0.1 * index} direction="up">
            <div 
              className="relative h-64 cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-4xl p-2"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2"
            onClick={goToPrevious}
          >
            &#10094;
          </button>
          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              fill
              className="object-contain"
            />
          </div>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2"
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

// Office option component
interface OfficeOptionProps {
  title: string;
  size: string;
  priceRange: string;
  features: string[];
  bestFor: string;
  delay?: number;
}

const OfficeOption: React.FC<OfficeOptionProps> = ({ 
  title, 
  size, 
  priceRange, 
  features, 
  bestFor,
  delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-[#4C9D43] font-semibold mb-4">{size}</div>
        <div className="text-xl font-bold text-gray-900 mb-6">{priceRange}</div>
        
        <div className="flex-grow mb-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-[#4C9D43] mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-gray-700 font-medium">Best for: {bestFor}</p>
        </div>
        
        <Link
          href="/contact"
          className="mt-6 inline-flex justify-center items-center px-6 py-3 text-white bg-[#4C9D43] hover:bg-[#3E8035] rounded-md transition-colors duration-300"
        >
          Enquire Now
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </FadeIn>
  );
};

const OfficesPage = () => {
  // Office features
  const officeFeatures = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: "All-Inclusive Pricing",
      description: "Business rates, utilities, maintenance, and building insurance all included in your monthly rental fee."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: "Secure 24/7 Access",
      description: "Electronic key fob entry system allowing you and your team to access your office at any time."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
      title: "High-Speed Internet",
      description: "Dedicated high-speed internet connection ensuring your business stays connected at all times."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Flexible Terms",
      description: "Short-term and long-term rental agreements available, allowing your space to adapt as your business grows."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Meeting Rooms",
      description: "Access to professional meeting rooms with modern amenities for client presentations and team meetings."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: "Kitchen Facilities",
      description: "Modern kitchen areas with tea and coffee making facilities to keep your team refreshed."
    }
  ];

  // Office options
  const officeOptions = [
    {
      title: "Compact Office",
      size: "100-150 sq ft",
      priceRange: "From £350 per month",
      features: [
        "Suitable for 1-2 people",
        "All utilities included",
        "High-speed internet",
        "24/7 access",
        "Use of meeting rooms (additional cost)",
        "Kitchen facilities"
      ],
      bestFor: "Small startups and solo entrepreneurs"
    },
    {
      title: "Standard Office",
      size: "150-250 sq ft",
      priceRange: "From £550 per month",
      features: [
        "Suitable for 2-4 people",
        "All utilities included",
        "High-speed internet",
        "24/7 access",
        "2 hours free meeting room usage per month",
        "Kitchen facilities"
      ],
      bestFor: "Small teams and growing businesses"
    },
    {
      title: "Executive Office",
      size: "250-400 sq ft",
      priceRange: "From £850 per month",
      features: [
        "Suitable for 4-8 people",
        "All utilities included",
        "High-speed internet",
        "24/7 access",
        "5 hours free meeting room usage per month",
        "Premium kitchen facilities",
        "Dedicated parking spaces"
      ],
      bestFor: "Established businesses and medium-sized teams"
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      src: "/media/SBC House specific photos/SBC-Office-pic-1-1.jpg", 
      alt: "Office Interior" 
    },
    { 
      src: "/media/SBC House specific photos/meeting-room-2.jpg", 
      alt: "Meeting Room" 
    },
    { 
      src: "/media/SBC House specific photos/MEETING-ROOM.jpg", 
      alt: "Conference Room" 
    },
    { 
      src: "/media/SBC House specific photos/KITCHEN.jpg", 
      alt: "Kitchen Facilities" 
    },
    { 
      src: "/media/SBC House specific photos/Reception.jpg", 
      alt: "Reception Area" 
    },
    { 
      src: "/media/SBC House specific photos/parking.jpg", 
      alt: "Parking Area" 
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/SBC-Office-pic-1-1.jpg"
            alt="SBC House Offices"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Office Spaces</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              High-specification office suites designed for productivity and professional growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Office Solutions</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our office suites at SBC House are designed to provide the perfect environment 
                    for your business to thrive. Each space is finished to a high specification, 
                    with plenty of natural light, modern furnishings, and all the amenities you 
                    need to operate efficiently.
                  </p>
                  <p>
                    Whether you're a startup looking for your first professional space or an 
                    established business seeking a new home, our flexible office solutions can 
                    be tailored to meet your specific requirements.
                  </p>
                  <p>
                    All our offices come with all-inclusive pricing - meaning there are no 
                    hidden costs for business rates, heating, electricity, or building insurance. 
                    You'll also benefit from 24/7 secure access, high-speed internet, and use of 
                    our shared facilities.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/meeting-room-2.jpg" 
                  alt="SBC House Meeting Room"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
              <p className="text-lg text-gray-600">
                All our office spaces come with these premium features to ensure your 
                business operates smoothly and efficiently.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Office Options & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Options & Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the perfect office size for your business needs with our flexible options.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeOptions.map((option, index) => (
              <OfficeOption
                key={option.title}
                title={option.title}
                size={option.size}
                priceRange={option.priceRange}
                features={option.features}
                bestFor={option.bestFor}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-8">
                All prices are subject to VAT. Bespoke solutions and larger office spaces are available upon request.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
              <p className="text-lg text-gray-600">
                Take a visual tour of our office spaces and facilities.
              </p>
            </FadeIn>
          </div>
          
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg" 
                      alt="Client Testimonial" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <svg className="h-8 w-8 text-[#4C9D43] mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl text-gray-600 italic mb-6">
                    "Moving our business to an office at SBC House was one of the best decisions we've made. The professional environment, excellent facilities, and friendly staff have helped our business thrive. We particularly appreciate the flexible terms, which have allowed us to expand our space as our team has grown."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Thompson</p>
                    <p className="text-gray-600">CEO, Thompson Digital Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Office Space?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your requirements or to arrange a viewing of our available offices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/facilities"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300"
              >
                Explore Other Facilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default OfficesPage; 