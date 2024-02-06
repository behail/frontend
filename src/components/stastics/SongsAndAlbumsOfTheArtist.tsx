import React from "react";
import { Table, Th, Td } from "../../styledSystem/StyledSystemComponents";
import StasticsComponentWrapper from "../ComponentWrapper";

import { SongType } from "../../store/types";
interface SongsInGenreProps {
  songs: SongType[];
  isLoading: boolean;
  errors: string;
}

const SongsAndAlbumsOfTheArtist: React.FC<SongsInGenreProps> = ({
  songs,
  isLoading,
  errors,
}) => {
  const songsByArtist: { [artist: string]: number } = {};
  const albumsByArtist: { [artist: string]: number } = {};
  songs.forEach((song) => {
    if (song.artist in songsByArtist) {
      songsByArtist[song.artist]++;
    } else {
      songsByArtist[song.artist] = 1;
    }
    if (song.album in albumsByArtist) {
      albumsByArtist[song.album]++;
    } else {
      albumsByArtist[song.album] = 1;
    }
  });
  const songsInGenres: { [genre: string]: number } = {};
  songs.forEach((song) => {
    if (song.genre in songsInGenres) {
      songsInGenres[song.genre]++;
    } else {
      songsInGenres[song.genre] = 1;
    }
  });

  const artistsData: {
    [artist: string]: { songsCount: number; albumsCount: number };
  } = {};
  // Merge songsByArtist and albumsByArtist
  for (const artist in songsByArtist) {
    if (songsByArtist.hasOwnProperty(artist)) {
      artistsData[artist] = {
        songsCount: songsByArtist[artist],
        albumsCount: albumsByArtist[artist] || 0, // Default to 0 if artist has no albums
      };
    }
  }

  // Add artists with albums but no songs
  for (const artist in albumsByArtist) {
    if (albumsByArtist.hasOwnProperty(artist) && !artistsData[artist]) {
      artistsData[artist] = {
        songsCount: 0,
        albumsCount: albumsByArtist[artist],
      };
    }
  }
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
          {Object.entries(artistsData).map(
            ([artist, { songsCount, albumsCount }]) => (
              <tr key={artist}>
                <Td>{artist}</Td>
                <Td>{songsCount}</Td>
                <Td>{albumsCount}</Td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </StasticsComponentWrapper>
  );
};

export default SongsAndAlbumsOfTheArtist;
