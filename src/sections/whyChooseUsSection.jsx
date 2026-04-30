"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Headphones,
    Award,
    Users,
    GraduationCap,
    HeartHandshake,
} from "lucide-react";

const features = [
    {
        title: "Priority Processing",
        desc: "Eduvisors assists students in selecting colleges, completing applications, financial aid, and more, helping them reach their goals.",
        icon: <Headphones className="text-green-400" size={28} />,
    },
    {
        title: "Global Recognition",
        desc: "Eduvisors is a certified agency offering advice, service, info, and resources to help student clients make informed decisions.",
        icon: <Award className="text-blue-400" size={28} />,
    },
    {
        title: "A Successful Team",
        desc: "Eduvisors provides reliable educational consulting. Our experienced advisors guarantee fair, ethical services, delivering the best results.",
        icon: <Users className="text-purple-400" size={28} />,
    },
    {
        title: "Trusted by World-Renowned Universities",
        desc: "Eduvisors is an expert educational consultancy providing exceptional support for students studying abroad around the world.",
        icon: <GraduationCap className="text-orange-400" size={28} />,
    },
    {
        title: "Personalized Assistance for Students",
        desc: "Eduvisors provides personalized help for students who want to study abroad. We give custom guidance on choosing the right destination.",
        icon: <HeartHandshake className="text-pink-400" size={28} />,
    },
];

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-green-600/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:sticky lg:col-span-12 md:text-center md:px-20"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                        >
                            Why Choose PecEdu?
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed"
                        >
                            We provide expert guidance and global opportunities
                            to shape your future career with confidence and
                            ease.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        // viewport={{ once: true }}
                        className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
