'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, ArrowRightIcon, BuildingStorefrontIcon, ShieldCheckIcon, KeyIcon, TruckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

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

// Workshop option component
interface WorkshopOptionProps {
  title: string;
  size: string;
  priceRange: string;
  features: string[];
  bestFor: string;
  delay?: number;
}

const WorkshopOption: React.FC<WorkshopOptionProps> = ({ 
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

// Industry card component
interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="p-3 bg-green-50 rounded-full w-16 h-16 flex items-center justify-center text-[#4C9D43] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

const WorkshopPage = () => {
  // Workshop features
  const workshopFeatures = [
    {
      icon: <BuildingStorefrontIcon className="h-6 w-6" />,
      title: "Versatile Spaces",
      description: "Adaptable workshop units suitable for a wide range of light industrial and creative businesses."
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "24/7 Security",
      description: "Round-the-clock CCTV monitoring and electronic access control for peace of mind."
    },
    {
      icon: <KeyIcon className="h-6 w-6" />,
      title: "24/7 Access",
      description: "Personal access via electronic key fob allowing you to work whenever suits your business."
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Loading Facilities",
      description: "Convenient loading bays and easy access for deliveries and collections."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Flexible Terms",
      description: "Short-term and long-term rental agreements available, with easy scalability as your business grows."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: "All-Inclusive Pricing",
      description: "No hidden costs with business rates, utilities, and building insurance all included in your monthly rental fee."
    }
  ];

  // Workshop options
  const workshopOptions = [
    {
      title: "Small Workshop",
      size: "300-500 sq ft",
      priceRange: "From £350 per month",
      features: [
        "Ideal for small-scale production",
        "Ground-floor access",
        "Suitable power supply",
        "24/7 secure access",
        "Basic facilities",
        "Flexible terms"
      ],
      bestFor: "Small creative businesses, artisans, and startups"
    },
    {
      title: "Medium Workshop",
      size: "500-800 sq ft",
      priceRange: "From £550 per month",
      features: [
        "Perfect for growing businesses",
        "Ground-floor access with loading facilities",
        "Enhanced power supply",
        "24/7 secure access",
        "Basic facilities plus optional extras",
        "Flexible terms"
      ],
      bestFor: "Expanding small businesses and established artisans"
    },
    {
      title: "Large Workshop",
      size: "800-1500 sq ft",
      priceRange: "From £850 per month",
      features: [
        "Substantial space for larger operations",
        "Prime ground-floor access with dedicated loading",
        "Enhanced power supply with three-phase option",
        "24/7 secure access",
        "Comprehensive facilities",
        "Flexible terms"
      ],
      bestFor: "Established light industrial businesses and production companies"
    }
  ];

  // Industries served
  const industriesServed = [
    {
      title: "Light Manufacturing",
      description: "Perfect for small-scale production of goods, assembly, and fabrication.",
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />
    },
    {
      title: "Creative Arts",
      description: "Ideal space for artists, sculptors, and craftspeople requiring a dedicated workspace.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
    },
    {
      title: "Product Development",
      description: "Suitable for R&D teams, prototyping, and testing new product concepts.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
    {
      title: "Artisan Food Production",
      description: "Specialized spaces for small-scale food producers, bakers, and caterers.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      src: "/media/SBC House specific photos/green-area-light.jpg", 
      alt: "Workshop Exterior" 
    },
    { 
      src: "/media/SBC House specific photos/image5.jpg", 
      alt: "Workshop Units" 
    },
    { 
      src: "/media/SBC House specific photos/parking.jpg", 
      alt: "Loading Area" 
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/green-area-light.jpg"
            alt="SBC House Workshop Units"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Workshop Units</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Versatile workshop spaces for light industrial and creative businesses.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Workspace Solutions for Makers and Creators</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our workshop units at SBC House are purposefully designed to accommodate 
                    a wide range of light industrial and creative businesses. From artisans 
                    and craftspeople to small-scale manufacturers, our versatile spaces provide 
                    the perfect environment for production, assembly, and creative work.
                  </p>
                  <p>
                    Each unit offers ground-floor access with loading facilities, appropriate 
                    power supply, and the flexibility to adapt the space to your specific business needs.
                    With 24/7 secure access, you can work according to your own schedule and 
                    business demands.
                  </p>
                  <p>
                    Our all-inclusive pricing means no hidden costs, with business rates, utilities, 
                    and building insurance all covered in your monthly rental. And with flexible 
                    terms, you can easily scale your space as your business grows.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/image5.jpg" 
                  alt="SBC House Workshop Units"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workshop Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features & Facilities</h2>
              <p className="text-lg text-gray-600">
                Our workshop units come with these key features to ensure your business 
                operations run smoothly and efficiently.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopFeatures.map((feature, index) => (
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

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect For Your Industry</h2>
              <p className="text-lg text-gray-600">
                Our workshop units are suitable for a wide range of businesses and creative endeavors.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesServed.map((industry, index) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Options & Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Workshop Options & Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the perfect workshop size for your business needs with our flexible options.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshopOptions.map((option, index) => (
              <WorkshopOption
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
                All prices are subject to VAT. Bespoke solutions and combined workshop/office spaces are available upon request.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
              <p className="text-lg text-gray-600">
                Take a visual tour of our workshop facilities.
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
                      src="/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg" 
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
                    "The workshop space at SBC House has been instrumental in the growth of our furniture restoration business. The flexible space, 24/7 access, and excellent loading facilities make our daily operations smooth and efficient. The all-inclusive pricing model means we can budget effectively without worrying about hidden costs."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Thomas Wilson</p>
                    <p className="text-gray-600">Founder, Wilson Vintage Restoration</p>
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
                Get answers to common questions about our workshop units.
              </p>
            </FadeIn>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I make adaptations to the workshop space?</h3>
                  <p className="text-gray-600">
                    Yes, reasonable adaptations can be made to suit your specific business needs, subject to approval. We understand that different industries require different setups, and we're flexible in accommodating these requirements.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What type of power supply is available?</h3>
                  <p className="text-gray-600">
                    Standard workshop units come with single-phase power supply. Three-phase power is available in selected larger units or can be installed in others subject to requirements and additional costs.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Are there any restrictions on workshop usage?</h3>
                  <p className="text-gray-600">
                    Workshops are suitable for light industrial use. Activities that create excessive noise, odors, or hazardous conditions may be restricted. Please discuss your specific business activities with us during the enquiry process.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Is it possible to combine workshop and office space?</h3>
                  <p className="text-gray-600">
                    Yes, we offer combined solutions for businesses that require both production space and administrative areas. These can be tailored to your specific requirements and ratio of workshop to office space.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Ideal Workshop Space?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your requirements or to arrange a viewing of our workshop units.
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

export default WorkshopPage; 