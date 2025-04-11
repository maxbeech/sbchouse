'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingOffice2Icon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import HistoricTimeline from '@/components/ui/HistoricTimeline';

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

// Team member component
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-lg">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-[#4C9D43]">{role}</p>
      </div>
    </FadeIn>
  );
};

// Value proposition component
interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueProp: React.FC<ValuePropProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex flex-col items-center text-center p-6">
        <div className="p-3 bg-green-50 rounded-full w-16 h-16 flex items-center justify-center text-[#4C9D43] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

const AboutPage = () => {
  // Timeline events
  const timelineEvents = [
    { 
      year: 1987, 
      title: 'SBC House Founded', 
      description: 'SBC House was established to provide flexible business spaces in Wallington.'
    },
    { 
      year: 1995, 
      title: 'Expansion Phase', 
      description: 'Added additional storage units and office spaces to meet growing demand.'
    },
    { 
      year: 2005, 
      title: 'Modernization', 
      description: 'Complete renovation of facilities with modern amenities and technology.'
    },
    { 
      year: 2015, 
      title: 'Introduction of Virtual Offices', 
      description: 'Launched virtual office services for remote and hybrid businesses.'
    },
    { 
      year: 2023, 
      title: 'Sustainability Initiative', 
      description: 'Implemented eco-friendly solutions throughout our facilities.'
    }
  ];

  // Values data
  const values = [
    {
      title: "Quality Spaces",
      description: "We provide high-specification, secure commercial spaces that exceed expectations and promote productivity.",
      icon: <BuildingOffice2Icon className="h-6 w-6" />
    },
    {
      title: "Security & Trust",
      description: "Security is paramount in everything we do, from 24/7 monitoring to robust access systems.",
      icon: <ShieldCheckIcon className="h-6 w-6" />
    },
    {
      title: "Customer-Focused",
      description: "We pride ourselves on responsive, personalized service that adapts to your growing business needs.",
      icon: <UserGroupIcon className="h-6 w-6" />
    }
  ];

  // Team data (example)
  const team = [
    {
      name: "John Smith",
      role: "Managing Director",
      image: "/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "/media/Stock photos/pexels-mohammad-danish-290641-891059.jpg"
    },
    {
      name: "David Williams",
      role: "Facilities Manager",
      image: "/media/Stock photos/pexels-vojtech-okenka-127162-392018.jpg"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/Reception.jpg"
            alt="SBC House Reception"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About SBC House</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Providing flexible solutions to the office, workshop and storage needs
              of growing businesses since 1987.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Since 1987, SBC House has been dedicated to providing flexible solutions 
                    for the office, workshop, and storage needs of growing businesses in the 
                    Wallington area and beyond.
                  </p>
                  <p>
                    What began as a small facility with just a few units has grown into a 
                    comprehensive business center offering a wide range of spaces and services 
                    designed to support businesses at every stage of their growth journey.
                  </p>
                  <p>
                    Our commitment to quality, security, and excellent customer service has 
                    remained unchanged throughout our history. We take pride in creating 
                    environments where businesses can thrive, with spaces that adapt to their 
                    evolving needs.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/green-area-light.jpg" 
                  alt="SBC House exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From our founding to the present day, explore the key milestones 
                that have shaped SBC House.
              </p>
            </div>
          </FadeIn>
          
          <HistoricTimeline events={timelineEvents} />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at SBC House.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueProp
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals behind SBC House.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Business Space?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how SBC House can provide the ideal solution for your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 