"use client";
import { motion } from "motion/react";
import Blog from "@/components/blog";
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
        {
            id: 4,
            title: "Common Mistakes to Avoid in PTE",
            image: "/blogs/image-1.webp",
            description: "Avoid these common pitfalls to improve your score.",
            date: "2022-01-03",
        },
    ];
    return (
        <section className="w-full bg-foreground py-20">
            <section className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <h2 className="text-gray-200 uppercase bg-brand-primary/90 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                        News & Blogs
                    </h2>
                </div>
                <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-4 gap-5 mt-10">
                    <div className="flex flex-col items-center md:col-span-2 md:items-start text-center md:text-left mb-5 lg:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl mb-5 font-bold tracking-tight md:px-0 px-4 text-white"
                        >
                            {`Today's`} News & <br /> Updates
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-300 font-normal text-lg lg:w-150"
                        >
                            Catch up on today’s latest news, important updates,
                            and announcements — everything you need to stay
                            informed, all in one place.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-5 flex justify-center"
                        >
                            <Button>View All Blogs</Button>
                        </motion.div>
                    </div>

                    {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </section>
            </section>
        </section>
    );
}
