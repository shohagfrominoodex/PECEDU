"use client";

import { motion } from "motion/react";
import {
    PlaneTakeoff,
    TextSelect,
    HeartHandshake,
    Zap,
    BookOpenText,
    Search,
} from "lucide-react";

const timelineSteps = [
    {
        step: 1,
        title: "Application Submission",
        description: "3-4 Month before",
        icon: <Search className="size-8" stroke="#FFF" />,
    },
    {
        step: 2,
        title: "Visa Application",
        description: "2 Month before",
        icon: <BookOpenText className="size-8" stroke="#FFF" />,
    },
    {
        step: 3,
        title: "Research & Shortlist Univesities",
        description: "3-6 Months before",
        icon: <TextSelect className="size-8" stroke="#FFF" />,
    },
    {
        step: 4,
        title: "Prepare & Take Required Tests",
        description: "5 Months Before",
        icon: <PlaneTakeoff className="size-8" stroke="#FFF" />,
    },
    {
        step: 5,
        title: "Travel Arrangements",
        description: "1 Month before",
        icon: <HeartHandshake className="size-8" stroke="#FFF" />,
    },
];

const StudyAbroadTimeline = () => {
    return (
        <section className="bg-foreground md:py-20 py-10 px-4 xl:px-0">
            <div className="max-w-5xl mx-auto space-y-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl md:leading-15 text-center font-bold mb-6 px-4 text-brand-contrast"
                >
                    Study Abroad Journey Timeline for <br />
                    <span className="bg-brand-primary text-brand-contrast w-fit text-2xl md:text-3xl rounded-md px-2">
                        Bangladeshi Students
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-center mx-auto text-lg text-brand-soft-text mb-10 leading-relaxed"
                >
                    This timeline guides you through key milestones, from
                    initial research to departure, ensuring you complete all
                    necessary steps for a successful international education
                    journey.
                </motion.p>

                <div className="relative pl-10 md:pl-20 space-y-12">
                    <div className="border-l absolute bg-brand-accent left-5 h-[calc(100%-100px)] w-1" />
                    {timelineSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-start gap-6 md:gap-10"
                        >
                            <div
                                className={`absolute -left-8 md:-left-21 top-0 flex items-center justify-center size-7 p-1.5 md:size-13 rounded-full bg-brand-accent shadow-lg text-${step.color}-600 bg-${step.color}-50`}
                            >
                                {step.icon}
                                <div
                                    className={`absolute hidden md:flex bottom-2 left-15 items-center justify-center size-6 rounded-full bg-${step.color}-600 text-white font-black text-sm md:text-base`}
                                >
                                    {step.step}
                                </div>
                            </div>

                            <div
                                className={`bg-white md:p-8 p-5 rounded-2xl shadow-sm border border-gray-100 flex-1 hover:shadow-lg transition-all duration-300 w-full`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-1">
                                    <h3 className="md:text-2xl text-xl font-bold text-brand-primary">
                                        {step.title}
                                    </h3>
                                    <div
                                        className={`inline-flex items-center gap-2 text-sm font-bold bg-${step.color}-50 text-${step.color}-800 px-4 md:py-1.5 rounded-full whitespace-nowrap`}
                                    >
                                        {step.time}
                                    </div>
                                </div>
                                <p className="text-base text-gray-700">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudyAbroadTimeline;
