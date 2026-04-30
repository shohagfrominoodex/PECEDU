import AboutSection from "@/sections/aboutSection";
import BenefitsSection from "@/sections/benefitSection";
import BlogSection from "@/sections/blogsSection";
import ComparisonSection from "@/sections/comparisonSection";
import GlobalClients from "@/sections/globalClientSection";
import HeroAnimation from "@/sections/heroAnimation";
import PartnerSection from "@/sections/partnerSection";
import ServicesSection from "@/sections/servicesSection";
import TeamSection from "@/sections/teamSection";
import WhyChooseUs from "@/sections/whyChooseUsSection";

const page = () => {
    return (
        <div>
            <HeroAnimation />
            <BenefitsSection />
            <AboutSection />
            <WhyChooseUs />
            <GlobalClients />
            <PartnerSection />
            <TeamSection />
            <ServicesSection />
            <ComparisonSection />
            <BlogSection />
        </div>
    );
};

export default page;
