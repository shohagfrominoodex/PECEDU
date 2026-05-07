"use client";
import Heading from "@/components/heading";
import { motion } from "motion/react";
import {
    GraduationCap,
    Briefcase,
    Heart,
    Globe,
    Wallet,
    Building2,
} from "lucide-react";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const cards = [
    {
        icon: GraduationCap,
        title: "World-Class Education",
        desc: "Denmark is known for its top-quality education system and innovative learning environment.",
        side: "left",
    },
    {
        icon: Globe,
        title: "Multicultural Society",
        desc: "Denmark welcomes people from all over the world. You'll feel respected and included.",
        side: "right",
    },
    {
        icon: Briefcase,
        title: "Great Career Opportunities",
        desc: "Strong job market and international exposure open doors to a successful future.",
        side: "left",
    },
    {
        icon: Wallet,
        title: "Affordable Education",
        desc: "Low or no tuition fees at many universities make it a smart choice.",
        side: "right",
    },
    {
        icon: Heart,
        title: "High Quality of Life",
        desc: "Enjoy a safe, clean, and happy lifestyle with excellent healthcare and support systems.",
        side: "left",
    },
    {
        icon: Building2,
        title: "Student-Friendly Living",
        desc: "Affordable living costs, modern facilities, and student benefits make life easier.",
        side: "right",
    },
];

const leftCards = cards.filter((c) => c.side === "left");
const rightCards = cards.filter((c) => c.side === "right");

export default function ReasonToStudy() {
    return (
        <div className="w-full flex items-start justify-center bg-foreground py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <Heading
                    title="Reasons to Study in the Bangladesh to"
                    highlight="Singapore"
                    color={true}
                    paragraph="Studying in Denmark can be an enriching experience for Bangladeshi students. Here are some of the reasons why:"
                />

                <div className="hidden lg:grid grid-cols-3 gap-5 xl:gap-6 items-center mb-10">
                    <div className="flex flex-col gap-4 xl:gap-5">
                        {leftCards.map((card, i) => (
                            <CardItem
                                key={card.title}
                                card={card}
                                delay={0.2 + i * 0.1}
                                borderSide="left"
                            />
                        ))}
                    </div>

                    <div className="overflow-hidden h-110">
                        <Image
                            src="/study_abroad/flags/uk.webp"
                            alt="Copenhagen Nyhavn"
                            className="w-full h-full rounded-4xl object-cover"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className="flex flex-col gap-4 xl:gap-5">
                        {rightCards.map((card, i) => (
                            <CardItem
                                key={card.title}
                                card={card}
                                delay={0.2 + i * 0.1}
                                borderSide="right"
                            />
                        ))}
                    </div>
                </div>

                <div className="hidden sm:flex lg:hidden flex-col gap-8 mb-10">
                    <div className="grid grid-cols-2 gap-4">
                        {cards.map((card, i) => (
                            <CardItem
                                key={card.title}
                                card={card}
                                delay={0.1 + i * 0.07}
                                borderSide="left"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-5 sm:hidden mb-8">
                    {cards.map((card, i) => (
                        <CardItem
                            key={card.title}
                            card={card}
                            delay={0.08 + i * 0.06}
                            borderSide="left"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function CardItem({ card, delay }) {
    const Icon = card.icon;
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={delay * 10}
            whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(45,106,79,0.13)" }}
            className="flex items-start border border-brand-accent bg-brand-primary gap-3 sm:gap-4 rounded-2xl p-4 sm:p-5 cursor-default"
        >
            <div className="shrink-0 flex items-center justify-center rounded-xl bg-brand-accent shadow-lg p-2">
                <Icon
                    size={25}
                    className="text-brand-contrast"
                    strokeWidth={2}
                />
            </div>
            <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-lg mb-1 text-brand-contrast leading-snug">
                    {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {card.desc}
                </p>
            </div>
        </motion.div>
    );
}
