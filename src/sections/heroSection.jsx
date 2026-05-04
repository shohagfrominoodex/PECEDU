"use client";
import Button from "@/components/button";
import { motion } from "motion/react";
import Image from "next/image";

const HeroAnimation = () => {
    const logos = [
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
        "/logo/logo.png",
    ];

    return (
        <section className="px-4 overflow-hidden min-h-screen py-10 md:py-20 lg:py-40 bg-[url(/images/hero-background.webp)] xl:bg-left bg-left bg-no-repeat relative bg-cover flex items-center">
            <div className="absolute inset-0 bg-black/40"></div>

            <section className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto relative justify-between gap-10 w-full">
                <div className="absolute bottom-30.5 overflow-hidden md:bottom-25.5 w-90 md:w-120 lg:w-150 2xl:w-170 lg:bottom-20 2xl:bottom-10 lg:left-75 left-1/2 xl:left-94 2xl:left-52 -translate-x-1/2 z-0 animate-spin-slow opacity-80 lg:opacity-100">
                    <Image
                        src={"/images/london-wheel.png"}
                        width={800}
                        height={400}
                        alt={"london-wheel.png"}
                        className="lg:w-200 h-auto"
                    />
                </div>

                <div className="relative flex items-center justify-center w-full lg:w-[75%] 2xl:w-1/2 h-100 md:h-125 lg:h-150 z-10">
                    <div className="absolute bottom-10.5 md:bottom-3 lg:-bottom-3 2xl:-bottom-6 left-1/2 2xl:left-50 -translate-x-1/2 w-full h-full flex items-center justify-center animate-spin-slow hover:[animation-play-state:paused] group">
                        {logos.map((logo, index) => {
                            const rotationAngle = (index * 360) / logos.length;
                            return (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{
                                        transform: `rotate(${rotationAngle}deg) translateY(var(--radius, -140px)) rotate(-${rotationAngle}deg)`,
                                    }}
                                    data-radius-setter
                                >
                                    <style jsx>{`
                                        div {
                                            --radius: -120px;
                                        }
                                        @media (min-width: 768px) {
                                            div {
                                                --radius: -150px;
                                            }
                                        }
                                        @media (min-width: 1024px) {
                                            div {
                                                --radius: -180px;
                                            }
                                        }
                                    `}</style>

                                    <div className="animate-spin-reverse bg-white rounded-md flex items-center justify-center w-16 md:w-20 md:h-12 lg:w-24 h-14 shadow-lg group-hover:[animation-play-state:paused] p-1">
                                        <Image
                                            src={logo}
                                            width={80}
                                            height={40}
                                            alt={`Logo ${index}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <section className="relative z-10 text-center lg:text-left lg:mt-30 xl:mt-0 mt-20 lg:w-1/2">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-semibold text-white leading-tight lg:leading-[1.2]"
                        >
                            Experience Excellence{" "}
                            <br className="hidden md:block" /> in Education{" "}
                            <br /> Study in{" "}
                            <span className="text-brand-accent bg-white px-2 rounded-md">
                                Denmark
                            </span>
                        </motion.h1>
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src={"/images/line.gif"}
                                height={100}
                                width={200}
                                alt={"line.gif"}
                                className="w-37.5 lg:w-75"
                            />
                        </div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-white text-lg md:text-xl mt-5 max-w-md mx-auto lg:mx-0"
                    >
                        Discover quality education and rich culture at an
                        affordable cost
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:mt-8 mt-0 flex justify-center lg:justify-start"
                    >
                        <Button>Apply for September</Button>
                    </motion.div>
                </section>
            </section>

            <div className="absolute z-0 bottom-26.5 md:bottom-32 left-1/2 -translate-x-1/2 lg:bottom-22.5 xl:left-99 2xl:left-130 2xl:bottom-24 lg:left-80 w-80 md:w-90 lg:w-150 flex justify-center lg:block opacity-80 lg:opacity-100">
                <Image
                    src={"/images/bg-stand.webp"}
                    width={840}
                    height={500}
                    alt={"bg-stand"}
                    className="brightness-60 w-75 md:w-full"
                />
            </div>
        </section>
    );
};

export default HeroAnimation;
