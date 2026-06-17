import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Before & After Gallery", description: "See the FreshClean Pro difference. Before and after photos of our cleaning work." };

const items = [
  { id:1, cat:"residential", title:"Living Room Deep Clean", before:"Cluttered, dusty living room", after:"Sparkling clean, organized space", img:"/images/projects/before-after-1.jpg" },
  { id:2, cat:"carpet", title:"Carpet Restoration", before:"Stained, worn carpet", after:"Fresh, like-new carpet", img:"/images/projects/before-after-2.jpg" },
  { id:3, cat:"window", title:"Window Transformation", before:"Streaky, dirty windows", after:"Crystal clear glass", img:"/images/projects/before-after-3.jpg" },
  { id:4, cat:"residential", title:"Kitchen Deep Clean", before:"Greasy, messy kitchen", after:"Spotless, sanitized kitchen", img:"/images/projects/before-after-4.jpg" },
  { id:5, cat:"construction", title:"Post-Build Cleanup", before:"Dusty construction site", after:"Pristine finished space", img:"/images/projects/before-after-5.jpg" },
  { id:6, cat:"residential", title:"Bathroom Deep Clean", before:"Grimy bathroom", after:"Sparkling bathroom", img:"/images/projects/before-after-6.jpg" },
];

export default function GalleryPage() {
  return (<section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-12"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Gallery</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Before & After</h1><p className="text-muted-foreground">See the FreshClean Pro difference.</p></div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=>(<Card key={p.id} className="glass-card overflow-hidden"><img src={p.img} alt={p.title} className="w-full h-56 object-cover" /><CardContent className="pt-4"><h3 className="font-semibold mb-1">{p.title}</h3><p className="text-xs text-muted-foreground"><span className="text-red-500">Before:</span> {p.before} <span className="mx-2">→</span> <span className="text-teal-600">After:</span> {p.after}</p></CardContent></Card>))}</div>
    <div className="text-center mt-10"><Link href="/booking"><Button size="lg">Get Your Free Estimate<FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" /></Button></Link></div>
  </div></section>);
}
