'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, PrinterIcon, DocumentDuplicateIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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

export default function PrintingServices() {
  // Service data
  const services = [
    {
      title: "Black & White Printing",
      description: "High-quality black and white printing services for documents, reports, and presentations.",
      features: [
        "A4 and A3 sizes available",
        "Single and double-sided options",
        "Various paper weights",
        "Stapling and binding options",
        "Fast turnaround times"
      ],
      icon: <PrinterIcon className="h-6 w-6" />
    },
    {
      title: "Color Printing",
      description: "Vibrant color printing for brochures, marketing materials, presentations, and more.",
      features: [
        "Professional color quality",
        "A4 and A3 sizes available",
        "Gloss, matte, and specialty papers",
        "Single and double-sided options",
        "Various binding options"
      ],
      icon: <PrinterIcon className="h-6 w-6" />
    },
    {
      title: "Photocopying",
      description: "Quick and efficient photocopying services for all your document duplication needs.",
      features: [
        "High-speed copying",
        "A4 and A3 sizes",
        "Reduction and enlargement options",
        "Collating and stapling",
        "Single and double-sided options"
      ],
      icon: <DocumentDuplicateIcon className="h-6 w-6" />
    },
    {
      title: "Scanning",
      description: "Digital scanning services to convert your paper documents into electronic files.",
      features: [
        "High-resolution scanning",
        "Multiple file formats (PDF, JPG, TIFF)",
        "OCR technology available",
        "Email delivery option",
        "Secure document handling"
      ],
      icon: <DocumentTextIcon className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cyan-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
            alt="SBC House Printing Services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Printing Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Professional printing, copying, and scanning services to support your business needs.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Document Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At SBC House, we understand that businesses require reliable and high-quality document services. Our state-of-the-art printing, copying, and scanning facilities are available to support all your document needs.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you need to print important business documents, create professional marketing materials, or digitize your paper records, our services are designed to deliver excellent results with fast turnaround times.
                </p>
                
                <div className="space-y-4">
                  {[
                    "High-quality printing in black & white and color",
                    "Fast photocopying services",
                    "Professional document scanning",
                    "Wide range of paper options",
                    "Binding and finishing services"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 mt-0.5">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/Stock photos/pexels-tirachard-kumtanom-112571-733852.jpg"
                  alt="SBC House Printing Services"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Printing Services</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive range of printing, copying, and scanning services to meet all your business needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
                  <div className="p-3 bg-cyan-50 rounded-xl w-fit mb-6 text-cyan-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-medium text-gray-800 mb-4">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <Image
                  src="/media/Stock photos/pexels-mohamedalterki-1036808.jpg"
                  alt="Document binding services"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Document Services</h2>
                <p className="text-lg text-gray-600 mb-8">
                  In addition to our core printing, copying, and scanning services, we offer a range of document finishing options.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Document Binding</h3>
                    <p className="text-gray-600">
                      We offer various professional binding options including comb binding, spiral binding, and thermal binding to create polished, professional-looking documents.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lamination</h3>
                    <p className="text-gray-600">
                      Protect your important documents and enhance their durability with our professional lamination services, available in various sizes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Document Finishing</h3>
                    <p className="text-gray-600">
                      Complete your documents with our finishing services including collating, stapling, hole punching, and folding options.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Large Format Printing</h3>
                    <p className="text-gray-600">
                      Need larger prints? We can arrange large format printing services for posters, banners, technical drawings, and promotional materials.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <p className="text-lg text-gray-600">
                We offer competitive pricing for all our printing, copying, and scanning services.
              </p>
            </div>
          </FadeIn>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">A4 Single-Sided</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">A4 Double-Sided</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">A3 Single-Sided</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">A3 Double-Sided</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Black & White Printing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.10 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.15 per sheet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.20 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.30 per sheet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color Printing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.40 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.70 per sheet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.80 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1.40 per sheet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Photocopying (B&W)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.10 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.15 per sheet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.20 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.30 per sheet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Photocopying (Color)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.40 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.70 per sheet</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£0.80 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">£1.40 per sheet</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Scanning</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan={2}>£0.10 per page</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan={2}>£0.20 per page</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                * Volume discounts available for large orders. Please contact us for custom quotes. Additional charges may apply for specialty paper, binding, and other finishing options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-lg text-gray-600">
                Our printing services process is designed to be simple, efficient, and convenient.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Submit Your Request</h3>
                <p className="text-gray-600">
                  Email your documents to our printing services team, bring them in person, or use our online submission system. Include your specifications such as paper type, color/B&W, single/double-sided, and any finishing options.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Processing</h3>
                <p className="text-gray-600">
                  Our team will process your request promptly, ensuring your documents are printed to your exact specifications with professional quality. We'll notify you when your job is ready.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">Collection</h3>
                <p className="text-gray-600">
                  Collect your completed print job from our reception desk. For larger orders or regular clients, we can arrange delivery to your office within SBC House. Payment can be made on collection or added to your monthly invoice.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Use Our Printing Services?</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to discuss your printing, copying, or scanning needs, or to request a custom quote for your specific requirements.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-cyan-900 font-medium rounded-md hover:bg-cyan-50 transition-colors duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 