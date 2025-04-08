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
  PhoneIcon,
  SunIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  MusicalNoteIcon
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

export default function AfterSchool() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Homework Support",
      description: "We provide a quiet space and support for children to complete their homework with qualified staff on hand to help.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Nurturing Environment",
      description: "A safe and welcoming space where children can relax, play, and socialize after their school day.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Social Development",
      description: "Opportunities to make friends and develop social skills through group activities and play.",
      delay: 0.3
    },
    {
      icon: SparklesIcon,
      title: "Fun Activities",
      description: "A variety of engaging activities including arts and crafts, sports, games, and outdoor play.",
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
      icon: SunIcon,
      title: "Outdoor Play",
      description: "Access to our outdoor facilities for sports, games, and nature exploration.",
      delay: 0.2
    },
    {
      icon: BookOpenIcon,
      title: "Reading Time",
      description: "Quiet time for reading and storytelling to promote literacy and relaxation.",
      delay: 0.3
    },
    {
      icon: MusicalNoteIcon,
      title: "Music & Movement",
      description: "Dance, music, and movement activities to encourage physical activity and creativity.",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485607031_1068053015367255_7433688009878793455_n.jpg"
            alt="After School Club at Bisley Base"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">After School Club</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A fun and engaging environment for children to learn, play, and grow after school
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our After School Club</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our After School Club provides a safe, stimulating environment for children aged 4-11 years after their school day. We offer a perfect balance of structured activities and free play, ensuring children have fun while developing important life skills.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With qualified staff and a wide range of activities, we create an engaging space where children can relax, socialize, and continue their learning journey in a fun and supportive environment.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485619930_1068053002033923_4841215601595610439_n.jpg"
                  alt="Children enjoying after school activities"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our After School Club</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive after-school experience that supports your child's development and well-being.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily Activities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our varied program of activities ensures there's something for everyone to enjoy.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Our structured yet flexible afternoon routine ensures a balance of activities and relaxation.
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
                      <p className="font-medium text-gray-900">3:00 PM - 3:30 PM</p>
                      <p className="text-gray-600">Arrival and Welcome</p>
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
                      <p className="font-medium text-gray-900">4:00 PM - 4:45 PM</p>
                      <p className="text-gray-600">Homework Support / Quiet Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">4:45 PM - 5:30 PM</p>
                      <p className="text-gray-600">Group Activities and Games</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">5:30 PM - 6:00 PM</p>
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
                  We'd love to hear from you! Contact us to learn more about our After School Club or to schedule a visit.
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
                  src="/media/485401853_1068052978700592_5351981437215314540_n.jpg"
                  alt="Children enjoying after school activities"
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