import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from './section-header';
import { withBasePath } from '@/lib/base-path';

const members = [
  {
    name: 'Eduardo Gallardo',
    instrument: 'Voz principal, Guitarra acústica y bajo',
    imageUrl: withBasePath('/fotos/Eduardo_Gallardo.png'),
  },
  {
    name: 'Jerónimo Massanet',
    instrument: 'Guitarra acústica, eléctrica y bajo',
    imageUrl: withBasePath('/fotos/Jeronimo_Massanet.png'),
  },
  {
    name: 'Ana Reyes',
    instrument: 'Armónica, percusión y voces',
    imageUrl: withBasePath('/fotos/Ana_Reyes.png'),
  },
  {
    name: 'Aurora González',
    instrument: 'Guitarra acústica y voces',
    imageUrl: withBasePath('/fotos/Aurora_Gonzalez.png'),
  },
  {
    name: 'Enrique Martínez',
    instrument: 'Batería y guitarra acústica',
    imageUrl: withBasePath('/fotos/Enrique_Martinez.png'),
  },
  {
    name: 'Manuel López',
    instrument: 'Teclados y percusión',
    imageUrl: withBasePath('/fotos/Manuel_Lopez.png'),
  },
  {
    name: 'Manuel Fernández',
    instrument: 'Violín',
    imageUrl: withBasePath('/fotos/Manuel_Fernandez.png'),
  },
  {
    name: 'Paco Pantión',
    instrument: 'Guitarra',
    imageUrl: withBasePath('/fotos/Paco_Pantion.png'),
  },
  {
    name: 'Álvaro Bermúdez',
    instrument: 'Técnico Sonido',
    imageUrl: withBasePath('/fotos/Alvaro_Bermudez.png'),
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
                    <h3 className="font-semibold text-lg text-[#2b1c12]">{member.name}</h3>
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

