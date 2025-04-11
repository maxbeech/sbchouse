'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, UsersIcon, ComputerDesktopIcon, WifiIcon, CakeIcon } from '@heroicons/react/24/outline';

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

export default function MeetingRooms() {
  // Room Types
  const roomTypes = [
    {
      name: "Small Meeting Room",
      capacity: "2-4 people",
      description: "Perfect for small team meetings, interviews, and one-on-one client consultations.",
      features: [
        "Comfortable seating for up to 4 people",
        "High-speed Wi-Fi connection",
        "LCD screen for presentations",
        "Natural lighting",
        "Climate control"
      ],
      image: "/media/SBC House specific photos/MEETING-ROOM.jpg"
    },
    {
      name: "Medium Meeting Room",
      capacity: "5-8 people",
      description: "Ideal for team meetings, training sessions, and client presentations.",
      features: [
        "Conference table with seating for up to 8 people",
        "High-speed Wi-Fi connection",
        "Large LCD screen for presentations",
        "Video conferencing equipment",
        "Whiteboard and flipchart",
        "Natural lighting",
        "Climate control"
      ],
      image: "/media/SBC House specific photos/meeting-room-2.jpg"
    },
    {
      name: "Large Meeting Room",
      capacity: "10-15 people",
      description: "Spacious room for larger team meetings, workshops, and important client presentations.",
      features: [
        "Large conference table with seating for up to 15 people",
        "High-speed Wi-Fi connection",
        "Projector and large screen",
        "Advanced video conferencing system",
        "Multiple whiteboards and flipcharts",
        "Natural lighting",
        "Climate control",
        "Water and refreshment service available"
      ],
      image: "/media/SBC House specific photos/meeting-room-2.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-purple-900 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/SBC House specific photos/meeting-room-2.jpg"
            alt="SBC House Meeting Rooms"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meeting Rooms</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Professional, fully-equipped meeting spaces for all your business needs.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Meeting Spaces</h2>
                <p className="text-lg text-gray-600 mb-6">
                  First impressions matter, especially when meeting clients or conducting important business discussions. Our professional meeting rooms at SBC House provide the perfect environment for productive meetings, presentations, interviews, and workshops.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Available to rent by the hour, half-day, or full day, our meeting rooms are designed with business needs in mind, featuring modern technology, comfortable furnishings, and a professional atmosphere.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <UsersIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Various Room Sizes</h3>
                      <p className="text-gray-600">From intimate 2-person meetings to larger team gatherings of up to 15 people.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <ComputerDesktopIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Modern Technology</h3>
                      <p className="text-gray-600">All rooms equipped with screens, projectors, and video conferencing facilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <WifiIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">High-Speed Internet</h3>
                      <p className="text-gray-600">Fast, reliable Wi-Fi to ensure smooth presentations and video calls.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                      <CakeIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Catering Options</h3>
                      <p className="text-gray-600">Refreshments and catering available from our on-site SBC Café.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <Image
                  src="/media/SBC House specific photos/MEETING-ROOM.jpg"
                  alt="SBC House Meeting Room"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Room Types */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Meeting Rooms</h2>
              <p className="text-lg text-gray-600">
                Choose the perfect meeting space based on your specific requirements.
              </p>
            </div>
          </FadeIn>
          
          <div className="space-y-12">
            {roomTypes.map((room, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-10">
                      <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-4">
                        Capacity: {room.capacity}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{room.name}</h3>
                      <p className="text-gray-600 mb-6">{room.description}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {room.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                              <CheckIcon className="h-3 w-3" />
                            </div>
                            <p className="ml-3 text-gray-600">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Booking Options</h2>
              <p className="text-lg text-gray-600">
                Our meeting rooms are available for hire by the hour, half-day, or full day to suit your business needs.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hourly Booking</h3>
                  <p className="text-gray-600 mb-4">For short meetings and discussions</p>
                  <p className="text-3xl font-bold text-gray-900">From £20/hr</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "Minimum 1-hour booking",
                      "All facilities included",
                      "Wi-Fi and AV equipment",
                      "Tea and coffee available",
                      "Ideal for brief meetings"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-white border border-[#4C9D43] text-[#4C9D43] hover:bg-[#4C9D43] hover:text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-md border-2 border-[#4C9D43] overflow-hidden h-full flex flex-col relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#4C9D43] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
                <div className="p-8 bg-green-50 border-b border-green-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Half-Day Booking</h3>
                  <p className="text-gray-600 mb-4">For longer meetings and workshops</p>
                  <p className="text-3xl font-bold text-gray-900">From £75</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "4-hour booking",
                      "All facilities included",
                      "Wi-Fi and AV equipment",
                      "Complimentary tea and coffee",
                      "Whiteboard and stationery",
                      "Water service included",
                      "Catering options available"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-green-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-[#4C9D43] text-white hover:bg-[#3E8035] font-medium rounded-md transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-8 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Day Booking</h3>
                  <p className="text-gray-600 mb-4">For all-day meetings and events</p>
                  <p className="text-3xl font-bold text-gray-900">From £140</p>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "8-hour booking",
                      "All facilities included",
                      "Wi-Fi and AV equipment",
                      "Unlimited tea and coffee",
                      "Whiteboard and stationery",
                      "Water and refreshments",
                      "Lunch options available",
                      "Technical support",
                      "Early/late access (by arrangement)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </div>
                        <p className="ml-3 text-gray-600 text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-white border border-[#4C9D43] text-[#4C9D43] hover:bg-[#4C9D43] hover:text-white font-medium rounded-md transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
              <p className="text-lg text-gray-600">
                Enhance your meeting experience with our range of additional services.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Catering</h3>
                <p className="text-gray-600">
                  From light refreshments to full lunches, our SBC Café can provide catering options for your meeting.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Printing & Copying</h3>
                <p className="text-gray-600">
                  Print, copy, and scan facilities available for meeting handouts and documents.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reception Services</h3>
                <p className="text-gray-600">
                  Professional reception staff to greet and direct your guests to your meeting room.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600">
                  Assistance with AV equipment, video conferencing setup, and other technical needs.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Meeting?</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to check availability and reserve your perfect meeting space at SBC House.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-purple-900 font-medium rounded-md hover:bg-purple-50 transition-colors duration-300 inline-block"
              >
                Book a Meeting Room
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
} 