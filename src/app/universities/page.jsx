"use client";
import Heading from "@/components/heading";
import WhyChooseUs from "@/sections/whyChooseUs";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
const universitiesObject = {
    UK: [
        {
            id: 1,
            name: "University of Wolverhampton",
            url: "https://oxforduniversity.com.uk",
            logo: "/study_abroad/university-of-wolverhampton.webp",
            location: "Edmonton, London",
            desc: "The University of Wolverhampton is a dynamic and inclusive institution committed to providing high-quality education and fostering personal and professional growth for its diverse student community.",
        },
        {
            id: 2,
            name: "University of Gloucestershire",
            url: "https://oxforduniversity.com.uk",
            logo: "/study_abroad/university-of-wolverhampton.webp",
            location: "Edmonton, London",
            desc: "In the United Kingdom, the University of Gloucestershire is a reputable university that provides a variety of academic programs. The institution offers students a well-rounded education in a lively and encouraging environment and is renowned for its emphasis on sustainability and community engagement.",
        },
        {
            id: 3,
            name: "University of Derby",
            url: "https://oxforduniversity.com.uk",
            logo: "/study_abroad/university-of-wolverhampton.webp",
            location: "Edmonton, London",
            desc: "University of Derby ranks Top 5 in UK employability and Top 25 for student satisfaction, emphasizing innovation, industry-aligned programs, and a new £14.4M Bioscience Superlab.",
        },
        {
            id: 4,
            name: "Bangor University",
            url: "https://oxforduniversity.com.uk",
            logo: "/study_abroad/university-of-wolverhampton.webp",
            location: "Edmonton, London",
            desc: "Bangor University, ranked in the top third globally and top 75 UK universities, excels in international research networks and citations per faculty, with strong sustainability and a coastal campus in Wales.",
        },
    ],
    US: [
        {
            id: 1,
            name: "University of Oxford",
            url: "https://oxforduniversity.com.uk",
            logo: "/study_abroad/university-of-wolverhampton.webp",
            location: "Edmonton, London",
            desc: "The University of Wolverhampton is a dynamic and inclusive institution committed to providing high-quality education and fostering personal and professional growth for its diverse student community.",
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
    ],
    Australia: [
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
    ],
    Canada: [
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
    ],
    Japan: [
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
    ],
    Singapore: [
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
    ],
    Malaysia: [
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
    ],
    SouthKorea: [
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
    ],
};
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

const Universities = () => {
    const [isActive, setIsActive] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("UK");
    const [universities, setUniversites] = useState([]);
    const countries = Object.keys(universitiesObject);
    useEffect(() => {
        countries.filter((country) => {
            if (selectedCountry === country) {
                setUniversites(universitiesObject[country]);
            }
        });
    }, [selectedCountry, countries]);

    return (
        <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto md:py-20 md:pt-40 pt-30 px-4 lg:px-8 2xl:px-0">
                <Heading
                    subtitle="global ACADEMIC partners"
                    title="Our Partner"
                    highlight="Universities"
                    color=""
                    paragraph="Collaborating with globally recognized institutions to create better opportunities for our students."
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-white shadow max-w-fit mx-auto gap-2 p-2 scroll-none overflow-x-scroll scroll-none rounded-full flex justify-between"
                >
                    {countries.map((country, idx) => (
                        <motion.button
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            key={idx}
                            onClick={() => {
                                setIsActive(idx);
                                setSelectedCountry(country);
                            }}
                            className={`${isActive === idx ? "bg-gray-500 text-white" : "bg-gray-100"} px-4 cursor-pointer text-sm md:text-base py-1 rounded-full`}
                        >
                            {country}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-5"
                >
                    {universities?.map((uk) => (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            key={uk.id}
                            className="bg-white shadow flex flex-col md:flex-row items-center mb-5 p-3 rounded-4xl gap-5"
                        >
                            <div className="md:w-4/12 w-full p-2">
                                <Image
                                    src={uk.logo}
                                    alt={uk.name}
                                    height={1000}
                                    width={1000}
                                    loading="eager"
                                />
                            </div>
                            <div className="bg-gray-100 md:w-8/12 w-full rounded-3xl p-5">
                                <div>
                                    <p className="text-gray-400 text-sm font-light flex items-center gap-1">
                                        <MapPin
                                            strokeWidth={1}
                                            size={14}
                                            className="text-gray-400"
                                        />
                                        {uk.location}
                                    </p>
                                </div>
                                <h2 className="text-2xl my-1 font-semibold">
                                    <Link href={uk.url}>{uk.name}</Link>
                                </h2>
                                <p className="text-base text-gray-600">
                                    {uk.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <WhyChooseUs />
        </section>
    );
};

export default Universities;
