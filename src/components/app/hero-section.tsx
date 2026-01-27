import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { withBasePath } from '@/lib/base-path';
import { IconBrandSpotify, IconBrandYoutube } from '@tabler/icons-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const announcement = {
    enabled: true,
    text: 'Sábado 25 de abril de 2026 · El Cuartel del Mar · Chiclana de la Frontera.',
    cta: {
      label: 'Entrada libre',
      href: '#eventos',
    },
  };
  const singlePromo = {
    enabled: true,
    title: 'The Arrow & The Bow',
    cover: '/album/the-arrow-and-the-bow/foto.jpg',
    spotify: 'https://open.spotify.com/intl-es/track/2J6CDFFduDa7ZX2fKNWTOH?si=78ddcf5fbe6742ed',
    youtube: 'https://www.youtube.com/watch?v=BY0apyaC8cs',
  };

  return (
    <section id="inicio" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 pb-28">
        <div className="mt-12 flex w-full flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-[2px] drop-shadow-md">
            Garrett&Band
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-light">
            Americana Music y algo más...
          </p>
          <div className="mt-8 flex w-full max-w-6xl items-center justify-between">
            <div className="w-1/3" />
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
              <a href="#eventos">Próximos eventos</a>
            </Button>
            <div className="w-1/3" />
          </div>
        </div>
        {singlePromo.enabled && (
          <div className="mt-10 flex w-full max-w-6xl justify-end">
            <div className="group flex flex-col items-center gap-3 text-white transition-transform duration-300 hover:scale-105">
              <div className="h-32 w-32 overflow-hidden rounded-full border border-white/30 shadow-lg transition-transform duration-300 group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(singlePromo.cover)}
                  alt={`Portada de ${singlePromo.title}`}
                  className="h-full w-full rounded-full object-cover opacity-50"
                />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/80">
                Escucha nuestro primer single
              </div>
              <div className="flex items-center gap-3 text-sm">
                <a
                  href={singlePromo.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                  aria-label={`Escuchar ${singlePromo.title} en Spotify`}
                >
                  <IconBrandSpotify size={18} className="text-[#1DB954]" />
                </a>
                <a
                  href={singlePromo.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                  aria-label={`Ver ${singlePromo.title} en YouTube`}
                >
                  <IconBrandYoutube size={18} className="text-red-500" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {announcement.enabled && (
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="bg-[#0a0a0a] px-6 py-4 shadow-lg">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm sm:text-base font-medium text-amber-300">
                {announcement.text}
              </p>
              <a
                href={announcement.cta.href}
                className="inline-flex items-center justify-center rounded-none bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
              >
                {announcement.cta.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
