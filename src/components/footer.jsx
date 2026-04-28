"use client";
import { Mail, MoveUpRight, Phone } from "lucide-react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { SiYoutube } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-black/90 text-white py-10">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12">
        <section className="border-r border-white/50 mr-8 col-span-4">
          <Image src="/logo/pecedu.webp" alt="logo" width={100} height={100} />
          <p className="text-gray-200 text-lg font-normal mt-5 w-80">
            Eduvisors is a leading educational consultancy firm that helps
            students achieve their dreams of studying abroad.
          </p>
          <div className="flex items-center gap-5 justify-center mt-5">
            <Link href={"https://www.facebook.com/pecedubd"} target="_blank">
              <BiLogoFacebookCircle className="text-3xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/pecedu"}
              target="_blank"
            >
              <ImLinkedin className="text-[25px]" />
            </Link>
            <Link href={"https://www.twitter.com/pecedu"} target="_blank">
              <BsTwitterX className="text-[25px]" />
            </Link>
            <Link href={"https://www.youtube.com/pecedu"} target="_blank">
              <SiYoutube className="text-3xl" />
            </Link>
          </div>
        </section>
        <section className="border-r border-white/50 mr-8 col-span-2">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <section className="mt-5 flex flex-col space-y-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/study-abroad"}>Study Abroad</Link>
            <Link href={"/resources"}>Resources</Link>
            <Link href={"/events"}>Events</Link>
            <Link href={"/universities"}>Universities</Link>
            <Link href={"/contact"}>Contact</Link>
          </section>
        </section>
        <section className="border-r border-white/50 mr-8 col-span-3">
          <h2 className="text-2xl font-semibold">Popular University</h2>
          <section className="mt-5 flex flex-col space-y-2">
            <Link
              href={"/universities/uttara-university"}
              className="flex items-center gap-2 group"
            >
              Uttara University
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
            <Link
              href={"/universities/dhaka-university"}
              className="flex items-center gap-2 group"
            >
              Dhaka University
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
            <Link
              href={"/universities/brac-university"}
              className="flex items-center gap-2 group"
            >
              Brac University
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
            <Link
              href={"/universities/north-south-university"}
              className="flex items-center gap-2 group"
            >
              North South University
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
            <Link
              href={"/universities/east-west-university"}
              className="flex items-center gap-2 group"
            >
              East West University
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
            <Link
              href={"/universities/aiub"}
              className="flex items-center gap-2 group"
            >
              AIUB
              <MoveUpRight
                size={16}
                strokeWidth={1.25}
                className="group-hover:block hidden duration-300"
              />
            </Link>
          </section>
        </section>
        <section className="col-span-3">
          <h2 className="text-2xl font-semibold">Need Help?</h2>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2">
              <Phone size={15} />
              <p>+8801712345678</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={15} />
              <Link href={"mailto:info@pecedu.com.bd"}>info@pecedu.com.bd</Link>
            </div>
          </div>
          <hr className="border-gray-400 my-5" />
          <section>
            <h2>Subscribe Our Newsletter?</h2>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 bg-white placeholder:text-gray-500 outline-none rounded-md px-3 py-1.5"
              />
              <button className="bg-[#0D5F2B] hover:bg-white/80 flex hover:text-black/80 cursor-pointer hover:shadow-lg duration-300 hover:scale-102 px-3 py-2 rounded-lg text-white text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </section>
        </section>
      </section>
      <hr className="border-white/50 max-w-7xl mx-auto my-10" />
      <section className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-white">
            PecEdu
          </Link>
          . All rights reserved.
        </p>
      </section>
    </section>
  );
}
