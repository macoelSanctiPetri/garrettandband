'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { withBasePath } from '@/lib/base-path';
import { IconArrowDownRight, IconHourglass, IconVinyl } from '@tabler/icons-react';

const RELEASE_YEAR = 2026;
const RELEASE_MONTH_INDEX = 7;
const RELEASE_DAY = 5;

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getReleaseStatus(now: Date) {
  const today = startOfLocalDay(now);
  const releaseDay = new Date(RELEASE_YEAR, RELEASE_MONTH_INDEX, RELEASE_DAY);
  const diffMs = releaseDay.getTime() - today.getTime();
  const days = Math.max(Math.floor(diffMs / (1000 * 60 * 60 * 24)), 0);

  return {
    days,
    isReleased: diffMs <= 0,
  };
}

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const { days, isReleased } = useMemo(() => getReleaseStatus(now), [now]);

  const albumPromo = isReleased
    ? {
        enabled: true,
        title: 'The Arrow & The Bow',
        cover: '/album/the-arrow-and-the-bow/foto.jpg',
        caption: 'Nuestro primer álbum ya está disponible',
        ctaLabel: 'Ver canciones',
        ctaHref: '#canciones',
      }
    : {
        enabled: true,
        title: 'The Arrow & The Bow',
        cover: '/album/the-arrow-and-the-bow/foto.jpg',
        caption: 'Días para el lanzamiento',
        ctaLabel: 'Muy pronto',
        ctaHref: '#canciones',
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 pb-28 text-center text-white">
        <div className="mt-12 flex w-full flex-col items-center">
          <h1 className="text-4xl font-bold uppercase tracking-[2px] drop-shadow-md md:text-6xl">
            Garrett&Band
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light md:text-xl">
            Americana Music y algo más...
          </p>
          <div className="mt-8 flex w-full max-w-6xl items-center justify-between">
            <div className="w-1/3" />
            <Button
              asChild
              size="lg"
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#eventos">Próximos eventos</a>
            </Button>
            <div className="w-1/3" />
          </div>
        </div>
        {albumPromo.enabled ? (
          <div className="mt-10 flex w-full max-w-6xl justify-end">
            <div className="group flex flex-col items-center gap-3 text-white transition-transform duration-300 hover:scale-105">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/30 shadow-lg transition-transform duration-300 group-hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(albumPromo.cover)}
                  alt={`Portada de ${albumPromo.title}`}
                  className="h-full w-full rounded-full object-cover opacity-50"
                />
                {!isReleased ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                    <span className="text-6xl font-bold leading-none text-[#d6b25a] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:text-7xl">
                      {days}
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/80">
                {albumPromo.caption}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {albumPromo.title}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <a
                  href={albumPromo.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white/10"
                  aria-label={`Ir a ${albumPromo.ctaLabel}`}
                >
                  {isReleased ? (
                    <IconVinyl size={16} className="text-[#d6b25a]" />
                  ) : (
                    <IconHourglass size={16} className="text-[#d6b25a]" />
                  )}
                  {albumPromo.ctaLabel}
                  <IconArrowDownRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
