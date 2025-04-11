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

export default function Terms() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Please read these terms and conditions carefully before using our services.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="prose prose-lg max-w-none">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600">
                  These terms and conditions govern your use of the SBC House website and services; by using our website and services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
                </p>
                <p className="text-gray-600 mt-4">
                  Last updated: June 1, 2024
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">License to Use Website</h2>
                <p className="text-gray-600">
                  Unless otherwise stated, SBC House and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
                </p>
                <p className="text-gray-600 mt-4">
                  You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
                </p>
                <p className="text-gray-600 mt-4">
                  You must not:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
                  <li>Republish material from this website (including republication on another website)</li>
                  <li>Sell, rent or sub-license material from the website</li>
                  <li>Reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose</li>
                  <li>Redistribute material from this website except for content specifically and expressly made available for redistribution</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
                <p className="text-gray-600">
                  You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
                </p>
                <p className="text-gray-600 mt-4">
                  You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
                </p>
                <p className="text-gray-600 mt-4">
                  You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Terms</h2>
                <p className="text-gray-600">
                  By using our services, you agree to the following terms:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
                  <li>All payments must be made on time according to the terms of your lease or service agreement.</li>
                  <li>Clients are responsible for maintaining cleanliness in their rented space and for any damage caused beyond normal wear and tear.</li>
                  <li>Security access cards and keys remain the property of SBC House and must be returned at the end of your lease.</li>
                  <li>SBC House reserves the right to modify services and facilities with reasonable notice.</li>
                  <li>Compliance with all health, safety, and fire regulations is required at all times.</li>
                  <li>SBC House is not responsible for loss or damage to client property. Clients are advised to maintain appropriate insurance coverage.</li>
                  <li>Clients must give notice as specified in their lease agreement if they wish to terminate services.</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from negligence; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in any way that is not permitted under applicable law; or (d) exclude any of our or your liabilities that may not be excluded under applicable law.
                </p>
                <p className="text-gray-600 mt-4">
                  The limitations and exclusions of liability set out in this Section and elsewhere in these terms and conditions: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the terms and conditions or in relation to the subject matter of the terms and conditions, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
                </p>
                <p className="text-gray-600 mt-4">
                  To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
                <p className="text-gray-600 mt-4">
                  We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnity</h2>
                <p className="text-gray-600">
                  You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses (including, without limitation, legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute on the advice of our legal advisers) incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions, or arising out of any claim that you have breached any provision of these terms and conditions.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Variation</h2>
                <p className="text-gray-600">
                  We may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of our website from the date of the publication of the revised terms and conditions on our website. Please check this page regularly to ensure you are familiar with the current version.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Assignment</h2>
                <p className="text-gray-600">
                  We may transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.
                </p>
                <p className="text-gray-600 mt-4">
                  You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
                <p className="text-gray-600">
                  If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Entire Agreement</h2>
                <p className="text-gray-600">
                  These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website and services, and supersede all previous agreements in respect of your use of this website and our services.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Law and Jurisdiction</h2>
                <p className="text-gray-600">
                  These terms and conditions will be governed by and construed in accordance with the laws of the United Kingdom, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the United Kingdom.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacting Us</h2>
                <p className="text-gray-600">
                  If you have any questions about these terms and conditions or our services, please contact us at:
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