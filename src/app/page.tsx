import { Header } from "@/components/app/header";
import { HeroSection } from "@/components/app/hero-section";
import { BandSection } from "@/components/app/band-section";
import { EventsSection } from "@/components/app/events-section";
import { SongsSection } from "@/components/app/songs-section";
import { MultimediaSection } from "@/components/app/multimedia-section";
import { ContactSection } from "@/components/app/contact-section";
import { Footer } from "@/components/app/footer";

export default function Home() {
  const announcement = {
    enabled: true,
    text: 'Sáb 16 de mayo de 2026 - El Cuartel del Mar - Chiclana de la Frontera.',
    cta: {
      label: 'Ver próximo concierto',
      href: '#eventos',
    },
  };
  return (
    <div id="top" className="flex flex-col min-h-dvh bg-background">
      <Header />
      {announcement.enabled ? (
        <div className="bg-[#0a0a0a] px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs sm:text-base font-medium text-amber-300">
              {announcement.text}
            </p>
            <a
              href={announcement.cta.href}
              className="inline-flex items-center justify-center rounded-none bg-primary px-3 py-2 text-[10px] sm:px-4 sm:py-2 sm:text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
            >
              {announcement.cta.label}
            </a>
          </div>
        </div>
      ) : null}
      <main>
        <HeroSection />
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              Garrett&Band, es un proyecto musical evolución de otro proyecto anterior de conciertos acústicos llamado The Live Again Sessions, llevados a cabo por Ed Garrett (nombre artístico del gaditano Eduardo Gallardo de Gomar), que consiste en una propuesta de música alternativa a la escuchada habitualmente, al menos por nuestra zona, dentro del estilo acuñado con el nombre de Americana Music o simplemente Americana, concepto que incluye y abarca todo el espectro de la música americana de raíces, especialmente de la surgida del sur de los EE.UU. que puede tomar y fusionar elementos de estilos tan diferentes como el Rock, el Blues, el Country en sus diferentes variaciones, el Bluegrass, el Gospel, o el Jazz entre otros con elementos o puntos de vista más actuales o "alternativos".
            </p>
          </div>
        </section>
        <BandSection />
        <EventsSection />
        <SongsSection />
        <MultimediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

