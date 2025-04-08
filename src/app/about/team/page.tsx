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

// Team member card component
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageSrc, delay }) => {
  return (
    <FadeIn delay={delay}>
      <motion.div 
        className="bg-white rounded-xl shadow-sm p-6 text-center"
        whileHover={{ y: -5 }}
      >
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-emerald-600 mb-4">{role}</p>
        <p className="text-gray-600">
          {bio}
        </p>
      </motion.div>
    </FadeIn>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Nursery Manager",
      bio: "With over 15 years of experience in early years education, Sarah leads our team with passion and expertise.",
      imageSrc: "/media/484907383_1066669022172321_8314382448169337555_n.jpg",
      delay: 0.1
    },
    {
      name: "Michael Thompson",
      role: "Deputy Manager",
      bio: "Michael brings 10 years of childcare expertise and ensures our programs run smoothly while maintaining the highest standards.",
      imageSrc: "/media/484868730_1066668978838992_8758652633332447533_n.jpg",
      delay: 0.2
    },
    {
      name: "Emily Parker",
      role: "Early Years Teacher",
      bio: "A qualified teacher with a special interest in creative development, Emily designs engaging activities that foster learning.",
      imageSrc: "/media/485282430_1066669048838985_179099375623850007_n.jpg",
      delay: 0.3
    },
    {
      name: "David Wilson",
      role: "After School Club Coordinator",
      bio: "David's background in sports education helps him create exciting programs that keep children active and engaged.",
      imageSrc: "/media/484868912_1066668625505694_8269621489163217517_n.jpg",
      delay: 0.4
    },
    {
      name: "Jessica Lee",
      role: "Holiday Club Leader",
      bio: "Jessica's creativity and organizational skills ensure our holiday clubs are fun-filled adventures children look forward to.",
      imageSrc: "/media/484919164_1066669082172315_2880053798518010103_n.jpg",
      delay: 0.5
    },
    {
      name: "Robert Taylor",
      role: "Childcare Practitioner",
      bio: "Robert's gentle approach and dedication to child development make him a favorite among both children and parents.",
      imageSrc: "/media/484904608_1066672925505264_8729238123494878010_n.jpg",
      delay: 0.6
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484915460_1066669045505652_3527631899378432701_n.jpg"
            alt="Bisley Base Team"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet the dedicated professionals who make Bisley Base special
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Dedicated Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Bisley Base, our team is our greatest asset. Each member brings unique skills, qualifications, and passion to ensure your child receives the highest quality care and education. Our staff are fully qualified with relevant childcare qualifications and undergo continuous professional development to stay at the forefront of early years education.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Staff Qualifications</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are proud of our highly qualified team members who bring expertise and dedication to childcare and early education.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-start mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Qualifications</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Level 6 BA (Hons) in Early Childhood Studies</li>
                      <li>• Level 5 Foundation Degree in Early Years</li>
                      <li>• Level 3 Diploma in Early Years Education</li>
                      <li>• Early Years Teacher Status (EYTS)</li>
                      <li>• PGCE in Early Years Education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-start mb-6">
                  <StarIcon className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Training</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Pediatric First Aid</li>
                      <li>• Safeguarding Children</li>
                      <li>• Food Hygiene and Nutrition</li>
                      <li>• Special Educational Needs Coordination</li>
                      <li>• Behavior Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We're always looking for talented, passionate professionals to join our team. If you have a genuine love for working with children and a commitment to high-quality care and education, we'd love to hear from you.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Current opportunities are posted on our website, but we also welcome speculative applications from qualified childcare professionals.
                  </p>
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    See Current Vacancies
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="left">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484943504_1066668935505663_3380012938624476130_n.jpg"
                    alt="Join our team at Bisley Base"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 