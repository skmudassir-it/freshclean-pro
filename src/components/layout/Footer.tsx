import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const svcLinks = [{s:"house-cleaning",l:"House Cleaning"},{s:"office-cleaning",l:"Office Cleaning"},{s:"carpet-cleaning",l:"Carpet Cleaning"},{s:"window-washing",l:"Window Washing"},{s:"post-construction",l:"Post-Construction"},{s:"move-out-cleaning",l:"Move-Out Cleaning"},{s:"junk-removal",l:"Junk Removal"}];
  const quickLinks = [{h:"/",l:"Home"},{h:"/services",l:"Services"},{h:"/gallery",l:"Gallery"},{h:"/pricing",l:"Pricing"},{h:"/reviews",l:"Reviews"},{h:"/about",l:"About"},{h:"/faq",l:"FAQ"},{h:"/contact",l:"Contact"},{h:"/booking",l:"Book Now"}];

  return (
    <footer className="border-t border-border bg-muted/30"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src="/images/logo.svg" alt="FreshClean Pro" className="h-8 w-auto mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Professional cleaning services for homes and businesses. Licensed, insured, and eco-friendly since 2010.</p>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className="size-5 hover:text-primary transition-colors" /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="size-5 hover:text-primary transition-colors" /></a>
            <a href="#" aria-label="Yelp"><FontAwesomeIcon icon={faYelp} className="size-5 hover:text-primary transition-colors" /></a>
          </div>
        </div>
        <div><h4 className="font-semibold text-sm mb-3">Quick Links</h4><div className="flex flex-col gap-2">{quickLinks.map(l=>(<Link key={l.h} href={l.h} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.l}</Link>))}</div></div>
        <div><h4 className="font-semibold text-sm mb-3">Services</h4><div className="flex flex-col gap-2">{svcLinks.map(s=>(<Link key={s.s} href={`/services/${s.s}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.l}</Link>))}</div></div>
        <div><h4 className="font-semibold text-sm mb-3">Contact</h4><div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="size-3.5 text-primary" />(555) 123-CLEAN</span>
          <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-primary" />hello@freshcleanpro.com</span>
          <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="size-3.5 text-primary" />123 Sparkle Ave, Suite 100</span>
          <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faClock} className="size-3.5 text-primary" />Mon–Fri 7AM–6PM · Sat 8AM–2PM</span>
        </div></div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FreshClean Pro. All rights reserved. Licensed · Bonded · Insured.</div>
    </div></footer>
  );
}
