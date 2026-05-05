"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navData = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "about",
        children: [
            { name: "Our Mission", href: "#" },
            { name: "Our Team", href: "#" },
            { name: "Gallery", href: "#" },
        ],
    },
    {
        name: "Study Abroad",
        href: "study-abroad",
        children: [
            {
                name: "Study in the Signapore",
                href: "#",
                src: "/icons/singapore.png",
            },
            {
                name: "Study in the China",
                href: "#",
                src: "/icons/china.png",
            },
            {
                name: "Study in the Japan",
                href: "#",
                src: "/icons/japan.png",
            },
            {
                name: "Study in the South Korea",
                href: "#",
                src: "/icons/south-korea.png",
            },
            {
                name: "Study in the Malaysia",
                href: "#",
                src: "/icons/malaysia.png",
            },
        ],
    },
    {
        name: "Popular University",
        href: "universities",
        children: [
            { name: "National University of Singapore", href: "#" },
            {
                name: "University of Science and Technology of China",
                href: "#",
            },
            { name: "University of Tokyo", href: "#" },
            { name: "Seoul National University", href: "#" },
            { name: "University of Malaya", href: "#" },
            { name: "Singapore University of Social Sciences", href: "#" },
        ],
    },
    {
        name: "Travel & Tours",
        href: "travel-tours",
        children: [
            { name: "UK", href: "#" },
            { name: "USA", href: "#" },
            { name: "Canada", href: "#" },
            { name: "Australia", href: "#" },
        ],
    },
    { name: "Blogs", href: "blogs" },

    { name: "Contact", href: "contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);

    const toggleMobileDropdown = (idx) => {
        setMobileExpanded(mobileExpanded === idx ? null : idx);
    };

    return (
        <nav className="fixed w-full z-50 top-4 px-4 sm:px-8">
            <div className="container mx-auto relative">
                <div className="flex items-center justify-between px-4 py-3 rounded-2xl border border-[var(--nav-border)] backdrop-blur-xl bg-[var(--nav-background)] shadow-2xl transition-colors duration-200">
                    <Link
                        href={"/"}
                        className="flex items-center lg:h-15 h-12 w-25 lg:w-30 gap-2 bg-white rounded-lg"
                    >
                        <Image
                            src={"/logo/logo.png"}
                            alt="pec edu logo"
                            height={90}
                            width={200}
                        />
                    </Link>

                    <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
                        {navData.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(idx)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-sm xl:text-lg font-medium text-[var(--nav-text)] hover:text-brand-muted transition-all py-2"
                                >
                                    {item.name}
                                    {item.children && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === idx ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </Link>

                                <AnimatePresence>
                                    {item.children &&
                                        activeDropdown === idx && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 10,
                                                    scale: 0.95,
                                                }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-70 bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 p-2"
                                            >
                                                {item?.children?.map(
                                                    (child, cIdx) => (
                                                        <Link
                                                            key={cIdx}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-lg text-gray-700 hover:bg-brand-secondary hover:text-brand-primary rounded-lg transition-colors"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {child.src && (
                                                                    <div>
                                                                        <Image
                                                                            src={
                                                                                child?.src
                                                                            }
                                                                            width={
                                                                                30
                                                                            }
                                                                            height={
                                                                                30
                                                                            }
                                                                            alt={
                                                                                child.name
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                                {child.name}
                                                            </div>
                                                        </Link>
                                                    ),
                                                )}
                                            </motion.div>
                                        )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden lg:block">
                            <Link
                                href={"/apply-now"}
                                className="px-4 flex items-center gap-1 py-2.5 bg-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg shadow-black/20"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 bg-[var(--nav-background)] right-0 mt-3 lg:hidden backdrop-blur-2xl rounded-3xl border border-[var(--nav-border)] shadow-2xl overflow-hidden p-4"
                        >
                            <div className="flex flex-col gap-2">
                                {navData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="border-b border-gray-100 last:border-0"
                                    >
                                        <button
                                            onClick={() =>
                                                item.children
                                                    ? toggleMobileDropdown(idx)
                                                    : null
                                            }
                                            className="w-full flex items-center justify-between py-4 px-2 text-white font-semibold"
                                        >
                                            {item.name}
                                            {item.children && (
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform ${mobileExpanded === idx ? "rotate-180" : ""}`}
                                                />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {item.children &&
                                                mobileExpanded === idx && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        className="overflow-hidden bg-black/15 rounded-xl mb-2"
                                                    >
                                                        <div className="flex flex-col py-2 px-4 gap-3">
                                                            {item.children.map(
                                                                (
                                                                    child,
                                                                    cIdx,
                                                                ) => (
                                                                    <a
                                                                        key={
                                                                            cIdx
                                                                        }
                                                                        href={
                                                                            child.href
                                                                        }
                                                                        className="text-white text-sm py-1"
                                                                    >
                                                                        {
                                                                            child.name
                                                                        }
                                                                    </a>
                                                                ),
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                                <Link
                                    href={"/apply-now"}
                                    className="px-4 flex items-center gap-1 py-2.5 bg-black/10 text-white justify-center rounded-xl font-semibold"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
