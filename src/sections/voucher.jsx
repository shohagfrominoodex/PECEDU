"use client";

import Button from "@/components/button";
import { motion } from "framer-motion";
import Image from "next/image";

const terms = [
     {
          id: "01",
          text: "You must be a registered client with us to redeem this voucher.",
     },
     {
          id: "02",
          text: "Redemption is available when opening a bank account or purchasing an air ticket. For IELTS registration, the voucher can only be redeemed after successful university admission.",
     },
     {
          id: "03",
          text: "This voucher is non-transferable and can only be used by the named individual.",
     },
     {
          id: "04",
          text: "The voucher must be valid and verifiable at the time of redemption.",
     },
     {
          id: "05",
          text: "For IELTS registration, the voucher is redeemable only after successful university admission.",
     },
     {
          id: "06",
          text: "This voucher is strictly non-transferable and must be used by the named individual.",
     },
     {
          id: "07",
          text: "Expired vouchers will not be accepted under any circumstances.",
     },
     {
          id: "08",
          text: "The company reserves the right to modify or cancel the voucher terms without prior notice.",
     },
];

const fadeUp = {
     hidden: { opacity: 0, y: 32 },
     visible: (i = 0) => ({
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.55,
               delay: i * 0.1,
               ease: [0.22, 1, 0.36, 1],
          },
     }),
};

const slideLeft = {
     hidden: { opacity: 0, x: -40 },
     visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
     },
};

const slideRight = {
     hidden: { opacity: 0, x: 40 },
     visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
     },
};

export default function VoucherSection() {
     return (
          <section className="relative w-full overflow-hidden bg-gray-100 py-20 px-4 sm:px-6 lg:px-4">
               <div className="relative max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-center">
                         <motion.div
                              variants={slideLeft}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.3 }}
                         >
                              <div className="bg-white rounded-3xl p-8 shadow-[0_4px_40px_rgba(124,58,237,0.10)] border border-purple-100">
                                   <h3 className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-2">
                                        Redemption Voucher Terms and Conditions
                                   </h3>

                                   <ul className="flex flex-col gap-4 mb-8">
                                        {terms.map((t, i) => (
                                             <motion.li
                                                  key={t.id}
                                                  custom={i}
                                                  variants={fadeUp}
                                                  initial="hidden"
                                                  whileInView="visible"
                                                  viewport={{ once: true }}
                                                  className="flex items-start gap-4"
                                             >
                                                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-primary text-white text-[12px] font-bold flex items-center justify-center mt-0.5">
                                                       {t.id}
                                                  </span>
                                                  <p className="text-sm md:text-base  text-gray-600 leading-relaxed">
                                                       {t.text}
                                                  </p>
                                             </motion.li>
                                        ))}
                                   </ul>

                                   <div className="border-t border-dashed border-purple-400 pt-5 mb-6">
                                        <p className="text-base text-[#64748b] leading-relaxed">
                                             Please ensure you are a registered
                                             client, as the voucher is
                                             non-transferable and must be valid
                                             at the time of redemption.
                                        </p>
                                   </div>

                                   <div>
                                        <Button>Apply Now</Button>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              variants={slideRight}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.3 }}
                              className="relative"
                         >
                              <div className="border-3 overflow-hidden rounded-2xl border-brand-accent lg:h-200 w-full">
                                   <Image
                                        src={"/images/laptop.webp"}
                                        alt="laptop"
                                        height={800}
                                        className="object-cover"
                                        width={1000}
                                   />
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
