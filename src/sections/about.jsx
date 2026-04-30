import AboutNavigation from "@/components/aboutNavigation";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="my-30">
            <h1 className="bg-clip-text text-transparent bg-linear-to-r from-[#0E602B] to-[#61CD70] text-center text-5xl font-semibold">
                Learn About The Best Study Abroad Deals With PecEdu
            </h1>
            <p className="text-center text-xl text-gray-700 my-5">
                We’re just a call away – get free expert guidance from the
                comfort of your home.
            </p>
            <section className="mt-20 px-4 max-w-full mx-auto relative bg-linear-to-b from-[#0d9c7de3] to-white xl:rounded-t-[150px]">
                <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 pt-20">
                    <section className="absolute -top-10 left-0 w-full">
                        <AboutNavigation />
                    </section>
                    <section className="lg:w-6/12 w-full">
                        <span className="py-2 px-4 bg-white rounded-full text-lg text-[#0E602B] font-semibold">
                            FEATURE
                        </span>
                        <h1 className="mt-8 text-5xl font-semibold">
                            Your Global Journey Starts Here
                        </h1>
                        <p className="mt-8 text-lg text-[#083216] md:w-120">
                            At Eduvisors, we turn your study abroad dreams into
                            reality. With 17+ years of expertise, personalized
                            guidance, and trusted global university
                            partnerships, we make every step from applications
                            to visas smooth and stress-free. Your future
                            deserves the best path, and we’re here to lead the
                            way.
                        </p>
                        <Link
                            href={"/about"}
                            className="underline mt-8 inline-flex font-medium"
                        >
                            Read about us
                        </Link>
                    </section>
                    <section className="lg:w-6/12 w-full">
                        <Image
                            src={"/images/about-image.gif"}
                            alt={"about Image"}
                            width={1000}
                            className="rounded-3xl"
                            height={500}
                        />
                    </section>
                </section>
            </section>
        </section>
    );
};

export default AboutSection;
