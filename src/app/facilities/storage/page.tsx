'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, ArrowRightIcon, ShieldCheckIcon, KeyIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/24/outline';

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

// Storage option component
interface StorageOptionProps {
  title: string;
  size: string;
  priceRange: string;
  features: string[];
  bestFor: string;
  delay?: number;
}

const StorageOption: React.FC<StorageOptionProps> = ({ 
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

// Process step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-12 h-12 rounded-full bg-[#4C9D43] text-white flex items-center justify-center font-bold text-xl mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

const StoragePage = () => {
  // Storage features
  const storageFeatures = [
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "24/7 Security",
      description: "Round-the-clock CCTV monitoring and alarm systems ensure your items remain safe and protected."
    },
    {
      icon: <KeyIcon className="h-6 w-6" />,
      title: "Personal Access",
      description: "Electronic key fob entry system allowing you to access your storage unit at any time, day or night."
    },
    {
      icon: <LockClosedIcon className="h-6 w-6" />,
      title: "Individual Locks",
      description: "Each unit is secured with its own lock, giving you complete control over who can access your belongings."
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Loading Facilities",
      description: "Convenient loading bays and trolleys make moving your items in and out a breeze."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: "All-Inclusive Pricing",
      description: "No hidden costs with business rates, utilities, and building insurance all included in your monthly rental fee."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Flexible Terms",
      description: "Short-term and long-term rental agreements available, allowing your storage solution to adapt as your business needs change."
    }
  ];

  // Storage options
  const storageOptions = [
    {
      title: "Small Storage Unit",
      size: "50-75 sq ft",
      priceRange: "From £120 per month",
      features: [
        "Approximately 5'×10' or 7.5'×7.5'",
        "Perfect for small inventory",
        "24/7 secure access",
        "Ground floor access",
        "Clean and dry space",
        "Flexible terms"
      ],
      bestFor: "Small businesses with limited stock or document storage"
    },
    {
      title: "Medium Storage Unit",
      size: "100-150 sq ft",
      priceRange: "From £175 per month",
      features: [
        "Approximately 10'×10' or 7.5'×15'",
        "Suitable for growing inventory",
        "24/7 secure access",
        "Ground floor access",
        "Clean and dry space",
        "Flexible terms"
      ],
      bestFor: "Businesses with moderate stock levels or seasonal inventory"
    },
    {
      title: "Large Storage Unit",
      size: "200-400 sq ft",
      priceRange: "From £250 per month",
      features: [
        "Various configurations available",
        "Ideal for substantial inventory",
        "24/7 secure access",
        "Ground floor access with loading facilities",
        "Clean and dry space",
        "Flexible terms"
      ],
      bestFor: "Established businesses with significant storage requirements"
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      src: "/media/SBC House specific photos/image5.jpg", 
      alt: "Storage Unit Exterior" 
    },
    { 
      src: "/media/SBC House specific photos/parking.jpg", 
      alt: "Loading Area" 
    },
    { 
      src: "/media/SBC House specific photos/visitor-parking1.jpg", 
      alt: "Parking Facilities" 
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: "Enquire",
      description: "Contact us with your storage requirements, and we'll guide you through the available options."
    },
    {
      number: 2,
      title: "View",
      description: "Book a viewing to see our facilities and ensure they meet your specific needs."
    },
    {
      number: 3,
      title: "Select",
      description: "Choose the right unit size and rental term for your business requirements."
    },
    {
      number: 4,
      title: "Move In",
      description: "Once your agreement is signed, you'll receive your access key and can move in immediately."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/image5.jpg"
            alt="SBC House Storage Units"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Storage Units</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Secure, accessible storage solutions for businesses of all sizes.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Storage Solutions</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our storage units at SBC House are purpose-built to provide secure, 
                    convenient, and flexible storage solutions for businesses of all sizes. 
                    From archiving important documents to storing inventory, equipment, 
                    or seasonal items, we have the perfect space for your needs.
                  </p>
                  <p>
                    Each unit is clean, dry, and secure, with 24/7 access allowing you to 
                    retrieve or store items whenever your business requires. Our comprehensive 
                    security systems ensure your valuable assets remain safe at all times.
                  </p>
                  <p>
                    With flexible rental terms and a range of unit sizes, you can easily 
                    scale your storage solution up or down as your business requirements change, 
                    without being tied into long-term commitments.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/parking.jpg" 
                  alt="SBC House Storage Access"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Storage Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features & Security</h2>
              <p className="text-lg text-gray-600">
                Our storage facilities come with these premium features to ensure your items 
                remain secure, accessible, and well-protected.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storageFeatures.map((feature, index) => (
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

      {/* Storage Options & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Storage Options & Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the perfect storage size for your business needs with our flexible options.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storageOptions.map((option, index) => (
              <StorageOption
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
                All prices are subject to VAT. Bespoke solutions and larger storage units are available upon request.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-lg text-gray-600">
                Getting started with our storage solutions is quick and easy.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
              <p className="text-lg text-gray-600">
                Take a visual tour of our storage facilities.
              </p>
            </FadeIn>
          </div>
          
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src="/media/Stock photos/pexels-mohammad-danish-290641-891059.jpg" 
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
                    "As a growing e-commerce business, the storage units at SBC House have been invaluable. The 24/7 access means we can fulfill orders at any time, and the security gives us peace of mind that our inventory is safe. The flexible terms have also allowed us to expand our space as our business has grown."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Michael Davies</p>
                    <p className="text-gray-600">Founder, Davies Online Retail</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our storage solutions.
              </p>
            </FadeIn>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How secure are your storage units?</h3>
                  <p className="text-gray-600">
                    Our storage facilities feature 24/7 CCTV monitoring, alarm systems, and secure electronic access control. Each unit has its own individual lock, with keys held only by you.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I access my storage unit at any time?</h3>
                  <p className="text-gray-600">
                    Yes, our storage units are accessible 24 hours a day, 7 days a week, via your personal electronic key fob, allowing you to retrieve or store items whenever your business requires.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What if I need to change the size of my storage unit?</h3>
                  <p className="text-gray-600">
                    We offer flexible terms that allow you to upgrade or downsize your storage space as your business needs change. Simply contact our team to discuss your requirements.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there any items I cannot store?</h3>
                  <p className="text-gray-600">
                    For safety and security reasons, certain items cannot be stored, including hazardous materials, perishable goods, illegal items, and living organisms. Our team can provide a full list upon request.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business Storage?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your storage requirements or to arrange a viewing of our facilities.
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

export default StoragePage; 