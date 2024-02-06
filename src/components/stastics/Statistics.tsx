import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../store/rootReducer";
import { Text, Spacer } from "../../styledSystem/StyledSystemComponents";
import OverAllStastics from "./OverAllStastics";
import SongsInGenre from "./SongsInGenre";
import SongsAndAlbumsOfTheArtist from "./SongsAndAlbumsOfTheArtist";
import SongsInEachAlbum from "./SongsInEachAlbum";

const Statistics: React.FC = () => {
  const { songs, artistList, genresList, albumsList, isLoading, errors } =
    useSelector((state: StateType) => state.songs);

  return (
    <>
      <Spacer />
      <Spacer />
      <Text color="#a8329e">Statistics</Text>
      <OverAllStastics
        songs={songs}
        artistList={artistList}
        albumsList={albumsList}
        genresList={genresList}
        errors={errors}
        isLoading={isLoading}
      />
      <Spacer />
      <Spacer />
      <SongsAndAlbumsOfTheArtist
        songs={songs}
        isLoading={isLoading}
        errors={errors}
      />
      <SongsInGenre songs={songs} isLoading={isLoading} errors={errors} />
      <Spacer />
      <Spacer />
      <SongsInEachAlbum songs={songs} isLoading={isLoading} errors={errors} />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </>
  );
};

export default Statistics;
