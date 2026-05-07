"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Dot } from "lucide-react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { GoShieldCheck } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

const features = [
    {
        icon: <IoCheckmarkDoneCircleOutline size={25} />,
        iconBg: "bg-brand-accent/70",
        title: "Priority Processing",
        description:
            "PecEdu Global assists students in selecting colleges, completing applications, financial aid, and more, helping them reach their goals.",
    },
    {
        icon: <AiOutlineGlobal size={25} />,
        iconBg: "bg-brand-accent/70",
        title: "Global Recognition",
        description:
            "PecEdu Global is a certified agency offering advice, service, info, and resources to help student clients make informed decisions.",
    },
    {
        icon: <HiOutlineUsers size={25} />,
        iconBg: "bg-brand-accent/70",
        title: "A Successful Team",
        description:
            "PecEdu Global provides reliable educational consulting. Our experienced advisors guarantee fair, ethical services, delivering the best results.",
    },
    {
        icon: <GoShieldCheck size={25} />,
        iconBg: "bg-brand-accent/70",
        title: "Trusted by World-Renowned Universities",
        description:
            "PecEdu Global is an expert educational consultancy providing exceptional support for students studying abroad around the world.",
    },
    {
        icon: <BiSupport size={25} />,
        iconBg: "bg-brand-accent/70",
        title: "Personalized Assistance for Students",
        description:
            "PecEdu Global provides personalized help for students who want to study abroad. We give custom guidance on choosing the right destination.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:justify-between gap-6 mb-12">
                    <div>
                        <div className="max-w-7xl mx-auto px-6 mb-5 md:mb-10 text-center">
                            <h2 className="text-black/60 uppercase bg-black/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                                Why Choose Us?
                            </h2>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl text-center font-bold tracking-tight md:px-10 lg:px-0 px-4 text-brand-primary"
                        >
                            Why Choose PECEDU
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed text-center"
                    >
                        We provide expert guidance and global opportunities to
                        shape your future career with confidence and ease.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                                key={index}
                                className="bg-white rounded-2xl px-5 py-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <div
                                    className={`shrink-0 w-13 h-13 text-brand-contrast rounded-xl ${feature.iconBg} flex items-center justify-center`}
                                >
                                    {feature.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[15px] sm:text-xl font-bold text-brand-primary mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[13px] sm:text-[15px] text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative flex items-center justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="relative w-full max-w-120 lg:max-w-full aspect-4/4 rounded-3xl overflow-hidden border-3 border-brand-primary shadow-xl"
                        >
                            <Image
                                src={"/images/classroom.webp"}
                                alt="why choose us"
                                className="object-cover"
                                fill
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
