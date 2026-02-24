export interface Track {
  title: string;
  id: string | null;
  url: string;

  durationMs: number;
  listeners: number;
  playcount: number;

  streamable: boolean;
  fullTrackAvailable: boolean;

  artist: Artist;
  album?: Album;

  tags: string[];
  wiki?: Wiki;
}

export interface Artist {
  name: string;
  id: string | null;
  url: string;
}

export interface Album {
  title: string;
  artist: string;
  url: string;
  images: Record<ImageSize, string>;
}

export type ImageSize = "small" | "medium" | "large" | "extralarge";

export interface Wiki {
  publishedAt: Date;
  summary: string;
  content: string;
}