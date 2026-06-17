import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHeart, faLeaf, faShieldHalved, faAward, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "About Us", description: "FreshClean Pro - professional cleaning company. Meet our team and learn about our values." };

const team = [
  { name: "Sarah Mitchell", role: "Founder & CEO", img: "/images/about/team-1.jpg", bio: "Sarah started FreshClean in 2010 with a mop and a mission. Today she leads a team of 40+ cleaning professionals." },
  { name: "James Chen", role: "Operations Manager", img: "/images/about/team-2.jpg", bio: "James ensures every job runs smoothly from booking to final inspection. He's obsessed with quality." },
  { name: "Maria Rodriguez", role: "Lead Cleaner", img: "/images/about/team-3.jpg", bio: "Maria has been with FreshClean for 8 years. Her attention to detail is legendary among our clients." },
];

export default function AboutPage() {
  return (<>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">About Us</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Cleaning With Care Since 2010</h1><p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">FreshClean Pro was founded on a simple belief: everyone deserves a clean, healthy space. For over a decade, we've been delivering professional cleaning services with integrity, eco-friendly products, and a personal touch.</p></div>
      <img src="/images/about/about-hero.jpg" alt="FreshClean Pro team" className="w-full rounded-xl mb-12" />
      <div className="grid gap-6 sm:grid-cols-3 mb-16">
        {[{icon:faHeart,color:"text-red-500",title:"Care First",desc:"We treat every home and office like it's our own."},{icon:faLeaf,color:"text-green-600",title:"Eco-Friendly",desc:"Green products safe for families, pets, and the planet."},{icon:faShieldHalved,color:"text-teal-600",title:"Licensed & Insured",desc:"Fully bonded and insured for complete peace of mind."}].map(v=>(<Card key={v.title} className="glass-card text-center"><CardContent className="pt-6"><div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-muted mb-4"><FontAwesomeIcon icon={v.icon} className={`size-5 ${v.color}`} /></div><h3 className="font-semibold mb-1">{v.title}</h3><p className="text-sm text-muted-foreground">{v.desc}</p></CardContent></Card>))}
      </div>
    </div></section>
    <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-50 via-sky-50 to-amber-50"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12"><Badge variant="secondary" className="mb-3">Our Team</Badge><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Meet Our Leaders</h2></div>
      <div className="grid gap-8 sm:grid-cols-3">{team.map(m=>(<div key={m.name} className="text-center"><img src={m.img} alt={m.name} className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover" /><h3 className="font-semibold text-lg">{m.name}</h3><p className="text-xs text-primary font-medium mb-2">{m.role}</p><p className="text-sm text-muted-foreground">{m.bio}</p></div>))}</div>
    </div></section>
    <section className="py-16 sm:py-20 text-center"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Meet Us?</h2><p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a cleaning or request a free estimate today.</p><div className="mt-6"><Link href="/booking"><Button size="lg"><FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />Book Now</Button></Link></div></div></section>
  </>);
}
