export type SongType = {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  _v?: number;
};

export type ISongState = {
  songs: SongType[];
  artistList: string[];
  albumsList: string[];
  genresList: string[];
  isLoading: boolean;
  errors: string;
};
