'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'activities', name: 'Activities' },
    { id: 'outdoor', name: 'Outdoor Play' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const images = [
    {
      id: 1,
      src: "/media/484871687_1066676745504882_7776977396599937926_n.jpg",
      alt: "Children enjoying outdoor activities",
      description: "Outdoor play in our spacious playground",
      category: "outdoor",
    },
    {
      id: 2,
      src: "/media/484902036_1066676725504884_4700747617186550414_n.jpg",
      alt: "Arts and crafts session",
      description: "Creative arts and crafts activities",
      category: "activities",
    },
    {
      id: 3,
      src: "/media/484918616_1066676722171551_1681522475451576546_n.jpg",
      alt: "Children playing in the facility",
      description: "Our well-equipped indoor play area",
      category: "facilities",
    },
    {
      id: 4,
      src: "/media/484902934_1066676832171540_4221519586243368102_n.jpg",
      alt: "Group activity session",
      description: "Group learning and development activities",
      category: "activities",
    },
    {
      id: 5,
      src: "/media/484871528_1066677122171511_3626558949284894548_n.jpg",
      alt: "Special event celebration",
      description: "Celebrating special occasions together",
      category: "events",
    },
    {
      id: 6,
      src: "/media/484848642_1066677095504847_8445714436322095198_n.jpg",
      alt: "Outdoor nature exploration",
      description: "Exploring nature in our outdoor space",
      category: "outdoor",
    },
    {
      id: 7,
      src: "/media/484903596_1066677078838182_7009116715882669806_n.jpg",
      alt: "Indoor play area",
      description: "Our colorful and safe indoor facilities",
      category: "facilities",
    },
    {
      id: 8,
      src: "/media/484896872_1066677115504845_7644065957221388011_n.jpg",
      alt: "Holiday celebration event",
      description: "Fun holiday-themed activities",
      category: "events",
    },
    {
      id: 9,
      src: "/media/484871015_1066676782171545_7767803898011003153_n.jpg",
      alt: "Group playtime in the garden",
      description: "Group play activities in our garden",
      category: "outdoor",
    },
    {
      id: 10,
      src: "/media/484870132_1066677108838179_325247965929575652_n.jpg",
      alt: "Reading corner",
      description: "Quiet reading and learning area",
      category: "facilities",
    },
    {
      id: 11,
      src: "/media/484905464_1066696058836284_7745369647773914144_n.jpg",
      alt: "Annual summer fair",
      description: "Our popular annual summer fair",
      category: "events",
    },
    {
      id: 12,
      src: "/media/484915429_1066695755502981_5471120345483197494_n.jpg",
      alt: "Art project display",
      description: "Showcase of children's creative projects",
      category: "activities",
    },
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Banner */}
      <div className="bg-emerald-700 text-white pt-24 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/484267254_1066948662144357_9115959165343696213_n.jpg"
            alt="Children playing at Bisley Base"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl">Explore life at Bisley Base through our photo gallery</p>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-sm cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <p className="text-gray-800 font-medium">{selectedImage.alt}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Life at Bisley Base</h2>
          <p className="text-gray-700 mb-6">
            Our gallery showcases the vibrant and engaging environment we provide for children at Bisley Base. From creative arts and crafts to outdoor adventures, our spaces are designed to nurture curiosity, learning, and fun.
          </p>
          <p className="text-gray-700">
            We regularly update our gallery with new photos of activities, special events, and everyday moments. Please note that all images are shared with parental permission and in accordance with our safeguarding policies.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <h3 className="text-lg font-medium text-emerald-800 mb-2">Activities Gallery</h3>
              <p className="text-gray-700 mb-4">Explore the wide range of activities we offer throughout the year.</p>
              <button 
                onClick={() => setActiveFilter('activities')}
                className="text-emerald-600 font-medium hover:text-emerald-700"
              >
                View Activities →
              </button>
            </div>
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <h3 className="text-lg font-medium text-emerald-800 mb-2">Outdoor Adventures</h3>
              <p className="text-gray-700 mb-4">See how our children benefit from outdoor play and exploration.</p>
              <button 
                onClick={() => setActiveFilter('outdoor')}
                className="text-emerald-600 font-medium hover:text-emerald-700"
              >
                View Outdoor Play →
              </button>
            </div>
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <h3 className="text-lg font-medium text-emerald-800 mb-2">Special Events</h3>
              <p className="text-gray-700 mb-4">Discover the exciting events and celebrations we host throughout the year.</p>
              <button 
                onClick={() => setActiveFilter('events')}
                className="text-emerald-600 font-medium hover:text-emerald-700"
              >
                View Events →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 