import FounderSection from "./founderSection";

const TeamSection = () => {
    const teams = [
        {
            id: 1,
            src: "/team/sorwar_s.png.webp",
            name: "Ali Zabed",
            resignation: "CEO & Founder",
        },
    ];
    return (
        <section className="max-w-7xl mx-auto my-10">
            <p className="bg-[#CEFFE0] text-[#0D5F2B] rounded-full w-fit mx-auto px-5 py-2 text-lg font-semibold">
                Team Members
            </p>
            <h1 className="text-4xl text-center my-4 font-semibold">
                Experienced. Excellence. Extraordinary
            </h1>
            <p className="text-lg w-150 text-center text-gray-500 mx-auto">
                We give our employees chance to grow and reach their potential.
                Our team has expertise in guiding students, and we make sure
                each employee is informed on industry trends.
            </p>

            <section>
                <FounderSection />
            </section>
        </section>
    );
};

export default TeamSection;
