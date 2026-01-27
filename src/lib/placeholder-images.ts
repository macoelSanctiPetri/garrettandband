import { withBasePath } from "@/lib/base-path";

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: 'hero',
    description: 'Garrett&Band hero image',
    imageUrl: withBasePath('/imagenes/hero.jpg'),
    imageHint: 'band hero',
  },
  {
    id: 'member1',
    description: 'Black and white portrait of the lead singer',
    imageUrl:
      'https://images.unsplash.com/photo-1599594407616-af1c058be616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtdXNpY2lhbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc2OTEzNjcxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'musician portrait',
  },
  {
    id: 'member2',
    description: 'Black and white portrait of the guitarist',
    imageUrl:
      'https://images.unsplash.com/photo-1670743601827-36bd817e975e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxndWl0YXJpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjkxNTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'guitarist portrait',
  },
  {
    id: 'member3',
    description: 'Black and white portrait of the bassist',
    imageUrl:
      'https://images.unsplash.com/photo-1695192577284-fd1b10529579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYXNzaXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzY5MTU2Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'bassist portrait',
  },
  {
    id: 'member4',
    description: 'Black and white portrait of the drummer',
    imageUrl:
      'https://images.unsplash.com/photo-1661432432355-8f262a143280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkcnVtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzY5MTU2Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'drummer portrait',
  },
  {
    id: 'video_thumb_1',
    description: 'Thumbnail for a live performance video',
    imageUrl:
      'https://images.unsplash.com/photo-1602369944529-c237ca143d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb25jZXJ0JTIwc3RhZ2V8ZW58MHx8fHwxNzY5MDUzNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'concert stage',
  },
  {
    id: 'video_thumb_2',
    description: 'Thumbnail for another live performance video',
    imageUrl:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxsaXZlJTIwbXVzaWN8ZW58MHx8fHwxNzY5MTU2MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'live music',
  },
  {
    id: 'gallery_1',
    description: "A photo from the 'On the Road' tour",
    imageUrl:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0b3VyJTIwYnVzfGVufDB8fHx8MTc2OTE1NjM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'tour bus',
  },
  {
    id: 'gallery_2',
    description: 'A backstage photo',
    imageUrl:
      'https://images.unsplash.com/photo-1558541966-a801364c934b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxiYWNrc3RhZ2UlMjBtdXNpY3xlbnwwfHx8fDE3NjkxNTYzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'backstage music',
  },
  {
    id: 'gallery_3',
    description: 'A crowd shot from a festival',
    imageUrl:
      'https://images.unsplash.com/photo-1682133114083-81319fc857fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzY5MTIzNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'concert crowd',
  },
  {
    id: 'gallery_4',
    description: 'The band in a recording studio',
    imageUrl:
      'https://images.unsplash.com/photo-1601856254555-a9c0ebef8af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cmVjb3JkaW5nJTIwc3R1ZGlvfGVufDB8fHx8MTc2OTA3MjY2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'recording studio',
  },
];
