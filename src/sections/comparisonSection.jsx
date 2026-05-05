"use client";
import Button from "@/components/button";
import { CheckLine, CirclePlus, Layers, X } from "lucide-react";
import { motion } from "motion/react";
const FEATURES = [
     {
          label: "Authorised by International Universities",
          others: false,
          edu: true,
     },
     { label: "Global SIM Card on Arrival", others: false, edu: true },
     { label: "Part-time Job Assistance", others: false, edu: true },
     { label: "Airport Pickup", others: false, edu: true },
     { label: "Health Insurance Guidance", others: false, edu: true },
     { label: "Internship Placement Support", others: false, edu: true },
     { label: "International Payment Services", others: false, edu: true },
     { label: "UK Bank Account Setup", others: false, edu: true },
     { label: "Cheap Air Ticket Assistance", others: false, edu: true },
     { label: "IELTS Registration Cashback", others: false, edu: true },
     { label: "Welcome Gift Hamper", others: false, edu: true },
     { label: "Free Eligibility Assessment", others: true, edu: true },
];

export default function ComparisonSection() {
     return (
          <section className="md:py-20 py-10 px-4 bg-foreground">
               <div className="max-w-5xl mx-auto">
                    <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                         <h2 className="text-gray-200 uppercase bg-brand-primary/90 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                              Comparison
                         </h2>
                    </div>

                    <motion.h1
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: 0.2 }}
                         className="text-3xl md:text-5xl text-center mb-10 font-bold tracking-tight md:px-10 lg:px-0 px-4 text-white"
                    >
                         See How We Compare With Others
                    </motion.h1>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                         <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              className="rounded-2xl overflow-hidden"
                         >
                              <div className="bg-white px-5 py-4 flex items-center gap-3">
                                   <div className="w-9 h-9 rounded-xl bg-[#f0ede8] flex items-center justify-center shrink-0">
                                        <CirclePlus
                                             strokeWidth={1}
                                             className="text-brand-primary"
                                        />
                                   </div>
                                   <div>
                                        <p className="text-[13px]  md:text-lg font-semibold text-[#444]">
                                             Other Consultancy
                                        </p>
                                        <p className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                             Standard
                                        </p>
                                   </div>
                              </div>
                              {FEATURES.map((feature, index) => (
                                   <div
                                        key={index}
                                        className="bg-brand-secondary hover:bg-white/98 px-5 flex items-center border-t border-brand-primary/30 gap-4"
                                   >
                                        <div className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                             {feature.others ? (
                                                  <div className="bg-foreground w-fit rounded-full p-1 my-3 ">
                                                       <CheckLine
                                                            stroke="white"
                                                            size={14}
                                                       />
                                                  </div>
                                             ) : (
                                                  <div className="bg-red-500/80 w-fit rounded-full p-1 my-3">
                                                       <X
                                                            stroke="white"
                                                            size={14}
                                                       />
                                                  </div>
                                             )}
                                        </div>
                                        <p className="text-[13px] md:text-base font-semibold text-[#444]">
                                             {feature.label}
                                        </p>
                                   </div>
                              ))}
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              className="rounded-2xl overflow-hidden"
                         >
                              <div className="bg-brand-primary px-5 py-4 flex items-center gap-3">
                                   <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                        <Layers strokeWidth={1} stroke="#FFF" />
                                   </div>
                                   <div>
                                        <p className="text-[13px] md:text-lg font-semibold text-white">
                                             Pec Edu
                                        </p>
                                        <p className="text-[10px] text-gray-300 font-semibold tracking-wide uppercase">
                                             Recommended
                                        </p>
                                   </div>
                              </div>
                              <div className="bg-linear-150 from-brand-primary to-brand-primary/10">
                                   {FEATURES.map((feature, index) => (
                                        <div
                                             key={index}
                                             className="hover:bg-white/5 px-5 flex items-center border-t border-white/30 gap-4"
                                        >
                                             <div className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                                  {feature.edu ? (
                                                       <div className="bg-foreground w-fit rounded-full p-1 my-3">
                                                            <CheckLine
                                                                 stroke="white"
                                                                 size={14}
                                                            />
                                                       </div>
                                                  ) : (
                                                       <div className="bg-red-500/80 w-fit rounded-full p-1 my-3">
                                                            <X
                                                                 stroke="white"
                                                                 size={14}
                                                            />
                                                       </div>
                                                  )}
                                             </div>
                                             <p className="text-[13px] md:text-base font-semibold text-white">
                                                  {feature.label}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </motion.div>
                    </div>

                    <div className="flex justify-center mt-10">
                         <Button>Book Free Consultation</Button>
                    </div>
               </div>
          </section>
     );
}
