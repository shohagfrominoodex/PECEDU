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
               description:
                    "Avoid these common pitfalls to improve your score.",
               date: "2022-01-03",
          },
     ];
     return (
          <section className="w-full bg-foreground py-20">
               <section className="max-w-7xl mx-auto">
                    <div className="mb-10">
                         <p className="text-gray-200 uppercase bg-brand-primary/90 w-fit mx-auto px-4 py-2 mb-5 rounded-full tracking-widest text-sm font-bold">
                              Blogs
                         </p>
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-4xl text-blue-100 text-center mb-5 font-semibold"
                         >
                              {`Today's`} News & Updates
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="md:text-lg text-base px-6 md:w-150 text-center text-blue-200 mx-auto"
                         >
                              Catch up on today’s latest news, important
                              updates, and announcements everything you need to
                              stay informed.
                         </motion.p>
                    </div>
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
