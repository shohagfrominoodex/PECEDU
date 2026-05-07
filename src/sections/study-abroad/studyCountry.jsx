import Button from "@/components/button";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
const countries = [
    {
        id: 1,
        src: "/study_abroad/flags/uk.webp",
        url: "/study-abroad/uk",
        title: "Study in the UK",
    },
    {
        id: 2,
        src: "/study_abroad/flags/denmark.webp",
        url: "/study-abroad/denmark",
        title: "Study in the Denmark",
    },
    {
        id: 3,
        src: "/study_abroad/flags/sweeden.webp",
        url: "/study-abroad/sweeden",
        title: "Study in the Sweeden",
    },
    {
        id: 4,
        src: "/study_abroad/flags/netherland.webp",
        url: "/study-abroad/netherland",
        title: "Study in the Netherland",
    },
    {
        id: 5,
        src: "/study_abroad/flags/usa.webp",
        url: "/study-abroad/usa",
        title: "Study in the USA",
    },
    {
        id: 6,
        src: "/study_abroad/flags/canada.webp",
        url: "/study-abroad/canada",
        title: "Study in the Canada",
    },
];
const StudyCountry = () => {
    return (
        <section className="bg-foreground">
            <section className="max-w-7xl mx-auto md:py-20 py-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl md:leading-15 px-4 text-center font-bold mb-6 text-brand-contrast"
                >
                    Explore Destinations for <br />
                    <span className="bg-brand-primary text-brand-contrast w-fit rounded-md px-2">
                        Studying Abroad
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-center mx-auto text-lg text-brand-soft-text mb-10 px-4 leading-relaxed"
                >
                    {`Bangladesh's`} educational landscape is evolving, but
                    studying abroad offers unique advantages for Bangladeshi
                    students:
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden">
                    {countries.map((country) => (
                        <Link href={country.url} key={country.id}>
                            <div className="relative group h-100">
                                <motion.h1
                                    initial={{
                                        y: 50,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                    className="text-4xl absolute z-10 top-1/2 left-1/2 -translate-1/2 text-center font-bold text-brand-contrast"
                                >
                                    {country.title}
                                </motion.h1>
                                <Image
                                    src={country.src}
                                    alt={country.title}
                                    height={1000}
                                    className="h-full object-cover group-hover:brightness-50 group-hover:blur-[3px] brightness-90 duration-300"
                                    width={1000}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default StudyCountry;
