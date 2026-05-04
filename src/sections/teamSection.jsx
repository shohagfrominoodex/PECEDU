"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
     motion,
     useAnimationFrame,
     useMotionValue,
     useTransform,
} from "motion/react";

const TeamSection = () => {
     const officials = [
          {
               id: 1,
               src: "/team/ceo.webp",
               name: "Arif Hasan",
               designation: "CEO & Founder",
          },
          {
               id: 2,
               src: "/team/ceo.webp",
               name: "Nusrat Jahan",
               designation: "HR Manager",
          },
          {
               id: 3,
               src: "/team/ceo.webp",
               name: "Tanvir Rahman",
               designation: "Software Engineer",
          },
          {
               id: 4,
               src: "/team/ceo.webp",
               name: "Farzana Akter",
               designation: "Business Development Officer",
          },
          {
               id: 5,
               src: "/team/ceo.webp",
               name: "Imran Hossain",
               designation: "Operations Executive",
          },
     ];

     const baseX = useMotionValue(0);
     const [isHovered, setIsHovered] = useState(false);
     const [isDragging, setIsDragging] = useState(false);
     const directionFactor = useRef(1);
     const containerRef = useRef(null);
     const [contentWidth, setContentWidth] = useState(0);

     useEffect(() => {
          if (containerRef.current) {
               const singleSet = containerRef.current.children[0];
               if (singleSet) {
                    setContentWidth(singleSet.offsetWidth);
               }
          }
     }, []);

     const x = useTransform(baseX, (v) => {
          if (!contentWidth) return "0px";
          const wrapValue =
               (((v % contentWidth) + contentWidth) % contentWidth) -
               contentWidth;
          return `${wrapValue}px`;
     });

     useAnimationFrame((t, delta) => {
          if (isHovered || isDragging || !contentWidth) return;

          let moveBy = directionFactor.current * 100 * (delta / 1000);
          baseX.set(baseX.get() + moveBy);
     });

     const handlePanEnd = (e, info) => {
          setIsDragging(false);
          if (
               info.velocity.x > 0 ||
               (info.velocity.x === 0 && info.offset.x > 0)
          ) {
               directionFactor.current = 1;
          } else {
               directionFactor.current = -1;
          }
     };

     return (
          <section className="bg-foreground w-full">
               <section className="w-full mx-auto md:py-20 py-10 overflow-hidden relative">
                    <div className="mb-10">
                         <p className="text-gray-200 uppercase bg-brand-primary/90 w-fit mx-auto px-4 py-2 mb-5 rounded-full tracking-widest text-sm font-bold">
                              Our Officials
                         </p>
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-4xl text-blue-100 text-center mb-5 font-semibold"
                         >
                              Experienced. Excellence. Extraordinary
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="md:text-lg text-base px-6 md:w-150 text-center text-blue-200 mx-auto"
                         >
                              We give our employees chance to grow and reach
                              their potential. Our team has expertise in guiding
                              students.
                         </motion.p>
                    </div>
                    <div
                         className="w-full relative"
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                    >
                         <div className="absolute left-0 top-0 bottom-0 w-15 lg:w-70 h-full bg-linear-to-r from-foreground to-transparent z-10 pointer-events-none"></div>
                         <div className="absolute right-0 top-0 bottom-0 w-15 lg:w-70 bg-linear-to-l from-foreground to-transparent z-10 pointer-events-none"></div>
                         <motion.div
                              ref={containerRef}
                              className="flex w-max cursor-grab active:cursor-grabbing touch-pan-y py-0"
                              style={{ x }}
                              onPanStart={() => setIsDragging(true)}
                              onPan={(e, info) => {
                                   baseX.set(baseX.get() + info.delta.x);
                              }}
                              onPanEnd={handlePanEnd}
                         >
                              {[1, 2, 3, 4, 5].map((set) => (
                                   <section
                                        key={set}
                                        className="flex gap-6 pr-6 shrink-0"
                                   >
                                        {officials.map((official) => (
                                             <section
                                                  key={`${set}-${official.id}`}
                                                  className="relative w-75 sm:w-75 h-100 group shrink-0"
                                             >
                                                  <section className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105">
                                                       <Image
                                                            src={official.src}
                                                            height={400}
                                                            width={1000}
                                                            className="rounded-3xl h-full shadow-lg object-cover"
                                                            alt={
                                                                 official.title ||
                                                                 "officials photo"
                                                            }
                                                            draggable={false}
                                                       />
                                                  </section>
                                                  <section
                                                       className="absolute inset-0 z-20 rounded-3xl bg-brand-primary/80 p-5 opacity-0 pointer-events-none transform
                                                translate-y-20 group-hover:opacity-100
                                                group-hover:pointer-events-auto backdrop-blur-[10px]
                                                group-hover:translate-y-0 transition-all ease-in-out
                                                duration-500 flex flex-col justify-center"
                                                  >
                                                       <div className="text-center">
                                                            <h1 className="mt-5 font-medium text-3xl text-brand-contrast">
                                                                 {official.name}
                                                            </h1>
                                                            <p className="mt-3 font-normal text-lg mb-16 text-brand-soft-text">
                                                                 {
                                                                      official.designation
                                                                 }
                                                            </p>
                                                       </div>
                                                  </section>
                                             </section>
                                        ))}
                                   </section>
                              ))}
                         </motion.div>
                    </div>
               </section>
          </section>
     );
};

export default TeamSection;
