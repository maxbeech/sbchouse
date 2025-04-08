'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  StarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon
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

// Achievement card component
interface AchievementCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon: Icon, title, description, delay }) => {
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

export default function Ofsted() {
  const achievements = [
    {
      icon: AcademicCapIcon,
      title: "Quality of Education",
      description: "Our curriculum provides rich, varied, and imaginative experiences that offer children high levels of challenge. Our teaching is consistently of a very high quality.",
      delay: 0.1
    },
    {
      icon: HeartIcon,
      title: "Personal Development",
      description: "Children's personal, social and emotional development is given high priority. Children have excellent opportunities to develop their confidence and independence.",
      delay: 0.2
    },
    {
      icon: UserGroupIcon,
      title: "Behavior and Attitudes",
      description: "Children's behavior is exemplary. They demonstrate exceptional levels of respect for themselves, each other, and their environment.",
      delay: 0.3
    },
    {
      icon: ShieldCheckIcon,
      title: "Leadership & Management",
      description: "Leaders and managers are inspirational. They ensure staff have the skills and knowledge they need to deliver exceptional care and education.",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484848642_1066677095504847_8445714436322095198_n.jpg"
            alt="Bisley Base Ofsted"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ofsted Outstanding</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Committed to excellence in early years care and education
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ofsted Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <StarIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Outstanding Rating</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are proud to have achieved and maintained our Ofsted Outstanding rating, which reflects our commitment to providing the highest quality care and education for your child.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ofsted (Office for Standards in Education, Children's Services and Skills) is the government body that inspects and regulates services that care for children and young people in England. Their rigorous inspection framework evaluates the quality and standards of education and care.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Outstanding rating means that the quality of our provision is exceptional. The inspector found that our teaching is highly effective, our provision is extremely well-resourced, and our children make excellent progress.
                </p>
                <div className="mt-8">
                  <a 
                    href="https://reports.ofsted.gov.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center"
                  >
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    View Our Ofsted Report
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                  <div className="text-white text-center">
                    <StarIcon className="w-8 h-8 mx-auto mb-1" />
                    <p className="text-sm font-bold">OUTSTANDING</p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/media/484870132_1066677108838179_325247965929575652_n.jpg"
                    alt="Children learning at Bisley Base"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Ofsted Said About Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Here are some key areas where our provision was recognized as outstanding by Ofsted inspectors.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quotes from Our Ofsted Report</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're proud of the feedback received during our Ofsted inspection.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-emerald-50 rounded-xl p-8 relative">
                <div className="absolute top-6 left-6 text-emerald-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="ml-12 mt-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Staff have an excellent understanding of how children learn. They skilfully interact with children and provide them with a wealth of rich and varied experiences."
                  </p>
                  <p className="text-gray-900 font-medium">Ofsted Inspector</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-emerald-50 rounded-xl p-8 relative">
                <div className="absolute top-6 left-6 text-emerald-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="ml-12 mt-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Children's behavior is exemplary. They develop strong bonds with staff and other children. They are highly confident and demonstrate high levels of self-esteem."
                  </p>
                  <p className="text-gray-900 font-medium">Ofsted Inspector</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-emerald-50 rounded-xl p-8 relative">
                <div className="absolute top-6 left-6 text-emerald-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="ml-12 mt-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Leaders and managers are inspirational. They have high expectations for all children and ensure the curriculum meets the needs of every child in their care."
                  </p>
                  <p className="text-gray-900 font-medium">Ofsted Inspector</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-emerald-50 rounded-xl p-8 relative">
                <div className="absolute top-6 left-6 text-emerald-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="ml-12 mt-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Partnerships with parents are outstanding. Staff work exceptionally well with parents to ensure they are fully involved in their children's learning and development."
                  </p>
                  <p className="text-gray-900 font-medium">Ofsted Inspector</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} direction="right" className="order-2 lg:order-1">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/484905464_1066696058836284_7745369647773914144_n.jpg"
                  alt="Staff development at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  While we're incredibly proud of our Outstanding Ofsted rating, we never rest on our laurels. We are committed to continuous improvement and ensuring our provision remains at the highest possible standard.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our ongoing development includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Regular staff training and professional development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Implementing the latest research and best practices in early years education</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Seeking regular feedback from children, parents, and stakeholders</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-emerald-100 rounded-full text-emerald-600 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600">Continuous reflection and evaluation of our practice</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/media/484915429_1066695755502981_5471120345483197494_n.jpg"
                  alt="Visit Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Our Exceptional Provision</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We invite you to visit Bisley Base and see for yourself why Ofsted rated us as Outstanding. Book a tour today to explore our facilities, meet our team, and learn more about our approach to early years care and education.
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