'use client';

import { useState } from 'react';
import { SectionHeader } from './section-header';
import { Card } from '@/components/ui/card';
import { withBasePath } from '@/lib/base-path';
import { IconBrandSpotify, IconBrandYoutube, IconDownload, IconMusic } from '@tabler/icons-react';

type SongItem = {
  title: string;
  pdf: string;
  spotify?: string;
  youtube?: string;
  cover?: string;
};

const songs: SongItem[] = [
  {
    title: 'The Arrow & The Bow',
    pdf: '/album/the-arrow-and-the-bow/letra.pdf',
    cover: '/album/the-arrow-and-the-bow/foto.jpg',
    spotify: 'https://open.spotify.com/intl-es/track/2J6CDFFduDa7ZX2fKNWTOH?si=78ddcf5fbe6742ed',
    youtube: 'https://www.youtube.com/watch?v=BY0apyaC8cs',
  },
  {
    title: 'Another Day',
    pdf: '/album/another-day/letra.pdf',
  },
  {
    title: '4 Wheels',
    pdf: '/album/4-wheels/letra.pdf',
  },
  {
    title: 'Precious Souls',
    pdf: '/album/precious-souls/letra.pdf',
  },
  {
    title: 'West Virginia',
    pdf: '/album/west-virginia/letra.pdf',
  },
  {
    title: 'Easy Love',
    pdf: '/album/easy-love/letra.pdf',
  },
];

export function SongsSection() {
  const [activePdf, setActivePdf] = useState<SongItem | null>(null);

  return (
    <section id="canciones" className="py-10 md:py-20 bg-background">
      <SectionHeader>Nuestras canciones</SectionHeader>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song) => (
            <Card
              key={song.title}
              className="rounded-xl border border-[#d6b25a]/40 bg-[#0b0b0c] text-white shadow-lg"
            >
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {song.cover && (
                    <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-[#d6b25a]/40 shadow-lg sm:h-36 sm:w-36">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(song.cover)}
                        alt={`Portada de ${song.title}`}
                        className="block h-full w-full rounded-2xl object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <IconMusic className="mt-1 text-[#d6b25a]" size={22} />
                      <h3 className="text-xl font-semibold">{song.title}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-none border border-[#d6b25a]/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#d6b25a] hover:bg-[#d6b25a]/10"
                        onClick={() => setActivePdf(song)}
                        aria-label={`Ver letra de ${song.title}`}
                      >
                        <IconDownload size={16} />
                        Letra
                      </button>
                      {song.spotify && (
                        <a
                          href={song.spotify}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-none border border-[#d6b25a]/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#d6b25a] hover:bg-[#d6b25a]/10"
                          aria-label={`Escuchar ${song.title} en Spotify`}
                        >
                          <IconBrandSpotify size={16} className="text-[#1DB954]" />
                          Spotify
                        </a>
                      )}
                      {song.youtube && (
                        <a
                          href={song.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-none border border-[#d6b25a]/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#d6b25a] hover:bg-[#d6b25a]/10"
                          aria-label={`Ver ${song.title} en YouTube`}
                        >
                          <IconBrandYoutube size={16} className="text-red-500" />
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {activePdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActivePdf(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-none bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-lg font-semibold text-white hover:bg-black/80"
              onClick={() => setActivePdf(null)}
              aria-label="Cerrar"
            >
              x
            </button>
            <iframe
              title={`Letra de ${activePdf.title}`}
              src={withBasePath(activePdf.pdf)}
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
