"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const AboutSection = () => {
    return (
        <section className="lg:mt-30 mt-10">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-clip-text text-transparent bg-linear-to-r from-green-900 to-green-500 text-center text-3xl px-5 md:px-20 md:text-5xl font-semibold"
            >
                Learn About The Best Study Abroad Deals With PecEdu
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-xl text-gray-700 my-5 px-5"
            >
                We’re just a call away – get free expert guidance from the
                comfort of your home.
            </motion.p>
            <section className="lg:mt-20 mt-10 pb-30 px-4 max-w-full mx-auto relative bg-green-900 to-white xl:rounded-t-[150px] rounded-t-[60px] md:rounded-t-[100px]">
                <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:w-6/12 w-full"
                    >
                        <span className="py-2 px-4 bg-white rounded-full text-lg text-green-500 font-semibold">
                            FEATURE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-6 text-green-100">
                            Your Global Journey Starts Here
                        </h1>
                        <p className="mt-5 text-lg text-green-100 md:w-120">
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
                            className="underline mt-8 inline-flex text-green-100 font-medium"
                        >
                            Read about us
                        </Link>
                        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-2">
                            <Link
                                href={"/blogs"}
                                className="px-5 py-2 bg-green-950 text-white border border-green-700/70 backdrop-blur-lg font-semibold rounded-xl hover:border-green-700/40 duration-300 hover:bg-green-700 transition-all"
                            >
                                Hot Courses
                            </Link>
                            <Link
                                className="px-5 py-2 bg-green-950 text-white border border-green-700/70 backdrop-blur-lg font-semibold rounded-xl hover:border-green-700/40 duration-300 hover:bg-green-700 transition-all"
                                href={"/universities"}
                            >
                                Popular University
                            </Link>
                            <Link
                                className="px-5 py-2 bg-green-950 text-white border border-green-700/70 backdrop-blur-lg font-semibold rounded-xl hover:border-green-700/40 duration-300 hover:bg-green-700 transition-all"
                                href={"/counselling"}
                            >
                                Free Counselling
                            </Link>
                            <Link
                                className="px-5 py-2 bg-green-950 text-white border border-green-700/70 backdrop-blur-lg font-semibold rounded-xl hover:border-green-700/40 duration-300 hover:bg-green-700 transition-all"
                                href={"/test"}
                            >
                                Popular Tools
                            </Link>
                            <Link
                                className="px-5 py-2 bg-green-950 text-white border border-green-700/70 backdrop-blur-lg font-semibold rounded-xl hover:border-green-700/40 duration-300 hover:bg-green-700 transition-all"
                                href={"/mock-test"}
                            >
                                Free Mock Test
                            </Link>
                        </div>
                    </motion.div>
                    <section className="lg:w-6/12 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Image
                                src={"/images/about-image.gif"}
                                alt={"about Image"}
                                width={1000}
                                className="rounded-3xl"
                                height={500}
                            />
                        </motion.div>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default AboutSection;
