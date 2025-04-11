'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/Reception.jpg"
            alt="SBC House Reception"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              SBC House is committed to protecting your privacy and personal data.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="prose prose-lg max-w-none">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600">
                  This Privacy Policy outlines how SBC House collects, uses, maintains, and discloses information collected from users of our website and services. This policy applies to the website and all products and services offered by SBC House.
                </p>
                <p className="text-gray-600 mt-4">
                  Last updated: June 1, 2024
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600">
                  We may collect personal identification information from users in a variety of ways, including, but not limited to, when users visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available. Users may be asked for, as appropriate, name, email address, phone number, company name, and other relevant information.
                </p>
                <p className="text-gray-600 mt-4">
                  We may also collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include the browser name, the type of computer, and technical information about users' means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Collected Information</h2>
                <p className="text-gray-600">
                  SBC House may collect and use users' personal information for the following purposes:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
                  <li>To improve customer service — Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                  <li>To personalize user experience — We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
                  <li>To improve our website — We may use feedback you provide to improve our products and services.</li>
                  <li>To process payments — We may use the information users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                  <li>To run a promotion, contest, survey or other site feature.</li>
                  <li>To send users information they agreed to receive about topics we think will be of interest to them.</li>
                  <li>To send periodic emails — We may use the email address to send user information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect Your Information</h2>
                <p className="text-gray-600">
                  We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our site.
                </p>
                <p className="text-gray-600 mt-4">
                  Sensitive and private data exchange between the site and its users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Personal Information</h2>
                <p className="text-gray-600">
                  We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600">
                  Our website may use "cookies" to enhance user experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the site may not function properly.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third Party Websites</h2>
                <p className="text-gray-600">
                  Users may find advertising or other content on our site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our site, is subject to that website's own terms and policies.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600">
                  Under the GDPR and UK data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  SBC House has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Acceptance of These Terms</h2>
                <p className="text-gray-600">
                  By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacting Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                </p>
                <div className="mt-4 text-gray-800">
                  <p><strong>SBC House</strong></p>
                  <p>Restmor Way</p>
                  <p>Wallington</p>
                  <p>SM6 7AH</p>
                  <p className="mt-2">Phone: <a href="tel:02082552040" className="text-[#4C9D43]">020 8255 2040</a></p>
                  <p>Email: <a href="mailto:info@sbc-house.com" className="text-[#4C9D43]">info@sbc-house.com</a></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 