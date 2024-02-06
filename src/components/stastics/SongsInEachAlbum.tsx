import React from "react";
import { Table, Th, Td } from "../../styledSystem/StyledSystemComponents";
import { SongType } from "../../store/types";
import ComponentWrapper from "../ComponentWrapper";

interface SongsInEachAlbumProps {
  songs: SongType[];
  isLoading: boolean;
  errors: string;
}

const SongsInEachAlbum: React.FC<SongsInEachAlbumProps> = ({
  songs,
  isLoading,
  errors,
}) => {
  const songsInAlbums: { [album: string]: number } = {};
  songs.forEach((song) => {
    if (song.album in songsInAlbums) {
      songsInAlbums[song.album]++;
    } else {
      songsInAlbums[song.album] = 1;
    }
  });
  return (
    <ComponentWrapper
      isLoading={isLoading}
      errors={errors}
      headerTitle="Number of songs in each album"
    >
      <Table>
        <thead>
          <tr>
            <Th>Album</Th>
            <Th>Number of Songs </Th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(songsInAlbums) &&
            Object.entries(songsInAlbums).map(([album, count]) => (
              <tr key={album}>
                <Td>{album}</Td>
                <Td>{count}</Td>
              </tr>
            ))}
        </tbody>
      </Table>
    </ComponentWrapper>
  );
};

export default SongsInEachAlbum;
