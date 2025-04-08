'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BanknotesIcon,
  ClockIcon,
  CalendarIcon,
  CreditCardIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Animation component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  className = "" 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Fee table component
interface FeePriceProps {
  session: string;
  price: string;
}

interface FeeTableProps {
  title: string;
  description: string;
  fees: FeePriceProps[];
  delay: number;
}

const FeeTable: React.FC<FeeTableProps> = ({ title, description, fees, delay }) => {
  return (
    <FadeIn delay={delay} direction="up">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-emerald-600 p-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-emerald-100 mt-2">{description}</p>
        </div>
        <div className="p-6">
          <div className="divide-y divide-gray-200">
            {fees.map((fee, index) => (
              <div key={index} className="py-4 flex justify-between">
                <p className="text-gray-600">{fee.session}</p>
                <p className="font-semibold text-gray-900">{fee.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default function Fees() {
  const preschoolFees = [
    { session: "Morning Session (9:00 AM - 12:00 PM)", price: "£25" },
    { session: "Full Day (9:00 AM - 3:00 PM)", price: "£50" },
    { session: "Extended Day (7:30 AM - 6:00 PM)", price: "£65" },
    { session: "Extra Hour", price: "£8" }
  ];

  const afterSchoolFees = [
    { session: "After School Club (3:00 PM - 6:00 PM)", price: "£18" },
    { session: "Early Collection (3:00 PM - 4:30 PM)", price: "£12" }
  ];

  const breakfastFees = [
    { session: "Breakfast Club (7:30 AM - 9:00 AM)", price: "£10" }
  ];

  const holidayFees = [
    { session: "Full Day (8:00 AM - 6:00 PM)", price: "£40" },
    { session: "Morning (8:00 AM - 1:00 PM)", price: "£25" },
    { session: "Afternoon (1:00 PM - 6:00 PM)", price: "£25" },
    { session: "Full Week (5 days)", price: "£180" }
  ];

  const discounts = [
    {
      title: "Sibling Discount",
      description: "10% discount for siblings attending the same session."
    },
    {
      title: "Full-Time Discount",
      description: "5% discount for children attending 5 full days per week."
    },
    {
      title: "NHS & Key Worker Discount",
      description: "10% discount for children of NHS staff and key workers."
    }
  ];

  const faqs = [
    {
      question: "When are fees due?",
      answer: "Fees are due on the 1st of each month. We send invoices on the 25th of the preceding month to give families time to arrange payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit card payments, childcare vouchers, and tax-free childcare payments."
    },
    {
      question: "Do you offer funded places?",
      answer: "Yes, we accept 15 and 30 hours funding for eligible children. Please contact us for details on how to claim your entitlement."
    },
    {
      question: "What is your late payment policy?",
      answer: "A late payment fee of £25 will be applied for payments received more than 7 days after the due date. Please contact us immediately if you anticipate payment difficulties."
    },
    {
      question: "Do I pay for bank holidays and staff training days?",
      answer: "Our fees are calculated to exclude bank holidays. We have four staff training days per year, which are also excluded from fee calculations."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484814396_1068300808675809_5975880135277935793_n.jpg"
            alt="Bisley Base Fees"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fees & Funding</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transparent pricing structure with flexible payment options
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <BanknotesIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Fee Structure</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Bisley Base, we strive to offer competitive rates while maintaining the highest standards of care. Our fee structure is designed to be transparent and flexible, accommodating various family needs and schedules.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We review our fees annually in September, with any changes implemented the following January. Parents will receive at least two months' notice of any adjustments to our fee structure.
                </p>
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">About Our Fees</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ClockIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">All fees include meals, snacks, and activities</p>
                    </li>
                    <li className="flex items-start">
                      <CalendarIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">Fees are calculated over 51 weeks per year (excluding Christmas week)</p>
                    </li>
                    <li className="flex items-start">
                      <CreditCardIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">Multiple payment options including childcare vouchers and tax-free childcare</p>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/media/485728744_1068300785342478_8984138583800929153_n.jpg"
                  alt="Children at Bisley Base"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fee Tables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Fees</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Flexible pricing options for all our childcare services.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FeeTable 
              title="Preschool (Ages 2-4)" 
              description="For our youngest children, developing foundational skills through play."
              fees={preschoolFees}
              delay={0.1}
            />
            <FeeTable 
              title="After School Club (Ages 4-11)" 
              description="Care and activities after school hours."
              fees={afterSchoolFees}
              delay={0.2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeeTable 
              title="Breakfast Club (Ages 4-11)" 
              description="A nutritious start to the day with breakfast included."
              fees={breakfastFees}
              delay={0.3}
            />
            <FeeTable 
              title="Holiday Club (Ages 4-11)" 
              description="Fun-filled activities during school holidays."
              fees={holidayFees}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Discounts & Funding */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Discounts */}
            <FadeIn>
              <div>
                <div className="flex items-center mb-6">
                  <CreditCardIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Discounts</h2>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We offer various discounts to help make childcare more affordable for families. Discounts cannot be combined.
                </p>
                <div className="space-y-6">
                  {discounts.map((discount, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{discount.title}</h3>
                      <p className="text-gray-600">{discount.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Funding */}
            <FadeIn delay={0.2}>
              <div>
                <div className="flex items-center mb-6">
                  <DocumentTextIcon className="w-10 h-10 text-emerald-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Funding Options</h2>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We accept various forms of government funding to help make childcare more accessible.
                </p>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Hours Funding</h3>
                    <p className="text-gray-600 mb-4">
                      All 3 and 4-year-olds in England are entitled to 15 hours of free childcare per week, for 38 weeks of the year.
                    </p>
                    <p className="text-gray-600">
                      We offer various session patterns to help you make the most of your funding entitlement.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Hours Funding</h3>
                    <p className="text-gray-600 mb-4">
                      Working parents of 3 and 4-year-olds may be eligible for an additional 15 hours of free childcare, totaling 30 hours per week.
                    </p>
                    <p className="text-gray-600">
                      You can check your eligibility and apply through the government's Childcare Choices website.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax-Free Childcare</h3>
                    <p className="text-gray-600">
                      For every £8 you pay into your Tax-Free Childcare account, the government will add an extra £2, up to £2,000 per child per year.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our straightforward payment process makes managing your childcare fees simple.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="p-3 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-emerald-600 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Monthly Invoice</h3>
                <p className="text-gray-600">
                  You'll receive your invoice on the 25th of each month for the following month's fees. Invoices detail all booked sessions and applicable discounts or funding.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="p-3 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-emerald-600 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Payment Methods</h3>
                <p className="text-gray-600">
                  Choose from various payment options including bank transfer, credit/debit card, childcare vouchers, or tax-free childcare. Our invoice includes all necessary payment details.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="p-3 bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-emerald-600 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Due Date</h3>
                <p className="text-gray-600">
                  All payments are due by the 1st of each month. If you anticipate any difficulties with payment, please contact us as soon as possible to discuss flexible options.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our fees and payment policies.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start">
                      <QuestionMarkCircleIcon className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Fees?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  If you have any questions about our fees, funding options, or payment process, our finance team is here to help. We understand that childcare costs are a significant consideration for families, and we're committed to providing transparent information and support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-6 h-6 text-emerald-600" />
                    <span className="text-gray-600">01483 489984</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-6 h-6 text-emerald-600" />
                    <span className="text-gray-600">finance@bisleybase.co.uk</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Contact Our Finance Team
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 