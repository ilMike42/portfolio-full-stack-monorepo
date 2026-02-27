import { Album, ImageSize, Track } from "../models/domain/lastfm";
import { LastFmTrackDto } from "../models/dto/lastfm";
import { emptyToNull, toNumber, stripHtml } from "../utils";

const mapLastFmTrack = (dto: LastFmTrackDto): Track => {
  return {
    title: dto.name,
    id: emptyToNull(dto.mbid),
    url: dto.url,

    durationMs: toNumber(dto.duration),
    listeners: toNumber(dto.listeners),
    playcount: toNumber(dto.playcount),

    streamable: dto.streamable["#text"] === "1",
    fullTrackAvailable: dto.streamable.fulltrack === "1",

    artist: {
      name: dto.artist.name,
      id: emptyToNull(dto.artist.mbid),
      url: dto.artist.url,
    },

    album: dto.album ? mapAlbum(dto.album) : undefined,

    tags: dto.toptags?.tag?.map(t => t.name) ?? [],

    wiki: dto.wiki
      ? {
          publishedAt: new Date(dto.wiki.published),
          summary: stripHtml(dto.wiki.summary),
          content: stripHtml(dto.wiki.content),
        }
      : undefined,
  };
}



// submappers
function mapAlbum(album: NonNullable<LastFmTrackDto["album"]>): Album {
  return {
    title: album.title,
    artist: album.artist,
    url: album.url,
    images: mapImages(album.image),
  };
}

function mapImages(images: { "#text": string; size: ImageSize }[]) {
  const record = {} as Record<ImageSize, string>;

  for (const img of images) {
    if (img["#text"]) {
      record[img.size] = img["#text"];
    }
  }

  return record;
}

export { mapLastFmTrack }