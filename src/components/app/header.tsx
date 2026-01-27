'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#la-banda', label: 'La Banda' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#canciones', label: 'Canciones' },
];

const MULTIMEDIA_LINKS = [
  { href: '#conciertos', label: 'Nuestros conciertos' },
  { href: '#galeria', label: 'Galería' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const multimediaCloseTimer = useRef<number | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.current?.observe(section));

    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, []);

  const navItems = NAV_LINKS.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className={cn(
        'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary',
        activeSection === link.href.substring(1)
          ? 'text-primary'
          : 'text-white'
      )}
    >
      {link.label}
    </a>
  ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        activeSection === 'inicio'
          ? 'bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm'
          : 'bg-foreground/95 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="#inicio" className="text-primary hover:text-primary/80 transition-colors">
          <Logo className="h-16 w-auto text-white" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems}
          <div
            className="relative"
            onMouseEnter={() => {
              if (multimediaCloseTimer.current) {
                window.clearTimeout(multimediaCloseTimer.current);
                multimediaCloseTimer.current = null;
              }
              setIsMultimediaOpen(true);
            }}
            onMouseLeave={() => {
              multimediaCloseTimer.current = window.setTimeout(() => {
                setIsMultimediaOpen(false);
                multimediaCloseTimer.current = null;
              }, 200);
            }}
          >
            <a
              href="#multimedia"
              className={cn(
                'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary inline-flex items-center gap-1',
                ['multimedia', 'conciertos', 'galeria'].includes(activeSection)
                  ? 'text-primary'
                  : 'text-white'
              )}
            >
              Multimedia
              <ChevronDown className="h-4 w-4" />
            </a>
            <div
              className={cn(
                'absolute left-0 top-full min-w-[220px] translate-y-3 rounded-md bg-foreground/95 p-2 shadow-lg ring-1 ring-black/10',
                isMultimediaOpen ? 'block' : 'hidden'
              )}
              onMouseEnter={() => {
                if (multimediaCloseTimer.current) {
                  window.clearTimeout(multimediaCloseTimer.current);
                  multimediaCloseTimer.current = null;
                }
                setIsMultimediaOpen(true);
              }}
              onMouseLeave={() => {
                multimediaCloseTimer.current = window.setTimeout(() => {
                  setIsMultimediaOpen(false);
                  multimediaCloseTimer.current = null;
                }, 200);
              }}
            >
              {MULTIMEDIA_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <SocialLinks />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-foreground text-white border-l-stone-700">
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                  {navItems}
                  <Accordion type="single" collapsible className="w-full max-w-xs">
                    <AccordionItem value="multimedia" className="border-stone-700">
                      <AccordionTrigger className="text-white uppercase tracking-wider text-sm">
                        Multimedia
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col items-center gap-4">
                          {MULTIMEDIA_LINKS.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-primary"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex gap-4 pt-8">
                    <SocialLinks />
                  </div>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SocialLinks() {
    return (
        <>
            <Link href="https://www.facebook.com/profile.php?id=61551185394473" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5 text-white transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.instagram.com/garrett_and_band?igsh=MXg0dnI2dHY2bDMzMw==" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5 text-white transition-colors hover:text-primary" />
            </Link>
            <Link href="https://youtube.com/@garrettandband?si=cGSE3djzuQ_ULwNB" aria-label="Youtube" target="_blank" rel="noreferrer">
              <Youtube className="h-5 w-5 text-white transition-colors hover:text-primary" />
            </Link>
            <Link href="#contact" aria-label="Contacto">
              <Mail className="h-5 w-5 text-white transition-colors hover:text-primary" />
            </Link>
        </>
    );
}
