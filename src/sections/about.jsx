"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const AboutSection = () => {
    return (
        <section className="lg:pt-30 py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-gray-200 uppercase bg-brand-primary/90 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                    About Pecedu Global
                </h2>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-brand-primary text-center text-3xl px-5 md:px-20 md:text-5xl font-semibold"
            >
                Learn About The Best Study Abroad Deals With PecEdu
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-xl text-foreground/75 my-5 px-5"
            >
                We’re just a call away – get free expert guidance from the
                comfort of your home.
            </motion.p>
            <section className="lg:mt-20 relative mt-10 pb-30 px-4 max-w-full mx-auto bg-gray-100 text-brand-contrast transition-colors duration-200">
                <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:w-6/12 w-full"
                    >
                        <span className="py-2 px-4 bg-brand-primary rounded-full text-lg text-brand-contrast font-semibold">
                            FEATURE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-6 text-brand-primary">
                            Turning Study Abroad Dreams Into Reality
                        </h1>
                        <p className="mt-5 text-lg border-l-5 rounded-2xl border-gray-400 md:pl-8 pl-4 text-gray-500 md:w-120">
                            At Eduvisors, we turn your study abroad dreams into
                            reality. With 17+ years of expertise, personalized
                            guidance, and trusted global university
                            partnerships, we make every step from applications
                            to visas smooth and stress-free. Your future
                            deserves the best path, and we’re here to lead the
                            way.
                        </p>
                        <Link
                            href={"/about"}
                            className="underline mt-8 inline-flex text-gray-700 font-medium"
                        >
                            Read about us
                        </Link>
                        <div className="mb-20"></div>
                        {/* <p className="text-gray-700 text-lg font-semibold mt-5">
                            Quick Start:
                        </p> */}
                        {/* <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                            <Link
                                href={"/blogs"}
                                className="px-5 py-2 bg-brand-accent text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-primary/70 duration-300 transition-all"
                            >
                                Hot Courses
                            </Link>
                            <Link
                                className="px-5 py-2 bg-brand-accent text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                                href={"/universities"}
                            >
                                Popular University
                            </Link>
                            <Link
                                className="px-5 py-2 bg-brand-accent text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                                href={"/counselling"}
                            >
                                Free Counselling
                            </Link>
                            <Link
                                className="px-5 py-2 bg-brand-accent text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                                href={"/test"}
                            >
                                Popular Tools
                            </Link>
                            <Link
                                className="px-5 py-2 bg-brand-accent text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                                href={"/mock-test"}
                            >
                                Free Mock Test
                            </Link>
                        </div> */}
                    </motion.div>
                    <section className="lg:w-6/12 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative h-full flex flex-col md:flex-row gap-4"
                        >
                            <div className="lg:absolute top-0 left-0 lg:w-100 md:w-6/12 w-full lg:h-100">
                                <Image
                                    src={"/images/world.webp"}
                                    alt={"about Image"}
                                    width={1000}
                                    className="rounded-3xl w-full h-full object-cover"
                                    height={500}
                                />
                            </div>
                            <div className="lg:absolute bottom-0 right-0 lg:w-100 md:w-6/12 w-full lg:h-100">
                                <Image
                                    src={"/images/student.webp"}
                                    alt={"about Image"}
                                    width={1000}
                                    className="rounded-3xl w-full h-full object-cover"
                                    height={500}
                                />
                            </div>
                            <div className="hidden lg:block lg:absolute w-90 h-90 right-0 top-0">
                                <Image
                                    src={"/icons/Book_animation.gif"}
                                    alt={"about Image"}
                                    width={1000}
                                    className="rounded-3xl w-full h-full object-cover"
                                    height={500}
                                />
                            </div>
                        </motion.div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default AboutSection;
