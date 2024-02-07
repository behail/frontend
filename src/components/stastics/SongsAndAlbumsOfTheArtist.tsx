import React from "react";
import { Table, Th, Td } from "../../styledSystem/StyledSystemComponents";
import StasticsComponentWrapper from "../ComponentWrapper";

import { SongType } from "../../store/types";
interface SongsInGenreProps {
  songs: SongType[];
  isLoading: boolean;
  errors: string;
}
interface ArtistData {
  artist: string;
  albums: string[];
  songs: string[];
}

const SongsAndAlbumsOfTheArtist: React.FC<SongsInGenreProps> = ({
  songs,
  isLoading,
  errors,
}) => {
  const artistSongAlbum = songs.map((song) => {
    return { artist: song.artist, album: song.album, song: song.title };
  });

  const artistsData: ArtistData[] = [];
  artistSongAlbum.forEach(({ artist, album, song }) => {
    const artistData = artistsData.find((data) => data.artist === artist);
    if (artistData) {
      if (!artistData.albums.includes(album)) {
        artistData.albums.push(album);
      }
      artistData.songs.push(song);
    } else {
      artistsData.push({ artist, albums: [album], songs: [song] });
    }
  });

  return (
    <StasticsComponentWrapper
      headerTitle="Number of songs & albums each artist has"
      isLoading={isLoading}
      errors={errors}
    >
      <Table>
        <thead>
          <tr>
            <Th>Artist</Th>
            <Th>Albums</Th>
            <Th>Songs</Th>
          </tr>
        </thead>
        <tbody>
          {artistsData.map(({ artist, albums, songs }) => (
            <tr key={artist}>
              <Td>{artist}</Td>
              <Td>{albums.length}</Td>
              <Td>{songs.length}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </StasticsComponentWrapper>
  );
};

export default SongsAndAlbumsOfTheArtist;
