import React, { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ loading }) {
  useEffect(() => {
    gsap.fromTo(
      ".car",
      { x: "50vw", opacity: 0 },
      {
        x: "-100vw",
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, [loading]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="relative">
        <div className="car">
          <img
            src={`${process.env.PUBLIC_URL}/assets/car_smoky.png`}
            alt="Loading..."
            className="w-[30vw] md:w-[25vw] lg:w-[20vw] filter drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]"
          />
        </div>
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
          <p className="text-orange-500 text-sm md:text-base animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
