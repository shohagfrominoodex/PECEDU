"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Quick Links",
            links: ["About", "Study Abroad", "Resources", "Events", "Contact"],
        },
        {
            title: "Study Abroad",
            links: [
                "Study in Singapore",
                "Study in China",
                "Study in Japan",
                "Study in South Korea",
                "Study in Malaysia",
            ],
        },
        { title: "Resources", links: ["Blog", "Events", "FAQ", "Support"] },
    ];

    return (
        <footer className="relative bg-[#0f0f0f] pt-20 pb-10 px-6 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#0b5d2e]/20 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-[#0b5d2e] text-xl">
                                P
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                PecEdu
                            </span>
                        </motion.div>
                        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                            PecEdu is a leading educational consultancy firm
                            that helps students achieve their dreams of studying
                            abroad.
                        </p>
                    </div>

                    {footerLinks.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h4 className="text-white font-bold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <Link
                                        href={"/d"}
                                        key={lIdx}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/5 mb-10">
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="p-3 bg-white/5 rounded-full">
                            <MapPin size={20} strokeWidth={1} />
                        </div>
                        <p className="text-sm">Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="p-3 bg-white/5 rounded-full">
                            <Phone size={20} strokeWidth={1} />
                        </div>
                        <a href="tel:+8801234567890" className="text-sm">
                            +880 1234 567 890
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="p-3 bg-white/5 rounded-full">
                            <Mail size={20} strokeWidth={1} />
                        </div>
                        <a href="mailto:info@pecedu.com" className="text-sm">
                            info@pecedu.com
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:row justify-between items-center gap-6 text-gray-500 text-sm">
                    <p>© {currentYear} PecEdu. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
