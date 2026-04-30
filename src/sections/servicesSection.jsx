"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Globe,
    BookOpen,
    ShieldCheck,
    Zap,
    Laptop,
    Headphones,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Consultation",
        description:
            "We consult with students, offering guidance on course selection and financial aid applications to make informed decisions about education.",
        icon: <Globe className="text-green-500" size={32} />,
    },
    {
        title: "Documentation ",
        description:
            "We assist students with the documentation needed for university admission, such as recommendation letters, SOP, and other paperwork.",
        icon: <ShieldCheck className="text-blue-500" size={32} />,
    },
    {
        title: "Placement ",
        description:
            "We help students find the right program at the right university by providing guidance on applications, course selection, and scholarship opportunities.",
        icon: <BookOpen className="text-purple-500" size={32} />,
    },
    {
        title: "Personalized Assistance",
        description:
            "Eduvisors provides personalized help for students who want to study abroad. We give custom guidance on choosing the right destination, help with visas, and plan finances.",
        icon: <Zap className="text-yellow-500" size={32} />,
    },
    {
        title: "Eligibility Assessment",
        description:
            "Our service helps students determine which universities and programs they are eligible for based on their academic background, test scores, and other relevant factors.",
        icon: <Laptop className="text-pink-500" size={32} />,
    },
    {
        title: "IELTS Coaching",
        description:
            "We provide personalized coaching to help students improve their English skills. Our experienced SRO provide guidance and support to help students achieve their target scores.",
        icon: <Headphones className="text-orange-500" size={32} />,
    },
    {
        title: "SOP Guidance",
        description:
            "Our SOP guidance service provides personalized coaching to help students write compelling SOPs that showcase their academic achievements, career goals, and personal strengths.",
        icon: <Headphones className="text-orange-500" size={32} />,
    },
    {
        title: "Interview Grooming",
        description:
            "Our experts provide guidance on presenting, and answering common interview questions through mock interviews to help students build confidence and improve their performance.",
        icon: <Headphones className="text-orange-500" size={32} />,
    },
    {
        title: "Course Selection",
        description:
            "We offer program requirements and career-specific course recommendations while working closely with each student to ensure their success.",
        icon: <Headphones className="text-orange-500" size={32} />,
    },
    {
        title: "Financial Aid Assistance",
        description:
            "We advise on financial aid options, guide students through the application process, and ensure the required documentation is submitted.",
        icon: <Headphones className="text-orange-500" size={32} />,
    },
];

const ServicesSection = () => {
    return (
        <section className="py-24 px-4 relative bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-0 right-0 w-125 h-125 bg-green-500/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-500/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white/60 uppercase bg-white/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-semibold"
                    >
                        What That We Provide
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold mt-5 tracking-tight mb-6 md:px-10 lg:px-0 px-4 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                    >
                        Modern Services Tailored <br /> For Your Future
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                            }}
                            className="group p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center transition-all duration-300"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all">
                                {service.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                {service.title}
                            </h4>

                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                                {service.description}
                            </p>

                            <div className="mt-8 w-12 h-1 bg-green-500/20 rounded-full group-hover:w-24 group-hover:bg-green-500 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
                <div className="mt-10 gap-2 flex-wrap flex justify-center text-white/60 bg-white/10 w-fit mx-auto px-2 md:px-5 py-1.5 md:py-2.5 rounded-full text-sm font-normal">
                    <span>Still have a question?</span>
                    <Link href={"/contact"} className="underline">
                        Contact Us
                    </Link>
                    <span>or</span>
                    <Link className="underline" href={"/apply-now"}>
                        Apply Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
