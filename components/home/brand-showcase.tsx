'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const brands = [
  {
    name: "TechGear",
    logo: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology",
    campaignCount: 12,
    creators: 156,
    engagement: "4.2M"
  },
  {
    name: "NatureCare",
    logo: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beauty",
    campaignCount: 8,
    creators: 89,
    engagement: "2.8M"
  },
  {
    name: "ActiveLife",
    logo: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Fitness",
    campaignCount: 15,
    creators: 203,
    engagement: "5.7M"
  },
  {
    name: "FreshEats",
    logo: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Food",
    campaignCount: 7,
    creators: 112,
    engagement: "3.1M"
  },
  {
    name: "StyleHub",
    logo: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Fashion",
    campaignCount: 21,
    creators: 245,
    engagement: "8.5M"
  },
  {
    name: "TravelJoy",
    logo: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Travel",
    campaignCount: 9,
    creators: 127,
    engagement: "4.6M"
  }
];

export default function BrandShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % brands.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-10 px-4 text-center h-[95vh]">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Trusted By Innovative Brands
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        See how leading brands have leveraged our platform to create successful micro-creator campaigns.
      </p>

      <div className="relative w-full max-w-3xl mx-auto lg:h-[60vh] md:h-[350px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={brands[current].name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
          >
            <div className="w-full h-full relative mb-4">
              <Image
                src={brands[current].logo}
                alt={brands[current].name}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">{brands[current].name}</h3>
            <p className="text-gray-400 text-sm mb-1">{brands[current].category}</p>
            <div className="flex justify-center gap-6 text-sm text-gray-300 mt-2">
              <span>Campaigns: <strong>{brands[current].campaignCount}</strong></span>
              <span>Creators: <strong>{brands[current].creators}</strong></span>
              <span>Engagement: <strong>{brands[current].engagement}</strong></span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center space-x-2">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to brand ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${index === current ? 'bg-white' : 'bg-gray-600 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

    </div>
  );
}
