import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBroom, faBuilding, faSprayCanSparkles, faSun, faHardHat, faTruckMoving, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Our Services", description: "Professional cleaning services." };

const services = [
  { slug: "house-cleaning", title: "House Cleaning", icon: faBroom, color: "bg-teal-100 text-teal-700", border: "border-teal-200", desc: "Regular, deep, and move-in cleaning for homes of all sizes.", image: "/images/services/house-cleaning.jpg" },
  { slug: "office-cleaning", title: "Office & Commercial", icon: faBuilding, color: "bg-sky-100 text-sky-700", border: "border-sky-200", desc: "Daily, weekly, or custom office cleaning for workplaces.", image: "/images/services/office-cleaning.jpg" },
  { slug: "carpet-cleaning", title: "Carpet & Upholstery", icon: faSprayCanSparkles, color: "bg-amber-100 text-amber-700", border: "border-amber-200", desc: "Deep steam cleaning for carpets, rugs, and furniture.", image: "/images/services/carpet-cleaning.jpg" },
  { slug: "window-washing", title: "Window Washing", icon: faSun, color: "bg-blue-100 text-blue-700", border: "border-blue-200", desc: "Interior and exterior window cleaning. Streak-free.", image: "/images/services/window-washing.jpg" },
  { slug: "post-construction", title: "Post-Construction", icon: faHardHat, color: "bg-orange-100 text-orange-700", border: "border-orange-200", desc: "Cleanup after renovation or construction work.", image: "/images/services/post-construction.jpg" },
  { slug: "move-out-cleaning", title: "Move-Out Cleaning", icon: faTruckMoving, color: "bg-purple-100 text-purple-700", border: "border-purple-200", desc: "Complete cleaning for move-out. Get your deposit back.", image: "/images/services/move-out-cleaning.jpg" },
  { slug: "junk-removal", title: "Junk Removal", icon: faTrashCan, color: "bg-red-100 text-red-700", border: "border-red-200", desc: "Furniture, appliances, debris removal. Eco-friendly disposal.", image: "/images/services/junk-removal.jpg" },
];

export default function ServicesPage() {
  return (<>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Our Services</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Complete Cleaning Solutions</h1><p className="mt-3 text-muted-foreground">Professional cleaning for every space, every surface, every need.</p></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s=>(<Link key={s.slug} href={`/services/${s.slug}`}><Card className={`glass-card overflow-hidden transition-shadow hover:shadow-lg h-full border-t-4 ${s.border}`}><img src={s.image} alt={s.title} className="w-full h-44 object-cover" /><CardHeader><div className={`inline-flex size-10 items-center justify-center rounded-lg mb-2 ${s.color}`}><FontAwesomeIcon icon={s.icon} className="size-5" /></div><CardTitle>{s.title}</CardTitle><CardDescription>{s.desc}</CardDescription></CardHeader><CardContent><span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">Learn more<FontAwesomeIcon icon={faArrowRight} className="size-3" /></span></CardContent></Card></Link>))}
      </div>
    </div></section>
    <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-50 via-sky-50 to-amber-50 text-center"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Not sure which service you need?</h2><p className="mt-3 text-muted-foreground max-w-xl mx-auto">Contact us for a free assessment.</p><div className="mt-6"><Link href="/contact"><Button size="lg">Get Free Consultation</Button></Link></div></div></section>
  </>);
}
