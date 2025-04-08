'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

// Animation component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  className = "" 
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
        duration: 0.5,
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Value card component
interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4 text-emerald-600">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </FadeIn>
  );
};

export default function Values() {
  const coreValues = [
    {
      icon: HeartIcon,
      title: "Nurturing Care",
      description: "We provide a warm, caring environment where every child feels valued and supported in their development journey.",
      delay: 0.1
    },
    {
      icon: AcademicCapIcon,
      title: "Quality Education",
      description: "Our curriculum is designed to inspire learning through play, fostering creativity and academic readiness.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Community Focus",
      description: "We believe in building strong relationships with families and creating a supportive community environment.",
      delay: 0.3
    },
    {
      icon: SparklesIcon,
      title: "Personal Growth",
      description: "We celebrate each child's unique qualities and encourage them to explore and develop their individual talents.",
      delay: 0.4
    },
    {
      icon: ShieldCheckIcon,
      title: "Safety & Wellbeing",
      description: "The safety and wellbeing of children is our highest priority, with comprehensive measures to ensure a secure environment.",
      delay: 0.5
    },
    {
      icon: StarIcon,
      title: "Excellence",
      description: "We are committed to excellence in all aspects of our service, continuously improving our practice and provision.",
      delay: 0.6
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484871528_1066677122171511_3626558949284894548_n.jpg"
            alt="Bisley Base Values"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The principles that guide everything we do at Bisley Base
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Bisley Base, our values shape everything we do, from how we interact with children and families to how we design our learning environments and activities. These core principles guide us in providing exceptional childcare and education that nurtures happy, confident, and well-rounded children.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Value in Action: Nurturing Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <HeartIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Nurturing Care in Action</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our commitment to nurturing care is evident in every aspect of our provision. We create an environment where children feel safe, valued, and supported to explore, learn, and grow.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Key person system ensuring each child has a dedicated practitioner</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Warm, responsive interactions that build secure attachments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Recognition and respect for each child's individual needs</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484871015_1066676782171545_7767803898011003153_n.jpg"
                  alt="Nurturing care at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value in Action: Quality Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484896872_1066677115504845_7644065957221388011_n.jpg"
                  alt="Quality education at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <div className="flex items-center mb-6">
                  <AcademicCapIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Quality Education in Action</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We deliver a curriculum that inspires curiosity, creativity, and a love of learning. Our play-based approach ensures children develop essential skills while having fun and exploring the world around them.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Carefully planned activities covering all areas of learning</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Well-resourced environments that support discovery and exploration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Qualified staff who understand child development and learning</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value in Action: Community Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <UserGroupIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Community Focus in Action</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We create a sense of belonging for all children and families, building strong partnerships with parents and connections with the wider community.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Regular parent consultations and family events</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Involvement in local community projects and initiatives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Open communication and shared decision-making with families</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484903596_1066677078838182_7009116715882669806_n.jpg"
                  alt="Community focus at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise to You</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  At Bisley Base, we promise to uphold these values in everything we do. We are committed to providing a nurturing, educational environment where your child can thrive, learn, and grow. We continuously review and reflect on our practice to ensure we're delivering the highest quality care and education for your child.
                </p>
                <div className="inline-flex items-center justify-center">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Schedule a Visit
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 