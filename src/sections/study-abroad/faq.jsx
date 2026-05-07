"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question:
            "What factors should I consider when choosing a study destination?",
        answer: "Consider factors such as the quality of education, cost of living, post-study work opportunities, and cultural fit.",
    },
    {
        question:
            "What are some popular destinations for Bangladeshi students?",
        answer: "Popular choices include the UK, USA, Canada, Australia, and Malaysia due to their diverse programs and supportive environments.",
    },
    {
        question: "Why is the UK a popular destination for higher education?",
        answer: "The UK offers world-class universities, shorter degree durations, and a rich academic heritage that is recognized globally.",
    },
    {
        question:
            "What are the general English language proficiency requirements for studying abroad?",
        answer: "Most universities require IELTS, TOEFL, or PTE scores, typically ranging from 6.0 to 7.5 for IELTS depending on the program.",
    },
    {
        question: "How to get scholarship to study abroad from Bangladesh?",
        answer: "Look for government-funded scholarships, university-specific merit awards, and private foundation grants available to international students.",
    },
    {
        question: "How to apply for study abroad from Bangladesh?",
        answer: "The process usually involves selecting a course, preparing documents (transcripts, SOP, LORs), meeting language requirements, and applying through the university portal or an authorized representative.",
    },
    {
        question:
            "How to apply for undergraduate study to abroad from Bangladesh?",
        answer: "Students from Bangladesh looking to gain an international education and experience a different culture can apply for undergraduate study abroad by researching universities and programs, filling out an online application, providing proof of academic qualifications and submitting supporting documents, taking an English language proficiency test, and applying for a student visa.",
    },
    {
        question: "How to go abroad for study from Bangladesh in HSC?",
        answer: "Students from Bangladesh looking to study abroad in HSC (Higher Secondary Certificate) should research universities and programs that offer HSC programs, prepare for the application process, apply for scholarships or financial aid, be aware of visa requirements, plan for housing and living arrangements, make travel arrangements, and plan for insurance.",
    },
    {
        question: "What result do you need to study abroad from Bangladesh?",
        answer: "To study abroad from Bangladesh, one must meet the academic requirements of the institution or country they are applying to, provide proof of English proficiency, and demonstrate proof of financial support in order to secure a student visa.",
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 overflow-x-hidden">
            <section className="max-w-5xl mx-auto px-4 lg:px-6 xl:px-0 md:py-20 py-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl md:leading-15 text-center font-bold mb-10 text-brand-primary"
                >
                    Frequently Asked{" "}
                    <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                        Questions
                    </span>
                </motion.h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="shadow p-2 rounded-4xl bg-white"
                >
                    {faqData.map((item, index) => (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            key={index}
                            className="border-gray-200 mb-2 bg-gray-100 rounded-3xl"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full p-4 py-5 flex items-center justify-between text-left group transition-all"
                            >
                                <span className="text-lg md:text-xl font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">
                                    {item.question}
                                </span>
                                <div className="shrink-0 text-gray-400">
                                    {activeIndex === index ? (
                                        <Minus size={20} strokeWidth={1.5} />
                                    ) : (
                                        <Plus size={20} strokeWidth={1.5} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden p-3"
                                    >
                                        <div className="text-gray-600 bg-white rounded-2xl p-5 leading-relaxed text-lg">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </section>
    );
};

export default FAQSection;
