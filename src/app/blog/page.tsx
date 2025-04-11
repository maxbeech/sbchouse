'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, TagIcon } from '@heroicons/react/24/outline';

// Animation component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = ""
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'SBC House Wins Sutton Business Award for Sustainability',
    excerpt: 'We are proud to announce that SBC House has been recognized with the Sutton Business Award for our commitment to sustainable business practices and green initiatives.',
    date: 'June 15, 2024',
    author: 'SBC House Team',
    category: 'Awards',
    imageUrl: '/media/Awards/sutton-business-awards.jpg',
    slug: 'sbc-house-wins-sutton-business-award'
  },
  {
    id: 2,
    title: 'The Benefits of Flexible Office Space for Growing Businesses',
    excerpt: 'Discover how flexible office solutions at SBC House can help your business adapt and grow without the constraints of traditional long-term leases.',
    date: 'May 28, 2024',
    author: 'SBC House Team',
    category: 'Business Tips',
    imageUrl: '/media/SBC House specific photos/SBC-Office-pic-1-1.jpg',
    slug: 'benefits-of-flexible-office-space'
  },
  {
    id: 3,
    title: 'SBC House Awarded Hackbridge Green Business Certification',
    excerpt: 'SBC House is proud to announce our certification as a Hackbridge Green Business, recognizing our ongoing commitment to environmental sustainability.',
    date: 'April 10, 2024',
    author: 'SBC House Team',
    category: 'Awards',
    imageUrl: '/media/Awards/Hackbridge-Green-Business.jpg',
    slug: 'hackbridge-green-business-certification'
  },
  {
    id: 4,
    title: 'Virtual Office Solutions: The Future of Work',
    excerpt: 'Learn how our virtual office solutions can provide your business with a professional presence while allowing for remote work flexibility.',
    date: 'March 22, 2024',
    author: 'SBC House Team',
    category: 'Business Tips',
    imageUrl: '/media/Stock photos/virtual-office.jpg',
    slug: 'virtual-office-solutions-future-of-work'
  },
  {
    id: 5,
    title: 'The SBC Café Launches New Menu',
    excerpt: 'The SBC Café has expanded its offerings with a new menu featuring fresh, locally-sourced ingredients and a variety of healthy options.',
    date: 'February 15, 2024',
    author: 'SBC House Team',
    category: 'Announcements',
    imageUrl: '/media/SBC House specific photos/cafe-sbc-house.jpg',
    slug: 'sbc-cafe-launches-new-menu'
  },
  {
    id: 6,
    title: 'How to Choose the Right Storage Solution for Your Business',
    excerpt: 'Find the perfect storage solution for your business needs with our comprehensive guide to commercial storage options at SBC House.',
    date: 'January 30, 2024',
    author: 'SBC House Team',
    category: 'Business Tips',
    imageUrl: '/media/Stock photos/storage-solutions.jpg',
    slug: 'choose-right-storage-solution'
  }
];

// Category list
const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Business Tips', count: blogPosts.filter(post => post.category === 'Business Tips').length },
  { name: 'Awards', count: blogPosts.filter(post => post.category === 'Awards').length },
  { name: 'Announcements', count: blogPosts.filter(post => post.category === 'Announcements').length }
];

// Blog post card component
interface BlogPostCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    slug: string;
  };
  delay?: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, delay = 0 }) => {
  return (
    <FadeIn delay={delay} direction="up" className="h-full">
      <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
        <div className="relative h-48 sm:h-60">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill 
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#4C9D43] transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-sm">
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-600 font-medium">{post.author}</span>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter posts by category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/green-area-light.jpg"
            alt="SBC House Green Area"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Stay updated with the latest news, tips, and information from SBC House.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.1} className="sticky top-24">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all pr-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      <MagnifyingGlassIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-left transition-colors ${
                            selectedCategory === category.name
                              ? 'bg-green-50 text-green-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogPostCard
                      key={post.id}
                      post={post}
                      delay={0.1 + index * 0.1}
                    />
                  ))}
                </div>
              ) : (
                <FadeIn direction="up" className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
                  <p className="text-gray-600 mb-6">
                    Stay updated with the latest news, events, and offers from SBC House.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all flex-grow"
                    />
                    <button className="px-5 py-3 bg-[#4C9D43] text-white font-medium rounded-md hover:bg-[#3E8035] transition-colors duration-300 whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
                <div className="hidden md:block relative h-60">
                  <Image
                    src="/media/SBC House specific photos/Reception.jpg"
                    alt="SBC House Reception"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 