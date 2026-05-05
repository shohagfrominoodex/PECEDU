import { Dot } from "lucide-react";
import Link from "next/link";

export default function QuickLink() {
     return (
          <section className="flex items-center gap-2">
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    href={"/blogs"}
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
               >
                    Hot Courses
               </Link>
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
                    href={"/universities"}
               >
                    Popular University
               </Link>
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
                    href={"/counselling"}
               >
                    Free Counselling
               </Link>
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
                    href={"/travel-tours"}
               >
                    Travel & Tours
               </Link>
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
                    href={"/mock-test"}
               >
                    Free Mock Test
               </Link>
               <Dot stroke="#FFF" size={40} strokeWidth={4} />
               <Link
                    className="text-brand-contrast text-nowrap text-3xl font-bold"
                    href={"/popular-city"}
               >
                    Popular City
               </Link>
          </section>
     );
}
