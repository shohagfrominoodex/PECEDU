import Link from "next/link";

export default function QuickLink({ partner }) {
    return (
        <section className="flex items-center gap-2">
            <Link
                href={"/blogs"}
                className="px-5 py-2 bg-brand-accent text-nowrap text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-primary/70 duration-300 transition-all"
            >
                Hot Courses
            </Link>
            <Link
                className="px-5 py-2 bg-brand-accent text-nowrap text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                href={"/universities"}
            >
                Popular University
            </Link>
            <Link
                className="px-5 py-2 bg-brand-accent text-nowrap text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                href={"/counselling"}
            >
                Free Counselling
            </Link>
            <Link
                className="px-5 py-2 bg-brand-accent text-nowrap text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                href={"/test"}
            >
                Popular Tools
            </Link>
            <Link
                className="px-5 py-2 bg-brand-accent text-nowrap text-brand-contrast border border-white/25 backdrop-blur-lg font-semibold rounded-xl hover:bg-brand-secondary hover:text-foreground duration-300 transition-all"
                href={"/mock-test"}
            >
                Free Mock Test
            </Link>
        </section>
    );
}
