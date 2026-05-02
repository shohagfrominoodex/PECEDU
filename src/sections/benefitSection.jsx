"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
    {
        id: 1,
        title: "Benefits of Studying Abroad",
        badge: "- Why Choose PecEdu",
        description:
            "We will help you choose the best country for your academic and personal goals.",
        image: "/images/disscuss.webp",
        ctaText: "Start your journey now!",
    },
    {
        id: 2,
        title: "Personalized Consulting",
        badge: "- Partner Universities",
        description:
            "Get one-on-one sessions with expert advisors to plan your career path.",
        image: "/images/disscuss.webp",
        ctaText: "Find your advisor",
    },
    {
        id: 3,
        title: "Visa and Application Support",
        badge: "- Our Credentials",
        description:
            "Complete guidance for college applications and seamless visa processing.",
        image: "/images/disscuss.webp",
        ctaText: "Know more",
    },
    {
        id: 4,
        title: "Scholarship Guidance",
        badge: "- Top Rated",
        description:
            "Explore scholarship opportunities to fund your international education.",
        image: "/images/disscuss.webp",
        ctaText: "Check eligibility",
    },
];

const BenefitsSection = () => {
    return (
        <section className="py-24 px-4 bg-blue-900 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                    >
                        We Help Individual Become <br /> their Best Version
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg text-gray-200 mb-10 leading-relaxed"
                    >
                        PecEdu is driven by a passion to help students reach
                        their educational goals.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cardData.map((card, idx) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden group h-125 shadow-2xl"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-gray-950/70 lg:via-gray-900/30 to-transparent" />

                            <div className="absolute inset-0 flex flex-col justify-end p-3">
                                <motion.div className="w-full h-full flex flex-col justify-end transition-all lg:absolute lg:inset-x-0 lg:top-0 lg:h-full lg:left-0 lg:w-full lg:bg-white/5 lg:backdrop-blur-xl lg:p-6 lg:rounded-2xl lg:border lg:border-white/10 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0 duration-500 ease-out">
                                    <div className="flex items-center gap-2 mb-4 bg-gray-100 px-3 py-1 rounded-full w-fit">
                                        <Star
                                            size={16}
                                            className="text-green-700"
                                        />
                                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            {card.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl lg:text-2xl lg:mb-8 font-bold text-white lg:text-white leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/80 lg:text-gray-700 lg:mb-6 text-sm md:text-base leading-relaxed line-clamp-3">
                                        {card.desc}
                                    </p>
                                </motion.div>

                                <div className="mt-6">
                                    <Link
                                        href={"/ab"}
                                        className="w-full py-3.5 px-6 bg-white/10 text-white rounded-2xl font-bold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        {card.ctaText} <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
