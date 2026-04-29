"use client";
import { motion } from "motion/react";
import Link from "next/link";
export default function Button({ title }) {
     return (
          <motion.button
               whileHover={{ scale: 1.02, y: -2 }}
               whileTap={{ scale: 0.97, y: 0 }}
               transition={{ type: "spring", stiffness: 400, damping: 8 }}
          >
               <Link
                    className="bg-white text-lg md:text-xl text-[#0F602D] block mt-5 font-medium md:px-8 px-4 py-2 md:py-4 rounded-full shadow-lg cursor-pointer"
                    href={"/apply-now"}
               >
                    {title}
               </Link>
          </motion.button>
     );
}
