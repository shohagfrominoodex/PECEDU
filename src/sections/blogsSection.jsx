import Blog from "@/components/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "How to Prepare for the PTE Exam",
      image: "/blogs/image-1.webp",
      description: "Learn the best strategies to prepare for the PTE exam.",
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
    <section className="max-w-7xl mx-auto my-10">
      <section>
        <p className="bg-[#CEFFE0] text-[#0D5F2B] rounded-full w-fit mx-auto px-5 py-2 text-lg font-semibold">
          Blogs
        </p>
        <h2 className="text-4xl font-bold text-center mt-3">Latest Blogs</h2>
      </section>
      <section className="grid grid-cols-3 gap-5 mt-10">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </section>
      <div className="flex justify-center">
        <Link
          href={"/blogs"}
          className="bg-[#0D5F2B] flex items-center gap-2 hover:bg-white/80 mt-5 hover:text-black/80 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-full text-white text-sm font-semibold"
        >
          View All Blogs
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
