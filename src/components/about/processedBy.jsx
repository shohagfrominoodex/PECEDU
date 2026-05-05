import { motion } from "framer-motion";
import {
    Users,
    GraduationCap,
    FileText,
    Briefcase,
    Globe,
    CalendarCheck,
    Home,
    PlaneTakeoff,
} from "lucide-react";
import Button from "../button";

const steps = [
    {
        title: "Student Counselling",
        desc: "Personalized guidance to help you make informed decisions about international education.",
        icon: Users,
        color: "bg-brand-primary",
        num: "01",
    },
    {
        title: "Universities Search & Selection",
        desc: "Document review and support through the admission gate once your application is received.",
        icon: GraduationCap,
        color: "bg-brand-primary",
        num: "02",
    },
    {
        title: "Application Process",
        desc: "Guiding you through filling forms and submitting documents to your dream universities.",
        icon: FileText,
        color: "bg-brand-primary",
        num: "03",
    },
    {
        title: "Part-time Job Assistance",
        desc: "Helping you find jobs that fit your skillset so you can focus on studies without financial worry.",
        icon: Briefcase,
        color: "bg-brand-primary",
        num: "04",
    },
    {
        title: "Visa Application Process",
        desc: "A start-to-finish guide through each step of your student visa application.",
        icon: Globe,
        color: "bg-brand-primary",
        num: "05",
    },
    {
        title: "Pre-Departure Briefing",
        desc: "Orientation sessions to prepare you for life abroad and connect you with peers.",
        icon: CalendarCheck,
        color: "bg-brand-primary",
        num: "06",
    },
    {
        title: "Accommodation",
        desc: "Finding safe and affordable housing options that fit your budget and lifestyle.",
        icon: Home,
        color: "bg-brand-primary",
        num: "07",
    },
    {
        title: "Airport Pick-up",
        desc: "Seamless arrival services to ensure your start in a new country is completely stress-free.",
        icon: PlaneTakeoff,
        color: "bg-brand-primary",
        num: "08",
    },
];

export default function StudyProcess() {
    return (
        <section className="relative md:py-20 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-foreground">
            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white uppercase bg-brand-accent/80 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold"
                    >
                        - About the company
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:text-5xl text-center text-white text-4xl font-semibold md:leading-15 leading-12 my-5"
                    >
                        Our Working{" "}
                        <span className="bg-brand-accent text-white px-2 rounded-md">
                            Proccess.
                        </span>
                    </motion.h1>
                </motion.div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-brand-primary" />

                    <div className="space-y-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-60px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="relative flex items-center"
                                >
                                    <div className="hidden md:flex w-full items-center">
                                        <div
                                            className={`w-[calc(50%-2rem)] ${isLeft ? "flex justify-end pr-0" : ""}`}
                                        >
                                            {isLeft && (
                                                <StepCard
                                                    step={step}
                                                    Icon={Icon}
                                                    align="right"
                                                />
                                            )}
                                        </div>

                                        <div className="w-16 shrink-0 flex items-center justify-center z-10">
                                            <div
                                                className={`w-10 h-10 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg ring-4`}
                                            >
                                                <span className="text-white text-xs font-black">
                                                    {step.num}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            className={`w-[calc(50%-2rem)] ${!isLeft ? "flex justify-start pl-0" : ""}`}
                                        >
                                            {!isLeft && (
                                                <StepCard
                                                    step={step}
                                                    Icon={Icon}
                                                    align="left"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="md:hidden flex w-full items-start gap-4 pl-4">
                                        <div className="relative shrink-0 flex flex-col items-center">
                                            <div
                                                className={`w-9 h-9 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                                            >
                                                <span className="text-white text-xs font-black">
                                                    {step.num}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex-1 pb-2">
                                            <StepCard
                                                step={step}
                                                Icon={Icon}
                                                align="left"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="md:mt-20 mt-10 flex justify-center"
                >
                    <Button>Start Your Journey!</Button>
                </motion.div>
            </div>
        </section>
    );
}

function StepCard({ step, Icon, align }) {
    return (
        <div
            className={`group relative p-5 sm:p-6 rounded-xl border border-brand-accent bg-brand-accent/60 transition-all duration-300 hover:-translate-y-1 w-full max-w-sm ${align === "right" ? "ml-auto" : "mr-auto"}`}
        >
            <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${step.color}`}
            >
                <Icon className="w-5 h-5 text-white" />
            </div>

            <h3 className="text-base sm:text-xl font-bold mb-1.5 text-brand-contrast">
                {step.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
                {step.desc}
            </p>
        </div>
    );
}
