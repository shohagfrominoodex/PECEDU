import Image from "next/image";

const FounderSection = () => {
    const ceoInfo = [
        "CEO at Eduvisors",
        "Former CEO of PIEC",
        "Former CEO of PIEC Travels",
        "ITAC, Germany",
    ];
    return (
        <section className="flex max-w-6xl mx-auto items-center gap-8 mt-20">
            <section className="relative">
                <Image
                    src={"/team/sorwar_s.png.webp"}
                    alt="founder image"
                    className="hover:scale-102 hover:shadow-xl duration-300"
                    width={300}
                    height={200}
                />
                <section className="bg-white  border py-3 absolute bottom-4">
                    <h1 className="">CEO & Founder</h1>
                </section>
            </section>
            <section className="text-5xl font-semibold text-[#1a5f23]">
                {ceoInfo.map((info, idx) => (
                    <h1 key={idx}>{info}</h1>
                ))}
            </section>
        </section>
    );
};

export default FounderSection;
