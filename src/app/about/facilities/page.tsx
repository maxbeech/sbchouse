'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HomeIcon,
  SunIcon,
  BoltIcon,
  ShieldCheckIcon,
  CubeIcon,
  BookOpenIcon
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

// Facility card component
interface FacilityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ icon: Icon, title, description, delay }) => {
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

export default function Facilities() {
  const facilities = [
    {
      icon: HomeIcon,
      title: "Purpose-Designed Spaces",
      description: "Our facilities are specifically designed to create a warm, welcoming environment that supports children's learning and development.",
      delay: 0.1
    },
    {
      icon: SunIcon,
      title: "Outdoor Play Areas",
      description: "Secure outdoor spaces equipped with age-appropriate play equipment, gardens, and nature exploration zones.",
      delay: 0.2
    },
    {
      icon: CubeIcon,
      title: "Learning Resources",
      description: "High-quality educational materials, toys, and equipment to support all areas of the Early Years Foundation Stage curriculum.",
      delay: 0.3
    },
    {
      icon: ShieldCheckIcon,
      title: "Safety Features",
      description: "Comprehensive safety measures including secure entry systems, child-friendly furniture, and regular safety inspections.",
      delay: 0.4
    },
    {
      icon: BookOpenIcon,
      title: "Reading Corner",
      description: "Cozy reading areas with a diverse selection of books to inspire a love of reading and storytelling.",
      delay: 0.5
    },
    {
      icon: BoltIcon,
      title: "Activity Zones",
      description: "Dedicated areas for different types of play and learning, including creative arts, construction, role play, and quiet activities.",
      delay: 0.6
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485063905_1066669025505654_8732994575227432544_n.jpg"
            alt="Bisley Base Facilities"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Providing a safe, stimulating environment for your child to learn and grow
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exceptional Childcare Facilities</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Bisley Base, we've created a nurturing, stimulating environment where children feel safe, comfortable, and inspired to learn. Our purpose-designed facilities support all aspects of child development and provide the perfect setting for our high-quality childcare and education programs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Spaces */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Indoor Spaces</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our bright, spacious indoor areas are carefully designed to create a home-like atmosphere while providing dedicated zones for different types of play and learning activities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Imaginative play areas with role-play props and costumes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Art and craft stations with a variety of creative materials</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Quiet reading corners with comfortable seating</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Construction and block play zones</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Dedicated areas for homework and school activities</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484904947_1066696025502954_6354042415962879490_n.jpg"
                    alt="Indoor play area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484871687_1066676745504882_7776977396599937926_n.jpg"
                    alt="Reading corner"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484917202_1066676788838211_3388725134240201184_n.jpg"
                    alt="Art and craft area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484899410_1066676765504880_6191838772750876699_n.jpg"
                    alt="Activity space"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Outdoor Spaces */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484902553_1066676768838213_355503880758562464_n.jpg"
                    alt="Outdoor playground"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484902036_1066676725504884_4700747617186550414_n.jpg"
                    alt="Garden area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484918616_1066676722171551_1681522475451576546_n.jpg"
                    alt="Outdoor activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484902934_1066676832171540_4221519586243368102_n.jpg"
                    alt="Nature exploration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Outdoor Spaces</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe in the importance of outdoor play for children's physical development, wellbeing, and connection with nature. Our secure outdoor areas provide ample opportunities for active play, exploration, and learning.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Age-appropriate playground equipment for physical development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Garden areas where children can plant and grow vegetables</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Open spaces for group games and sports activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Natural elements for sensory exploration and discovery</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Covered areas for outdoor play in all weather conditions</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety and Security</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The safety and security of your child is our highest priority. We've implemented comprehensive safety measures throughout our facilities to provide peace of mind for parents and a secure environment for children.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ShieldCheckIcon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure Entry System</h3>
                <p className="text-gray-600">
                  Our facilities are equipped with secure entry systems, ensuring only authorized personnel, parents, and carers can access the premises.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ShieldCheckIcon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Child-Safe Design</h3>
                <p className="text-gray-600">
                  All furniture, equipment, and play areas are designed with child safety in mind, with appropriate safety features and regular maintenance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ShieldCheckIcon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Trained Staff</h3>
                <p className="text-gray-600">
                  Our team is fully trained in health and safety procedures, with regular updates on first aid, safeguarding, and emergency protocols.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Facilities Tour */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/media/484913820_1066672822171941_7601085643039273234_n.jpg"
                  alt="Bisley Base Facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Book a Tour</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We invite you to visit our facilities and see firsthand the exceptional environment we've created for your child. Book a tour today to explore our spaces and meet our team.
                  </p>
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 