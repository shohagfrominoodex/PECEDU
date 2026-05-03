import AboutSection from "@/sections/about";
import BenefitSection from "@/sections/benefitSection";
import BlogsSection from "@/sections/blogsSection";
import ComparisonSection from "@/sections/comparisonSection";
import GlobalClients from "@/sections/globalClientSection";
import HeroAnimation from "@/sections/heroSection";
import PartnerSection from "@/sections/partnerSection";
import TeamSection from "@/sections/teamSection";
import WhyChooseUs from "@/sections/whyChooseUs";
import ServicesSection from "@/sections/servicesSection";

const page = () => {
    return (
        <div className="bg-background text-foreground transition-colors duration-200">
            <HeroAnimation />
            <AboutSection />
            <BenefitSection />
            <GlobalClients />
            <TeamSection />
            <ServicesSection />
            <ComparisonSection />
            <WhyChooseUs />
            <PartnerSection />
            <BlogsSection />
        </div>
    );
};

export default page;
