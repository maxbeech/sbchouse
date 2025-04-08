'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon
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

// Step card component
interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, delay }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <motion.div 
        className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="p-3 bg-emerald-50 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-emerald-600 font-bold text-xl">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </FadeIn>
  );
};

export default function Admissions() {
  const admissionSteps = [
    {
      number: 1,
      title: "Initial Enquiry",
      description: "Contact us by phone, email, or through our website to express your interest and ask any initial questions.",
      delay: 0.1
    },
    {
      number: 2,
      title: "Arrange a Visit",
      description: "Schedule a visit to our setting to meet our team, see our facilities, and learn more about our programs.",
      delay: 0.2
    },
    {
      number: 3,
      title: "Complete Registration",
      description: "Fill out our registration form with your child's details, medical information, and preferred sessions.",
      delay: 0.3
    },
    {
      number: 4,
      title: "Confirmation & Payment",
      description: "Once your registration is accepted, we'll confirm your child's place and arrange payment details.",
      delay: 0.4
    }
  ];

  const faqs = [
    {
      question: "What age groups do you accept?",
      answer: "We provide care for children aged 2-11 years across our different programs. Our preschool accepts children from 2-4 years, while our breakfast, after-school, and holiday clubs cater to children aged 4-11 years."
    },
    {
      question: "Do you offer part-time places?",
      answer: "Yes, we offer flexible attendance options including part-time places. Parents can choose specific days or sessions that suit their needs."
    },
    {
      question: "How are sessions allocated?",
      answer: "Sessions are allocated on a first-come, first-served basis. We maintain waiting lists when necessary and prioritize siblings of children already attending."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a one-time registration fee of £25 per child to secure your place and cover administrative costs."
    },
    {
      question: "What is your staff-to-child ratio?",
      answer: "We maintain excellent staff-to-child ratios that exceed national requirements. For 2-3 year olds, we maintain a 1:4 ratio, and for 3-4 year olds, a 1:8 ratio. For school-aged children, we maintain a 1:10 ratio."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485166603_1068300758675814_2267374925032472740_n.jpg"
            alt="Bisley Base Admissions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join our Bisley Base family with our straightforward admissions process
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
                <div className="flex items-center mb-6">
                  <ClipboardDocumentCheckIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Admissions Policy</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Bisley Base, we aim to make our admissions process as simple and transparent as possible. We welcome all children and families, regardless of background, culture, or additional needs.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our admissions policy is designed to ensure fair access to our services while maintaining the high quality of care we provide. We accept children throughout the year, subject to availability, and maintain waiting lists when necessary.
                </p>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Priority Admission</h3>
                  <p className="text-gray-600 mb-4">
                    While we aim to accommodate all families, in cases of limited availability, priority is given to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Siblings of children already attending</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Children with additional needs</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-600">Children in need or looked after by the local authority</p>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484891425_1068300825342474_4990412219308783474_n.jpg"
                  alt="Children at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure your child's place at Bisley Base.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485728744_1068301138675776_6292281104425015656_n.jpg"
                  alt="Registration at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <div className="flex items-center mb-6">
                  <ClipboardDocumentListIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Registration Information</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To register your child with Bisley Base, you'll need to complete our comprehensive registration form that captures all necessary information to ensure we can provide the best care for your child.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our registration form includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Personal details (child and parents/guardians)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Medical information and dietary requirements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Emergency contact details</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Preferred sessions and attendance pattern</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Consent forms for photos, outings, and emergency treatment</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center">
                    <ClipboardDocumentListIcon className="w-5 h-5 mr-2" />
                    Download Registration Form
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Settling-In Process */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Settling-In Process</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We understand that starting at a new setting can be an emotional time for both children and parents. Our flexible settling-in process is designed to ensure a smooth transition for your child.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CalendarIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-start Visit</h3>
                      <p className="text-gray-600">
                        We encourage you and your child to visit us before their official start date to familiarize themselves with the environment and meet the staff.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Gradual Introduction</h3>
                      <p className="text-gray-600">
                        We suggest a phased introduction, starting with shorter sessions and gradually building up to the full session length as your child becomes more comfortable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <UserGroupIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Person Approach</h3>
                      <p className="text-gray-600">
                        Each child is assigned a key person who will form a special bond with them and serve as their main point of contact, providing reassurance and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484653181_1068301092009114_8703608843449411823_n.jpg"
                  alt="Child settling in at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our admissions process.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start">
                      <QuestionMarkCircleIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <FadeIn>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We're excited to welcome you to the Bisley Base family! Contact us today to start the admissions process or to arrange a visit to our setting.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-600">01483 489984</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-600">admissions@bisleybase.co.uk</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-600">Holy Trinity School, Benner Lane, West End, GU24 9JQ</span>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                      Apply Online
                    </button>
                    <button className="bg-white border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                      Arrange a Visit
                    </button>
                  </div>
                </FadeIn>
              </div>
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/media/485727795_1068300765342480_8386051043377828372_n.jpg"
                  alt="Apply to Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 