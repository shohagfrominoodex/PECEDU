"use client";
import { useEffect, useRef } from "react";
import { animate, inView } from "motion";

const GlobalClients = () => {
    const refs = useRef([]);
    const globalScore = [
        {
            id: 1,
            score: "90%",
            text: "Customer Satisfaction",
        },
        {
            id: 2,
            score: "97%",
            text: "Success Rate",
        },
        {
            id: 3,
            score: "983+",
            text: "Happy Clients",
        },
        {
            id: 4,
            score: "100+",
            text: "Partner University",
        },
    ];

    useEffect(() => {
        refs.current.forEach((el, idx) => {
            if (!el) return;
            const raw = globalScore[idx].score;
            const m = raw.match(/(\d+)(.*)/);
            if (!m) return;
            const target = parseInt(m[1], 10);
            const suffix = m[2] || "";

            inView(
                el,
                () => {
                    animate(0, target, {
                        duration: 1.4,
                        onUpdate(value) {
                            el.textContent = `${Math.round(value)}${suffix}`;
                        },
                    });
                },
                { once: true, amount: 0.5 },
            );
        });
    }, []);
    return (
        <section className="my-30 py-10 bg-linear-to-r from-white via-[#D1FFE2] to-white">
            <h1 className="font-semibold text-lg text-center">
                Global clients around the world
            </h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
                {globalScore.map((score, idx) => (
                    <section key={score.id} className="text-center mt-8">
                        <h2
                            ref={(el) => (refs.current[idx] = el)}
                            className="text-6xl font-bold"
                        >
                            0
                        </h2>
                        <p className="text-lg font-medium mt-2">{score.text}</p>
                    </section>
                ))}
            </section>
        </section>
    );
};

export default GlobalClients;
