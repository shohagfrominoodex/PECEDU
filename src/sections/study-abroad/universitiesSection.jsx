"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const uk = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const us = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const australia = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const canada = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
const UniversitySection = () => {
    return (
        <section className="bg-foreground">
            <section className="max-w-7xl mx-auto px-4 md:py-20 py-10 xl:px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl leading-15 text-center font-bold mb-6 text-brand-contrast"
                >
                    Discover Top Rated <br />
                    <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                        Universities
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl text-center mx-auto text-lg text-brand-soft-text mb-10 leading-relaxed"
                >
                    Top study abroad destinations for Bangladeshi students
                    include the UK, USA, Australia, Canada, and several European
                    countries. Based on factors like costs, immigration
                    prospects, safety, and institutional quality, the UK, USA,
                    Australia, Canada, and Denmark are particularly suitable
                    choices.
                </motion.p>

                <div>
                    <div className="flex items-center flex-col md:flex-row text-center md:justify-between mt-20">
                        <motion.h2
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="text-brand-contrast font-medium text-4xl"
                        >
                            United Kindom
                        </motion.h2>
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Button>View More</Button>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                        {uk.map((uni, index) => (
                            <Link
                                href={uni.url}
                                key={index}
                                className="flex flex-col items-center justify-between p-1 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-xl cursor-pointer"
                            >
                                <div className="h-6/12">
                                    <Image
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="h-full rounded-t-xl object-cover"
                                        height={500}
                                        width={500}
                                    />
                                </div>

                                <div className="text-center space-y-4 h-6/12 mt-5">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight px-2">
                                        {uni.name}
                                    </h3>

                                    <div
                                        className={`inline-block px-6 py-2 rounded-full text-sm font-medium transition-colors  bg-gray-100 text-gray-600 border border-gray-300`}
                                    >
                                        {uni.location}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center flex-col md:flex-row text-center md:justify-between mt-20">
                        <motion.h2
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="text-brand-contrast font-medium text-4xl"
                        >
                            United States America
                        </motion.h2>
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Button>View More</Button>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                        {uk.map((uni, index) => (
                            <Link
                                href={uni.url}
                                key={index}
                                className="flex flex-col items-center justify-between p-1 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-xl cursor-pointer"
                            >
                                <div className="h-6/12">
                                    <Image
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="h-full rounded-t-xl object-cover"
                                        height={500}
                                        width={500}
                                    />
                                </div>

                                <div className="text-center space-y-4 h-6/12 mt-5">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight px-2">
                                        {uni.name}
                                    </h3>

                                    <div
                                        className={`inline-block px-6 py-2 rounded-full text-sm font-medium transition-colors  bg-gray-100 text-gray-600 border border-gray-300`}
                                    >
                                        {uni.location}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center flex-col md:flex-row text-center md:justify-between mt-20">
                        <motion.h2
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="text-brand-contrast font-medium text-4xl"
                        >
                            Australia
                        </motion.h2>
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Button>View More</Button>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                        {australia.map((uni, index) => (
                            <Link
                                href={uni.url}
                                key={index}
                                className="flex flex-col items-center justify-between p-1 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-xl cursor-pointer"
                            >
                                <div className="h-6/12">
                                    <Image
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="h-full rounded-t-xl object-cover"
                                        height={500}
                                        width={500}
                                    />
                                </div>

                                <div className="text-center space-y-4 h-6/12 mt-5">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight px-2">
                                        {uni.name}
                                    </h3>

                                    <div
                                        className={`inline-block px-6 py-2 rounded-full text-sm font-medium transition-colors  bg-gray-100 text-gray-600 border border-gray-300`}
                                    >
                                        {uni.location}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center flex-col md:flex-row text-center md:justify-between mt-20">
                        <motion.h2
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="text-brand-contrast font-medium text-4xl"
                        >
                            Canada
                        </motion.h2>
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Button>View More</Button>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
                        {canada.map((uni, index) => (
                            <Link
                                href={uni.url}
                                key={index}
                                className="flex flex-col items-center justify-between p-1 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-xl cursor-pointer"
                            >
                                <div className="h-6/12">
                                    <Image
                                        src={uni.logo}
                                        alt={uni.name}
                                        className="h-full rounded-t-xl object-cover"
                                        height={500}
                                        width={500}
                                    />
                                </div>

                                <div className="text-center space-y-4 h-6/12 mt-5">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight px-2">
                                        {uni.name}
                                    </h3>

                                    <div
                                        className={`inline-block px-6 py-2 rounded-full text-sm font-medium transition-colors  bg-gray-100 text-gray-600 border border-gray-300`}
                                    >
                                        {uni.location}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default UniversitySection;
