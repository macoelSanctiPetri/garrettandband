import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <Link href="#inicio">
            <Logo className="h-20 w-auto text-primary" />
          </Link>
          <div className="flex gap-6">
            <Link href="https://www.facebook.com/profile.php?id=61551185394473" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook className="h-6 w-6 text-background transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.instagram.com/garrett_and_band?igsh=MXg0dnI2dHY2bDMzMw==" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 text-background transition-colors hover:text-primary" />
            </Link>
            <Link href="https://youtube.com/@garrettandband?si=cGSE3djzuQ_ULwNB" aria-label="Youtube" target="_blank" rel="noreferrer">
              <Youtube className="h-6 w-6 text-background transition-colors hover:text-primary" />
            </Link>
            <Link href="#contact" aria-label="Contacto">
              <Mail className="h-6 w-6 text-background transition-colors hover:text-primary" />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-background/80">
            <a href="#contact" className="hover:text-primary transition-colors">
              Contacto
            </a>
            <a href="mailto:contacto@garrettandband.com" className="hover:text-primary transition-colors">
              contacto@garrettandband.com
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+34607523957" className="hover:text-primary transition-colors">
                607523957
              </a>
              <span>/</span>
              <a href="tel:+34650661836" className="hover:text-primary transition-colors">
                650661836
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Garrett&Band. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
