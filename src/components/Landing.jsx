import React from "react";

export default function Landing() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundVideo />
      <Overlay />
      <Contents />
    </div>
  );
}

const BackgroundVideo = () => (
  <video
    src={`${process.env.PUBLIC_URL}/assets/video.mp4`}
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-screen object-cover"
  />
);

const Overlay = () => (
  <div className="absolute inset-0 bg-black bg-opacity-50" />
);

const Contents = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-20 mb-8 text-center leading-tight">
        Concept Cars:{" "}
        <span className="text-orange-500">The Future of Automotive Design</span>
      </h1>
      <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-center font-light">
        Concept cars are the epitome of automotive artistry, showcasing
        visionary ideas in engineering and aesthetics. These masterpieces of
        innovation feature avant-garde styles, state-of-the-art materials, and
        revolutionary technologies. Unveiled at prestigious motor shows, they
        serve as a canvas for public imagination, gauging reactions to
        audacious, futuristic designs. The illustrious legacy of concept cars
        traces back to Harley Earl, the pioneering General Motors designer.
        Earl's influential Motorama exhibitions of the 1950s were instrumental
        in elevating these dream machines to iconic status, forever transforming
        the landscape of automotive design and innovation.
      </p>
    </div>
  </div>
);
