'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SunIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon,
  CakeIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon
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

export default function Breakfast() {
  const features = [
    {
      icon: SunIcon,
      title: "Early Start",
      description: "We provide a calm, welcoming environment for children to start their day positively.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Healthy Breakfast",
      description: "Nutritious breakfast options to fuel your child's day of learning and activities.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Social Time",
      description: "Opportunities for children to socialize and prepare for their school day.",
      delay: 0.3
    },
    {
      icon: SparklesIcon,
      title: "Fun Activities",
      description: "Engaging morning activities to help children wake up and get ready for school.",
      delay: 0.4
    }
  ];

  const benefits = [
    {
      icon: CakeIcon,
      title: "Nutritious Options",
      description: "We offer a variety of healthy breakfast choices including cereals, toast, and fresh fruit.",
      delay: 0.1
    },
    {
      icon: HomeIcon,
      title: "Relaxed Environment",
      description: "A calm, welcoming space where children can wake up gradually and prepare for their day.",
      delay: 0.2
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Social Interaction",
      description: "Time for children to chat with friends and staff in a relaxed setting.",
      delay: 0.3
    },
    {
      icon: ArrowPathIcon,
      title: "Morning Routine",
      description: "Help children establish a positive morning routine that sets them up for success.",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485735097_1068052932033930_77658550893164645_n.jpg"
            alt="Breakfast Club at Bisley Base"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Breakfast Club</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Start your child's day with a nutritious breakfast and positive energy
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our Breakfast Club</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Breakfast Club provides a warm, welcoming start to the day for children aged 4-11 years. We offer a nutritious breakfast in a relaxed environment, helping children prepare for their school day ahead.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With qualified staff and a variety of breakfast options, we ensure your child starts their day with energy and positivity, ready to learn and engage with their school day.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485203441_1068052778700612_7113928315423337218_n.jpg"
                  alt="Children enjoying breakfast"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Breakfast Club</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive breakfast experience that sets your child up for a successful day.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our Breakfast Club offers numerous benefits for both children and parents.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Schedule</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our morning routine ensures a smooth start to your child's day.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">7:30 AM - 8:00 AM</p>
                      <p className="text-gray-600">Arrival and Welcome</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">8:00 AM - 8:30 AM</p>
                      <p className="text-gray-600">Breakfast Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">8:30 AM - 8:45 AM</p>
                      <p className="text-gray-600">Morning Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">8:45 AM - 9:00 AM</p>
                      <p className="text-gray-600">School Preparation and Departure</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you! Contact us to learn more about our Breakfast Club or to schedule a visit.
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
                  src="/media/485719486_1068052712033952_7351594252621480593_n.jpg"
                  alt="Children enjoying breakfast activities"
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