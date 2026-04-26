import Image from "next/image";
import Link from "next/link";

export default function PartnerSection() {
  const partners = [
    {
      id: 1,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 2,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 3,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 4,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 5,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 6,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 7,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
    {
      id: 8,
      src: "/partners/Eduvisors-Logo.webp",
      url: "https://www.eduvisors.com/",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto my-10 overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl bg-linear-to-r from-[#0E602B] to-[#61CD70] bg-clip-text text-transparent font-bold mb-4">
          Our Partners
        </h1>
        <p className="text-lg font-medium">
          We are proud to partner with some of the best universities and
          organizations in the world.
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee-rl">
          <div className="flex gap-5 pr-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-2 flex items-center justify-center w-64 h-32 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Link href={`${partner.url}`} target="_blank">
                  <Image
                    src={partner.src}
                    alt={partner.src}
                    width={500}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee-lr">
          <div className="flex gap-5 pr-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-2 flex items-center justify-center w-64 h-32 shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Link href={`${partner.url}`} target="_blank">
                  <Image
                    src={partner.src}
                    alt={partner.src}
                    width={500}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
