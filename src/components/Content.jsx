import React from "react";

const ConceptCar = ({ car, index }) => (
  <div className="mb-24 md:mb-40">
    <div className="flex flex-col md:flex-row items-center justify-between gap-16">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h3 className="text-4xl md:text-5xl font-serif mb-6 text-orange-500 leading-tight">
          {car.name}
        </h3>
        <p className="text-lg md:text-xl leading-relaxed font-light">
          {car.description}
        </p>
        <div className="mt-6 text-orange-400">
          <span className="font-semibold">Year:</span> {car.year} |{" "}
          <span className="font-semibold">Designer:</span> {car.designer}
        </div>
      </div>
      <div className="md:w-1/2">
        {car.images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            className={`mb-6 ${
              imgIndex % 2 === (index % 2 === 0 ? 0 : 1) ? "ml-auto" : "mr-auto"
            } w-3/4`}
          >
            <img
              src={img}
              alt={`${car.name} - Image ${imgIndex + 1}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Content() {
  const conceptCars = [
    {
      name: "Mercedes Vision AVTR",
      description:
        "The Mercedes Vision AVTR, a pinnacle of automotive innovation, embodies the fusion of human creativity and nature's inspiration. This avant-garde concept, born from a collaboration with the AVATAR team, represents ADVANCED VEHICLE TRANSFORMATION. Its quartet of high-performance, near-wheel electric motors delivers a combined power exceeding 350 kW, propelling this dynamic luxury saloon from 0 to 100 km/h in under 2.5 seconds. The revolutionary battery technology, rooted in graphene-based organic cell chemistry, eschews rare earths and metals, embracing sustainability with its fully compostable and recyclable composition.",
      images: ["./assets/mercedesvision.jpeg", "./assets/m2.jpeg"],
      year: 2020,
      designer: "Mercedes-Benz",
    },
    {
      name: "Rolls-Royce Vision Next 100",
      description:
        "The Rolls-Royce 103EX, a visionary masterpiece, heralds the future of bespoke luxury mobility. This 5.9-meter long, 1.6-meter high marvel showcases autonomous driving at its zenith. Its most captivating feature, the clamshell-style roof and door, allows passengers to gracefully stand before exiting. The interior, aptly named the 'Grand Sanctuary', boasts a sumptuous silk sofa and a panoramic OLED screen, offering an unparalleled cocoon of opulence and tranquility amidst the urban landscape of tomorrow.",
      images: ["./assets/rollsroycenext100.jpg", "./assets/roll2.jpg"],
      year: 2016,
      designer: "Giles Taylor",
    },
    {
      name: "Hyundai Elevate",
      description:
        "The Hyundai Elevate, affectionately dubbed the 'walking car', redefines the very essence of vehicular mobility. Its sophisticated multi-joint legs, drawing inspiration from the humble grasshopper, endow this revolutionary concept with the ability to surmount steps, ford streams, and vault chasms. The Elevate's dual-mode capability allows it to transition seamlessly between passive suspension for conventional driving and an active walking mode. In its ambulatory state, it exhibits omnidirectional movement with both mammalian and reptilian gaits, rendering it invaluable for disaster response, construction, and exploration in the most challenging terrains.",
      images: ["./assets/hyundaielevate.jpg", "./assets/elevate1.jpg"],
      year: 2019,
      designer: "Hyundai CRADLE",
    },
    {
      name: "Toyota Fun VII",
      description:
        "The Toyota Fun VII, a technological tour de force, caters to the digital native generation with its groundbreaking interactive features. This Fun-Vehicle interactive internet (Fun-Vii) concept epitomizes personalization, with its entire exterior serving as a customizable display. The interior, equally adaptable, introduces an augmented reality navigation system that overlays vital information onto the real-world view. The piece de resistance is a holographic 'navigation concierge', guiding drivers through an immersive, futuristic interface that blurs the lines between reality and digital enhancement.",
      images: ["./assets/toyotafunvii.jpg", "./assets/fun2.jpg"],
      year: 2011,
      designer: "Toyota Motor Corporation",
    },
    {
      name: "AeroMobil",
      description:
        "The AeroMobil, an embodiment of the Pegasus myth, represents the zenith of vehicular evolution. This flying car seamlessly transitions from road to sky in a mere three minutes, marrying the performance of a high-end sports car with the versatility of a light aircraft. Boasting a top speed of 360 km/h airborne and 160 km/h on terra firma, it pushes the boundaries of both automotive and aerospace engineering. The AeroMobil's hybrid electric powertrain affords an impressive 750 km flying range, heralding a new era of personal transportation that transcends conventional limitations of travel.",
      images: ["./assets/aeromobil.jpg", "./assets/aero.jpg"],
      year: 2017,
      designer: "Štefan Klein",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white py-10">
      <div className="pt-[10vw] container mx-auto px-10">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 text-orange-500 tracking-wide">
          Visionary Concept Cars
        </h2>
        {conceptCars.map((car, index) => (
          <ConceptCar key={car.name} car={car} index={index} />
        ))}
      </div>
    </div>
  );
}
