'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon
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

// Feature card component
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
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

export default function Preschool() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Early Years Foundation Stage",
      description: "Our curriculum follows the EYFS framework, ensuring your child receives the best possible start in their educational journey.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Nurturing Environment",
      description: "We create a warm, caring atmosphere where children feel safe to explore, learn, and grow at their own pace.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Small Group Sizes",
      description: "With a high staff-to-child ratio, we ensure each child receives individual attention and support.",
      delay: 0.3
    },
    {
      icon: SparklesIcon,
      title: "Learning Through Play",
      description: "We believe in making learning fun through engaging activities, creative play, and hands-on experiences.",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484921409_1068053008700589_4781237171511210904_n.jpg"
            alt="Preschool Children at Bisley Base"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Preschool Program</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Nurturing young minds through play-based learning and creative exploration
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our Preschool</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our preschool program is designed for children aged 2-4 years, providing a nurturing environment where they can develop essential skills through play-based learning. We follow the Early Years Foundation Stage (EYFS) framework, ensuring your child receives the best possible start in their educational journey.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our experienced team of qualified practitioners creates engaging activities that promote learning across all areas of development, including communication, physical development, personal social and emotional development, and understanding the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485184444_1068052968700593_8191757996121460593_n.jpg"
                  alt="Children learning through play"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Preschool</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive preschool experience that sets your child up for success in their educational journey.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Schedule</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our structured yet flexible daily routine ensures a balance of learning, play, and rest.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Morning Session</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">8:00 AM - 9:00 AM</p>
                      <p className="text-gray-600">Arrival and Free Play</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">9:00 AM - 9:30 AM</p>
                      <p className="text-gray-600">Circle Time and Welcome</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">9:30 AM - 10:30 AM</p>
                      <p className="text-gray-600">Guided Learning Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">10:30 AM - 11:00 AM</p>
                      <p className="text-gray-600">Snack Time</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Afternoon Session</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">11:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Outdoor Play and Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">12:00 PM - 1:00 PM</p>
                      <p className="text-gray-600">Lunch Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">1:00 PM - 2:00 PM</p>
                      <p className="text-gray-600">Quiet Time / Rest</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">2:00 PM - 3:00 PM</p>
                      <p className="text-gray-600">Afternoon Activities and Pick-up</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you! Contact us to learn more about our preschool program or to schedule a visit.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-6 h-6 text-emerald-600" />
                    <span className="text-gray-600">01483 489984</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-6 h-6 text-emerald-600" />
                    <span className="text-gray-600">Holy Trinity School, Benner Lane, West End, GU24 9JQ</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484917492_1068053005367256_9006777632458623707_n.jpg"
                  alt="Children playing at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 