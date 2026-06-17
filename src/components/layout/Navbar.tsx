"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBroom, faUsers, faImages, faDollarSign, faEnvelope, faStar, faBars, faCalendarCheck, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: faHouse },
  { href: "/services", label: "Services", icon: faBroom },
  { href: "/gallery", label: "Gallery", icon: faImages },
  { href: "/pricing", label: "Pricing", icon: faDollarSign },
  { href: "/reviews", label: "Reviews", icon: faStar },
  { href: "/about", label: "About", icon: faUsers },
  { href: "/faq", label: "FAQ", icon: faCircleQuestion },
  { href: "/contact", label: "Contact", icon: faEnvelope },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/logo.svg" alt="FreshClean Pro" className="h-9 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}>
                  <FontAwesomeIcon icon={link.icon} className="size-3" />{link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/booking" className="hidden sm:inline-flex"><Button size="sm"><FontAwesomeIcon icon={faCalendarCheck} className="size-3.5 mr-1.5" />Book Now</Button></Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="lg:hidden"><FontAwesomeIcon icon={faBars} className="size-5" /></SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}>
                        <FontAwesomeIcon icon={link.icon} className="size-4" />{link.label}
                      </Link>
                    );
                  })}
                  <Link href="/booking" onClick={() => setOpen(false)} className="mt-3"><Button className="w-full">Book Now</Button></Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
