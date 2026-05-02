import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog }) {
    return (
        <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className="border border-black/10 bg-blue-950 p-1 shadow-lg rounded-3xl overflow-hidden"
        >
            <Image
                src={blog.image}
                alt={blog.title}
                className="object-cover rounded-t-3xl hover:scale-105 duration-300 transition-all"
                width={1000}
                height={200}
            />
            <div className="p-3">
                <p className="text-blue-100 mt-2">{blog.date}</p>
                <h3 className="text-xl text-white font-bold mt-2">
                    {blog.title}
                </h3>
                <p className="text-white/70 mt-2">{blog.description}</p>
            </div>
            <div className="p-3">
                <button className="bg-blue-900 cursor-pointer hover:bg-white/80 inline-flex hover:text-black/80 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-xl text-white text-sm font-semibold">
                    Read More
                </button>
            </div>
        </Link>
    );
}
