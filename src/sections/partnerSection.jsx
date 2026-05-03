"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Partner from "@/components/partner";

const partners = [
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
    {
        logo: "/logo/logo.png",
        url: "https://pecedu.com/",
    },
];

const doubledPartners = [...partners, ...partners];

const PartnerSection = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="md:py-20 py-10 bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-black/60 uppercase bg-black/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                    Trusted Partners
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full text-start md:text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl text-center md:text-5xl font-bold tracking-tight mb-8 md:px-10 lg:px-0 px-4 text-brand-primary"
                >
                    Some Top Ranked <br /> Global Universities {"We're"} Working
                    with
                </motion.h1>
            </motion.div>

            <div className="relative flex overflow-hidden py-3 border-y border-black/5">
                <div className="absolute inset-y-0 left-0 w-40 lg:w-70 bg-linear-to-r from-gray-100 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-40 lg:w-70 bg-linear-to-l from-gray-100 to-transparent z-10" />

                <motion.div
                    className="flex gap-12 flex-nowrap w-fit cursor-pointer"
                    animate={
                        isPaused ? { x: undefined } : { x: ["0%", "-50%"] }
                    }
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {doubledPartners.map((partner, idx) => (
                        <Partner key={idx} partner={partner} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerSection;
