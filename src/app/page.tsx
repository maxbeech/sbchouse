'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import { 
  BuildingOffice2Icon,
  ArchiveBoxIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

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

// Services card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-lg p-6 transition-all duration-300 group border border-gray-100"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-green-50 rounded-xl w-fit mb-4 text-[#4C9D43]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center font-medium text-[#4C9D43] group-hover:text-[#3E8035]"
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
      </motion.div>
    </FadeIn>
  );
};

// Testimonial component
interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <svg className="h-8 w-8 text-[#4C9D43] mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-600 mb-4">{quote}</p>
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Home() {
  // Features data
  const features = [
    {
      title: "Business Rates Included",
      description: "All-inclusive pricing with business rates, heating, electricity, and building insurance included.",
      icon: <ShieldCheckIcon className="h-6 w-6" />
    },
    {
      title: "Flexible Space Solutions",
      description: "Easily increase or decrease your space as your business needs change over time.",
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />
    },
    {
      title: "Professional Support",
      description: "Friendly, helpful professional management team available to support your business needs.",
      icon: <UsersIcon className="h-6 w-6" />
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "SBC House has provided us with the perfect flexible office solution. The facilities are excellent and the staff are always helpful and accommodating.",
      author: "Sarah Johnson",
      company: "Digital Marketing Agency"
    },
    {
      quote: "As a growing business, the storage units at SBC House have been invaluable. Clean, secure, and accessible 24/7 - exactly what we needed.",
      author: "Michael Davies",
      company: "E-commerce Retailer"
    },
    {
      quote: "The workshop space is exceptional - bright, airy and with all the amenities we need. The location is perfect for our clients to find us easily.",
      author: "Thomas Wilson",
      company: "Creative Design Studio"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Quick Search Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Business Space</h2>
                <p className="text-lg text-gray-600">
                  Whether you need an office, storage unit, workshop, or virtual office solution,
                  we have the perfect space for your business needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/facilities/offices" className="group">
                  <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-50 hover:shadow-md">
                    <BuildingOffice2Icon className="h-12 w-12 text-[#4C9D43] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Offices</h3>
                    <p className="text-gray-600 mb-4">High-spec office solutions for businesses of all sizes</p>
                    <span className="text-[#4C9D43] flex items-center text-sm font-medium">
                      View Offices
                      <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
                
                <Link href="/facilities/storage" className="group">
                  <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-50 hover:shadow-md">
                    <ArchiveBoxIcon className="h-12 w-12 text-[#4C9D43] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Storage Units</h3>
                    <p className="text-gray-600 mb-4">Secure, clean, and individually dry storage units</p>
                    <span className="text-[#4C9D43] flex items-center text-sm font-medium">
                      View Storage
                      <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
                
                <Link href="/facilities/virtual-office" className="group">
                  <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-50 hover:shadow-md">
                    <ComputerDesktopIcon className="h-12 w-12 text-[#4C9D43] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Office</h3>
                    <p className="text-gray-600 mb-4">Professional business address with mail handling</p>
                    <span className="text-[#4C9D43] flex items-center text-sm font-medium">
                      View Virtual Office
                      <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
                
                <Link href="/facilities/workshop" className="group">
                  <div className="bg-slate-50 p-5 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-50 hover:shadow-md">
                    <BuildingStorefrontIcon className="h-12 w-12 text-[#4C9D43] mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshop Units</h3>
                    <p className="text-gray-600 mb-4">Bright, airy workshops perfect for production</p>
                    <span className="text-[#4C9D43] flex items-center text-sm font-medium">
                      View Workshops
                      <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-90">
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234C9D43' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <FadeIn direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/media/home_hero_slider/green-area-light.jpg"
                    alt="SBC House exterior"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#4C9D43]">37</p>
                    <p className="text-sm text-gray-600">Years of Experience</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div>
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white bg-opacity-80 py-2 px-4 rounded-full w-fit mb-4 shadow-sm">
                  <span className="text-[#4C9D43] font-medium text-sm">About SBC House</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Flexible Business Space Solutions Since 1987</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Sutton Business Centre has been looking after commercial property accommodation for local, national, and international businesses since 1987. We provide flexible solutions for office, workshop, and storage needs for growing businesses of all sizes.
                </p>
                <p className="text-gray-700 mb-8">
                  Our high-specification, low-overhead accommodation can be tailored to your exact requirements. Conveniently located just 5 minutes from Hackbridge railway station (20 minutes to Victoria/London Bridge), the Business Centre is perfectly situated for London, Croydon, Sutton, and the M25/M23.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/about" 
                    className="px-6 py-3 text-white bg-[#4C9D43] rounded-md font-medium hover:bg-[#3E8035] transition-colors duration-300 text-center shadow-sm"
                  >
                    Learn More About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-6 py-3 text-[#4C9D43] bg-white rounded-md font-medium hover:bg-green-50 transition-colors duration-300 text-center shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="bg-green-50 py-2 px-4 rounded-full w-fit mx-auto mb-4">
                <span className="text-[#4C9D43] font-medium text-sm">Why Choose SBC?</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tailored For Your Company Needs</h2>
              <p className="text-gray-600 text-lg">
                We find many companies today require a mixture of offices, workshops, and storage solutions. 
                We have the facilities here to offer one or all of these options in a friendly and comfortable working environment.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="p-3 bg-green-50 rounded-xl w-fit mb-4">
                    <div className="text-[#4C9D43]">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#e9f5e7] to-[#f0f9ef] opacity-95">
          <div className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234C9D43' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="bg-white py-2 px-4 rounded-full w-fit mx-auto mb-4 shadow-sm">
                <span className="text-[#4C9D43] font-medium text-sm">Our Services</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Services We Offer</h2>
              <p className="text-gray-700 text-lg">
                In addition to our high-quality workspaces, we provide a range of business support services 
                to ensure your operations run smoothly and efficiently.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              title="Email & Secretarial Support"
              description="Professional email handling and administrative support to keep your business operations running smoothly."
              link="/services/secretarial-support"
              delay={0.1}
            />
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>}
              title="Telephone Answering"
              description="Professional call handling and message taking service in your company name, ensuring you never miss important calls."
              link="/services/call-handling"
              delay={0.2}
            />
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>}
              title="Meeting Room Facilities"
              description="Modern, well-equipped meeting rooms available to book by the hour, half-day, or full day with AV equipment included."
              link="/services/meeting-rooms"
              delay={0.3}
            />
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>}
              title="Photocopying & Printing"
              description="High-quality photocopying, printing, and document binding services available on-site for all your business needs."
              link="/services/printing"
              delay={0.4}
            />
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              title="24/7 Access"
              description="Secure 24-hour access to your facilities allowing you to work on your schedule, with secure parking available."
              link="/services/access"
              delay={0.5}
            />
            <ServiceCard
              icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
              title="Security Services"
              description="Comprehensive security systems including CCTV, alarm systems, and 24-hour security monitoring for peace of mind."
              link="/services/security"
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Cafe Section with Parallax */}
      <section className="relative py-24">
        <ParallaxImage 
          src="/media/home_hero_slider/cafe-sbc-house.jpg"
          alt="SBC Cafe"
          className="absolute inset-0 h-full"
          speed={0.3}
        />
        {/* Enhanced background overlay with pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a14]/90 to-[#102109]/85 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl backdrop-blur-sm bg-black/10 p-8 rounded-xl border border-white/10">
            <FadeIn direction="up">
              <div className="bg-[#4C9D43]/20 py-2 px-4 rounded-full w-fit mb-4 border border-[#4C9D43]/40">
                <span className="text-white font-medium text-sm">Onsite Amenities</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">The SBC Cafe</h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Offering a wide range of snacks, breakfast, lunch, salads, soups, sandwiches, wraps, and more. 
                Enjoy a selection of freshly ground coffees, teas, and soft drinks.
              </p>
              <Link 
                href="/cafe" 
                className="inline-flex items-center px-6 py-3 bg-white text-[#4C9D43] font-medium rounded-md hover:bg-green-50 transition-colors duration-300 shadow-lg"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="bg-green-50 py-2 px-4 rounded-full w-fit mx-auto mb-4">
                <span className="text-[#4C9D43] font-medium text-sm">Testimonials</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
              <p className="text-gray-600 text-lg">
                Don't just take our word for it - hear from businesses who have thrived at SBC House.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#edf7ec] to-[#f5faf5] opacity-95">
          <div className="absolute inset-0 opacity-15" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234C9D43' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="bg-white py-2 px-4 rounded-full w-fit mb-4 shadow-sm">
                <span className="text-[#4C9D43] font-medium text-sm">Our Location</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategically Located For Your Business</h2>
              <p className="text-gray-700 mb-6">
                SBC House is conveniently located just 5 minutes from Hackbridge railway station, 
                with excellent transport links to central London (20 minutes to Victoria/London Bridge) 
                and easy access to the M25/M23 motorways.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">SBC House, Restmor Way, Wallington, SM6 7AH</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">020 8255 2040</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@sbc-house.com</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Get Directions
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.8064798263855!2d-0.1495558!3d51.386292399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760732e3c0ef39%3A0x87ab78e53853d593!2sSBC%20House!5e0!3m2!1sen!2suk!4v1652187841729!5m2!1sen!2suk" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SBC House Location Map"
                  className="w-full"
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Business Space?</h2>
              <p className="text-xl text-green-100">
                Contact us today to discuss your requirements and book a viewing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors duration-300 text-center"
              >
                Request a Quote
              </Link>
              <Link 
                href="/facilities" 
                className="px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-400 transition-colors duration-300 text-center"
              >
                Explore Facilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 