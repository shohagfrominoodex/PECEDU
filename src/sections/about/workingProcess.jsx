"use client";
import Heading from "@/components/heading";
import { motion } from "motion/react";
import Image from "next/image";

const workingProcess = [
    {
        id: 1,
        process: "Thinking Study Abroad",
        details:
            "Are you a fresher or mature student with family and thinking about study abroad and not sure how and where to start?",
        src: "/images/think.webp",
    },
    {
        id: 2,
        process: "Schedule a Meeting",
        details:
            "We're just a call away and we have your back covered. With 13 years of experience, we're confident that we can help you realize your dreams.",
        src: "/images/meeting.webp",
    },
    {
        id: 3,
        process: "Documentation",
        details:
            "Documentation is an essential part of any process. You may need to prepare a variety of documents with great care. Let us guide you on how to do it.",
        src: "/images/documentation.webp",
    },
    {
        id: 4,
        process: "Placement",
        details:
            "Placement is crucial. Applying to the right program at the right university is key to your success after months of hard work. Let us handle it professionally.",
        src: "/images/placement.webp",
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

const WorkingProcess = () => {
    return (
        <section className="bg-gray-100">
            <section className="max-w-7xl overflow-x-hidden mx-auto md:py-20 px-4 xl:px-10 2xl:px-0 py-10">
                <Heading
                    subtitle="- About the company"
                    title="Simple Steps to"
                    highlight="Success."
                    color={false}
                />
                <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:px-4">
                    {workingProcess.map((process) => (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            key={process.id}
                            className="shadow-md bg-white p-2 hover:scale-102 duration-300 rounded-4xl"
                        >
                            <div className="bg-gray-100 rounded-3xl p-5 h-full">
                                <p className="text-5xl text-brand-accent font-bold">
                                    0{process.id}
                                </p>
                                <h1 className="my-3 text-3xl font-semibold text-brand-primary">
                                    {process.process}
                                </h1>
                                <p className="text-base mb-5 text-gray-600">
                                    {process.details}
                                </p>
                                <div className="h-80 overflow-hidden rounded-xl">
                                    <Image
                                        src={process.src}
                                        alt={process.process}
                                        className="object-cover h-full object-top hover:scale-110 duration-300"
                                        height={1000}
                                        width={1000}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default WorkingProcess;
