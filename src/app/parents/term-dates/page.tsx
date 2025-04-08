'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface TermCardProps {
  title: string;
  dates: string;
  holidayClub: boolean;
  index: number;
}

const TermCard: React.FC<TermCardProps> = ({ title, dates, holidayClub, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{dates}</p>
        <div className="flex items-center text-sm">
          <CalendarDaysIcon className="h-5 w-5 text-emerald-600 mr-2" />
          <span className="font-medium text-emerald-700">
            {holidayClub ? 'Holiday Club Available' : 'Term Time - Standard Hours'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function TermDatesPage() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  // Term dates information
  const termDates = [
    {
      title: 'Summer Term 2024',
      dates: 'Monday 15 April - Friday 19 July',
      holidayClub: false,
      notes: 'Half Term: Monday 27 May - Friday 31 May (Holiday Club available)'
    },
    {
      title: 'Summer Holiday 2024',
      dates: 'Monday 22 July - Friday 30 August',
      holidayClub: true,
      notes: 'Holiday Club runs for 6 weeks'
    },
    {
      title: 'Autumn Term 2024',
      dates: 'Monday 2 September - Friday 20 December',
      holidayClub: false,
      notes: 'Half Term: Monday 28 October - Friday 1 November (Holiday Club available)'
    },
    {
      title: 'Christmas Holiday 2024/25',
      dates: 'Monday 23 December - Friday 3 January',
      holidayClub: true,
      notes: 'Holiday Club closed 24-26 December and 1 January'
    },
    {
      title: 'Spring Term 2025',
      dates: 'Monday 6 January - Friday 4 April',
      holidayClub: false,
      notes: 'Half Term: Monday 17 February - Friday 21 February (Holiday Club available)'
    },
    {
      title: 'Easter Holiday 2025',
      dates: 'Monday 7 April - Friday 18 April',
      holidayClub: true,
      notes: 'Holiday Club closed on Good Friday'
    }
  ];

  // Holiday club information
  const holidayClubInfo = [
    {
      title: 'Summer Holiday Club 2024',
      dates: '22 July - 30 August (6 weeks)',
      booking: 'Booking opens 1 June',
      activities: 'Summer outdoor activities, trips, water play, arts and crafts'
    },
    {
      title: 'October Half Term Club 2024',
      dates: '28 October - 1 November',
      booking: 'Booking opens 16 September',
      activities: 'Autumn and Halloween themed activities'
    },
    {
      title: 'Christmas Holiday Club 2024',
      dates: '23 December - 3 January (Closed 24-26 Dec & 1 Jan)',
      booking: 'Booking opens 11 November',
      activities: 'Festive crafts, games, and celebrations'
    },
    {
      title: 'February Half Term Club 2025',
      dates: '17 February - 21 February',
      booking: 'Booking opens 6 January',
      activities: 'Winter activities and indoor games'
    },
    {
      title: 'Easter Holiday Club 2025',
      dates: '7 April - 18 April (Closed Good Friday)',
      booking: 'Booking opens 24 February',
      activities: 'Spring and Easter themed activities and egg hunt'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Banner */}
      <div className="bg-emerald-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485757599_1068300908675799_8887465086976825802_n.jpg"
            alt="Children playing at Bisley Base"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Term Dates & Holiday Clubs</h1>
            <p className="text-xl">Plan ahead with our term dates and holiday club schedules</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Term Dates Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Term Dates {currentYear}/{nextYear.toString().slice(-2)}</h2>
            <p className="text-gray-700 mb-6">
              Bisley Base operates in alignment with the local school calendar. Our After School Club and Breakfast Club run during term time, while our Holiday Club operates during school holidays.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {termDates.map((term, index) => (
                <TermCard
                  key={index}
                  title={term.title}
                  dates={term.dates}
                  holidayClub={term.holidayClub}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <h3 className="text-lg font-medium text-amber-800 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Term dates follow local school calendars and may be subject to change.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Holiday Club requires separate booking and payment.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>INSET days: Bisley Base may offer full-day care on school INSET days - please enquire early as spaces are limited.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Holiday Club Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Holiday Club Schedule</h2>
            <p className="text-gray-700 mb-6">
              Our Holiday Club operates during school breaks, providing fun and engaging activities for children aged 4-11. Advanced booking is essential as places fill quickly.
            </p>

            {holidayClubInfo.map((club, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">{club.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <CalendarDaysIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Dates</p>
                      <p className="text-gray-600">{club.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Booking</p>
                      <p className="text-gray-600">{club.booking}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Activities</p>
                      <p className="text-gray-600">{club.activities}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <h3 className="text-lg font-medium text-emerald-800 mb-3">Holiday Club Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Hours:</strong> 8:00am - 6:00pm with flexible drop-off and pick-up options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Cost:</strong> Full day and half day options available. Sibling discounts apply.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Booking:</strong> Early booking is recommended as spaces fill quickly. See <Link href="/parents/fees" className="text-emerald-600 hover:text-emerald-700">Fees</Link> page for pricing information.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Activities:</strong> Varied program including sports, arts, cooking, trips, and special guests.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/parents/admissions"
                  className="inline-flex items-center px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300"
                >
                  Book Holiday Club
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-gray-100 rounded-xl p-6 sm:p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about our services or would like to discuss specific dates, please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/contact" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </Link>
            <Link href="/parents/fees" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">Fees & Payment</h3>
              <p className="text-sm text-gray-600">View our pricing information</p>
            </Link>
            <Link href="/parents/faqs" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">FAQs</h3>
              <p className="text-sm text-gray-600">Common questions answered</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 