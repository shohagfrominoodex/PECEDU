import AboutSection from "@/sections/about";
import BenefitSection from "@/sections/benefitSection";
import BlogsSection from "@/sections/blogsSection";
import ComparisonSection from "@/sections/comparisonSection";
import GlobalClients from "@/sections/globalClientSection";
import HeroAnimation from "@/sections/heroSection";
import PartnerSection from "@/sections/partnerSection";
import TeamSection from "@/sections/teamSection";
import WhatWeDo from "@/sections/whatWeDo";

const page = () => {
  return (
    <div>
      <HeroAnimation />
      <AboutSection />
      <BenefitSection />
      <GlobalClients />
      <TeamSection />
      <WhatWeDo />
      <ComparisonSection />
      <PartnerSection />
      <BlogsSection />
    </div>
  );
};

export default page;
