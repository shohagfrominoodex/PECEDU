"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Blog({ blog }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-primary shadow-lg rounded-2xl "
        >
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <div className="overflow-hidden rounded-t-2xl">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover rounded-t-2xl hover:scale-110 duration-300 transition-all"
                        width={1000}
                        height={2000}
                    />
                </div>
                <div className="p-3">
                    <p className="text-blue-100 mt-2">{blog.date}</p>
                    <h3 className="text-xl text-white font-bold mt-2">
                        {blog.title}
                    </h3>
                    <p className="text-white/70 mt-2">{blog.description}</p>
                </div>
                <div className="p-3">
                    <button className="bg-foreground cursor-pointer hover:bg-foreground/70 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-xl text-white text-sm font-semibold">
                        Read More
                    </button>
                </div>
            </Link>
        </motion.div>
    );
}
