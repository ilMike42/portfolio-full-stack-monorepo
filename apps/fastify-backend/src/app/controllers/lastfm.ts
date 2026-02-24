import { FastifyRequest } from "fastify";
import { mapLastFmTrack } from "../mappers/lastfm";

const BASE_URL = 'http://ws.audioscrobbler.com/2.0';
const API_KEY = process.env.LASTFM_API_KEY;

const _getTrackInfo = async (mbid: string) => {
  const method = "track.getInfo";
  const res = await fetch(`${BASE_URL}/?method=${method}&mbid=${mbid}&api_key=${API_KEY}&format=json`);
  const jsonRes = await res.json();
  return jsonRes.track;
}

const getLastFMTopTrackController = async (req: FastifyRequest) => {
  const method = "user.gettoptracks";
  const user = "ilmike42";
  const period = "7day";
  const res = await fetch(`${BASE_URL}/?method=${method}&user=${user}&period=${period}&api_key=${API_KEY}&format=json`);
  const data = await res.json();
  const track = data["toptracks"]["track"][0];

  const trackInfo = await _getTrackInfo(track.mbid);
  
  const mappedTrack = mapLastFmTrack(trackInfo);

  return {
    title: mappedTrack.title,
    artist: mappedTrack.artist.name,
    album: mappedTrack.album.title,
    albumArt: mappedTrack.album.images.medium
  };
}

export { getLastFMTopTrackController }