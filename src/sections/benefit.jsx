import Image from "next/image";
import Link from "next/link";
import React from "react";

const BenefitSection = () => {
    const benefits = [
        {
            id: 1,
            src: "/images/why_eduvisors.jpg.webp",
            url: "/study-abroad-bangladesh",
            title: "Why Choose Eduvisors",
        },
        {
            id: 2,
            src: "/images/benefits.png.webp",
            url: "/english-profiency",
            title: "Benefits of Studying Abroad",
        },
        {
            id: 3,
            src: "/images/partners.jpg.webp",
            url: "/universities",
            title: "Partner Universities",
        },
        {
            id: 4,
            src: "/images/our_credential.jpg.webp",
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
                <section className="grid md:grid-cols-2 mt-15 relative gap-5 lg:grid-cols-3 xl:grid-cols-4">
                    {benefits.map((benefit) => (
                        <Link
                            href={benefit.url}
                            key={benefit.id}
                            className="mt-5 block overflow-hidden rounded-2xl relative"
                        >
                            <Image
                                src={benefit.src}
                                height={200}
                                width={1000}
                                className="block w-full h-auto hover:scale-105 duration-300 cursor-pointer object-cover"
                                alt={benefit.title}
                            />
                            <div className="absolute left-0 right-0 bottom-0 bg-white/30">
                                <p className="backdrop-blur-md text-lg text-white font-semibold w-full py-5 px-5 rounded-b-2xl">
                                    {benefit.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default BenefitSection;
