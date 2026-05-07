import CountryUniversities from "@/components/countryUniversities";
import Scoreboard from "@/components/Scoreboard";
import WorkingProcess from "@/sections/about/workingProcess";
import BenefitsSection from "@/sections/benefitSection";
import BlogsSection from "@/sections/blogsSection";
import ServicesSection from "@/sections/servicesSection";
import CallToActionBanner from "@/sections/study-abroad/callToActionBanner";
import FAQSection from "@/sections/study-abroad/faq";
import ReasonToStudy from "@/sections/study-abroad/reasonToStudy";
import StudyHero from "@/sections/study-abroad/studyHero";
import WhyChooseUs from "@/sections/whyChooseUs";

const uk = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const us = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const australia = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];
const canada = [
    {
        id: 1,
        name: "University of Oxford",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 2,
        name: "University of Cambridge",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 3,
        name: "Imperial College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
    {
        id: 4,
        name: "King's College London",
        url: "https://oxforduniversity.com.uk",
        logo: "/study_abroad/oxford.webp",
        location: "Edmonton, London",
    },
];

const StudyAbroadFrom = async ({ params }) => {
    const { country } = await params;
    return (
        <section>
            <StudyHero
                title={`Study in the Singapore from Bangladesh.`}
                paragraph={`With a wide range of courses and universities to choose from, you're sure to find the perfect fit for your studies`}
                buttonText={`Start your journey with us!`}
            />
            <ReasonToStudy />
            <ServicesSection />
            <CountryUniversities
                country={us}
                name="We're proud to partner with Top Denmark Universities"
            />
            <WhyChooseUs />
            <CallToActionBanner />
            <Scoreboard
                scoreObject={{
                    first: { text: "Customer Satisfaction", score: "90%" },
                    second: { text: "Success Rate", score: "97%" },
                    third: { text: "Happy Clients", score: "983+" },
                    fouth: { text: "Partner University", score: "100+" },
                }}
                title={`Facts about the Denmark at a glance`}
            />
            <WorkingProcess />
            <BenefitsSection />
            <FAQSection />
            <BlogsSection />
        </section>
    );
};

export default StudyAbroadFrom;
