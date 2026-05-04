"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import QuickLink from "@/components/quickList";

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

const Navigation = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="bg-gray-100 overflow-hidden">
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
                    <div className="flex flex-nowrap gap-2">
                        {doubledPartners.map((partner, idx) => (
                            <QuickLink key={idx} partner={partner} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Navigation;
