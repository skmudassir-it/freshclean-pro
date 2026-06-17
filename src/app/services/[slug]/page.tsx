import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const data: Record<string,{title:string;desc:string;img:string;features:string[];faqs:{q:string;a:string}[]}> = {
  "house-cleaning":{title:"House Cleaning",desc:"Professional house cleaning by FreshClean Pro. Our trained team uses eco-friendly products and proven techniques for spotless results.",img:"/images/services/house-cleaning.jpg",features:["Trained background-checked professionals","Eco-friendly cleaning products","Flexible scheduling","Satisfaction guaranteed","Fully insured and bonded","Transparent pricing"],faqs:[{q:"How long does house cleaning take?",a:"Depends on home size. Most homes are 2-4 hours."},{q:"Do I need to provide supplies?",a:"No! We bring all professional equipment and eco-friendly products."},{q:"Are you insured?",a:"Yes, fully licensed, bonded, and insured."}]},
  "office-cleaning":{title:"Office & Commercial Cleaning",desc:"Professional commercial cleaning for offices and workplaces. Daily, weekly, or custom schedules.",img:"/images/services/office-cleaning.jpg",features:["After-hours and weekend service","Commercial-grade equipment","Custom cleaning plans","Dedicated account manager","Eco-friendly options","Competitive rates"],faqs:[{q:"Do you work after business hours?",a:"Yes! We offer evening and weekend service to avoid disruption."},{q:"What's included?",a:"Desks, floors, restrooms, break rooms, trash removal, and more."},{q:"Minimum contract?",a:"No minimum. We work on your schedule."}]},
  "carpet-cleaning":{title:"Carpet & Upholstery Cleaning",desc:"Deep steam cleaning for carpets, rugs, and upholstered furniture. Hot water extraction removes dirt and allergens.",img:"/images/services/carpet-cleaning.jpg",features:["Hot water extraction method","Quick drying time","Pet stain and odor removal","Eco-friendly solutions","Furniture moving included","Spot treatment"],faqs:[{q:"How long to dry?",a:"Most carpets dry in 4-6 hours with proper ventilation."},{q:"Safe for pets?",a:"Yes! Our cleaning solutions are pet and child safe."},{q:"Do you move furniture?",a:"Yes, we move and replace light furniture at no extra charge."}]},
  "window-washing":{title:"Window Washing",desc:"Professional interior and exterior window cleaning. Streak-free guarantee for crystal clear views.",img:"/images/services/window-washing.jpg",features:["Interior and exterior cleaning","Screen cleaning included","Track and sill cleaning","Hard water stain removal","Commercial high-rise capable","Streak-free guarantee"],faqs:[{q:"How often should windows be cleaned?",a:"We recommend twice yearly for most homes, quarterly for businesses."},{q:"Do you clean skylights?",a:"Yes! Skylights and hard-to-reach windows included."},{q:"Rain guarantee?",a:"If it rains within 48 hours, we'll come back free."}]},
  "post-construction":{title:"Post-Construction Cleanup",desc:"Thorough cleaning after renovation or construction. We remove dust, debris, and leave your space move-in ready.",img:"/images/services/post-construction.jpg",features:["Complete dust removal","Debris disposal","Window and frame cleaning","Floor scrubbing and sealing","HVAC vent cleaning","Final detail work"],faqs:[{q:"When should I schedule?",a:"After all contractors finish. We do the final clean before move-in."},{q:"How long does it take?",a:"Depends on project size. Small renos 2-4 hours, full builds 1-2 days."},{q:"Do you handle hazardous materials?",a:"We handle construction dust and debris. Hazardous materials require specialists."}]},
  "move-out-cleaning":{title:"Move-Out Cleaning",desc:"Complete top-to-bottom cleaning for move-out. Detailed checklist to help you get your security deposit back.",img:"/images/services/move-out-cleaning.jpg",features:["Complete room-by-room checklist","Appliance interior cleaning","Cabinet and closet cleaning","Baseboard and trim detailing","Window and blind cleaning","Floor deep cleaning"],faqs:[{q:"Will this help get my deposit back?",a:"Yes! We follow standard landlord checklists for move-out inspections."},{q:"How long does move-out cleaning take?",a:"Studio: 2-3 hrs, 1BR: 3-4 hrs, 2BR: 4-6 hrs."},{q:"Empty apartment required?",a:"Yes, all personal items must be moved out before we arrive."}]},
  "junk-removal":{title:"Junk Removal",desc:"Furniture, appliances, electronics, and debris removal. Eco-friendly disposal with donation whenever possible.",img:"/images/services/junk-removal.jpg",features:["Furniture and appliance removal","Electronics recycling","Construction debris hauling","Eco-friendly disposal","Donation to local charities","Same-day service available"],faqs:[{q:"What can't you take?",a:"Hazardous materials like chemicals, paint, and asbestos require specialists."},{q:"How is pricing calculated?",a:"By volume. We'll provide an upfront quote based on how much space your items take."},{q:"Same day service?",a:"Yes! Call before noon for same-day pickup in most areas."}]},
};

export function generateStaticParams() { return Object.keys(data).map(s=>({slug:s})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params; const s=data[slug]; return s?{title:s.title,description:s.desc}:{title:"Not Found"};
}
export default async function Page({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const s=data[slug];
  if(!s) return <div className="py-20 text-center"><h1 className="text-2xl font-bold">Not Found</h1><Link href="/services"><Button variant="outline"><FontAwesomeIcon icon={faArrowLeft} className="size-4 mr-2" />Back</Button></Link></div>;
  return <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"><FontAwesomeIcon icon={faArrowLeft} className="size-3" />All Services</Link>
    <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-800">{s.title}</Badge>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{s.title}</h1>
    <p className="text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
    <img src={s.img} alt={s.title} className="w-full rounded-xl mb-10" />
    <h2 className="text-xl font-semibold mb-4">What's Included</h2>
    <ul className="grid gap-3 sm:grid-cols-2 mb-10">{s.features.map((f,i)=><li key={i} className="flex items-start gap-2.5 text-sm"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-teal-600 mt-0.5 shrink-0" /><span>{f}</span></li>)}</ul>
    <Separator className="my-8" />
    <h2 className="text-xl font-semibold mb-4">FAQ</h2>
    <Accordion className="mb-10">{s.faqs.map((f,i)=><AccordionItem key={i} value={`faq-{i}`}><AccordionTrigger className="text-sm font-medium">{f.q}</AccordionTrigger><AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion>
    <div className="text-center"><h2 className="text-xl font-semibold mb-3">Ready to book?</h2><Link href="/booking"><Button size="lg">Book {s.title}</Button></Link></div>
  </div></section>;
}
