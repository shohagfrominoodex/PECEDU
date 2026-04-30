import { Calendar, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog, idx }) {
    return (
        <Link href={`/blogs/${blog.id}`} key={blog.id} className="">
            <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
            >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-2 transition-all hover:bg-white/10">
                    <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-6">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-lg">
                            {blog.category}
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                            <Calendar size={14} />
                            <span>{blog.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-green-400 transition-colors">
                            {blog.title}
                        </h3>
                        <button className="px-5 py-2 group flex items-center duration-300 gap-1 mb-2 bg-white/5 border border-white/10 text-white backdrop-blur-lg font-semibold rounded-xl hover:bg-white/10 transition-all">
                            Read More
                            <div className="group-hover:block hidden">
                                <MoveUpRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
