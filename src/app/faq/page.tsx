import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about our cleaning services." };

const faqs = [
  { q:"How much does cleaning cost?", a:"Residential cleaning starts at $99/visit. Commercial cleaning is priced per square foot. Exact pricing depends on property size, services needed, and frequency. We provide free, no-obligation estimates." },
  { q:"Do I need to be home during cleaning?", a:"It's up to you! Most clients give us a key or access code. All our cleaners are background-checked and insured. You're welcome to be home or out — whatever you prefer." },
  { q:"What products do you use?", a:"We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. If you have specific product preferences, let us know." },
  { q:"Are you licensed and insured?", a:"Yes! FreshClean Pro is fully licensed, bonded, and insured. We carry general liability and workers' compensation insurance." },
  { q:"What if something gets damaged?", a:"We're fully insured. If anything is damaged during cleaning, we'll make it right — repair or replace, no questions asked." },
  { q:"Can I customize my cleaning?", a:"Absolutely! Tell us your priorities and we'll focus on what matters most to you. Every cleaning plan is customized." },
  { q:"How do I pay?", a:"We accept all major credit cards. Payment is processed after the cleaning is complete. You'll receive an emailed receipt." },
  { q:"What's your cancellation policy?", a:"Free cancellation up to 24 hours before your scheduled cleaning. Late cancellations may incur a small fee." },
];

export default function FAQPage() {
  return (<section className="py-16 sm:py-20"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">FAQ</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Frequently Asked Questions</h1></div>
    <div className="space-y-3">{faqs.map((f,i)=>(<details key={i} className="group glass-card rounded-xl"><summary className="cursor-pointer list-none flex items-center justify-between p-5 font-medium text-sm">{f.q}<FontAwesomeIcon icon={faChevronDown} className="size-3.5 text-muted-foreground transition-transform group-open:rotate-180 shrink-0 ml-4" /></summary><div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div></details>))}</div>
    <div className="text-center mt-12"><p className="text-sm text-muted-foreground mb-4">Still have questions?</p><Link href="/contact"><Button><FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />Contact Us</Button></Link></div>
  </div></section>);
}
