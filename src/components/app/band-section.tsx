'use client';

import Image from 'next/image';
import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SectionHeader } from './section-header';
import { withBasePath } from '@/lib/base-path';

const members = [
  {
    name: 'Eduardo Gallardo',
    instrument: 'Voz principal, guitarra acústica y bajo',
    imageUrl: withBasePath('/fotos/Eduardo_Gallardo.png'),
    bio:
      'Natural de Cádiz. Músico de formación clásica (piano, oboe y composición), amplia experiencia coral, director de coro (Coro de Cámara Nova Mvsica, 35 años), orquesta (JOFCA) y compositor. Vocalista principal de diferentes formaciones de jazz y de música americana en las que además era teclista o bajista. Fundador, compositor y líder de Garrett&Band.',
    links: [
      {
        label: 'Semblanza (Proyecto Compositores Km0)',
        url: 'https://bahiaclasica.com/eduardo-gallardo-de-gomar/',
      },
      { label: 'YouTube', url: 'https://www.youtube.com/@ed_garrett' },
      { label: 'Instagram', url: 'https://instagram.com/edgardelesseps' },
      {
        label: 'SoundCloud',
        url: 'https://soundcloud.com/eduardo-gallardo-de-gomar?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      },
    ],
  },
  {
    name: 'Jerónimo Massanet',
    instrument: 'Guitarra acústica, eléctrica y bajo',
    imageUrl: withBasePath('/fotos/Jeronimo_Massanet.png'),
    bio:
      'Natural de Cádiz. Guitarrista y vocalista en grupos de música pop. Amplia experiencia como tenor (Coro de Cámara Nova Mvsica). Experiencia de 14 años como docente en la especialidad de Música.',
  },
  {
    name: 'Ana Reyes',
    instrument: 'Coros, armónica y percusión',
    imageUrl: withBasePath('/fotos/Ana_Reyes.png'),
    bio:
      'Natural de Sevilla. Soprano. Estudios de Lenguaje Musical. Dilatada experiencia vocal en teatro musical y coros (Coro y Orquesta Ciudad de Cádiz y Coro de Cámara Nova Mvsica).',
  },
  {
    name: 'Aurora González',
    instrument: 'Coros y guitarra acústica',
    imageUrl: withBasePath('/fotos/Aurora_Gonzalez.png'),
    bio:
      'Natural de Cádiz. Contralto. Estudios musicales y amplia experiencia como coralista (Coral de la Universidad de Cádiz y Coro de Cámara Nova Mvsica).',
  },
  {
    name: 'Enrique Martínez',
    instrument: 'Batería, guitarra acústica y coros',
    imageUrl: withBasePath('/fotos/Enrique_Martinez.png'),
    bio:
      'Natural de Cádiz. Formación clásica, jazzística y percusión. Armónica, guitarras varias, bajo, timple canario, teclados, percusiones varias, batería y voz. Con experiencia vocal e instrumental en carnaval, dúos, corales, grupos músico-vocales y de jazz.',
  },
  {
    name: 'Manuel López',
    instrument: 'Teclados y percusión',
    imageUrl: withBasePath('/fotos/Manuel_Lopez.png'),
    bio:
      'Natural de San Fernando. Estudios musicales de piano y experiencia como coralista (Coro San Juan de la Cruz y Coro de Cámara Nova Mvsica).',
  },
  {
    name: 'Manuel Fernández',
    instrument: 'Violín',
    imageUrl: withBasePath('/fotos/Manuel_Fernandez.png'),
    bio:
      'Natural de El Puerto de Santa María. Violinista con más de 17 años de formación clásica: experiencia como concertino y solista en orquesta de Granada, además de un intenso trabajo para distintas agrupaciones de música de cámara en Gante, Bélgica. Todo ello manteniendo el gusto por lo folklórico y las fuentes musicales alternativas en bandas sonoras de películas y videojuegos.',
  },
  {
    name: 'Paco Pantión',
    instrument: 'Guitarra eléctrica',
    imageUrl: withBasePath('/fotos/Paco_Pantion.png'),
    bio:
      'Natural de San Fernando. Guitarrista solista y de sesión, blues y rock clásico, en diferentes formaciones en Cádiz. Ha participado en numerosos proyectos y actuado en escenarios como Got Talent España y Concert Music Festival (Chiclana) además de grabaciones de estudio para artistas emergentes.',
  },
  {
    name: 'Álvaro Bermúdez',
    instrument: 'Técnico de sonido',
    imageUrl: withBasePath('/fotos/Alvaro_Bermudez.png'),
    bio:
      "Natural de Tarragona. Estudios de clavecín en el Conservatorio de Música de la misma ciudad. Experiencia en MIDI, DAW y VST's usando FL Studio y Cubase, también en sonido digital y composiciones de música tracker. Ayudante de discomóviles en Castellón, DJ y técnico de sonido. Especialista en sintetizadores y teclados tipo arranger y workstation.",
  },
];

export function BandSection() {
  return (
    <section
      id="la-banda"
      className="pt-0 pb-10 md:pb-20 bg-[linear-gradient(90deg,_#0b0b0c_0%,_#141414_50%,_#1f1f1f_100%)] text-[#f5eee3]"
    >
      <SectionHeader>La Banda</SectionHeader>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-5xl mx-auto text-center text-[#f5eee3] mb-10 space-y-6">
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            La banda actual, liderada por Ed Garrett, se formó en 2022 y está integrada por músicos de diferente formación de la bahía de Cádiz cuya finalidad principal es la de llevar este estilo de música a los directos, para de esta manera, poder difundirlo, compartirlo y sobre todo, intentar transmitir al público asistente las sensaciones que esta música, tan rica en matices y variada, les hace sentir.
          </p>
          <p className="text-base md:text-lg font-semibold leading-relaxed">
            Su repertorio incluye algunos temas propios, pero sobretodo covers de leyendas como James Taylor, Willie Nelson, J J Cale o Eric Clapton, pasando por artistas consagrados como Joe Bonamassa, Ryan Adams o Ray LaMontagne, y sin olvidar a artistas más recientes, menos conocidos o emergentes, como Darius Rucker o Joshua Hyslop entre otros.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => {
            return (
              <Card key={member.name} className="border-none shadow-lg rounded-none bg-[#f7f1e6] overflow-hidden">
                <CardContent className="p-0 text-center">
                  <div className="aspect-square relative">
                    <Image
                      src={member.imageUrl}
                      alt={`Retrato de ${member.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 bg-[#d6b25a]">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-semibold text-lg text-[#2b1c12]">{member.name}</h3>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#2b1c12]/20 text-[#2b1c12] transition-colors hover:bg-[#2b1c12]/10"
                            aria-label={`Más info sobre ${member.name}`}
                          >
                            <Info className="h-3.5 w-3.5" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl bg-black text-[#f5eee3] border border-[#d6b25a]">
                          <DialogHeader>
                            <DialogTitle>{member.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-3 text-sm text-[#f5eee3]/90">
                            <p className="font-medium text-[#f5eee3]">{member.instrument}</p>
                            <p style={{ textAlign: 'justify' }}>{member.bio}</p>
                            {member.links?.length ? (
                              <div className="space-y-2">
                                <p className="font-medium text-[#f5eee3]">Más información</p>
                                <ul className="space-y-1">
                                  {member.links.map((link) => (
                                    <li key={link.url}>
                                      <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#d6b25a] hover:underline"
                                      >
                                        {link.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <p className="text-sm text-[#4a3522] font-light italic">{member.instrument}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
