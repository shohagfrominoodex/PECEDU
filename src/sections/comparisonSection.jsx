import { ArrowRight, CheckLine, CirclePlus, Layers, X } from "lucide-react";
import Link from "next/link";

const FEATURES = [
    {
        label: "Authorised by International Universities",
        others: false,
        edu: true,
    },
    { label: "Global SIM Card on Arrival", others: false, edu: true },
    { label: "Part-time Job Assistance", others: false, edu: true },
    { label: "Airport Pickup", others: false, edu: true },
    { label: "Health Insurance Guidance", others: false, edu: true },
    { label: "Internship Placement Support", others: false, edu: true },
    { label: "International Payment Services", others: false, edu: true },
    { label: "UK Bank Account Setup", others: false, edu: true },
    { label: "Cheap Air Ticket Assistance", others: false, edu: true },
    { label: "IELTS Registration Cashback", others: false, edu: true },
    { label: "Welcome Gift Hamper", others: false, edu: true },
    { label: "Free Eligibility Assessment", others: true, edu: true },
];

export default function WhyChooseSection() {
    return (
        <section className="py-20 pt-0 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <p className="bg-[#CEFFE0] text-[#0D5F2B] rounded-full w-fit mx-auto px-5 py-2 text-lg font-semibold">
                        Comparison
                    </p>
                    <h1 className="text-4xl text-center my-4 font-semibold">
                        See How We Compare
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="rounded-2xl border border-[#e0ddd6] overflow-hidden">
                        <div className="bg-white px-5 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#f0ede8] flex items-center justify-center shrink-0">
                                <CirclePlus strokeWidth={1} />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-[#444]">
                                    Other Consultancy
                                </p>
                                <p className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                    Standard
                                </p>
                            </div>
                        </div>
                        {FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white hover:bg-black/5 px-5 flex items-center border-t border-[#e0ddd6] gap-4"
                            >
                                <div className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                    {feature.others ? (
                                        <div className="bg-[#0D5F2B] w-fit rounded-full p-1 my-3 ">
                                            <CheckLine
                                                stroke="white"
                                                size={14}
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-red-500/80 w-fit rounded-full p-1 my-3">
                                            <X stroke="white" size={14} />
                                        </div>
                                    )}
                                </div>
                                <p className="text-[13px] font-semibold text-[#444]">
                                    {feature.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border-2 border-[#1a3a2a] overflow-hidden">
                        <div className="bg-[#1a3a2a] px-5 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                <Layers strokeWidth={1} stroke="#FFF" />
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-white">
                                    Pec Edu
                                </p>
                                <p className="text-[10px] text-[#7ec99e] font-bold tracking-wide uppercase">
                                    ✦ Recommended
                                </p>
                            </div>
                        </div>
                        <div className="bg-linear-150 from-[#1A3A2A] to-[#0D5F2B]">
                            {FEATURES.map((feature, index) => (
                                <div
                                    key={index}
                                    className="hover:bg-white/5 px-5 flex items-center border-t border-white/30 gap-4"
                                >
                                    <div className="text-[10px] text-[#bbb] font-medium tracking-wide uppercase">
                                        {feature.edu ? (
                                            <div className="bg-[#0D5F2B] w-fit rounded-full p-1 my-3">
                                                <CheckLine
                                                    stroke="white"
                                                    size={14}
                                                />
                                            </div>
                                        ) : (
                                            <div className="bg-red-500/80 w-fit rounded-full p-1 my-3">
                                                <X stroke="white" size={14} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-[13px] font-semibold text-white">
                                        {feature.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#1a3a2a] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#2a5a3a] transition-colors duration-200"
                    >
                        Book Free Consultation
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
