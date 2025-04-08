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
  PuzzlePieceIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  BeakerIcon,
  GlobeAltIcon,
  PaintBrushIcon
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

export default function HolidayClub() {
  const features = [
    {
      icon: SunIcon,
      title: "Fun-Filled Days",
      description: "Exciting activities and adventures to keep children engaged and entertained throughout the holidays.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Safe Environment",
      description: "A secure, supervised setting where children can play, learn, and make new friends.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Social Development",
      description: "Opportunities for children to interact with peers and develop lasting friendships.",
      delay: 0.3
    },
    {
      icon: SparklesIcon,
      title: "Creative Learning",
      description: "Engaging activities that combine fun with educational value, keeping minds active during holidays.",
      delay: 0.4
    }
  ];

  const activities = [
    {
      icon: PuzzlePieceIcon,
      title: "Arts & Crafts",
      description: "Creative projects and craft activities to stimulate imagination and develop fine motor skills.",
      delay: 0.1
    },
    {
      icon: GlobeAltIcon,
      title: "Outdoor Adventures",
      description: "Nature walks, garden activities, and outdoor games in our safe, enclosed spaces.",
      delay: 0.2
    },
    {
      icon: BeakerIcon,
      title: "Science & Discovery",
      description: "Fun experiments and hands-on learning activities to spark curiosity and wonder.",
      delay: 0.3
    },
    {
      icon: PaintBrushIcon,
      title: "Creative Arts",
      description: "Painting, drawing, and other artistic activities to encourage self-expression.",
      delay: 0.4
    },
    {
      icon: BookOpenIcon,
      title: "Story Time",
      description: "Interactive storytelling sessions and reading activities to develop literacy skills.",
      delay: 0.5
    },
    {
      icon: MusicalNoteIcon,
      title: "Music & Dance",
      description: "Rhythm activities, singing, and dance to promote physical activity and creativity.",
      delay: 0.6
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484917025_1068052962033927_2729368767143192861_n.jpg"
            alt="Holiday Club at Bisley Base"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Holiday Club</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Exciting activities and adventures for children during school holidays
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our Holiday Club</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Holiday Club provides a fun, engaging environment for children aged 4-11 years during school holidays. We offer a wide range of activities, from arts and crafts to outdoor adventures, ensuring children have an enjoyable and enriching holiday experience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With qualified staff and a carefully planned program of activities, we create memorable holiday experiences that combine fun with learning and personal development.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484921411_1068052952033928_741538593416282756_n.jpg"
                  alt="Children enjoying holiday activities"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Holiday Club</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive holiday experience that keeps children engaged, learning, and having fun.
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

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Holiday Activities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our varied program of activities ensures there's something for everyone to enjoy during the holidays.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <FeatureCard key={index} {...activity} />
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
                Our structured yet flexible daily routine ensures a balance of activities and relaxation.
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
                      <p className="font-medium text-gray-900">8:00 AM - 9:00 AM</p>
                      <p className="text-gray-600">Arrival and Welcome</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">9:00 AM - 10:30 AM</p>
                      <p className="text-gray-600">Morning Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">10:30 AM - 11:00 AM</p>
                      <p className="text-gray-600">Snack Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">11:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Outdoor Play</p>
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
                      <p className="font-medium text-gray-900">2:00 PM - 3:30 PM</p>
                      <p className="text-gray-600">Afternoon Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">3:30 PM - 4:00 PM</p>
                      <p className="text-gray-600">Snack Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">4:00 PM - 5:00 PM</p>
                      <p className="text-gray-600">Free Play and Pick-up</p>
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
                  We'd love to hear from you! Contact us to learn more about our Holiday Club or to book a place for your child.
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
                  src="/media/485737191_1068052692033954_1638243340741591799_n.jpg"
                  alt="Children enjoying holiday activities"
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