import React from 'react';
import Image from 'next/image';
import sampleImage from "../images/person.jpeg"


const Testimonial = () => {
  return (
    <div className="w-full py-16 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-5xl px-5 py-10 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-sm font-semibold text-gray-500">Testimonial</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <div className="flex justify-center mb-6">
          <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11.3V15h-3v-3.7C6 9.7 7.4 8 9.6 8c.2 0 .4 0 .6.1V4.7C9.4 4.5 9.2 4.5 9 4.5 5.7 4.5 3 7.5 3 11.3V18h6v-6.7zm12 0V15h-3v-3.7c0-1.6 1.4-3.3 3.6-3.3.2 0 .4 0 .6.1V4.7c-.2-.2-.4-.2-.6-.2-3.3 0-6 3-6 6.8V18h6v-6.7z"/>
          </svg>
        </div>
        <p className="mb-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="flex justify-center items-center mb-6">
          <div className="flex -space-x-4">
            <Image src={sampleImage} alt="Client 1" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white shadow-sm"/>
            <Image src={sampleImage} alt="Client 2" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white shadow-sm"/>
            <Image src={sampleImage} alt="Client 3" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white shadow-sm"/>
            <Image src={sampleImage} alt="Client 4" width={48} height={48} className="w-12 h-12 rounded-full border-2 border-white shadow-sm"/>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800">Mitchell Marsh</h3>
        <p className="text-gray-500">CEO, Bexon Agency</p>
        <div className="flex justify-center mt-6 space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
