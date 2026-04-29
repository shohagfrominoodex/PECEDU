"use client";
import Button from "@/components/button";
import Image from "next/image";

const HeroAnimation = () => {
     const logos = [
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
          "/partners/Eduvisors-Logo.webp",
     ];

     return (
          <section className="h-screen px-4 lg:py-40 py-20 bg-[url(/images/hero-background.webp)] bg-center bg-no-repeat relative bg-cover">
               <div className="absolute inset-0 bg-black/40"></div>
               <section className="flex lg:flex-row flex-col-reverse max-w-7xl mx-auto relative items-center gap-5">
                    <div className="absolute top-9 -left-18 z-10 animate-spin-slow">
                         <Image
                              src={"/images/london-wheel.png"}
                              width={800}
                              height={500}
                              alt={"london-wheel.png"}
                         />
                    </div>
                    <div className="relative flex items-center justify-center w-6/12 h-150 m-2 overflow-hidden">
                         <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl bg-gray-200">
                              <Image
                                   src="/images/disscuss.webp"
                                   fill
                                   alt="Student"
                                   className="object-cover"
                              />
                         </div>

                         <div className="absolute w-112.5 h-112.5 z-10 animate-spin-slow hover:[animation-play-state:paused] group">
                              {logos.map((logo, index) => {
                                   const rotationAngle =
                                        (index * 360) / logos.length;

                                   return (
                                        <div
                                             key={index}
                                             className="absolute top-1/2 left-1/2 -ml-12 -mt-7"
                                             style={{
                                                  transform: `rotate(${rotationAngle}deg) translateY(-225px) rotate(-${rotationAngle}deg)`,
                                             }}
                                        >
                                             <div className="animate-spin-reverse bg-white rounded-md flex items-center justify-center w-24 h-14 group-hover:[animation-play-state:paused]">
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
                    <div className="absolute z-0 -bottom-30 left-5">
                         <Image
                              src={"/images/bg-stand.webp"}
                              width={640}
                              height={500}
                              alt={"bg-stand"}
                              className="brightness-60"
                         />
                    </div>
                    <section>
                         <div>
                              <h1 className="lg:text-5xl text-4xl font-semibold text-white lg:leading-14 leading-10 px-4">
                                   Experience Excellence <br /> in Education{" "}
                                   <br /> Study in{" "}
                                   <span className="text-[#dcf500]">
                                        Denmark
                                   </span>
                              </h1>
                              <div>
                                   <Image
                                        src={"/images/line.gif"}
                                        height={200}
                                        width={300}
                                        alt={"line.gif"}
                                   />
                              </div>
                         </div>
                         <p className="text-white text-xl mt-5">
                              Discover quality education and rich culture at an
                              affordable cost
                         </p>
                         <div>
                              <Button title={"Apply for September"} />
                         </div>
                    </section>
               </section>
          </section>
     );
};

export default HeroAnimation;
