import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-orange-500 font-serif text-2xl md:text-3xl tracking-wide">
              CONCEPT CARS
            </div>
            <div className="text-sm md:text-base text-gray-400 font-light text-center">
              Exploring the future of automotive design and innovation
            </div>
            <div className="text-xs md:text-sm text-gray-500 font-light">
              Copyright &copy; {new Date().getFullYear()} conceptcars.in • All
              rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
