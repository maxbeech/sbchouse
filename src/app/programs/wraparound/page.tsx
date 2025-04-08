'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClockIcon,
  CalendarIcon,
  AcademicCapIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  MapPinIcon,
  PhoneIcon,
  SunIcon,
  MoonIcon
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

export default function Wraparound() {
  const features = [
    {
      icon: ClockIcon,
      title: "Extended Hours",
      description: "Our wraparound care service operates from 7:30 AM to 6:00 PM, allowing parents to choose a schedule that fits their needs.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Consistent Care",
      description: "Children experience consistent care with familiar staff throughout the day, creating a sense of security and continuity.",
      delay: 0.2
    },
    {
      icon: AcademicCapIcon,
      title: "Educational Support",
      description: "Our staff provide homework support and educational activities that complement school learning.",
      delay: 0.3
    },
    {
      icon: UserGroupIcon,
      title: "Social Development",
      description: "Children benefit from interacting with peers of various ages, developing important social skills and friendships.",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484814396_1068300808675809_5975880135277935793_n.jpg"
            alt="Wraparound Care at Bisley Base"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wraparound Care</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive childcare from morning to evening for working families
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Childcare Solution</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our wraparound care service provides a seamless childcare solution that spans the entire day, designed to support working parents with comprehensive care for their children aged 4-11 years. From breakfast club in the morning to afterschool care in the afternoon, we ensure your child is safe, happy, and engaged throughout the day.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With consistent staff, familiar routines, and a focus on both education and enjoyment, our wraparound care creates a nurturing environment where children can thrive while parents have peace of mind knowing their childcare needs are fully covered.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484945320_1068300815342475_1336113575730136816_n.jpg"
                  alt="Children enjoying wraparound care"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Wraparound Care</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach to childcare offers numerous benefits for both children and parents.
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

      {/* Morning and Afternoon Care */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Wraparound Care Schedule</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From morning to evening, we provide structured activities and care to support your child's day.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <SunIcon className="w-10 h-10 text-emerald-600 mr-4 flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-gray-900">Morning Care</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our morning care service starts at 7:30 AM and ensures your child has a positive start to their day with a nutritious breakfast and gentle morning activities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">7:30 AM - 8:00 AM</p>
                      <p className="text-gray-600">Arrival and Welcome</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">8:00 AM - 8:30 AM</p>
                      <p className="text-gray-600">Breakfast Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">8:30 AM - 8:45 AM</p>
                      <p className="text-gray-600">Morning Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">8:45 AM - 9:00 AM</p>
                      <p className="text-gray-600">School Preparation and Departure</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-6">
                  <MoonIcon className="w-10 h-10 text-emerald-600 mr-4 flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-gray-900">Afternoon Care</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our afternoon care runs from 3:00 PM to 6:00 PM, providing a balanced mix of homework support, play, and relaxation activities after the school day.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">3:00 PM - 3:30 PM</p>
                      <p className="text-gray-600">Arrival and Welcome</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">3:30 PM - 4:00 PM</p>
                      <p className="text-gray-600">Snack Time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">4:00 PM - 4:45 PM</p>
                      <p className="text-gray-600">Homework Support / Quiet Activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">4:45 PM - 5:30 PM</p>
                      <p className="text-gray-600">Group Activities and Games</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
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

      {/* Holiday Care */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485157509_1068300835342473_5947858533937720141_n.jpg"
                  alt="Holiday care at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <div className="flex items-center mb-6">
                  <CalendarIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Holiday Care Included</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our wraparound care service extends to school holidays, providing continuous care throughout the year. During holidays, we offer a fun-filled program of activities, outings, and themed days to keep your child engaged and entertained.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Holiday care runs from 8:00 AM to 6:00 PM, offering the same high-quality care with additional exciting activities and experiences.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Themed activity weeks</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Special visitors and workshops</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Local outings and adventures</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Flexible booking options - full weeks or individual days</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from families who benefit from our wraparound care services.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "The wraparound care at Bisley Base has been a lifesaver for our family. As working parents, we needed a solution that provided consistent, reliable care throughout the day. The staff are amazing and our son loves going - he's always excited to tell us about his day when we pick him up!"
                </p>
                <p className="text-gray-900 font-medium">Sarah T., Parent</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "What I appreciate most about the wraparound care is how seamless it is. My daughter transitions easily from breakfast club to school and then to after-school care. The holiday care is also excellent - she has so much fun during the school breaks, and I don't have to scramble to find alternative arrangements."
                </p>
                <p className="text-gray-900 font-medium">Michael D., Parent</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Enroll in Wraparound Care</h2>
                <p className="text-gray-600 mb-8">
                  Contact us to learn more about our wraparound care service or to enroll your child. We're happy to discuss your specific childcare needs and how we can help.
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
                <div className="mt-8">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485095363_1068300762009147_5672073438499517195_n.jpg"
                  alt="Children in wraparound care"
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