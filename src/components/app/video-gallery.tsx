'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  { title: 'WEST VIRGINIA', videoId: '2C6P8Yu_zVU' },
  { title: 'Concierto Aires de Cádiz 2025', videoId: 'vz434WP2blY' },
  { title: 'Concierto Sugar Café', videoId: 'yjPjGD-5wKQ' },
  { title: 'Concierto Trebufestival', videoId: 'cfLDCihH0bU' },
  { title: 'Concierto La Alhóndiga', videoId: 'ztoBcSLo8-E' },
  { title: 'Concierto el Cobijo', videoId: 'p3al87PHhrA' },
  { title: 'ANOTHER DAY', videoId: 'FAfp_g_dpL4' },
  { title: 'Festival GUSTOCK', videoId: 'jHKPKyOKyds' },
  { title: 'PRECIOUS SOULS', videoId: '7NwP0_Yz06s' },
  { title: 'Gala Benéfica por Valencia', videoId: 'fdXuy22FM2k' },
  { title: 'LONG ISLAND SHORES. Cover (Mindy Smith)', videoId: 'ArNwLRohO3I' },
  {
    title: "Wagon Wheel. Saint Patrick's Tavern, Chiclana. Sábado 11 de mayo de 2024.",
    videoId: '720Eqllcsa4',
  },
  {
    title:
      "While My Guitar Gently Weeps. Saint Patrick's Tavern, Chiclana. sábado 11 de mayo de 2024.",
    videoId: 'T8UhviutoDU',
  },
  { title: 'HEART OF GOLD. Cover (Neil Young)', videoId: 'DJ_DYkBdsxw' },
  { title: 'Cover San Francisco Bay Blues', videoId: 'eH5QXCjT-pY' },
  { title: 'On the Road Again, Willie Nelson.', videoId: 'muZyRCUUCio' },
  { title: 'WHILE MY GUITAR GENTLY WEEPS. Cover (Los Beatles). Aires de Cádiz.', videoId: 'HAHMS7E8FL4' },
];

export function VideoGallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card
            key={video.videoId}
            className="group rounded-none shadow-lg overflow-hidden bg-background transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl focus-within:-translate-y-1 focus-within:scale-[1.02] focus-within:shadow-xl"
          >
            <CardContent className="p-0">
              <div className="aspect-video bg-black/10" />
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{video.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <Card
          key={video.videoId}
          className="group rounded-none shadow-lg overflow-hidden bg-background transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl focus-within:-translate-y-1 focus-within:scale-[1.02] focus-within:shadow-xl"
        >
          <CardContent className="p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                suppressHydrationWarning
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-foreground">{video.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
