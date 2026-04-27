import {
  BookOpenText,
  CreditCard,
  GraduationCap,
  Map,
  NotepadText,
  PlaneTakeoff,
  UserCheck,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Users size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "Free Consultation",
    desc: "One-on-one expert guidance tailored to your profile, goals, and target country.",
  },
  {
    icon: <BookOpenText size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "Documentation",
    desc: "We handle SOPs, recommendation letters, transcripts and every document needed.",
  },
  {
    icon: <Map size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "University Placement",
    desc: "Matching you with the right program at the right university worldwide.",
  },
  {
    icon: <PlaneTakeoff size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "Visa Support",
    desc: "End-to-end visa application guidance with high success rate.",
  },
  {
    icon: <UserCheck size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "Eligibility Check",
    desc: "Know your chances before you apply with our eligibility assessment tool.",
  },
  {
    icon: <NotepadText size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "IELTS Coaching",
    desc: "Personalised coaching to help you hit your target English proficiency score.",
  },
  {
    icon: <GraduationCap size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "SOP Guidance",
    desc: "Our SOP guidance service provides personalized coaching to help students write compelling SOPs that showcase their academic achievements, career goals, and personal strengths.",
  },
  {
    icon: <CreditCard size={40} stroke="#0d5f2b" strokeWidth={1.3} />,
    title: "Financial Aid Assistance",
    desc: "We advise on financial aid options, guide students through the application process, and ensure the required documentation is submitted.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-linear-to-b from-[#CEFFE0] to-white py-20 px-2"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:justify-between gap-6 mb-12">
          <div>
            <p className="bg-white text-[#0D5F2B] rounded-full w-fit mx-auto px-5 py-2 text-lg font-semibold">
              Services That We Prodive
            </p>
            <h1 className="text-4xl text-center mt-3 font-semibold">
              Services Designed Around You
            </h1>
          </div>
          <p className="text-[#6a7282] text-lg leading-relaxed text-center">
            From your first enquiry to the day you land — {"we're"} with you
            every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-linear-145 from-white to-[#CEFFE0] rounded-2xl border border-[#e8e8e4] p-7 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300">
      <div className="bg-black/8 p-1 rounded-md w-fit">{icon}</div>
      <div>
        <h3 className="text-[#0f1f18] text-lg font-semibold mb-2.5 leading-snug">
          {title}
        </h3>
        <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
