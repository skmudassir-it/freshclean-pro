"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCheckCircle, faPaperPlane, faHome, faBuilding, faSprayCanSparkles, faSun, faHardHat, faTruckMoving, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  address: z.string().min(5, "Address required"),
  service: z.string().min(1, "Select a service"),
  propertyType: z.string().min(1, "Select property type"),
  rooms: z.string().optional(),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  notes: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const services = [
  { value:"house-cleaning", label:"House Cleaning", icon:faHome },
  { value:"office-cleaning", label:"Office Cleaning", icon:faBuilding },
  { value:"carpet-cleaning", label:"Carpet Cleaning", icon:faSprayCanSparkles },
  { value:"window-washing", label:"Window Washing", icon:faSun },
  { value:"post-construction", label:"Post-Construction", icon:faHardHat },
  { value:"move-out-cleaning", label:"Move-Out Cleaning", icon:faTruckMoving },
  { value:"junk-removal", label:"Junk Removal", icon:faTrashCan },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, watch, formState:{errors} } = useForm<FormData>({ resolver: zodResolver(schema) });
  const serviceVal = watch("service"); const propertyVal = watch("propertyType");

  const onSubmit = async (data: FormData) => {
    await fetch("/api/quote", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
    setSubmitted(true);
  };

  if (submitted) return (
    <section className="py-20"><div className="mx-auto max-w-xl px-4 text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-6"><FontAwesomeIcon icon={faCheckCircle} className="size-10" /></div>
      <h1 className="text-3xl font-bold mb-3">Booking Received!</h1>
      <p className="text-muted-foreground mb-2">Thank you! We'll confirm your appointment within 24 hours.</p>
      <p className="text-sm text-muted-foreground">A confirmation email will be sent to your inbox.</p>
    </div></section>
  );

  const steps = [1,2,3,4];
  return (
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10"><Badge variant="secondary" className="mb-3 bg-teal-100 text-teal-800">Book a Clean</Badge><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Your Free Quote</h1></div>
      <div className="flex justify-center gap-2 mb-8">{steps.map(s=>(<div key={s} className={`size-8 rounded-full flex items-center justify-center text-sm font-bold ${step>=s?"bg-primary text-white":"bg-muted text-muted-foreground"}`}>{s}</div>))}</div>
      <Card className="glass-card"><CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {step===1 && <div className="space-y-4">
            <h2 className="font-semibold text-lg mb-4">Step 1: Service & Property</h2>
            <div><label className="text-sm font-medium mb-1.5 block">Service Needed</label>
              <Select value={serviceVal||""} onValueChange={v=>setValue("service",v??"")}><SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger><SelectContent>{services.map(s=>(<SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>))}</SelectContent></Select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Property Type</label>
              <Select value={propertyVal||""} onValueChange={v=>setValue("propertyType",v??"")}><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent><SelectItem value="house">House</SelectItem><SelectItem value="apartment">Apartment/Condo</SelectItem><SelectItem value="office">Office</SelectItem><SelectItem value="commercial">Commercial Space</SelectItem></SelectContent></Select>
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Rooms / Square Footage</label><Input {...register("rooms")} placeholder="e.g. 3 bedrooms, 2 baths, 1500 sq ft" /></div>
          </div>}

          {step===2 && <div className="space-y-4">
            <h2 className="font-semibold text-lg mb-4">Step 2: Schedule</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="text-sm font-medium mb-1.5 block">Preferred Date</label><Input type="date" {...register("date")} />{errors.date&&<p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}</div>
              <div><label className="text-sm font-medium mb-1.5 block">Preferred Time</label><Input type="time" {...register("time")} />{errors.time&&<p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}</div>
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Special Instructions</label><Textarea {...register("notes")} placeholder="Any special requests or notes..." rows={3} /></div>
          </div>}

          {step===3 && <div className="space-y-4">
            <h2 className="font-semibold text-lg mb-4">Step 3: Contact Info</h2>
            <div><label className="text-sm font-medium mb-1.5 block">Full Name</label><Input {...register("name")} placeholder="Your name" />{errors.name&&<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className="text-sm font-medium mb-1.5 block">Email</label><Input type="email" {...register("email")} placeholder="you@email.com" />{errors.email&&<p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}</div>
              <div><label className="text-sm font-medium mb-1.5 block">Phone</label><Input {...register("phone")} placeholder="(555) 000-0000" />{errors.phone&&<p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}</div>
            </div>
            <div><label className="text-sm font-medium mb-1.5 block">Service Address</label><Input {...register("address")} placeholder="123 Main St, City, State" />{errors.address&&<p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}</div>
          </div>}

          {step===4 && <div className="space-y-4">
            <h2 className="font-semibold text-lg mb-4">Step 4: Review & Submit</h2>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Service:</span><span className="font-medium">{services.find(s=>s.value===watch("service"))?.label||"-"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Property:</span><span className="font-medium">{watch("propertyType")||"-"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Date:</span><span className="font-medium">{watch("date")||"-"} at {watch("time")||"-"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Name:</span><span className="font-medium">{watch("name")||"-"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Email:</span><span className="font-medium">{watch("email")||"-"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Address:</span><span className="font-medium">{watch("address")||"-"}</span></div>
            </div>
          </div>}

          <div className="flex justify-between mt-8 pt-6 border-t">
            {step>1?<Button type="button" variant="outline" onClick={()=>setStep(step-1)}><FontAwesomeIcon icon={faChevronLeft} className="size-4 mr-2" />Back</Button>:<div />}
            {step<4?<Button type="button" onClick={()=>setStep(step+1)}>Next<FontAwesomeIcon icon={faChevronRight} className="size-4 ml-2" /></Button>:<Button type="submit"><FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />Submit Booking</Button>}
          </div>
        </form>
      </CardContent></Card>
    </div></section>
  );
}
