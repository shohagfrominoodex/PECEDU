"use client";
import { motion } from "motion/react";
import Link from "next/link";
export default function Button({ children }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 8 }}
            className="w-fit"
        >
            <Link
                className="bg-white text-xl hover:bg-blue-900/90 hover:text-white duration-300 text-blue-500 block mt-5 font-medium px-8 py-4 rounded-full shadow-lg cursor-pointer"
                href={"/apply-now"}
            >
                {children}
            </Link>
        </motion.div>
    );
}
