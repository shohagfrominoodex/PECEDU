import Image from "next/image";

export default function Partner({ partner }) {
    return (
        <a
            href={partner.url}
            target="_blank"
            className="shrink-0 w-48 h-24 flex items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
        >
            <Image
                src={partner.logo}
                fill
                alt={partner.name}
                className="max-h-full max-w-full px-3 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
        </a>
    );
}
