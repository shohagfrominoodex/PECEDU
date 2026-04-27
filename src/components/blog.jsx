import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      key={blog.id}
      className="border border-black/10 bg-[#0D5F2B]/5 rounded-3xl overflow-hidden"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        className="object-cover rounded-t-3xl hover:scale-105 duration-300 transition-all"
        width={500}
        height={200}
      />
      <div className="p-3">
        <p className="text-gray-500 mt-2">{blog.date}</p>
        <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>
      </div>
      <div className="p-3">
        <button className="bg-[#0D5F2B] cursor-pointer hover:bg-white/80 inline-flex hover:text-black/80 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-full text-white text-sm font-semibold">
          Read More
        </button>
      </div>
    </Link>
  );
}
