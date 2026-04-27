"use client";
import Image from "next/image";

const HeroAnimation = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-[#004d26] overflow-hidden">
      {/* Background Circles */}
      <div className="absolute border-2 border-dashed border-white/20 rounded-full w-[450px] h-[450px]" />

      {/* Central Image */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl bg-gray-200">
        <Image src="/student.png" fill alt="Student" className="object-cover" />
      </div>

      {/* Rotating Orbit Container */}
      <div className="absolute w-[450px] h-[450px] animate-spin-slow hover:[animation-play-state:paused] group">
        {logos.map((logo, index) => {
          const rotationAngle = (index * 360) / logos.length;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 -ml-12 -mt-7 w-24 h-14 bg-white rounded-lg shadow-md p-2 flex items-center justify-center"
              style={{
                // Prothome position thik kora
                transform: `rotate(${rotationAngle}deg) translateY(-225px) rotate(-${rotationAngle}deg)`,
              }}
            >
              {/* Counter-rotation to keep logo straight while the parent spins */}
              <div className="animate-spin-reverse flex items-center justify-center w-full h-full group-hover:[animation-play-state:paused]">
                <Image
                  src={logo}
                  width={80}
                  height={40}
                  alt={`Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroAnimation;
