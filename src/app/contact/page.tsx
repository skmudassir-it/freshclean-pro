"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (<section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Contact</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Get In Touch</h1><p className="text-muted-foreground">We'd love to hear from you.</p></div>
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="lg:col-span-2">
        {sent ? <Card className="glass-card"><CardContent className="pt-6 text-center py-12"><div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4"><FontAwesomeIcon icon={faPaperPlane} className="size-7" /></div><h2 className="text-xl font-bold mb-2">Message Sent!</h2><p className="text-muted-foreground">We'll get back to you within 24 hours.</p></CardContent></Card> :
        <Card className="glass-card"><CardContent className="pt-6"><form onSubmit={e=>{e.preventDefault();setSent(true)}} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2"><div><label className="text-sm font-medium mb-1.5 block">Name</label><Input placeholder="Your Name" required /></div><div><label className="text-sm font-medium mb-1.5 block">Email</label><Input type="email" placeholder="you@email.com" required /></div></div>
          <div><label className="text-sm font-medium mb-1.5 block">Message</label><Textarea placeholder="How can we help?" rows={4} required /></div>
          <Button type="submit"><FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />Send Message</Button>
        </form></CardContent></Card>}
      </div>
      <div className="space-y-4"><Card className="glass-card"><CardContent className="pt-5 space-y-4"><h3 className="font-semibold">Contact Info</h3>
        {[{icon:faPhone,label:"Phone",val:"(555) 123-CLEAN"},{icon:faEnvelope,label:"Email",val:"hello@freshcleanpro.com"},{icon:faLocationDot,label:"Address",val:"123 Sparkle Ave, Suite 100"},{icon:faClock,label:"Hours",val:"Mon-Fri 7AM-6PM, Sat 8AM-2PM"}].map(i=>(<div key={i.label} className="flex items-start gap-3"><FontAwesomeIcon icon={i.icon} className="size-4 text-primary mt-0.5 shrink-0" /><div><p className="text-xs text-muted-foreground">{i.label}</p><p className="text-sm font-medium">{i.val}</p></div></div>))}
      </CardContent></Card></div>
    </div>
  </div></section>);
}
