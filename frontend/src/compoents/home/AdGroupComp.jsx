import { useState } from "react";
import SectionName from "../SectionName";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AdGroupComp() {
  return (
    <div>
      <SectionName section="Featured" title="New Arrival" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5 w-full">
        {/* PlayStation 5 - Left Large Block */}
        <div className="group relative col-span-2 bg-black aspect-auto overflow-hidden rounded-lg">
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
              <ArrowForwardIcon className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 w-full">
          <div className="grid grid-rows-2 gap-4 h-full">
            
            {/* JBL/Women's Collection - Top Right */}
            <div className="group relative bg-black aspect-[2/1] overflow-hidden rounded-lg flex items-center justify-around p-5">
             <div className="w-1/2 text-white z-20 pl-4">
                <h2 className="text-2xl font-bold">JBL BOOMBOX</h2>
                <p className="text-sm opacity-80 mt-2">
                  Enhance your Music Experince
                </p>
                <button className="mt-3 inline-flex items-center text-lg hover:underline hover:translate-x-2 cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
                  <span>Shop Now</span>
                  <ArrowForwardIcon className="ml-2" />
                </button>
              </div>
              <div className="w-1/2">
                <img 
                  src="jbl.png" 
                  alt="JBL"
                  className="w-full h-auto object-contain pointer-events-none duration-500 group-hover:scale-110"
                />
              </div>
             
            </div>

            {/* Bottom Row - Speakers and Perfume */}
            <div className="grid grid-cols-2 gap-4 w-full">
              
              {/* Speakers - Bottom Left */}
              <div className="group relative bg-black aspect-square overflow-hidden rounded-lg flex flex-col items-center justify-center p-4">
                <img
                  src="speaker.png"
                  alt="Amazon Speaker"
                  className="object-contain pointer-events-none mb-4 duration-500 group-hover:scale-110"
                />
                <div className="text-white z-20 text-center">
                  <h2 className="text-xl font-bold">Speakers</h2>
                  <p className="text-xs opacity-80 mt-1">
                    Amazon wireless speakers
                  </p>
                  <button className="mt-2 inline-flex items-center text-sm hover:underline cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
                    <span>Shop Now</span>
                    <ArrowForwardIcon className="ml-1" style={{ fontSize: '16px' }} />
                  </button>
                </div>
              </div>

              {/* Perfume - Bottom Right */}
             <div className="group relative bg-black aspect-square overflow-hidden rounded-lg flex flex-col items-center justify-center p-4">
                <img
                  src="speaker.png"
                  alt="Amazon Speaker"
                  className="object-contain pointer-events-none mb-4 duration-500 group-hover:scale-110"
                />
                <div className="text-white z-20 text-center">
                  <h2 className="text-xl font-bold">Speakers</h2>
                  <p className="text-xs opacity-80 mt-1">
                    Amazon wireless speakers
                  </p>
                  <button className="mt-2 inline-flex items-center text-sm hover:underline cursor-pointer transition-all group-hover:text-gray-200 hover:scale-110">
                    <span>Shop Now</span>
                    <ArrowForwardIcon className="ml-1" style={{ fontSize: '16px' }} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}