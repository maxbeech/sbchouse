'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Animation components
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
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
        duration: duration,
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
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax image component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

// Menu item component
interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  delay?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <span className="text-[#4C9D43] font-semibold">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

// Feature card component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="flex flex-col items-center text-center p-6">
        <div className="p-3 bg-green-50 rounded-full w-16 h-16 flex items-center justify-center text-[#4C9D43] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

const CafePage = () => {
  // Cafe features
  const cafeFeatures = [
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Convenient Hours",
      description: "Open Monday to Friday from 8:00 AM to 4:00 PM, perfect for breakfast, lunch, or an afternoon coffee break."
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Prime Location",
      description: "Located in the heart of SBC House, easily accessible for tenants and visitors alike."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Meeting Friendly",
      description: "Casual seating areas perfect for informal business meetings or catching up with colleagues."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Quality Ingredients",
      description: "Freshly prepared food using high-quality, locally sourced ingredients wherever possible."
    }
  ];

  // Menu categories
  const breakfastItems = [
    {
      name: "Full English Breakfast",
      description: "Eggs, bacon, sausage, beans, mushrooms, tomato, and toast.",
      price: "£8.95"
    },
    {
      name: "Vegetarian Breakfast",
      description: "Eggs, vegetarian sausages, beans, mushrooms, spinach, tomato, and toast.",
      price: "£7.95"
    },
    {
      name: "Breakfast Sandwich",
      description: "Choose from bacon, sausage, or egg on a fresh bread roll.",
      price: "£4.50"
    },
    {
      name: "Toasted Teacake",
      description: "Served with butter and preserves.",
      price: "£2.95"
    }
  ];

  const lunchItems = [
    {
      name: "Club Sandwich",
      description: "Triple-decker sandwich with chicken, bacon, lettuce, tomato, and mayo.",
      price: "£6.95"
    },
    {
      name: "Homemade Soup of the Day",
      description: "Served with freshly baked bread. Ask for today's selection.",
      price: "£4.95"
    },
    {
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      price: "£7.50"
    },
    {
      name: "Jacket Potato",
      description: "With a choice of fillings including tuna mayo, cheese, or beans.",
      price: "£5.95"
    }
  ];

  const drinksItems = [
    {
      name: "Americano",
      description: "Freshly brewed coffee.",
      price: "£2.50"
    },
    {
      name: "Cappuccino/Latte",
      description: "Espresso with steamed milk.",
      price: "£2.95"
    },
    {
      name: "Tea Selection",
      description: "Choose from a variety of teas including English Breakfast, Earl Grey, and herbal options.",
      price: "£2.30"
    },
    {
      name: "Fruit Smoothie",
      description: "Made with fresh fruits. Ask for today's flavors.",
      price: "£3.50"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/media/SBC House specific photos/cafe-sbc-house.jpg"
            alt="SBC Cafe"
            speed={0.3}
            imgClassName="brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">SBC Cafe</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Fresh food and premium coffee in the heart of SBC House.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">A Delightful Space to Relax & Recharge</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Located on the ground floor of SBC House, our cafe provides a welcoming 
                    environment for tenants and visitors alike. Whether you're looking for a 
                    quick breakfast, a delicious lunch, or simply a great cup of coffee, our 
                    friendly team is here to serve you.
                  </p>
                  <p>
                    We take pride in offering freshly prepared food made with quality ingredients, 
                    alongside a selection of premium coffees, teas, and cold drinks. Our menu 
                    changes seasonally to make the most of fresh, local produce.
                  </p>
                  <p>
                    With comfortable seating and a relaxed atmosphere, the SBC Cafe is the 
                    perfect place to take a break, have an informal meeting, or simply enjoy 
                    a moment of calm during your busy day.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/media/SBC House specific photos/cafe-sbc-house 2.jpg" 
                  alt="SBC Cafe Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cafe Highlights</h2>
              <p className="text-lg text-gray-600">
                What makes the SBC Cafe special? Here's why our customers love us.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cafeFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Menu</h2>
              <p className="text-lg text-gray-600">
                A selection of our most popular items. Menu changes seasonally.
              </p>
            </FadeIn>
          </div>

          {/* Breakfast */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">Breakfast</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {breakfastItems.map((item, index) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>

          {/* Lunch */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">Lunch</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lunchItems.map((item, index) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">Drinks</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drinksItems.map((item, index) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cafe Gallery</h2>
              <p className="text-lg text-gray-600">
                Glimpses of our cafe space and some of our delicious offerings.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/media/SBC House specific photos/cafe-sbc-house.jpg"
                  alt="SBC Cafe Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/media/SBC House specific photos/cafe-sbc-house 2.jpg"
                  alt="SBC Cafe Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/media/SBC House specific photos/KITCHEN.jpg"
                  alt="SBC Cafe Kitchen Area"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image 
                      src="/media/Stock photos/pexels-mohammad-danish-290641-891059.jpg" 
                      alt="Customer Testimonial" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <svg className="h-8 w-8 text-[#4C9D43] mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl text-gray-600 italic mb-6">
                    "The SBC Cafe is one of the best perks of having an office here. The food is always fresh and delicious, and the coffee is exceptional. It's also become my go-to spot for informal client meetings - the relaxed atmosphere is perfect for breaking the ice."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">Daniel Morgan</p>
                    <p className="text-gray-600">Tenant since 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Information & Hours Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Opening Hours</h2>
                <div className="text-lg">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-[#4C9D43] font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Saturday - Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Bank Holidays</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  Food orders are accepted until 30 minutes before closing time.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-900">Special Dietary Requirements:</span> We 
                    can accommodate most dietary needs. Please ask our staff for allergen information or 
                    special requests.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Catering Services:</span> We offer catering 
                    for meetings and events within SBC House. Please give us at least 24 hours' notice for 
                    catering orders.
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Loyalty Program:</span> Ask about our loyalty 
                    card program - buy 9 coffees and get your 10th free!
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Located on the ground floor of SBC House, our cafe is open to both tenants and visitors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/facilities"
                className="inline-block px-8 py-4 text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300"
              >
                Explore SBC House
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default CafePage; 