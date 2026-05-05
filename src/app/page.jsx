import AboutSection from "@/sections/aboutSection";
import BenefitSection from "@/sections/benefitSection";
import BlogsSection from "@/sections/blogsSection";
import ComparisonSection from "@/sections/comparisonSection";
import GlobalClients from "@/sections/globalClientSection";
import HeroAnimation from "@/sections/heroSection";
import PartnerSection from "@/sections/partnerSection";
import TeamSection from "@/sections/teamSection";
import WhyChooseUs from "@/sections/whyChooseUs";
import ServicesSection from "@/sections/servicesSection";
import Navigation from "@/sections/navigation";
import VoucherSection from "@/sections/voucher";

const page = () => {
    return (
        <div className="bg-background text-foreground transition-colors duration-200">
            <HeroAnimation />
            <AboutSection />
            <Navigation />
            <WhyChooseUs />
            <BenefitSection />
            <GlobalClients />
            <TeamSection />
            <ServicesSection />
            <ComparisonSection />
            <VoucherSection />
            <PartnerSection />
            <BlogsSection />
        </div>
    );
};

export default page;
