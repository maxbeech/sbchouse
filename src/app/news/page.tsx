'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'events', name: 'Events' },
    { id: 'updates', name: 'Updates' },
    { id: 'holiday-club', name: 'Holiday Club' },
    { id: 'term-time', name: 'Term Time' }
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: 'summer-holiday-club',
      title: 'Summer Holiday Club Booking Now Open',
      date: 'May 15, 2024',
      excerpt: 'Secure your child\'s place in our action-packed summer holiday club with exciting activities, outdoor adventures, and creative fun. Early bird discounts available until June 15th!',
      image: '/media/484871687_1066676745504882_7776977396599937926_n.jpg',
      category: 'holiday-club'
    },
    {
      id: 'preschool-open-day',
      title: 'Preschool Open Day Announced',
      date: 'April 30, 2024',
      excerpt: 'Join us for our upcoming Open Day on Saturday, June 8th to tour our facilities, meet our qualified staff, and learn about our preschool curriculum. Registration required.',
      image: '/media/484902036_1066676725504884_4700747617186550414_n.jpg',
      category: 'events'
    },
    {
      id: 'forest-school-activities',
      title: 'New Forest School Activities Launch',
      date: 'April 12, 2024',
      excerpt: 'We\'re excited to introduce new forest school activities to our curriculum, fostering outdoor learning and exploration. Our staff have completed specialized training to deliver this program.',
      image: '/media/484918616_1066676722171551_1681522475451576546_n.jpg',
      category: 'updates'
    },
    {
      id: 'staff-training-day',
      title: 'Staff Training Day - June 3rd Closure',
      date: 'April 5, 2024',
      excerpt: 'Please note that Bisley Base will be closed on Monday, June 3rd for our annual staff training day. We apologize for any inconvenience and thank you for your understanding.',
      image: '/media/484902934_1066676832171540_4221519586243368102_n.jpg',
      category: 'updates'
    },
    {
      id: 'easter-egg-hunt-success',
      title: 'Easter Egg Hunt Success',
      date: 'March 28, 2024',
      excerpt: 'Thank you to all who participated in our annual Easter egg hunt! It was a wonderful day filled with excitement, laughter, and chocolate. Check out the photos in our gallery.',
      image: '/media/484871528_1066677122171511_3626558949284894548_n.jpg',
      category: 'events'
    },
    {
      id: 'summer-term-dates',
      title: 'Summer Term Dates Announced',
      date: 'March 15, 2024',
      excerpt: 'Our summer term dates are now available on our website. The term begins on April 15th and ends on July 19th, with half term from May 27th to May 31st. Holiday Club available.',
      image: '/media/484848642_1066677095504847_8445714436322095198_n.jpg',
      category: 'term-time'
    },
    {
      id: 'new-healthy-menu',
      title: 'New Healthy Menu Launched',
      date: 'March 1, 2024',
      excerpt: 'We\'ve updated our food menu to include even more nutritious and delicious options. Our new menu focuses on fresh ingredients and balanced meals to fuel active minds and bodies.',
      image: '/media/484903596_1066677078838182_7009116715882669806_n.jpg',
      category: 'updates'
    },
    {
      id: 'easter-holiday-club',
      title: 'Easter Holiday Club Registration Open',
      date: 'February 20, 2024',
      excerpt: 'Registration is now open for our Easter Holiday Club, running April 1st-5th and April 8th-12th. We\'ve planned egg-citing activities, spring crafts, and outdoor adventures!',
      image: '/media/484896872_1066677115504845_7644065957221388011_n.jpg',
      category: 'holiday-club'
    },
    {
      id: 'parent-partnership',
      title: 'Parent Partnership Initiative Launch',
      date: 'February 10, 2024',
      excerpt: 'We\'re proud to announce our new Parent Partnership Initiative, designed to strengthen communication and collaboration between our staff and parents for the benefit of our children.',
      image: '/media/484871015_1066676782171545_7767803898011003153_n.jpg',
      category: 'updates'
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  // Get featured (most recent) article
  const featuredArticle = newsArticles[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Banner */}
      <div className="bg-emerald-700 text-white pt-24 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484870132_1066677108838179_325247965929575652_n.jpg"
            alt="Children playing at Bisley Base"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl">Stay informed about the latest happenings at Bisley Base</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-2/5 h-64 md:h-auto relative">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-2">
                  <CalendarDaysIcon className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-sm text-gray-600">{featuredArticle.date}</span>
                  <span className="ml-4 text-xs font-medium bg-emerald-100 text-emerald-800 py-1 px-2 rounded-full uppercase">
                    {categories.find(cat => cat.id === featuredArticle.category)?.name}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-700 mb-6">{featuredArticle.excerpt}</p>
                <Link 
                  href={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Read more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-xs font-medium text-emerald-800 py-1 px-2 rounded-full">
                  {categories.find(cat => cat.id === article.category)?.name}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <CalendarDaysIcon className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700"
                >
                  Read more
                  <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-emerald-50 rounded-xl p-8 border border-emerald-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-emerald-800 mb-3">Stay Updated</h2>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter to receive the latest news, updates, and event announcements directly to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                We respect your privacy and will never share your information. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Upcoming Events</h3>
            <p className="text-gray-700 mb-4">View our calendar to stay informed about upcoming events and important dates.</p>
            <Link 
              href="/parents/term-dates" 
              className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center"
            >
              View Calendar
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Holiday Club Bookings</h3>
            <p className="text-gray-700 mb-4">Secure your child's place in our popular holiday clubs for school breaks.</p>
            <Link 
              href="/parents/admissions" 
              className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center"
            >
              Book Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Photo Gallery</h3>
            <p className="text-gray-700 mb-4">Browse our photo gallery to see all the fun activities and events at Bisley Base.</p>
            <Link 
              href="/gallery" 
              className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center"
            >
              View Gallery
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 