import React from "react";
import { Table, Th, Td } from "../../styledSystem/StyledSystemComponents";
import ComponentWrapper from "../ComponentWrapper";

import { ISongState, SongType } from "../../store/types";
interface IOverAllStasticsProps extends ISongState {
  songs: SongType[];
  artistList: string[];
  albumsList: string[];
  genresList: string[];
  isLoading: boolean;
  errors: string;
}

const OverAllStastics: React.FC<IOverAllStasticsProps> = ({
  songs,
  artistList,
  albumsList,
  genresList,
  isLoading,
  errors,
}) => {
  return (
    <ComponentWrapper
      headerTitle="Overall"
      isLoading={isLoading}
      errors={errors}
    >
      <Table>
        <thead>
          <tr>
            <Th>Total Songs</Th>
            <Th>Total Artists</Th>
            <Th>Total Albums</Th>
            <Th>Total Genres</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{songs && songs.length}</Td>
            <Td>{songs && artistList.length}</Td>
            <Td>{songs && albumsList.length}</Td>
            <Td>{songs && genresList.length}</Td>
          </tr>
        </tbody>
      </Table>
    </ComponentWrapper>
  );
};

export default OverAllStastics;
