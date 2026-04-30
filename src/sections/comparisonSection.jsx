"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const comparisonData = [
    {
        feature: "Authorized by International Universities",
        us: true,
        them: true,
    },
    { feature: "Global Sim Card", us: true, them: false },
    { feature: "Part time Job Assistance", us: true, them: false },
    { feature: "Airport Pickup", us: true, them: false },
    { feature: "Health Insurance", us: true, them: false },
    { feature: "Internship Placement", us: true, them: false },
    {
        feature: "International Payment Services (Card/Bank Transfer)",
        us: true,
        them: false,
    },
    { feature: "Uk Bank Account Support", us: true, them: false },
    { feature: "Cheap Air Ticket", us: true, them: false },
    { feature: "IELTS Registration Cashback", us: true, them: false },
    { feature: "Gift Hamper", us: true, them: true },
    { feature: "Free Assessment", us: true, them: true },
];

const ComparisonSection = () => {
    return (
        <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#0b5d2e]/10 blur-[150px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-white/60 uppercase bg-white/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-semibold"
                    >
                        <span>Comparison</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl mt-5 font-bold tracking-tight mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                    >
                        Why is PecEdu? <br /> the Best Choice for Students{" "}
                        <br />
                        compared to Others?
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 md:p-8 text-gray-400 md:text-base text-sm font-medium">
                                    Features
                                </th>
                                <th className="p-4 md:p-8 text-center bg-white/5">
                                    <span className="md:text-base text-sm font-bold text-white">
                                        PecEdu
                                    </span>
                                </th>
                                <th className="p-4 md:p-8 text-center md:text-base text-sm text-gray-400 font-medium">
                                    Others Consultancy
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, idx) => (
                                <motion.tr
                                    key={idx}
                                    whileHover={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.03)",
                                    }}
                                    className="border-b border-white/5 last:border-0 transition-colors"
                                >
                                    <td className="p-4 md:p-8 md:text-base text-sm text-white font-medium">
                                        {item.feature}
                                    </td>
                                    <td className="p-4 md:p-8 text-center bg-white/5">
                                        {item.us ? (
                                            <div className="flex justify-center">
                                                <div className="bg-white/10 p-2 rounded-full">
                                                    <Check
                                                        className="text-white"
                                                        size={20}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <X
                                                className="text-gray-600 mx-auto"
                                                size={20}
                                            />
                                        )}
                                    </td>
                                    <td className="p-4 md:p-8 text-center">
                                        {item.them ? (
                                            <Check
                                                className="text-gray-500 mx-auto"
                                                size={20}
                                            />
                                        ) : (
                                            <X
                                                className="text-red-500/80 mx-auto"
                                                size={20}
                                            />
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <div className="mt-12 text-center">
                    <Link
                        href={"/apply-now"}
                        className="px-10 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-xl shadow-white/10"
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
