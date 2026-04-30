"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, MoveUpRight } from "lucide-react";
import Blog from "@/components/blog";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Mastering Next.js 14 and Modern UI Trends",
        category: "Development",
        date: "April 28, 2026",
        image: "/images/benefits.png.webp",
    },
    {
        id: 2,
        title: "Why Glassmorphism is Dominating Digital Design",
        category: "UI/UX Design",
        date: "April 25, 2026",
        image: "/images/benefits.png.webp",
    },
    {
        id: 3,
        title: "Optimizing Web Performance for 2026 Standards",
        category: "Optimization",
        date: "April 20, 2026",
        image: "/images/benefits.png.webp",
    },
];

const BlogSection = () => {
    return (
        <section className="py-24 px-4 bg-[#050505]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-5 gap-5">
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
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                        >
                            Latest Information <br /> by PecEdu
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="max-w-2xl md:mx-auto text-lg text-gray-400 mb-10 leading-relaxed"
                        >
                            Get expertly curated information on studying abroad
                            from Bangladesh, including tips, updates, and
                            experiences.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogPosts.map((post, idx) => (
                        <Blog key={idx} blog={post} />
                    ))}
                </div>
                <div className="flex justify-center mt-10 text-white">
                    <Link
                        className="px-5 py-2 bg-white/5 border flex items-center gap-2 border-white/10 backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
                        href={"/blogs"}
                    >
                        See More Blogs
                        <MoveUpRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
