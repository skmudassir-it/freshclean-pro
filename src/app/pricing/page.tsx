import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = { title: "Pricing", description: "Transparent pricing for all cleaning services. No hidden fees." };

const tiers = [
  { name:"Basic Clean", price:"$99", unit:"/visit", color:"bg-teal-50 border-teal-200", features:["Kitchen & bathroom cleaning","Dusting all surfaces","Floor vacuuming & mopping","Trash removal","General tidying"] },
  { name:"Deep Clean", price:"$199", unit:"/visit", color:"bg-sky-50 border-sky-200", popular:true, features:["Everything in Basic","Inside cabinets & closets","Appliance interior cleaning","Baseboard & trim detailing","Window sill & blind cleaning","Detailed spot treatment"] },
  { name:"Premium", price:"$349", unit:"/visit", color:"bg-amber-50 border-amber-200", features:["Everything in Deep","Carpet steam cleaning","Upholstery cleaning","Window washing (interior)","Oven & refrigerator deep clean","Organization assistance"] },
];

export default function PricingPage() {
  return (<section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Pricing</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h1><p className="mt-3 text-muted-foreground">No hidden fees. No surprises. Just a clean home at a fair price.</p></div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {tiers.map(t=>(<Card key={t.name} className={`glass-card relative ${t.color} ${t.popular?"ring-2 ring-primary scale-105":""}`}>
        {t.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>}
        <CardHeader className="text-center"><CardTitle className="text-xl">{t.name}</CardTitle><p className="text-4xl font-bold mt-2">{t.price}<span className="text-base font-normal text-muted-foreground">{t.unit}</span></p></CardHeader>
        <CardContent><ul className="space-y-2.5">{t.features.map((f,i)=>(<li key={i} className="flex items-start gap-2 text-sm"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-teal-600 mt-0.5 shrink-0" /><span>{f}</span></li>))}</ul>
        <Link href="/booking" className="block mt-6"><Button className="w-full" variant={t.popular?"default":"outline"}>Get Started</Button></Link></CardContent>
      </Card>))}
    </div>
    <Separator className="my-12 max-w-3xl mx-auto" />
    <div className="text-center max-w-2xl mx-auto"><h2 className="text-xl font-bold mb-3">Custom Commercial Pricing</h2><p className="text-muted-foreground text-sm mb-5">Office and commercial cleaning is priced per square foot with custom plans. Contact us for a personalized quote.</p><Link href="/contact"><Button variant="outline">Request Commercial Quote<FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" /></Button></Link></div>
  </div></section>);
}
