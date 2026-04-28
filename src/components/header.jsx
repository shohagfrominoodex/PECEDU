"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import Button from "./button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex items-center justify-between backdrop-blur-lg shadow-lg xl:px-10 lg:px-5 px-2 py-1 mx-auto">
      <section>
        <Link href={"/"}>
          <Image
            src={"/logo/pecedu.webp"}
            alt="eduvisors logo"
            className=""
            width={100}
            height={100}
          />
        </Link>
      </section>
      <nav className="items-center gap-5 font-normal text-sm xl:text-base hidden lg:flex">
        <Link href={"/"}>Home</Link>
        <div className="group relative">
          <Link href={"/about"} className="flex items-center gap-1">
            About
            <span className="group-hover:block hidden">
              <MdKeyboardArrowUp />
            </span>
            <span className="group-hover:hidden block">
              <MdKeyboardArrowDown />
            </span>
          </Link>
          <div className="invisible border border-black/8 absolute left-1/2 top-full z-20 mt-3 w-max -translate-x-1/2 rounded-xl bg-white px-4 py-3 text-sm text-black opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
            <Link
              href={"/locations"}
              className="flex items-center gap-1 text-lg"
            >
              Location
              <MdKeyboardArrowRight className="text-lg" />
            </Link>
            <hr className="my-2 border-t border-gray-300" />
            <section className="grid grid-cols-2 gap-3">
              <div>
                <Link
                  href={"/uk-consultant"}
                  className="flex items-center gap-2 mt-5"
                >
                  {/* <Image
                                        src={"/icons/uk-flag.png"}
                                        alt="uk flag"
                                        height={20}
                                        width={20}
                                    /> */}
                  UK Educational Consultant
                  <MdKeyboardArrowRight className="text-lg" />
                </Link>
              </div>
              <div>
                <Link
                  href={"/bd-consultant"}
                  className="flex items-center gap-2 mt-5"
                >
                  {/* <Image
                                        src={"/icons/bd-flag.png"}
                                        alt="bd flag"
                                        height={20}
                                        width={20}
                                    /> */}
                  BD Educational Consultant
                  <MdKeyboardArrowRight className="text-lg" />
                </Link>
              </div>
            </section>
            <hr className="my-5 border-t border-gray-300" />
            <section className="grid grid-cols-2 space-y-5 items-center">
              <Link
                href={"/team"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/team.png"}
                                    alt="team"
                                    height={30}
                                    width={30}
                                /> */}
                Our Team
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/scholarship"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/scholarship.png"}
                                    alt="schoolarship"
                                    height={30}
                                    width={30}
                                /> */}
                Scholarship
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/credentials"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/medal.png"}
                                    alt="credentials"
                                    height={30}
                                    width={30}
                                /> */}
                Our Credentials
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/partners"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/partners.png"}
                                    alt="partners"
                                    height={30}
                                    width={30}
                                /> */}
                Our Partners
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
            </section>
            <hr className="my-5 border-t border-gray-300" />
            <section className="grid grid-cols-2 space-y-5 items-center">
              <Link
                href={"/universities-partner"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/mortarboard.png"}
                                    alt="Partner Universities"
                                    height={30}
                                    width={30}
                                /> */}
                Partner Universities
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/become-partner"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/partners.png"}
                                    alt="Become a Partner"
                                    height={30}
                                    width={30}
                                /> */}
                Become a Partner
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/testimonials"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/testimonial.png"}
                                    alt="testimonials"
                                    height={30}
                                    width={30}
                                /> */}
                Testimonials
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
              <Link
                href={"/study-abroad-from-nigeria"}
                className="text-[16px] flex items-center gap-2"
              >
                {/* <Image
                                    src={"/icons/nigeria-flag.png"}
                                    alt="Study Abroad From Nigeria"
                                    height={30}
                                    width={30}
                                /> */}
                Study Abroad From Nigeria
                <MdKeyboardArrowRight className="text-lg" />
              </Link>
            </section>
            <Link
              href={"/about"}
              className="flex items-center gap-2 w-full justify-center rounded-xl bg-black/5 shadow-sm hover:bg-[#0D5F2B] text-lg mt-2 hover:text-white text-black duration-200 border border-black/10 py-5 hover:pb-8"
            >
              About Eduvisors
              <MdKeyboardArrowRight className="text-lg" />
            </Link>
          </div>
        </div>
        <Link href={"/study-abroad"} className="group flex items-center gap-1">
          Study Abroad
          <span className="group-hover:block hidden">
            <MdKeyboardArrowUp />
          </span>
          <span className="group-hover:hidden block">
            <MdKeyboardArrowDown />
          </span>
        </Link>
        <Link href={"/resources"} className="group flex items-center gap-1">
          Resources
          <span className="group-hover:block hidden">
            <MdKeyboardArrowUp />
          </span>
          <span className="group-hover:hidden block">
            <MdKeyboardArrowDown />
          </span>
        </Link>
        <Link href={"/events"}>Events</Link>
        <Link href={"/universities"} className="group flex items-center gap-1">
          Popular University
          <span className="group-hover:block hidden">
            <MdKeyboardArrowUp />
          </span>
          <span className="group-hover:hidden block">
            <MdKeyboardArrowDown />
          </span>
        </Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <section className="hidden lg:block">
        <Link
          href={"/apply-now"}
          className="bg-[#0D5F2B] hover:bg-white/80 flex hover:text-black/80 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-full text-white text-sm font-semibold"
        >
          Apply Now
        </Link>
      </section>
      <section
        onClick={() => setOpen(!open)}
        className="lg:hidden cursor-pointer"
      >
        {open ? <X /> : <Menu />}
        <div className="relative">
          {open && (
            <div className="absolute top-1 right-1 border bg-white p-5 rounded-2xl border-black/20">
              <nav className="flex flex-col space-y-2">
                <Link className="text-nowrap" href={"/"}>
                  Home
                </Link>
                <Link className="text-nowrap" href={"/about"}>
                  About
                </Link>
                <Link className="text-nowrap" href={"/study-abroad"}>
                  Study Abroad
                </Link>
                <Link className="text-nowrap" href={"/resources"}>
                  Resources
                </Link>
                <Link className="text-nowrap" href={"/events"}>
                  Events
                </Link>
                <Link className="text-nowrap" href={"/universities"}>
                  Popular University
                </Link>
                <Link className="text-nowrap" href={"/contact"}>
                  Contact
                </Link>
                <Link
                  href={"/apply-now"}
                  className="bg-[#0D5F2B] hover:bg-white/80 justify-center flex hover:text-black/80 hover:shadow-lg duration-300 hover:scale-102 px-4 py-2.5 rounded-full text-white text-sm font-semibold"
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
