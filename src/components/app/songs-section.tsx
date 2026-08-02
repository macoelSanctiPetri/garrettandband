'use client';

import { useEffect, useMemo, useState } from 'react';
import { SectionHeader } from './section-header';
import { withBasePath } from '@/lib/base-path';
import {
  IconBrandAmazon,
  IconBrandApple,
  IconBrandSpotify,
  IconBrandYoutube,
  IconChevronRight,
  IconDownload,
  IconFileMusic,
  IconMusic,
} from '@tabler/icons-react';

type SongItem = {
  title: string;
  tag?: string;
  year?: string;
  pdf?: string;
  spotify?: string;
  youtube?: string;
  amazonMusic?: string;
  appleMusic?: string;
  cover?: string;
  description?: string;
};

type AlbumPlatform = {
  name: string;
  href?: string;
};

type AlbumData = {
  title: string;
  tag?: string;
  year?: string;
  cover?: string;
  description?: string;
  platforms?: AlbumPlatform[];
};

type SongsResponse = {
  album?: AlbumData;
  canciones: SongItem[];
};

const RELEASE_YEAR = 2026;
const RELEASE_MONTH_INDEX = 7;
const RELEASE_DAY = 5;

const fallbackAlbum: AlbumData = {
  title: 'The Arrow & The Bow',
  tag: 'Album',
  year: '2026',
  cover: '/album/the-arrow-and-the-bow/foto.jpg',
  description:
    'Primer álbum completo de Garrett&Band, grabado con ocho canciones y un sonido más sólido, más cuidado y mejor producido.',
  platforms: [
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/intl-es/album/2cc6iwW19fT8oIcqF7hVAy?si=s5V2RxiMSii-iXqmVgrKfg&utm_source=copy-link&nd=1&dlsi=754f872291424deb',
    },
    {
      name: 'YouTube Music',
      href: 'https://music.youtube.com/playlist?list=OLAK5uy_knCdGYixWn-jZR5hOJuMf9JqseOppDZ4g',
    },
    {
      name: 'Amazon Music',
      href: 'https://music.amazon.es/albums/B0HCBC283H',
    },
    {
      name: 'Apple Music',
      href: 'https://music.apple.com/es/album/the-arrow-and-the-bow/6796615049',
    },
  ],
};

const fallbackSongs: SongItem[] = [
  {
    title: 'What If',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/what-if/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/0yXpoF3yECnLgnORCYCuY3?si=50e0011f75ee4916',
    youtube: 'https://music.youtube.com/watch?v=lxY4tL4qPD8&si=95alCanXl9oQ3jMs',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBTMNN6',
    appleMusic: 'https://music.apple.com/es/song/what-if/6796615050',
    description: 'Tema que abre el álbum, ya disponible con letra en inglés y español.',
  },
  {
    title: 'The Arrow & The Bow',
    tag: 'Album',
    year: '2026',
    pdf: '/album/the-arrow-and-the-bow/the-arrow-and-the-bow/letra.pdf',
    cover: '/album/the-arrow-and-the-bow/foto.jpg',
    spotify: 'https://open.spotify.com/intl-es/track/042eS3sOeIZ7KhUp1f9880?si=54d2929b9eb147c8',
    youtube: 'https://music.youtube.com/watch?v=gSRlZibehJg&si=Ey1lI5rwlmPn09do',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBX4TMR',
    appleMusic: 'https://music.apple.com/es/song/the-arrow-and-the-bow/6796615052',
    description:
      'Tema que da nombre al primer álbum completo de Garrett&Band, ahora grabado junto al resto del repertorio con un sonido más sólido y mejor producido.',
  },
  {
    title: 'West Virginia',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/west-virginia/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/67lLqebKGvOEOvfdUYSkqg?si=6bbff08d510d49c6',
    youtube: 'https://music.youtube.com/watch?v=gzEyA9Er-_s&si=9fQKiryZQ-rLstz6',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBQPQ5Z',
    appleMusic: 'https://music.apple.com/es/song/west-virginia/6796615053',
    description:
      'Paisaje americano, narrativa de viaje y una atmósfera clásica llevada al repertorio de la banda.',
  },
  {
    title: '4 Wheels',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/4-wheels/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/6S5MeL19m2cYfTxetIHQiR?si=ebeac38d4c56421f',
    youtube: 'https://music.youtube.com/watch?v=1xX8__nXFhc&si=mITYvt1UEcRdpuoQ',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBVSD3Q',
    appleMusic: 'https://music.apple.com/es/song/4-wheels/6796615061',
    description: 'Canción de carretera y movimiento, pensada para sonar abierta y con nervio en directo.',
  },
  {
    title: 'Precious Souls',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/precious-souls/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/4kMljEFci461fBJ097MxMY?si=1b5647ff38a141d0',
    youtube: 'https://music.youtube.com/watch?v=GJRzIXEc5FM&si=HkKgWkczXTbpPEOB',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBTBJPL',
    appleMusic: 'https://music.apple.com/es/song/precious-souls/6796615062',
    description: 'Un corte más emocional, con un tono cálido y centrado en la interpretación.',
  },
  {
    title: 'Another Day',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/another-day/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/3PIM0mkmyRiBrsOwUS61dW?si=fb13f05a933b4531',
    youtube: 'https://music.youtube.com/watch?v=ZI2E4Glt8WY&si=jhf1LvUwc4B3c3jG',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBQ3PZ6',
    appleMusic: 'https://music.apple.com/es/song/another-day/6796615063',
    description: 'Tema propio con un pulso más intimista y un enfoque directo en la letra.',
  },
  {
    title: 'Easy Love',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/easy-love/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/5MYhmvhroHwQeq8fFzgHsQ?si=62133da9f33c4d4b',
    youtube: 'https://music.youtube.com/watch?v=mk-19dNz7nE&si=l55mZuKUbmQsZ8Q9',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCBS76FV',
    appleMusic: 'https://music.apple.com/es/song/easy-love/6796615064',
    description: 'Tema ligero y melódico, con un acabado más inmediato y pegadizo.',
  },
  {
    title: 'Will You?',
    tag: 'Original',
    pdf: '/album/the-arrow-and-the-bow/will-you/letra.pdf',
    spotify: 'https://open.spotify.com/intl-es/track/5wk1zbj8yrklG73Py9Uk7O?si=673fa36e55ac4259',
    youtube: 'https://music.youtube.com/watch?v=yeuATAWiy_4&si=0HjK_UEn9Ro5Ml91',
    amazonMusic: 'https://music.amazon.es/tracks/B0HCC1HNW8',
    appleMusic: 'https://music.apple.com/es/song/will-you/6796615065',
    description: 'Cierre del álbum, ya disponible con letra en inglés y español.',
  },
];

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getReleaseDay() {
  return new Date(RELEASE_YEAR, RELEASE_MONTH_INDEX, RELEASE_DAY);
}

function getTimeLeftParts(now: Date) {
  const today = startOfLocalDay(now);
  const releaseDay = getReleaseDay();
  const diffMs = releaseDay.getTime() - today.getTime();
  const safeDiff = Math.max(diffMs, 0);

  return {
    days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
    isReleased: diffMs <= 0,
  };
}

function PlatformIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('spotify')) {
    return <IconBrandSpotify size={16} className="text-[#1DB954]" />;
  }

  if (normalized.includes('youtube')) {
    return <IconBrandYoutube size={16} className="text-[#ff4d4d]" />;
  }

  if (normalized.includes('amazon')) {
    return <IconBrandAmazon size={16} className="text-[#ffb84d]" />;
  }

  if (normalized.includes('apple')) {
    return <IconBrandApple size={16} className="text-white" />;
  }

  return <IconMusic size={16} className="text-[#d6b25a]" />;
}

export function SongsSection() {
  const [album, setAlbum] = useState<AlbumData>(fallbackAlbum);
  const [songs, setSongs] = useState<SongItem[]>(fallbackSongs);
  const [activePdf, setActivePdf] = useState<SongItem | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadSongs() {
      try {
        const response = await fetch(withBasePath('/data/canciones.json'));
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as SongsResponse;
        if (cancelled) {
          return;
        }

        if (data.album) {
          setAlbum(data.album);
        }

        if (Array.isArray(data.canciones) && data.canciones.length > 0) {
          setSongs(data.canciones);
        }
      } catch {
        // Keep fallback content if the JSON cannot be loaded.
      }
    }

    loadSongs();

    return () => {
      cancelled = true;
    };
  }, []);

  const { days, isReleased } = useMemo(() => getTimeLeftParts(now), [now]);
  const albumPlatforms = album.platforms ?? [];

  if (!isReleased) {
    return (
      <section
        id="canciones"
        className="relative overflow-hidden bg-[linear-gradient(180deg,_#f5f1e8_0%,_#efe4cd_18%,_#171312_18%,_#090909_100%)] py-10 md:py-20"
      >
        <div className="absolute inset-x-0 top-[60px] h-px bg-[#f0d18a]/40" />
        <SectionHeader>Nuestras canciones</SectionHeader>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="border border-[#d6b25a]/30 bg-[linear-gradient(180deg,_rgba(20,16,14,0.98),_rgba(9,9,9,0.99))] px-6 py-14 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e2c06e]">
              The Arrow &amp; The Bow
            </p>
            <h3 className="mt-5 text-4xl font-semibold uppercase tracking-[0.08em] md:text-6xl">
              Quedan{' '}
              <span className="text-5xl text-[#e2c06e] md:text-7xl">{days}</span>{' '}
              {days === 1 ? 'día' : 'días'}
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-xl">
              Nuestro primer álbum completo se publica el 5 de agosto de 2026. Muy pronto activaremos
              aquí las letras y los enlaces a todas las plataformas.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="canciones"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#f5f1e8_0%,_#efe4cd_18%,_#171312_18%,_#090909_100%)] py-10 md:py-20"
    >
      <div className="absolute inset-x-0 top-[60px] h-px bg-[#f0d18a]/40" />
      <SectionHeader>Nuestras canciones</SectionHeader>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="border border-[#d6b25a]/30 bg-[linear-gradient(180deg,_rgba(20,16,14,0.98),_rgba(9,9,9,0.99))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="p-6 text-white md:p-8 xl:p-10">
            <article className="border-b border-[#d6b25a]/15 pb-8">
              <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-center">
                <div className="overflow-hidden border border-[#d6b25a]/35 bg-[#1b1715] xl:max-w-[320px]">
                  {album.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withBasePath(album.cover)}
                      alt={`Portada de ${album.title}`}
                      className="aspect-square h-full w-full object-contain bg-[#14100f] p-3"
                    />
                  ) : null}
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#e2c06e]">
                      <span>{album.tag ?? 'Álbum'}</span>
                      {album.year ? <span>{album.year}</span> : null}
                    </div>
                    <h3 className="max-w-xl text-4xl font-semibold uppercase leading-none tracking-[0.08em] md:text-6xl">
                      {album.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                      {album.description ??
                        'Primer álbum completo de Garrett&Band, con el repertorio principal de la banda reunido en una misma grabación.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {albumPlatforms.map((platform) =>
                      platform.href ? (
                        <a
                          key={platform.name}
                          href={platform.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-[#d6b25a]/25 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                        >
                          <PlatformIcon name={platform.name} />
                          {platform.name}
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </article>

            <aside className="pt-8">
              <div className="flex items-center gap-3 border-b border-[#d6b25a]/15 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6b25a]/35 bg-[#d6b25a]/10">
                  <IconMusic size={22} className="text-[#d6b25a]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f0d18a]">Catálogo</p>
                  <p className="text-sm text-white/70">Temas originales del álbum</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {songs.map((song) => (
                  <div
                    key={song.title}
                    className="flex h-full flex-col justify-between border border-[#d6b25a]/15 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.015))] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">{song.title}</h3>
                          {song.tag ? (
                            <span className="border border-[#d6b25a]/25 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#e2c06e]">
                              {song.tag}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-sm leading-7 text-white/65">
                          {song.description ?? 'Letra disponible para consulta en la web.'}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-[#d6b25a]/25 text-[#f0d18a] transition hover:bg-[#d6b25a]/10 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent"
                        disabled={!song.pdf}
                        onClick={() => setActivePdf(song)}
                        aria-label={song.pdf ? `Ver letra de ${song.title}` : `${song.title} próximamente`}
                      >
                        <IconChevronRight size={22} />
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e2c06e] transition hover:text-white disabled:cursor-default disabled:text-white/35"
                        disabled={!song.pdf}
                        onClick={() => setActivePdf(song)}
                      >
                        <IconDownload size={15} />
                        {song.pdf ? 'Letra' : 'Próximamente'}
                      </button>

                      {song.spotify ? (
                        <a
                          href={song.spotify}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
                        >
                          <IconBrandSpotify size={14} className="text-[#1DB954]" />
                          Spotify
                        </a>
                      ) : null}

                      {song.youtube ? (
                        <a
                          href={song.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
                        >
                          <IconBrandYoutube size={14} className="text-red-500" />
                          YouTube Music
                        </a>
                      ) : null}

                      {song.amazonMusic ? (
                        <a
                          href={song.amazonMusic}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
                        >
                          <IconBrandAmazon size={14} className="text-[#ffb84d]" />
                          Amazon Music
                        </a>
                      ) : null}

                      {song.appleMusic ? (
                        <a
                          href={song.appleMusic}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
                        >
                          <IconBrandApple size={14} className="text-white" />
                          Apple Music
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

      {activePdf?.pdf ? (
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
      ) : null}
    </section>
  );
}
