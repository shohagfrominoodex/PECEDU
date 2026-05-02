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

const SERVICES = [
    {
        icon: <Users size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "Free Consultation",
        desc: "One-on-one expert guidance tailored to your profile, goals, and target country.",
    },
    {
        icon: <BookOpenText size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "Documentation",
        desc: "We handle SOPs, recommendation letters, transcripts and every document needed.",
    },
    {
        icon: <Map size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "University Placement",
        desc: "Matching you with the right program at the right university worldwide.",
    },
    {
        icon: <PlaneTakeoff size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "Visa Support",
        desc: "End-to-end visa application guidance with high success rate.",
    },
    {
        icon: <UserCheck size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "Eligibility Check",
        desc: "Know your chances before you apply with our eligibility assessment tool.",
    },
    {
        icon: <NotepadText size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "IELTS Coaching",
        desc: "Personalised coaching to help you hit your target English proficiency score.",
    },
    {
        icon: <GraduationCap size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "SOP Guidance",
        desc: "Our SOP guidance service provides personalized coaching to help students write compelling SOPs that showcase their academic achievements, career goals, and personal strengths.",
    },
    {
        icon: <CreditCard size={35} stroke="#0228a8c0" strokeWidth={1.3} />,
        title: "Financial Aid Assistance",
        desc: "We advise on financial aid options, guide students through the application process, and ensure the required documentation is submitted.",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="bg-linear-to-b bg-blue-900 py-20 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center md:justify-between gap-6 mb-12">
                    <div>
                        <p className="bg-blue-950 text-blue-100 rounded-full w-fit mx-auto px-5 py-2 text-lg font-semibold">
                            Services That We Prodive
                        </p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl text-blue-100 text-center mt-3 font-semibold"
                        >
                            Services Designed Around You
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-blue-200 text-lg leading-relaxed text-center"
                    >
                        From your first enquiry to the day you land — {"we're"}{" "}
                        with you every step of the way.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {SERVICES.map((s) => (
                        <ServiceCard key={s.title} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <div className="bg-linear-145 bg-blue-950 border border-white/30 hover:scale-103 rounded-2xl p-7 flex flex-col gap-6 hover:shadow-md duration-300">
            <div className="bg-blue-100 p-2 rounded-2xl w-fit shadow-lg">
                {icon}
            </div>
            <div>
                <h3 className="text-blue-100 text-2xl font-semibold mb-2.5 leading-snug">
                    {title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
