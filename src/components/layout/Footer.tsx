'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Define the navigation structure for sitemap generation
export const siteNavigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'SBC Cafe', href: '/cafe' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Offices', href: '/facilities/offices' },
    { name: 'Storage Units', href: '/facilities/storage' },
    { name: 'Virtual Office', href: '/facilities/virtual-office' },
    { name: 'Workshop Units', href: '/facilities/workshop' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ]
};

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/media/logo_icon_only.png"
                alt="SBC House Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Providing flexible solutions to the office, workshop and storage needs
              of your growing business since 1987.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#4C9D43] p-2 rounded-full text-white hover:bg-[#3E8035] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#4C9D43] p-2 rounded-full text-white hover:bg-[#3E8035] transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#4C9D43] p-2 rounded-full text-white hover:bg-[#3E8035] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4C9D43]">Quick Links</h3>
            <ul className="space-y-3">
              {siteNavigation.main.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`text-gray-400 hover:text-[#4C9D43] transition-colors duration-300 ${
                      pathname === link.href ? 'text-[#4C9D43]' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4C9D43]">Our Services</h3>
            <ul className="space-y-3">
              {siteNavigation.services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className={`text-gray-400 hover:text-[#4C9D43] transition-colors duration-300 ${
                      pathname === service.href ? 'text-[#4C9D43]' : ''
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#4C9D43]">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-[#4C9D43] mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-gray-400">
                  SBC House, Restmor Way, Wallington, SM6 7AH
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-[#4C9D43] mr-3 flex-shrink-0 w-5 h-5" />
                <span className="text-gray-400">020 8255 2040</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-[#4C9D43] mr-3 flex-shrink-0 w-5 h-5" />
                <a 
                  href="mailto:info@sbc-house.com" 
                  className="text-gray-400 hover:text-[#4C9D43] transition-colors duration-300"
                >
                  info@sbc-house.com
                </a>
              </li>
              <li className="flex items-start">
                <MdAccessTime className="text-[#4C9D43] mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <div className="text-gray-400">
                  <p>Monday–Friday:</p>
                  <p>08:00–17:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>&copy; {currentYear} SBC House. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {siteNavigation.legal.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="hover:text-[#4C9D43] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 