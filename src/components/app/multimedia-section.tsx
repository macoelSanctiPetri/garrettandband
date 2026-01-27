import { SectionHeader } from './section-header';
import { VideoGallery } from './video-gallery';
import { PhotoGallery } from './photo-gallery';

export function MultimediaSection() {
  return (
    <section id="multimedia" className="py-10 md:py-20 bg-[#0b0b0c] text-white">
      <SectionHeader>Multimedia</SectionHeader>
      <div className="container mx-auto max-w-6xl px-4 space-y-16">
        <section id="conciertos" className="scroll-mt-24">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Nuestros conciertos</h3>
          <VideoGallery />
        </section>
      </div>
      <section
        id="galeria"
        className="scroll-mt-24 bg-[#0b0b0c] py-12"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Galería</h3>
          <PhotoGallery />
        </div>
      </section>
    </section>
  );
}


