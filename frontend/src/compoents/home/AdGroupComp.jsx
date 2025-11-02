import { useState } from "react";
import { ArrowRight } from "lucide-react";

function SectionName({ section, title }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="w-4 h-8 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">{section}</span>
      </div>
      <h2 className="text-3xl font-bold mt-4">{title}</h2>
    </div>
  );
}

export default function AdGroupComp() {
  return (
    <div className="p-4">
      <SectionName section="Featured" title="New Arrival" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5 w-full">
        {/* PlayStation 5 - Takes 2 cols on mobile, 2 cols + 2 rows on md+ (half of everything) */}
        <div className="group relative col-span-2 md:row-span-2 bg-black aspect-auto overflow-hidden rounded-lg">
          <img
            src="ps-5.png"
            alt="PlayStation 5"
            className="absolute bottom-40 left-40 scale-140 object-contain pointer-events-none
                        duration-500 group-hover:scale-150"
          />
          <div className="absolute inset-x-5 bottom-5 text-white z-20">
            <h2 className="text-3xl font-bold">PlayStation 5</h2>
            <p className="text-sm opacity-80 mt-1">
              Black and white version of the PS5 coming out on sale.
            </p>
            <button className="mt-3 inline-flex items-center text-lg hover:underline hover:translate-x-2 cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
              <span>Shop Now</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* JBL - Takes 2 cols on mobile, 2 cols on md+ (half width, half height) */}
        <div className="group relative col-span-2 bg-black aspect-auto overflow-hidden rounded-lg flex flex-col md:flex-row items-center justify-around p-5">
          <div className="w-full md:w-1/2 text-white z-20 md:pl-4 text-center md:text-left">
            <h2 className="text-2xl font-bold">JBL BOOMBOX</h2>
            <p className="text-sm opacity-80 mt-2">
              Enhance your Music Experience
            </p>
            <button className="mt-3 inline-flex items-center text-lg hover:underline hover:translate-x-2 cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
              <span>Shop Now</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img 
              src="jbl.png" 
              alt="JBL"
              className="w-full h-auto object-contain pointer-events-none duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Speakers - Takes 1 col (quarter width, quarter height on md+) */}
        <div className="group relative bg-black aspect-square overflow-hidden rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src="speaker.png"
            alt="Amazon Speaker"
            className="object-contain pointer-events-none mb-4 duration-500 group-hover:scale-110 max-h-32"
          />
          <div className="text-white z-20 text-center">
            <h2 className="text-xl font-bold">Speakers</h2>
            <p className="text-xs opacity-80 mt-1">
              Amazon wireless speakers
            </p>
            <button className="mt-2 inline-flex items-center text-sm hover:underline cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
              <span>Shop Now</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Perfume - Takes 1 col (quarter width, quarter height on md+) */}
        <div className="group relative bg-black aspect-square overflow-hidden rounded-lg flex flex-col items-center justify-center p-4">
          <img
            src="speaker.png"
            alt="Amazon Speaker"
            className="object-contain pointer-events-none mb-4 duration-500 group-hover:scale-110 max-h-32"
          />
          <div className="text-white z-20 text-center">
            <h2 className="text-xl font-bold">Speakers</h2>
            <p className="text-xs opacity-80 mt-1">
              Amazon wireless speakers
            </p>
            <button className="mt-2 inline-flex items-center text-sm hover:underline cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
              <span>Shop Now</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}