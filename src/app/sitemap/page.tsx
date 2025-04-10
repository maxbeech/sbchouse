'use client';

import Link from 'next/link';
import { siteNavigation } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function Sitemap() {
  // Combine all navigation items for the sitemap
  const allNavigation = [
    {
      title: 'Main Pages',
      items: siteNavigation.main
    },
    {
      title: 'Services',
      items: siteNavigation.services
    },
    {
      title: 'Legal',
      items: siteNavigation.legal.filter(item => item.name !== 'Sitemap') // Exclude sitemap from itself
    }
  ];
  
  // Add any additional pages that might not be in the main navigation
  const additionalPages = [
    { 
      title: 'Services',
      items: [
        { name: 'Email & Secretarial Support', href: '/services/secretarial-support' },
        { name: 'Telephone Answering', href: '/services/call-handling' },
        { name: 'Meeting Room Facilities', href: '/services/meeting-rooms' },
        { name: 'Photocopying & Printing', href: '/services/printing' },
        { name: '24/7 Access', href: '/services/access' },
        { name: 'Security Services', href: '/services/security' }
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-gray-300">
              A complete overview of all pages on the SBC House website
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dynamic Navigation Categories */}
          {allNavigation.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center text-[#4C9D43] hover:text-[#3E8035] hover:underline"
                    >
                      <span>{item.name}</span>
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Additional Pages */}
          {additionalPages.map((section, index) => (
            <motion.div
              key={section.title + '-additional'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (allNavigation.length + index) * 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                {section.title} Pages
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center text-[#4C9D43] hover:text-[#3E8035] hover:underline"
                    >
                      <span>{item.name}</span>
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
} 