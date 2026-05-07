"use client";

import { motion } from "framer-motion";
import { School, Award, Check } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const academicCards = [
    {
        id: "ug",
        badge: "Undergraduate",
        icon: <School size={20} />,
        heading: "SSC & HSC Results",
        marks: "55% – 70%",
        requirements: [
            "55–70% marks in both SSC & HSC",
            "Varies by university & program",
            "GPA minimum often 3.0 out of 5.0",
        ],
    },
    {
        id: "pg",
        badge: "Postgraduate",
        icon: <Award size={20} />,
        heading: "Bachelor's Degree",
        marks: "50 – 65%",
        requirements: [
            "50–65% marks in bachelor's",
            "CGPA 2.5–3.0 / 4.0 scale",
            "Relevant field preferred",
        ],
    },
];
const langScores = {
    ug: [
        { name: "IELTS", value: "5.5+", sub: "overall band" },
        { name: "PTE", value: "50+", sub: "academic score" },
        { name: "TOEFL", value: "57+", sub: "iBT total" },
    ],
    pg: [
        { name: "IELTS", value: "6.0+", sub: "overall band" },
        { name: "PTE", value: "50+", sub: "academic score" },
        { name: "TOEFL", value: "80+", sub: "iBT total" },
    ],
};

export default function StudyAbroadRequirements() {
    return (
        <section className="bg-gray-100">
            <section className="max-w-7xl mx-auto px-4 py-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl md:leading-15 px-4 text-center font-bold mb-6 text-black"
                >
                    Requirements for Bangladeshi Students to <br />
                    <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                        Study Abroad
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-center  mx-auto text-lg text-black mb-10 leading-relaxed"
                >
                    Bangladeshi students planning to study abroad need to meet
                    key requirements that vary by country and university. Common
                    requirements include:
                </motion.p>
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
                    className="max-w-5xl font-medium mx-auto text-2xl my-4"
                >
                    Academic Requirements:
                </motion.h2>
                <motion.div className="flex items-center gap-3 mb-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="w-full grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-5"
                    >
                        {academicCards.map((academy) => (
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                key={academy.id}
                                className="shadow-lg border border-white bg-white p-5 relative rounded-3xl"
                            >
                                <div className="absolute bg-brand-primary p-2 rounded-full text-white shadow top-5 right-5">
                                    {academy.icon}
                                </div>
                                <h1 className="text-2xl text-brand-primary font-semibold">
                                    {academy.badge}
                                </h1>
                                <span className="text-sm font-light">
                                    {academy.heading}
                                </span>
                                <h2 className="my-5 text-4xl font-bold text-brand-primary">
                                    {academy.marks}
                                </h2>
                                <hr className="border-t border-gray-300" />
                                <div className="my-3 mb-1 text-xl text-black font-medium">
                                    Requirements
                                </div>
                                <ul>
                                    {academy?.requirements?.map(
                                        (requirement, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 text-gray-600"
                                            >
                                                <span>
                                                    <Check
                                                        strokeWidth={1.5}
                                                        size={18}
                                                    />
                                                </span>
                                                <li className="my-1 ">
                                                    {requirement}
                                                </li>
                                            </div>
                                        ),
                                    )}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
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
                    className="max-w-5xl mt-10 font-medium mx-auto text-2xl my-4"
                >
                    English Requirements:
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-5 mb-4">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="md:w-6/12 w-full p-3 bg-white grid shadow-lg grid-cols-1 md:grid-cols-12 rounded-3xl mx-auto gap-3"
                    >
                        <h1 className="p-2 col-span-12 text-2xl font-medium text-brand-primary">
                            Post Graduate
                        </h1>
                        {langScores?.ug?.map((pg, idx) => (
                            <div
                                key={idx}
                                className={`${idx === langScores.ug.length - 1 ? "col-span-12" : "col-span-6"} bg-gray-100 p-5 relative rounded-2xl`}
                            >
                                <h2 className="text-2xl text-brand-primary font-semibold">
                                    {pg.name}
                                </h2>
                                <span className="text-sm font-light">
                                    {pg.sub}
                                </span>
                                <h2 className="my-5 text-4xl font-bold text-brand-primary">
                                    {pg.value}
                                </h2>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="md:w-6/12 w-full p-3 bg-white grid shadow-lg grid-cols-1 md:grid-cols-12 rounded-3xl mx-auto gap-3"
                    >
                        <h1 className="p-2 col-span-12 text-2xl text-brand-primary font-medium">
                            Post Graduate
                        </h1>
                        {langScores?.pg?.map((pg, idx) => (
                            <div
                                key={idx}
                                className={`${idx === langScores?.pg?.length - 1 ? "col-span-12" : "col-span-6"} bg-gray-100 p-5 relative rounded-2xl`}
                            >
                                <h2 className="text-2xl text-brand-primary font-semibold">
                                    {pg.name}
                                </h2>
                                <span className="text-sm font-light">
                                    {pg.sub}
                                </span>
                                <h2 className="my-5 text-4xl font-bold text-brand-primary">
                                    {pg.value}
                                </h2>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </section>
    );
}
