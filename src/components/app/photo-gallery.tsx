'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { withBasePath } from '@/lib/base-path';

const galleryImages = [
  { src: '/galeria/photo_2025-09-29_18-22-24.jpg', alt: 'Galería 1' },
  { src: '/galeria/photo_2025-09-29_18-23-33.jpg', alt: 'Galería 2' },
  { src: '/galeria/Sin título.png', alt: 'Galería 3' },
  { src: '/galeria/Sin título1.png', alt: 'Galería 4' },
];

export function PhotoGallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="pb-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {galleryImages.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="group rounded-none shadow-lg overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-xl">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <button
                      type="button"
                      className="h-full w-full"
                      onClick={() => setActive(photo)}
                      aria-label={`Ver ${photo.alt}`}
                    >
                      <Image
                        src={withBasePath(photo.src)}
                        alt={photo.alt}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-none bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-lg font-semibold text-white hover:bg-black/80"
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <Image
              src={withBasePath(active.src)}
              alt={active.alt}
              width={1600}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

