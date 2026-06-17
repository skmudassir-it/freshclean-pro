import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight, faCheckCircle, faPhone, faShieldHalved, faLeaf, faCalendarCheck, faBroom, faBuilding, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  { slug: "house-cleaning", title: "House Cleaning", icon: faBroom, desc: "Regular, deep, and move-in cleaning for homes of all sizes.", color: "bg-teal-100 text-teal-700", image: "/images/services/house-cleaning.jpg" },
  { slug: "office-cleaning", title: "Office Cleaning", icon: faBuilding, desc: "Professional commercial cleaning for offices and workplaces.", color: "bg-sky-100 text-sky-700", image: "/images/services/office-cleaning.jpg" },
  { slug: "carpet-cleaning", title: "Carpet Cleaning", icon: faSprayCanSparkles, desc: "Deep steam cleaning for carpets and upholstery.", color: "bg-amber-100 text-amber-700", image: "/images/services/carpet-cleaning.jpg" },
];

const testimonials = [
  { name: "Jennifer L.", text: "FreshClean has been cleaning our home for 2 years. Always thorough, always on time.", rating: 5 },
  { name: "Mark T.", text: "They handle our entire 20,000 sq ft office. Professional, reliable, wonderful staff.", rating: 5 },
  { name: "The Park Family", text: "Move-out cleaning got us our full deposit back. The apartment was absolutely spotless.", rating: 5 },
];

export default function HomePage() {
  return (<>
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-sky-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 text-xs bg-teal-100 text-teal-800">Licensed - Insured - Eco-Friendly</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">A Clean Space, <span className="text-primary">A Fresh Start</span></h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">FreshClean Pro delivers professional cleaning for homes and businesses. From regular housekeeping to deep carpet cleaning and post-construction cleanup, we do it all with care.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/booking"><Button size="lg"><FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />Book Now</Button></Link>
              <Link href="/services"><Button variant="outline" size="lg">Our Services<FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" /></Button></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              {["Licensed & Insured","Eco-Friendly Products","Satisfaction Guaranteed","Free Estimates"].map(t=>(<span key={t} className="inline-flex items-center gap-1.5"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-teal-600" />{t}</span>))}
            </div>
          </div>
          <div className="hidden lg:block"><img src="/images/hero/hero-bg.jpg" alt="Professional cleaning team" className="rounded-2xl shadow-lg w-full" /></div>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Our Services</Badge><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Cleaning Solutions</h2><p className="mt-3 text-muted-foreground">Whatever you need cleaned, we have the team and equipment to do it right.</p></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s=>(<Link key={s.slug} href={`/services/${s.slug}`}><Card className="glass-card overflow-hidden transition-shadow hover:shadow-lg h-full"><img src={s.image} alt={s.title} className="w-full h-44 object-cover" /><CardHeader><div className={`inline-flex size-10 items-center justify-center rounded-lg mb-2 ${s.color}`}><FontAwesomeIcon icon={s.icon} className="size-5" /></div><CardTitle>{s.title}</CardTitle><CardDescription>{s.desc}</CardDescription></CardHeader></Card></Link>))}
      </div>
      <div className="text-center mt-8"><Link href="/services"><Button variant="outline">View All Services<FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" /></Button></Link></div>
    </div></section>

    <section className="py-20 sm:py-24 bg-gradient-to-r from-teal-50 via-sky-50 to-amber-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3">Why FreshClean</Badge><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Clean Difference</h2></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{icon:faShieldHalved,color:"bg-teal-100 text-teal-700",title:"Licensed & Insured",desc:"Fully licensed, bonded, and insured for your peace of mind."},{icon:faLeaf,color:"bg-green-100 text-green-700",title:"Eco-Friendly",desc:"Green cleaning products safe for kids, pets, and the planet."},{icon:faStar,color:"bg-amber-100 text-amber-700",title:"5-Star Rated",desc:"Consistently rated 5 stars by hundreds of happy customers."},{icon:faCalendarCheck,color:"bg-sky-100 text-sky-700",title:"Easy Booking",desc:"Online booking with flexible scheduling that fits your life."}].map(item=>(<Card key={item.title} className="glass-card text-center"><CardContent className="pt-6"><div className={`mx-auto flex size-12 items-center justify-center rounded-xl mb-4 ${item.color}`}><FontAwesomeIcon icon={item.icon} className="size-5" /></div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>))}
      </div>
    </div></section>

    <section className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3">Testimonials</Badge><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{testimonials.map(t=>(<Card key={t.name} className="glass-card"><CardContent className="pt-6"><div className="flex gap-1 mb-3">{Array.from({length:t.rating}).map((_,i)=>(<FontAwesomeIcon key={i} icon={faStar} className="size-4 text-amber-500" />))}</div><p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p><p className="text-sm font-semibold">&mdash; {t.name}</p></CardContent></Card>))}</div>
    </div></section>

    <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-sky-600 text-white text-center"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for a Fresh Clean?</h2><p className="mt-3 text-white/80 max-w-xl mx-auto">Book online in 60 seconds or call for a free estimate.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4"><Link href="/booking"><Button size="lg" variant="secondary"><FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />Book Online</Button></Link><Link href="/contact"><Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10"><FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />Call Us</Button></Link></div>
    </div></section>
  </>);
}
