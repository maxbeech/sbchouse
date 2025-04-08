'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// FAQ Item component with animation
interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div 
      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <button
        onClick={onToggle}
        className={`flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-300 ${isOpen ? 'border-b border-gray-200' : ''}`}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <ChevronDownIcon 
          className={`w-5 h-5 text-emerald-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 bg-white"
        >
          <div className="prose prose-emerald max-w-none">
            {answer}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: (
        <>
          <p>Our hours of operation are as follows:</p>
          <ul>
            <li><strong>Breakfast Club:</strong> 7:30am to 9:00am</li>
            <li><strong>After School Club:</strong> 3:00pm to 6:00pm</li>
            <li><strong>Holiday Club:</strong> 8:00am to 6:00pm during school holidays</li>
          </ul>
        </>
      )
    },
    {
      question: "How do I register my child for Bisley Base services?",
      answer: (
        <>
          <p>To register your child:</p>
          <ol>
            <li>Complete our <Link href="/parents/admissions" className="text-emerald-600 hover:text-emerald-700">registration form</Link> online or in person</li>
            <li>Provide all required documentation (birth certificate, immunization records)</li>
            <li>Pay the registration fee to secure your child's place</li>
          </ol>
          <p>Once registration is complete, you'll receive a welcome pack with further information.</p>
        </>
      )
    },
    {
      question: "What is your staff-to-child ratio?",
      answer: (
        <p>We maintain the following staff-to-child ratios to ensure quality care and supervision:<br />
        - Children aged 4-7: 1:8 ratio<br />
        - Children aged 8+: 1:10 ratio<br />
        These ratios exceed the minimum requirements set by Ofsted and allow us to provide personalized attention to each child.</p>
      )
    },
    {
      question: "What activities do you offer?",
      answer: (
        <>
          <p>We offer a wide range of activities to engage children of all interests:</p>
          <ul>
            <li>Arts and crafts</li>
            <li>Outdoor games and sports</li>
            <li>Reading and quiet time</li>
            <li>Cooking activities</li>
            <li>STEM projects</li>
            <li>Group games and team-building exercises</li>
            <li>Supervised free play</li>
          </ul>
          <p>Our activity schedule changes regularly to keep things fresh and exciting for the children.</p>
        </>
      )
    },
    {
      question: "Do you provide food and snacks?",
      answer: (
        <>
          <p>Yes, we provide nutritious food and snacks as part of our service:</p>
          <ul>
            <li><strong>Breakfast Club:</strong> A healthy breakfast with options like cereal, toast, fruit, and yogurt</li>
            <li><strong>After School Club:</strong> A substantial snack such as sandwiches, fruit, vegetables, and occasionally baked treats</li>
            <li><strong>Holiday Club:</strong> Morning and afternoon snacks (lunch to be provided by parents)</li>
          </ul>
          <p>We accommodate dietary requirements and allergies - please inform us during registration.</p>
        </>
      )
    },
    {
      question: "What is your cancellation policy?",
      answer: (
        <p>We require a minimum of 48 hours' notice for cancellations to receive a credit. Cancellations with less than 48 hours' notice will be charged the full session fee. For Holiday Club bookings, we require 7 days' notice for cancellations. Please see our <Link href="/parents/policies" className="text-emerald-600 hover:text-emerald-700">Policies page</Link> for complete details.</p>
      )
    },
    {
      question: "How do I pay for childcare services?",
      answer: (
        <>
          <p>We accept various payment methods:</p>
          <ul>
            <li>Direct bank transfer</li>
            <li>Credit/debit card (online or in person)</li>
            <li>Childcare vouchers</li>
            <li>Tax-Free Childcare</li>
          </ul>
          <p>Payments are due monthly in advance. For more information about fees and payment options, please visit our <Link href="/parents/fees" className="text-emerald-600 hover:text-emerald-700">Fees page</Link>.</p>
        </>
      )
    },
    {
      question: "Do you accept childcare vouchers?",
      answer: (
        <p>Yes, we accept childcare vouchers from most providers. We are also registered for Tax-Free Childcare. Please contact us for our provider registration details for your specific voucher company.</p>
      )
    },
    {
      question: "What happens if I'm late picking up my child?",
      answer: (
        <p>While we understand occasional delays can happen, we charge a late fee for pickups after our closing time. The late fee is £10 for the first 15 minutes and £1 per minute thereafter. Persistent lateness may result in a review of your child's place. Please always call us if you're running late.</p>
      )
    },
    {
      question: "What qualifications do your staff have?",
      answer: (
        <p>All our staff are qualified childcare professionals with a minimum of Level 3 qualification in childcare or equivalent. Our team members are DBS checked, First Aid trained, and regularly participate in professional development. Our management team holds higher qualifications including degrees in Early Childhood Education.</p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Banner */}
      <div className="bg-emerald-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/485183981_1068300772009146_7399086090498835013_n.jpg"
            alt="Children playing at Bisley Base"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">Find answers to common questions about our childcare services</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8"
        >
          <p className="text-gray-700 mb-6">
            We've compiled answers to the most frequently asked questions about our services. If you can't find the answer you're looking for, please don't hesitate to <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium">contact us</Link>.
          </p>

          {/* FAQ accordion */}
          <div className="mt-8">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Additional resources section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-emerald-50 rounded-xl p-6 sm:p-8 border border-emerald-100"
        >
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Still Have Questions?</h2>
          <p className="mb-6 text-gray-700">
            If you couldn't find the answer to your question, please check our other resources or get in touch with us directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/parents/policies" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">Policies</h3>
              <p className="text-sm text-gray-600">View our detailed policies and procedures</p>
            </Link>
            <Link href="/parents/term-dates" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">Term Dates</h3>
              <p className="text-sm text-gray-600">Check our operating schedules and term dates</p>
            </Link>
            <Link href="/contact" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 border border-gray-200">
              <h3 className="font-medium text-emerald-700 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">Reach out directly with your questions</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 