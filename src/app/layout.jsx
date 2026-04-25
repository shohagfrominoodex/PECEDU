import "./globals.css";
import Header from "@/components/header";
import { Chivo } from "next/font/google";

const chivo = Chivo({
    subsets: ["latin"],
    variable: "--font-chivo",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "EDUVISORS",
    description:
        "Eduvisors discover a few simple steps to realize your aspirations of studying abroad. These steps are proven to work 100% and can transform your life.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${chivo.className} h-full antialiased`}>
            <body className={`min-h-full flex flex-col ${chivo.variable}`}>
                <header>
                    <Header />
                </header>
                <section>{children}</section>
            </body>
        </html>
    );
}
