"use client";
import Button from "@/components/button";
import Image from "next/image";
import { motion } from "motion/react";
import StudyCountry from "@/sections/study-abroad/studyCountry";
import StudyAbroadRequirements from "@/sections/study-abroad/studyAbroadRequirements";
import StudyAbroadTimeline from "@/sections/study-abroad/journeyTimeline";
import WhyChooseUs from "@/sections/whyChooseUs";
import UniversitySection from "@/sections/study-abroad/universitiesSection";
import ServicesSection from "@/sections/servicesSection";
import WorkingProcess from "@/sections/about/workingProcess";
import BlogsSection from "@/sections/blogsSection";
import FAQSection from "@/sections/study-abroad/faq";
import StudyHero from "@/sections/study-abroad/studyHero";
import CallToActionBanner from "@/sections/study-abroad/callToActionBanner";

const achivement = [
    {
        id: 1,
        icons: "/study_abroad/winner.webp",
        title: "Global Recognition",
        desc: "Degrees from international universities carry worldwide recognition",
    },
    {
        id: 2,
        icons: "/study_abroad/certificate.webp",
        title: "Quality Education",
        desc: "Quality Education Access to cutting-edge facilities and world-class faculty",
    },
    {
        id: 3,
        icons: "/study_abroad/oppurtunity.webp",
        title: "Career Opportunities",
        desc: "Enhanced job prospects both globally and back in Bangladesh",
    },
    {
        id: 4,
        icons: "/study_abroad/growth.webp",
        title: "Personal Growth",
        desc: "Develop independence, adaptability, and cross-cultural communication skills",
    },
    {
        id: 5,
        icons: "/study_abroad/language.webp",
        title: "Language Proficiency",
        desc: "Language Proficiency Improve English proficiency and potentially learn new languages for global communication",
    },
    {
        id: 6,
        icons: "/study_abroad/culture.webp",
        title: "Cultural Exchange",
        desc: "Exposure to diverse cultures, perspectives, and global networking opportunities",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const StudyAbroad = () => {
    return (
        <section className="overflow-x-hidden">
            <StudyHero
                title={`Study abroad is closer than you think`}
                paragraph={`From course selection to campus arrival, CSB the best study abroad agency in Bangladesh guides you every step of the way.`}
                buttonText={`Let's Go`}
            />
            <StudyCountry />
            <section className="bg-gray-100">
                <section className="max-w-7xl mx-auto md:py-20 py-10 px-4 xl:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-5xl md:leading-15 text-center px-4 font-bold mb-6 text-black"
                    >
                        Why Study Abroad from <br />
                        <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                            Bangladesh?
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl text-center mx-auto text-lg text-black mb-10 leading-relaxed"
                    >
                        {`Bangladesh's`} educational landscape is evolving, but
                        studying abroad offers unique advantages for Bangladeshi
                        students:
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {achivement.map((achive) => (
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                key={achive.id}
                                className="min-h-80 rounded-[40px] p-2 hover:scale-105 duration-300 shadow-md bg-white"
                            >
                                <div className="bg-gray-100 flex items-center justify-center p-6 flex-col text-center space-y-5 h-full rounded-[36px]">
                                    <div>
                                        <Image
                                            src={achive.icons}
                                            width={80}
                                            height={50}
                                            alt={achive.title}
                                        />
                                    </div>
                                    <h1 className="text-4xl font-semibold text-brand-accent">
                                        {achive.title}
                                    </h1>
                                    <p className="text-gray-600 text-base">
                                        {achive.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </section>
            <StudyAbroadRequirements />
            <StudyAbroadTimeline />
            <WhyChooseUs />
            <UniversitySection />
            <ServicesSection />
            <CallToActionBanner />
            <WorkingProcess />
            <BlogsSection />
            <FAQSection />
        </section>
    );
};

export default StudyAbroad;
