"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const CountryUniversities = ({ country = uk, name = "United Kingdom" }) => {
    return (
        <section className="bg-foreground">
            <section className="max-w-7xl md:py-20 py-10 mx-auto lg:px-6 px-4">
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
                    className="text-brand-contrast md:w-180 w-full mx-auto text-center font-medium text-3xl md:text-5xl"
                >
                    {name}
                </motion.h2>
                <motion.p
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
                    className="text-brand-soft-text w-full text-sm md:text-lg md:w-220 mx-auto text-center my-5"
                >
                    We are passionate about helping you pursue higher education
                    at {`Denmark's`} best universities. Every year, many
                    students come to Denmark with our support to realize their
                    dreams.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
                    {country.map((uni, index) => (
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
            </section>
        </section>
    );
};

export default CountryUniversities;
