"use client";
import { motion } from "motion/react";
import Blog from "@/components/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/button";

export default function BlogsSection() {
    const blogs = [
        {
            id: 1,
            title: "How to Prepare for the PTE Exam",
            image: "/blogs/image-1.webp",
            description:
                "Learn the best strategies to prepare for the PTE exam.",
            date: "2022-01-01",
        },
        {
            id: 2,
            title: "Top 10 Tips for PTE Success",
            image: "/blogs/image-1.webp",
            description: "Expert tips to help you ace your PTE exam.",
            date: "2022-01-02",
        },
        {
            id: 3,
            title: "Common Mistakes to Avoid in PTE",
            image: "/blogs/image-1.webp",
            description: "Avoid these common pitfalls to improve your score.",
            date: "2022-01-03",
        },
    ];
    return (
        <section className="w-full bg-green-950/95 py-20">
            <section className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <h2 className="text-white/60 uppercase bg-white/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                        Blogs
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
                        className="text-3xl md:text-5xl text-center font-bold tracking-tight mb-6 md:px-10 lg:px-0 px-4 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                    >
                        Latest Blogs
                    </motion.h1>
                </motion.div>
                <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-4 gap-5 mt-10">
                    {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </section>
                <div className="mt-5 flex justify-center">
                    <Button>View All Blogs</Button>
                </div>
            </section>
        </section>
    );
}
