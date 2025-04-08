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
  StarIcon,
  ShieldCheckIcon
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

export default function About() {
  const values = [
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
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484869461_1066673028838587_705034766726118684_n.jpg"
            alt="Bisley Base Children"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Building futures through exceptional childcare since 2001
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Bisley Base, we are committed to providing exceptional childcare and early education in a nurturing, stimulating environment. Our mission is to support each child's unique development journey, fostering a love for learning that will last a lifetime.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe in creating a safe, inclusive space where children can explore, discover, and grow. Our experienced team works closely with families to ensure every child receives the individual attention and support they need to thrive.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484904947_1066696025502954_6354042415962879490_n.jpg"
                  alt="Children learning at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do at Bisley Base, ensuring we provide the best possible care and education for your children.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of qualified professionals brings years of experience and a passion for childcare to Bisley Base.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/media/team-1.jpg"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-emerald-600 mb-4">Nursery Manager</p>
                <p className="text-gray-600">
                  With over 15 years of experience in early years education, Sarah leads our team with passion and expertise.
                </p>
              </div>
            </FadeIn>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Accreditations</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <StarIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Ofsted Outstanding</h3>
                      <p className="text-gray-600">
                        We are proud to maintain our Ofsted Outstanding rating, reflecting our commitment to excellence in childcare and education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <ShieldCheckIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
                      <p className="text-gray-600">
                        Our commitment to quality is recognized through various accreditations and continuous professional development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484898052_1066696028836287_5380813056688551187_n.jpg"
                  alt="Bisley Base Facilities"
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