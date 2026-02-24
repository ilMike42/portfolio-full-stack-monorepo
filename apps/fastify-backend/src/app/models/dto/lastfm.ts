export interface LastFmTrackDto {
  name: string;
  mbid: string;
  url: string;
  duration: string;
  listeners: string;
  playcount: string;

  streamable: {
    "#text": string;
    fulltrack: string;
  };

  artist: {
    name: string;
    mbid: string;
    url: string;
  };

  album?: {
    artist: string;
    title: string;
    url: string;
    image: LastFmImageDto[];
  };

  toptags?: {
    tag: { name: string; url: string }[];
  };

  wiki?: {
    published: string;
    summary: string;
    content: string;
  };
}

export interface LastFmImageDto {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
}