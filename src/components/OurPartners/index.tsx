"use client";

import Image from "next/image";
import React, { useState } from "react";

// icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// constants
import { PARTNERS } from "@/constants/partners";

const OurPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(PARTNERS.length / itemsPerRow) - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(PARTNERS.length / itemsPerRow)
    );
  };

  return (
    <div className="relative w-full bg-grayCream py-10 md:py-20">
      <h2 className="text-center text-[40px]  md:text-6xl font-semibold mb-6">
        Our Partners
      </h2>
      <div className="overflow-hidden relative w-full max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out mt-8"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: Math.ceil(PARTNERS.length / itemsPerRow) }).map(
            (_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex w-full flex-shrink-0 justify-center gap-3"
              >
                {PARTNERS.slice(
                  groupIndex * itemsPerRow,
                  groupIndex * itemsPerRow + itemsPerRow
                ).map((partner) => (
                  <div key={partner.id} className="flex justify-center w-1/4">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={296}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
        {/* Prev and Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 md:left-1 -translate-y-1/2 bg-white text-black p-3 rounded-lg shadow-md hover:bg-gray-600 hover:text-white transition-colors"
        >
          <FaChevronLeft width={40} height={40} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 md:right-1 -translate-y-1/2 bg-white text-black p-3 rounded-lg shadow-md hover:bg-gray-600 hover:text-white transition-colors"
        >
          <FaChevronRight width={40} height={40} />
        </button>
      </div>
    </div>
  );
};

export default OurPartners;
