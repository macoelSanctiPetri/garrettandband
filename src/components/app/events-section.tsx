import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionHeader } from './section-header';
import { CalendarDays, MapPin } from 'lucide-react';
import { withBasePath } from '@/lib/base-path';

type EventItem = {
  date: string;
  venue: string;
  city: string;
  poster?: string;
  qr?: string;
  qrLabel?: string;
  mapUrl?: string;
  note?: string;
  ticket?: {
    label: string;
    href?: string;
    disabled?: boolean;
  };
};

const upcomingEvents: EventItem[] = [
  {
    date: 'Jue 30 de julio de 2026 · 22:00',
    venue: 'RMASD. La Cortadura',
    city: 'Cádiz · C. la Línea de la Concepción, 14',
    poster: '/eventos/cortadura-2026-07-30/cartel_cortadura_2026_07_30.jpg',
    mapUrl: 'https://maps.app.goo.gl/PdNpYPuPVmTEkxku7',
    ticket: { label: 'Próximamente', disabled: true },
  },
  {
    date: 'Jue 6 de agosto de 2026',
    venue: 'Asociacion Aires de Cadiz',
    city: 'Cadiz',
    poster: '/eventos/aires-de-cadiz-2026-08-06/Cartel_Aires_Cadiz_06082026_Web.jpg',
    mapUrl: 'https://maps.app.goo.gl/go6xyhVTabiWmhMF6',
    ticket: { label: 'Comprar entradas', href: 'https://entradium.com/events/garrett-band-en-aires-2026?mpl=web' },
  },
  {
    date: 'Sáb 5 de septiembre de 2026',
    venue: "Saint Patrick's Tavern",
    city: 'La Barrosa, Chiclana',
    mapUrl: 'https://maps.app.goo.gl/3iP1FYLj6nYXHQXQ8',
    ticket: { label: 'Entrada libre', disabled: true },
  },
  {
    date: 'Sáb 14 de noviembre de 2026',
    venue: 'I.E.S. Columela',
    city: 'Cádiz · C/ Barcelona, 2',
    mapUrl: 'https://maps.app.goo.gl/rUgcAFRR7nckhS6P7',
    ticket: { label: 'Próximamente', disabled: true },
  },
];

const pastEvents: EventItem[] = [
  {
    date: 'Vie 3 de julio de 2026',
    venue: "Saint Patrick's Tavern",
    city: 'La Barrosa, Chiclana',
    poster: '/eventos/saint-patricks-tavern-2026-07-03/cartel_saint_patricks_tavern_2026_07_03.jpg',
    mapUrl: 'https://maps.app.goo.gl/3iP1FYLj6nYXHQXQ8',
  },
  {
    date: 'Vie 22 de mayo de 2026 · 21:00',
    venue: 'Sala La Quemá',
    city: 'Jerez de la Frontera',
    poster: '/eventos/sala-la-quema-2026-05-22/cartel_sala_la_quema_2026_05_22_temporal.jpeg',
    qr: '/eventos/sala-la-quema-2026-05-22/qrcode-La_Quema_22052026_web.png',
    qrLabel: 'Escanea para comprar entradas',
    mapUrl: 'https://maps.app.goo.gl/9b9ETLHayTi57Ctk6',
    ticket: { label: 'Comprar entradas', href: 'https://entradium.com/events/garrett-band-en-concierto-jerez-de-la-frontera?mpl=web' },
  },
  {
    date: 'Sáb 16 de mayo de 2026 · 18:00',
    venue: 'El Cuartel del Mar',
    city: 'Chiclana de la Frontera',
    poster: '/eventos/el-cuartel-del-mar-2026-05-16/cartel_el_cuartel_del_mar_2026_05_16.jpg',
    note: 'Reposición del concierto suspendido por lluvia.',
    mapUrl: 'https://maps.app.goo.gl/D3dcGbDdPn3757hK8',
  },
  {
    date: 'Sáb 25 de abril de 2026',
    venue: 'El Cuartel del Mar (aplazado)',
    city: 'Chiclana de la Frontera',
    poster: '/eventos/el-cuartel-del-mar-2026-04-25/photo_2026-04-24_18-04-42.jpg',
    note: 'Concierto suspendido por lluvia.',
    mapUrl: 'https://maps.app.goo.gl/D3dcGbDdPn3757hK8',
  },
  {
    date: 'Dom 12 de abril de 2026',
    venue: 'Club de Suboficiales',
    city: 'San Fernando',
    poster: '/eventos/club-de-suboficiales-2026-04-12/cartel_club_suboficiales_2026_04_12.jpg',
    note: 'Evento dirigido a socios del Club de Suboficiales. Si no eres socio y quieres asistir, contacta con nosotros a través del formulario.',
    mapUrl: 'https://maps.app.goo.gl/yXbsxJjbxt2mtM169',
    ticket: { label: 'Contacta con nosotros', href: '#contact' },
  },
  {
    date: 'Mié 11 de marzo de 2026 · 12:00',
    venue: 'Colegio Servando Camuñez',
    city: 'San Fernando · Concierto didáctico para el alumnado',
    poster: '/eventos/colegio-servando-camunez-2026-03-11/foto_colegio_servando_camunez_2026_03_11.jpg',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=CEIP+Servando+Camu%C3%B1ez+San+Fernando',
  },
  {
    date: 'Sáb 8 de noviembre de 2025 · 21:30',
    venue: "Saint Patrick's Tavern",
    city: 'La Barrosa, Chiclana de la Frontera',
    poster: '/eventos/saint-patricks-tavern-2025-11-08/Cartel_Saint_Patrick_08112025.jpg',
    mapUrl: 'https://maps.app.goo.gl/3iP1FYLj6nYXHQXQ8',
  },
  {
    date: 'Sáb 20 de septiembre de 2025',
    venue: "Saint Patrick's Tavern",
    city: 'La Barrosa, Chiclana de la Frontera',
    poster: '/eventos/saint-patricks-tavern-2025-09-20/cartel_saint_patrick_20_sept_2025.png',
    mapUrl: 'https://maps.app.goo.gl/3iP1FYLj6nYXHQXQ8',
  },
  {
    date: 'Sáb 30 de agosto de 2025',
    venue: 'Casa de los Toruños',
    city: 'El Puerto de Santa María',
    poster: '/eventos/casa-de-los-torunos-2025-08-30/Cartel_toruños_30_08_2025.jpg',
    mapUrl: 'https://maps.app.goo.gl/bp9GpP1DL9nafYaG6',
  },
  {
    date: 'Vie 25 de julio de 2025 · 21:30',
    venue: 'Asociación Aires de Cádiz',
    city: 'Cádiz',
    poster: '/eventos/aires-de-cadiz-2025-07-25/Cartel_Aires_Cadiz_25072025_Web.jpg',
    mapUrl: 'https://maps.app.goo.gl/go6xyhVTabiWmhMF6',
  },
  {
    date: 'Vie 27 de junio de 2025 · 21:30',
    venue: 'Sugar Café',
    city: 'San Fernando · Calle Hermanos Laulhe 18',
    poster: '/eventos/sugar-cafe-2025-06-27/Cartel_Sugar_2706_2025.jpg',
    mapUrl: 'https://maps.app.goo.gl/go6xyhVTabiWmhMF6',
  },
  {
    date: 'Dom 4 de mayo de 2025 · 15:00',
    venue: 'Trebufestival 2025',
    city: 'Trebujena (Cádiz) · Escenario Calle Guzmanes',
    poster: '/eventos/trebufestival-2025-05-04/cartel_trebufestival_2025.jpg',
    mapUrl: 'https://maps.app.goo.gl/UerBvQsxu7NCLx8w7',
  },
  {
    date: 'Sáb 8 de febrero de 2025',
    venue: 'Pub El Cobijo',
    city: 'Puerto Real',
    poster: '/eventos/pub-el-cobijo-2025-02-08/cartel_cobijo_08_feb_2025.jpg',
    mapUrl: 'https://maps.app.goo.gl/NBA3Xcv7WmYgaNnq9',
  },
];

const defaultPoster = '/imagenes/coming_soon.png';

export function EventsSection() {
  return (
    <section id="eventos" className="py-10 md:py-20 bg-card">
      <SectionHeader>Eventos</SectionHeader>
      <div className="container mx-auto max-w-6xl px-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-none bg-background">
            <TabsTrigger value="upcoming" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Próximos</TabsTrigger>
            <TabsTrigger value="past" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Pasados</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {upcomingEvents.map((event) => {
                const poster = event.poster ?? defaultPoster;
                return (
                <Card key={event.date} className="flex flex-col rounded-none border border-[#d6b25a]/30 bg-[#0b0b0c] text-white shadow-md">
                  <div className="w-full overflow-hidden bg-black/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(poster)}
                      alt={`Cartel de ${event.venue}`}
                      className="block w-full h-auto object-contain"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="whitespace-nowrap font-bold text-lg md:text-xl leading-tight text-[#d6b25a]">{event.venue}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center text-white/70 mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <p>{event.date}</p>
                    </div>
                     <div className="flex items-center text-white/70">
                        {event.mapUrl ? (
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-transparent transition-colors hover:border-[#d6b25a]/60 hover:text-[#d6b25a]"
                            aria-label={`Ver ubicación de ${event.venue} en el mapa`}
                          >
                            <MapPin className="h-4 w-4" />
                          </a>
                        ) : (
                          <MapPin className="h-4 w-4 mr-2" />
                        )}
                        <p>{event.city}</p>
                    </div>
                    {event.qr ? (
                      <div className="mt-3 flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={withBasePath(event.qr)}
                          alt={`QR de entradas para ${event.venue}`}
                          className="h-auto w-24 border border-white/20 bg-white p-1"
                        />
                      </div>
                    ) : null}
                    {event.note ? (
                      <p className="mt-3 text-sm text-white/70">{event.note}</p>
                    ) : null}
                  </CardContent>
                  <CardFooter>
                    {event.ticket?.href ? (
                      <Button asChild className="w-full bg-[#d6b25a] hover:bg-[#c9a74f] text-black rounded-none">
                        <a href={event.ticket.href} target="_blank" rel="noreferrer">
                          {event.ticket.label}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-[#d6b25a] hover:bg-[#c9a74f] text-black rounded-none"
                        disabled={event.ticket?.disabled}
                      >
                        {event.ticket?.label ?? 'Buy Tickets'}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )})}
            </div>
          </TabsContent>
          <TabsContent value="past" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pastEvents.map((event) => {
                return (
                <Card key={event.date} className="flex flex-col rounded-none border border-[#d6b25a]/30 bg-[#0b0b0c] text-white shadow-md">
                  {event.poster && (
                    <div className="w-full overflow-hidden bg-black/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(event.poster)}
                        alt={`Cartel de ${event.venue}`}
                        className="block w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-bold text-xl text-[#d6b25a]">{event.venue}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="flex items-center text-white/70 mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <p>{event.date}</p>
                    </div>
                     <div className="flex items-center text-white/70">
                        {event.mapUrl ? (
                          <a
                            href={event.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-transparent transition-colors hover:border-[#d6b25a]/60 hover:text-[#d6b25a]"
                            aria-label={`Ver ubicación de ${event.venue} en el mapa`}
                          >
                            <MapPin className="h-4 w-4" />
                          </a>
                        ) : (
                          <MapPin className="h-4 w-4 mr-2" />
                        )}
                        <p>{event.city}</p>
                    </div>
                  </CardContent>
                   <CardFooter>
                    <Button variant="outline" className="w-full rounded-none border-[#d6b25a]/40 text-[#d6b25a]" disabled>View Setlist</Button>
                  </CardFooter>
                </Card>
              )})}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
