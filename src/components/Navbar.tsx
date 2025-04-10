'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { siteNavigation } from './layout/Footer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (openDropdown && !target.closest('.dropdown-menu') && !target.closest('.dropdown-toggle')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const facilitiesDropdown = [
    { name: 'Overview', href: '/facilities' },
    ...siteNavigation.services
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/media/logo_icon_only.png"
                alt="SBC House Logo"
                width={170}
                height={50}
                className="h-11 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {siteNavigation.main.map((item) => {
              // Special handling for facilities dropdown
              if (item.name === 'Facilities') {
                return (
                  <div key={item.name} className="relative dropdown-menu">
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 mx-1 dropdown-toggle ${
                        pathname.includes(item.href)
                          ? isScrolled
                            ? 'text-[#4C9D43] bg-green-50'
                            : 'text-white bg-white/10 backdrop-blur-sm'
                          : isScrolled
                            ? 'text-gray-800 hover:text-[#4C9D43]'
                            : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => toggleDropdown('facilities')}
                    >
                      {item.name}
                      <FiChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown menu */}
                    <AnimatePresence>
                      {openDropdown === 'facilities' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                        >
                          {facilitiesDropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm ${
                                pathname === subItem.href
                                  ? 'bg-green-50 text-[#4C9D43]'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              // Regular menu items
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 mx-1 ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-[#4C9D43] bg-green-50'
                        : 'text-white bg-white/10 backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-800 hover:text-[#4C9D43]'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-medium rounded-md text-white bg-[#4C9D43] hover:bg-[#3E8035] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md mobile-menu-button transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:text-[#4C9D43]'
                  : 'text-white hover:text-green-200'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {siteNavigation.main.map((item) => {
                // Facilities with nested submenu
                if (item.name === 'Facilities') {
                  return (
                    <div key={item.name}>
                      <button
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                          pathname.includes(item.href)
                            ? 'text-white bg-[#4C9D43]'
                            : 'text-gray-700 hover:bg-green-50 hover:text-[#4C9D43]'
                        }`}
                        onClick={() => toggleDropdown('mobile-facilities')}
                      >
                        {item.name}
                        <FiChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          openDropdown === 'mobile-facilities' ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === 'mobile-facilities' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {facilitiesDropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                  pathname === subItem.href
                                    ? 'text-[#4C9D43] bg-green-50'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                // Regular mobile menu items
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? 'text-white bg-[#4C9D43]'
                        : 'text-gray-700 hover:bg-green-50 hover:text-[#4C9D43]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-[#4C9D43] hover:bg-[#3E8035]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 