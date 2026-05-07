"use client";
import Button from "@/components/button";
import { motion } from "motion/react";

const CallToActionBanner = () => {
    return (
        <section className="bg-linear-to-b from-brand-muted to-gray-100 md:py-20 py-10 overflow-x-hidden">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl px-4 md:text-5xl md:leading-15 text-center font-bold mb-5 text-brand-primary"
            >
                Start Your Study Abroad Journey with <br />
                <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                    PecEdu Global
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl text-center mx-auto text-lg px-4 text-gray-600 leading-relaxed"
            >
                Get expert guidance & resources to reach your academic
                goals.Enjoy personalized support for your journey.
            </motion.p>
            <div className="flex items-center justify-center">
                <Button>Free Counseling</Button>
            </div>
        </section>
    );
};

export default CallToActionBanner;
