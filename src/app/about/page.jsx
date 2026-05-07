"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/button";
import StudyProcess from "@/sections/about/processedBy";
import WorkingProcess from "@/sections/about/workingProcess";

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
            <WorkingProcess />
            {/* our working process  */}

            {/* Process by Section  */}
            <StudyProcess />
            {/* Process by Section  */}
        </section>
    );
};

export default About;
