import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Reviews", description: "Read what our customers say about FreshClean Pro." };

const reviews = [
  { name:"Amanda K.", rating:5, text:"FreshClean has been cleaning our home for 3 years. They're always on time, incredibly thorough, and our cats love the eco-friendly products!" },
  { name:"David R., Office Manager", rating:5, text:"We switched 5 cleaning services before finding FreshClean. They handle our 30,000 sq ft office flawlessly. Highly recommend for commercial cleaning." },
  { name:"The Johnsons", rating:5, text:"Used their move-out cleaning service and got our FULL deposit back. The apartment was cleaner than when we moved in!" },
  { name:"Lisa M.", rating:5, text:"Their carpet cleaning brought our 15-year-old carpet back to life. I didn't think it was possible. Amazing results." },
  { name:"Robert T.", rating:5, text:"Post-construction cleanup was incredible. They removed every speck of drywall dust. The house was move-in ready in one day." },
  { name:"Michelle P.", rating:5, text:"Window washing service was perfect. Every window is crystal clear, inside and out. The team was professional and careful." },
  { name:"Tom H.", rating:5, text:"Junk removal was fast and affordable. They took our old furniture and even donated usable items to charity. Great people." },
  { name:"Sarah W.", rating:5, text:"Regular house cleaning for 2 years now. Consistent quality, friendly team, and they always go the extra mile. Love FreshClean!" },
  { name:"Corporate Client", rating:5, text:"FreshClean handles all 12 of our retail locations. Reliable, professional, and their reporting system keeps us informed. A+ service." },
];

export default function ReviewsPage() {
  return (<section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Reviews</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">What Our Customers Say</h1><p className="text-muted-foreground">Hundreds of 5-star reviews from happy homes and businesses.</p></div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{reviews.map((r,i)=>(<Card key={i} className="glass-card"><CardContent className="pt-6"><div className="flex gap-1 mb-3">{Array.from({length:r.rating}).map((_,j)=><FontAwesomeIcon key={j} icon={faStar} className="size-4 text-amber-500" />)}</div><p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p><p className="text-sm font-semibold">&mdash; {r.name}</p></CardContent></Card>))}</div>
    <div className="text-center mt-10"><Link href="/booking"><Button size="lg">Book Your Clean<FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" /></Button></Link></div>
  </div></section>);
}
