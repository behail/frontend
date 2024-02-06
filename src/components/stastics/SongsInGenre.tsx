import React from "react";
import { Table, Th, Td } from "../../styledSystem/StyledSystemComponents";
import ComponentWrapper from "../ComponentWrapper";
import { SongType } from "../../store/types";

interface SongsInGenreProps {
  songs: SongType[];
  isLoading: boolean;
  errors: string;
}

const SongsInGenre: React.FC<SongsInGenreProps> = ({
  songs,
  isLoading,
  errors,
}) => {
  const songsInGenres: { [genre: string]: number } = {};
  songs.forEach((song) => {
    if (song.genre in songsInGenres) {
      songsInGenres[song.genre]++;
    } else {
      songsInGenres[song.genre] = 1;
    }
  });
  return (
    <ComponentWrapper
      isLoading={isLoading}
      errors={errors}
      headerTitle="Number of songs in each genre"
    >
      <Table>
        <thead>
          <tr>
            <Th>Genre</Th>
            <Th>Number of Songs</Th>
          </tr>
        </thead>
        <tbody>
          {songsInGenres &&
            Object.entries(songsInGenres).map(([genre, count]) => (
              <tr key={genre}>
                <Td>{genre}</Td>
                <Td>{count}</Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </ComponentWrapper>
  );
};

export default SongsInGenre;
