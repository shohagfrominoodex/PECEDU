"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/button";
import StudyProcess from "@/components/about/processedBy";

const About = () => {
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
    return (
        <section>
            {/* about section  */}
            <section className="bg-foreground">
                <section className="max-w-7xl overflow-x-hidden mx-auto md:py-20 md:pt-40 pt-30 px-4 xl:px-10 2xl:px-0 py-10 text-white flex flex-col lg:flex-row gap-5 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="lg:w-6/12"
                    >
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-brand-muted tracking-widest text-sm md:text-base uppercase bg-white/20 w-fit px-3 py-1 rounded-full"
                        >
                            - About the company
                        </motion.p>
                        <motion.h1
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="md:text-5xl text-4xl font-semibold md:leading-15 leading-12 my-5"
                        >
                            Your Study Abroad Solution{" "}
                            <span className="bg-brand-accent px-2 rounded-md">
                                Partner.
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-base text-brand-secondary lg:w-120"
                        >
                            Web designing in a powerful way of just not an only
                            professions, however, in a passion for our Company.
                            We have to a tendency to believe the idea that smart
                            looking of any website is the first impression on
                            visitors.
                        </motion.p>
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-base text-brand-secondary mt-3 lg:w-120"
                        >
                            In doing so, we show them the world of possibilities
                            through the lens of the most updated study
                            abroad-related information. We help them make the
                            best-informed decision regarding their future
                            education abroad and career paths.
                        </motion.p>
                        <motion.div
                            initial={{
                                x: -150,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 3,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <Button>Discover More</Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="lg:w-6/12 overflow-hidden rounded-3xl h-150 border-3 border-brand-accent "
                    >
                        <Image
                            src={"/images/classroom.webp"}
                            alt="about company"
                            className="h-full object-cover"
                            height={1000}
                            width={1000}
                        />
                    </motion.div>
                </section>
            </section>
            {/* about section  */}

            {/* our working process  */}
            <section className="bg-gray-100">
                <section className="max-w-7xl overflow-x-hidden mx-auto md:py-20 px-4 xl:px-10 2xl:px-0 py-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <motion.p
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="text-black/60 uppercase bg-black/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold"
                        >
                            - About the company
                        </motion.p>
                        <motion.h1
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            className="md:text-5xl text-center text-4xl font-semibold md:leading-15 leading-12 my-5"
                        >
                            Simple Steps to{" "}
                            <span className="bg-brand-accent text-white px-2 rounded-md">
                                Success.
                            </span>
                        </motion.h1>
                    </motion.div>
                    <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:px-4">
                        {workingProcess.map((process) => (
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                key={process.id}
                                className="border border-brand-accent/40 bg-brand-accent/90 p-5 hover:scale-102 duration-300 rounded-2xl"
                            >
                                <p className="text-5xl text-brand-accent font-bold">
                                    0{process.id}
                                </p>
                                <h1 className="my-3 text-3xl font-semibold text-white">
                                    {process.process}
                                </h1>
                                <p className="text-base mb-5 text-gray-200">
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
                            </motion.div>
                        ))}
                    </div>
                </section>
            </section>
            {/* our working process  */}

            {/* Process by Section  */}
            <StudyProcess />
            {/* Process by Section  */}
        </section>
    );
};

export default About;
