import AboutSection from "@/sections/about";
import BenefitSection from "@/sections/benefit";
import GlobalClients from "@/sections/globalClients";
import TeamSection from "@/sections/teamSection";

const page = () => {
    return (
        <div>
            <AboutSection />
            <BenefitSection />
            <GlobalClients />
            <TeamSection />
        </div>
    );
};

export default page;
