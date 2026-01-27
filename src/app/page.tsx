import { Header } from "@/components/app/header";
import { HeroSection } from "@/components/app/hero-section";
import { BandSection } from "@/components/app/band-section";
import { EventsSection } from "@/components/app/events-section";
import { SongsSection } from "@/components/app/songs-section";
import { MultimediaSection } from "@/components/app/multimedia-section";
import { ContactSection } from "@/components/app/contact-section";
import { Footer } from "@/components/app/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
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
