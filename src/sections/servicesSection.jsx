"use client";
import { motion } from "motion/react";
import {
    BookOpenText,
    CreditCard,
    GraduationCap,
    Map,
    NotepadText,
    PlaneTakeoff,
    UserCheck,
    Users,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/button";

const SERVICES = [
    {
        icon: (
            <Users
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "Free Consultation",
        desc: "One-on-one expert guidance tailored to your profile, goals, and target country.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <BookOpenText
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "Documentation",
        desc: "We handle SOPs, recommendation letters, transcripts and every document needed.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <Map size={30} className="text-brand-secondary" strokeWidth={1.3} />
        ),
        title: "University Placement",
        desc: "Matching you with the right program at the right university worldwide.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <PlaneTakeoff
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "Visa Support",
        desc: "End-to-end visa application guidance with high success rate.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <UserCheck
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "Eligibility Check",
        desc: "Know your chances before you apply with our eligibility assessment tool.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <NotepadText
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "IELTS Coaching",
        desc: "Personalised coaching to help you hit your target English proficiency score.",
        src: "/images/disscuss.webp",
    },
    {
        icon: (
            <GraduationCap
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "SOP Guidance",
        src: "/images/disscuss.webp",
        desc: "Our SOP guidance service provides personalized coaching to help students write compelling SOPs that showcase their academic achievements, career goals, and personal strengths.",
    },
    {
        icon: (
            <CreditCard
                size={30}
                className="text-brand-secondary"
                strokeWidth={1.3}
            />
        ),
        title: "Financial Aid Assistance",
        src: "/images/disscuss.webp",
        desc: "We advise on financial aid options, guide students through the application process, and ensure the required documentation is submitted.",
    },
];

export default function ServicesSection() {
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
        <section
            id="services"
            className="bg-gray-100 text-brand-contrast md:py-20 py-10 px-4 transition-colors duration-200"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:justify-between gap-6 mb-12">
                    <div>
                        <div className="max-w-7xl mx-auto px-6 mb-5 md:mb-10 text-center">
                            <h2 className="text-black/60 uppercase bg-black/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold">
                                Services That We Provide
                            </h2>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-5xl text-center font-bold tracking-tight md:px-10 lg:px-0 px-4 text-brand-primary"
                        >
                            Services Designed Around You
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed text-center"
                    >
                        From your first enquiry to the day you land — {"we're"}{" "}
                        with you every step of the way.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {SERVICES.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Button>Contact Us</Button>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, desc, src }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`bg-gray-200 group border border-gray-300 hover:scale-103 rounded-2xl md:p-4 p-2 flex flex-col md:flex-row items-center gap-6 hover:shadow-md duration-300`}
        >
            <div className="overflow-hidden md:w-6/12 w-full h-full rounded-xl">
                <Image
                    src={src}
                    alt={title}
                    height={1000}
                    className="rounded-xl h-full object-cover duration-300 group-hover:scale-120"
                    width={1000}
                />
            </div>
            <div className="md:w-6/12 w-full p-4 pt-0">
                <div className="bg-brand-primary p-2 rounded-full  w-fit shadow-lg">
                    {icon}
                </div>
                <div>
                    <h3 className="text-brand-primary text-2xl font-semibold my-2.5 leading-snug">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
