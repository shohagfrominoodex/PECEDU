"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
     return (
          <section className="relative min-h-screen py-20 overflow-hidden bg-[#0A0A0A] text-white">
               {/* <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
               <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" /> */}

               <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                         >
                              Learn About The Best <br /> Study Abroad Deals
                              With PecEdu
                         </motion.h1>

                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed"
                         >
                              We’re just a call away – get free expert guidance
                              from the comfort of your home.
                         </motion.p>

                         <section className="flex items-center flex-col gap-x-15 lg:flex-row container">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.5, delay: 0.6 }}
                                   className="lg:w-6/12 w-full text-start md:text-center lg:text-start"
                              >
                                   <h2 className="text-3xl lg:text-5xl font-semibold">
                                        Your Global Journey <br /> Starts Here
                                   </h2>
                                   <p className="text-base xl:text-lg text-white/70 mt-5 w-full text-start md:text-center md:px-20 lg:px-0 lg:max-w-xl lg:text-start ">
                                        At Eduvisors, we turn your study abroad
                                        dreams into reality. With 17+ years of
                                        expertise, personalized guidance, and
                                        trusted global university partnerships,
                                        we make every step from applications to
                                        visas smooth and stress-free. Your
                                        future deserves the best path, and we’re
                                        here to lead the way.
                                   </p>
                                   <Link
                                        className="mt-5 block underline"
                                        href={"/about"}
                                   >
                                        Read about us
                                   </Link>
                                   <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-2">
                                        <Link
                                             href={"/blogs"}
                                             className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                                        >
                                             Hot Courses
                                        </Link>
                                        <Link
                                             className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                                             href={"/universities"}
                                        >
                                             Popular University
                                        </Link>
                                        <Link
                                             className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                                             href={"/counselling"}
                                        >
                                             Free Counselling
                                        </Link>
                                        <Link
                                             className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                                             href={"/test"}
                                        >
                                             Popular Tools
                                        </Link>
                                        <Link
                                             className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                                             href={"/mock-test"}
                                        >
                                             Free Mock Test
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.8, delay: 0.8 }}
                                   className="mt-20 p-1 rounded-3xl bg-linear-to-br from-white/20 to-transparent backdrop-blur-2xl border border-white/10 lg:w-6/12"
                              >
                                   <div className="bg-[#0f0f0f]/80 rounded-[22px] flex items-center overflow-hidden justify-center border border-white/5">
                                        <Image
                                             src={"/images/about-image.gif"}
                                             height={200}
                                             width={800}
                                             alt="About Section image"
                                        />
                                   </div>
                              </motion.div>
                         </section>
                    </div>
               </div>
          </section>
     );
};

export default AboutSection;
