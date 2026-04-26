import AboutSection from "@/sections/about";
import BenefitSection from "@/sections/benefitSection";
import ComparisonSection from "@/sections/comparisonSection";
import GlobalClients from "@/sections/globalClientSection";
import PartnerSection from "@/sections/partnerSection";
import TeamSection from "@/sections/teamSection";

const page = () => {
  return (
    <div>
      <AboutSection />
      <BenefitSection />
      <GlobalClients />
      <TeamSection />
      <ComparisonSection />
      <PartnerSection />
    </div>
  );
};

export default page;
