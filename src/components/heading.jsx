"use client";
import { motion } from "motion/react";

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

const Heading = ({
    title = "",
    highlight = "",
    subtitle = "",
    paragraph = "",
    color = true,
}) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="mb-5"
        >
            {subtitle && (
                <motion.p
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="text-black/60 uppercase bg-black/10 w-fit mx-auto px-4 py-2 rounded-full tracking-widest text-sm font-bold"
                >
                    {subtitle}
                </motion.p>
            )}
            {title && (
                <motion.h1
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    className={`md:text-5xl ${color ? "text-brand-contrast" : "text-brand-primary"} text-center text-4xl w-full lg:w-200 mx-auto font-semibold md:leading-15 leading-12 my-5`}
                >
                    {title}{" "}
                    <span
                        className={`bg-brand-accent text-brand-contrast px-2 rounded-md`}
                    >
                        {highlight}
                    </span>
                </motion.h1>
            )}
            {paragraph && (
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${color ? "text-gray-300" : "text-gray-600"} text-lg w-full px-6 lg:w-220 mx-auto leading-relaxed text-center`}
                >
                    {paragraph}
                </motion.p>
            )}
        </motion.div>
    );
};

export default Heading;
