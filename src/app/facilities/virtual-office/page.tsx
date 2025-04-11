'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, ArrowRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

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

// Pricing card component
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay = 0 
}) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className={`relative rounded-xl overflow-hidden border ${isPopular ? 'border-[#4C9D43]' : 'border-gray-200'} h-full flex flex-col`}>
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="text-xs font-semibold bg-[#4C9D43] text-white py-1 px-3 rounded-bl-xl">
              Most Popular
            </div>
          </div>
        )}
        
        <div className={`p-6 ${isPopular ? 'bg-green-50' : 'bg-white'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">{price}</div>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        
        <div className="bg-white p-6 flex-grow">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-5 w-5 text-[#4C9D43] mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link
            href="/contact"
            className={`inline-flex justify-center items-center w-full px-6 py-3 rounded-md transition-colors duration-300 ${
              isPopular 
                ? 'text-white bg-[#4C9D43] hover:bg-[#3E8035]' 
                : 'text-[#4C9D43] bg-white border border-[#4C9D43] hover:bg-green-50'
            }`}
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

// Benefit component
interface BenefitProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const Benefit: React.FC<BenefitProps> = ({ number, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4C9D43] text-white font-bold text-xl">
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

const VirtualOfficePage = () => {
  // Virtual office features
  const virtualOfficeFeatures = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Professional Business Address",
      description: "Establish a prestigious business presence with our respected Surrey address for your company."
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Mail Handling",
      description: "All of your mail is received securely and can be forwarded, held for collection, or scanned and emailed."
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Call Answering",
      description: "Our professional staff answer calls in your company name and forward them according to your preferences."
    },
    {
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
      title: "Meeting Room Access",
      description: "Book our professional meeting rooms when you need face-to-face interactions with clients or team members."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: "Flexible Terms",
      description: "Choose from monthly, quarterly, or annual packages with no long-term commitment required."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: "Company Registration Address",
      description: "Use our address for your official company registration with Companies House."
    }
  ];

  // Pricing packages
  const pricingPackages = [
    {
      title: "Basic",
      price: "£49/month",
      description: "Perfect for startups and sole traders seeking a professional image.",
      features: [
        "Professional business address",
        "Mail collection or forwarding",
        "Basic call answering service (10 calls per month)",
        "2 hours meeting room usage per month",
        "Access to business lounge",
        "Company registration address"
      ],
      isPopular: false
    },
    {
      title: "Professional",
      price: "£89/month",
      description: "Ideal for growing businesses needing comprehensive virtual office services.",
      features: [
        "Professional business address",
        "Mail collection, forwarding or scanning",
        "Full call answering service",
        "5 hours meeting room usage per month",
        "Access to business lounge",
        "Company registration address",
        "Dedicated local phone number"
      ],
      isPopular: true
    },
    {
      title: "Executive",
      price: "£149/month",
      description: "Complete solution for established businesses requiring premium services.",
      features: [
        "Professional business address",
        "Priority mail handling with daily updates",
        "VIP call answering service with message taking",
        "10 hours meeting room usage per month",
        "Access to business lounge",
        "Company registration address",
        "Dedicated local phone number",
        "Virtual assistant (5 hours per month)",
        "Business concierge services"
      ],
      isPopular: false
    }
  ];

  // Key benefits
  const keyBenefits = [
    {
      number: "1",
      title: "Enhance Your Professional Image",
      description: "Project a professional business image with a prestigious address and professional call handling without the expense of physical office space."
    },
    {
      number: "2",
      title: "Save on Costs",
      description: "Eliminate the expenses associated with leasing and maintaining a physical office, including rent, utilities, furniture, and equipment."
    },
    {
      number: "3",
      title: "Maintain Work Flexibility",
      description: "Work from anywhere while maintaining a stable business presence, perfect for remote teams, hybrid working arrangements, or businesses on the go."
    },
    {
      number: "4",
      title: "Focus on Growth",
      description: "Delegate administrative tasks such as call answering and mail handling to us, allowing you to concentrate on growing your business."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/Reception.jpg"
            alt="SBC House Virtual Office"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Virtual Office Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional business presence without the physical office space.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Business Presence, Anywhere You Work</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our Virtual Office solutions provide your business with a prestigious 
                    professional address, mail handling, and dedicated call answering services 
                    without the expense of physical office space.
                  </p>
                  <p>
                    Perfect for remote workers, startups, entrepreneurs, and established 
                    businesses looking to establish a presence in a new location, our 
                    virtual office packages help you maintain a professional image while 
                    working from anywhere.
                  </p>
                  <p>
                    With flexible packages tailored to businesses of all sizes, you can select 
                    the services that best match your specific needs and budget, all backed by 
                    our friendly, professional support team.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/MEETING-ROOM.jpg" 
                  alt="SBC House Meeting Room"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Virtual Office Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Virtual Office Services</h2>
              <p className="text-lg text-gray-600">
                Everything you need to maintain a professional business presence without the overhead of physical office space.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualOfficeFeatures.map((feature, index) => (
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

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of a Virtual Office</h2>
              <p className="text-lg text-gray-600">
                Discover how our virtual office solutions can transform your business operations.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {keyBenefits.map((benefit, index) => (
              <Benefit
                key={benefit.title}
                number={benefit.number}
                title={benefit.title}
                description={benefit.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the virtual office package that best suits your business needs.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPackages.map((pkg, index) => (
              <PricingCard
                key={pkg.title}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.isPopular}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-8">
                All prices are subject to VAT. Custom packages are available for businesses with specific requirements.
              </p>
            </div>
          </FadeIn>
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
                      src="/media/Stock photos/pexels-lexovertoom-1109543.jpg" 
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
                    "The virtual office service from SBC House has been transformative for my consulting business. I work from home but now have a professional address and call handling service that gives my clients confidence. The meeting rooms are perfect when I need face-to-face meetings, and the team is always helpful and professional."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Emma Richardson</p>
                    <p className="text-gray-600">Director, Richardson Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our virtual office solutions.
              </p>
            </FadeIn>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I use the virtual office address for my company registration?</h3>
                  <p className="text-gray-600">
                    Yes, all our virtual office packages include the ability to use our address for your company registration with Companies House and as your business address.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How is my mail handled?</h3>
                  <p className="text-gray-600">
                    We receive and sign for all your mail and packages securely. Depending on your package, we can hold it for collection, forward it to your preferred address, or scan and email it to you.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How do the call answering services work?</h3>
                  <p className="text-gray-600">
                    Our professional receptionists answer calls in your company name during business hours. They can transfer calls to you, take messages, or handle calls according to your specific instructions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Do I need to sign a long-term contract?</h3>
                  <p className="text-gray-600">
                    No, we offer flexible terms with monthly, quarterly, or annual billing cycles. You can upgrade, downgrade, or cancel your services as your business needs change.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business Presence?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start projecting a professional image today with our virtual office solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
              >
                Get Started
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

export default VirtualOfficePage; 