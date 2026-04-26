"use client";
import Image from "next/image";
import React from "react";

const BenefitSection = () => {
    const benefits = [
        {
            id: 1,
            src: "/images/universities.webp",
            url: "/study-abroad-bangladesh",
            title: "Why Choose Eduvisors",
        },
        {
            id: 2,
            src: "/images/classroom.webp",
            url: "/english-profiency",
            title: "Benefits of Studying Abroad",
        },
        {
            id: 3,
            src: "/images/disscuss.webp",
            url: "/universities",
            title: "Partner Universities",
        },
        {
            id: 4,
            src: "/images/teaching.webp",
            url: "/credentials",
            title: "Our Credentials",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto my-30">
            <h1 className="bg-clip-text text-transparent bg-linear-to-r from-[#0E602B] to-[#61CD70] text-center text-5xl font-semibold">
                We Help Individual Become their Best Version
            </h1>
            <p className="text-center text-xl text-gray-700 my-5">
                PecEdu is driven by a passion to help students reach their
                educational goals.
            </p>
            <section>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 xl:grid-cols-4">
                    {benefits.map((benefit) => (
                        <section key={benefit.id} className="flex w-150 group">
                            <section className="w-6/12 relative z-10">
                                <Image
                                    src={benefit.src}
                                    height={300}
                                    width={500}
                                    className="rounded-3xl h-full shadow-2xl cursor-pointer object-cover"
                                    alt={benefit.title}
                                />
                            </section>
                            <section
                                className="w-6/12 relative right-75 group-hover:z-20 ml-0 rounded-3xl bg-gray-200/80 p-5 opacity-0 pointer-events-none transform
                                -translate-y-20 group-hover:opacity-100
                                group-hover:pointer-events-auto backdrop-blur-[5px]
                                group-hover:translate-y-0 transition-all ease-in-out
                                duration-500"
                            >
                                <span className="text-sm font-light px-3 py-1.5 bg-gray-400 text-white rounded-full">
                                    - Why Choose Us
                                </span>
                                <h1 className="mt-5 font-medium text-3xl text-green-800">
                                    {benefit.title ||
                                        `Eduvisors helps you find your perfect study
                                    abroad destination.`}
                                </h1>
                                <p className="mt-3 font-normal text-sm">
                                    We will help you choose the best country for
                                    your academic and personal goals.
                                </p>
                                <div className="absolute bottom-5 left-6  w-10/12 mx-auto">
                                    <button className="w-full border border-green-800/50 bg-green-800/20 text-green-800 shadow-lg cursor-pointer rounded-full px-4 py-2">
                                        Start your journey now!
                                    </button>
                                </div>
                            </section>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default BenefitSection;
