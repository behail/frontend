import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../store/rootReducer";
import {
  editSongAction,
  deleteSongAction,
  getAllSongsAction,
} from "../features/song/songSlice";
import { SongType } from "../store/types";
import AddSongModal from "./AddSong";
import ComponentWrapper from "./ComponentWrapper";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import {
  Table,
  Td,
  Th,
  Button,
  Input,
} from "../styledSystem/StyledSystemComponents";
import { capitalizeFirstLetter } from "../utils";

interface SongProps {
  song?: SongType;
}

const SongHomePage: React.FC<SongProps> = () => {
  const dispatch = useDispatch();
  const {
    songs: songsList,
    isLoading,
    errors,
  } = useSelector((state: StateType) => state.songs);

  const [editIndex, setEditIndex] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [editedSongTitle, setEditedSongTitle] = useState<string>("");
  const [editedSongAlbum, setEditedSongAlbum] = useState<string>("");
  const [editedSongArtist, setEditedSongArtist] = useState<string>("");
  const [editedSongGenre, setEditedSongGenre] = useState<string>("");

  useEffect(() => {
    dispatch(getAllSongsAction());
  }, [dispatch]);

  const handleSaveEditSong = (e: React.FormEvent, song: SongType) => {
    toast.success("Song is updated successfully!");
    e.preventDefault();
    const updatedSong: SongType = {
      ...song,
      title: capitalizeFirstLetter(editedSongTitle) || song.title,
      album: capitalizeFirstLetter(editedSongAlbum) || song.album,
      artist: capitalizeFirstLetter(editedSongArtist) || song.artist,
      genre: capitalizeFirstLetter(editedSongGenre) || song.genre,
    };
    dispatch(editSongAction(updatedSong));
    setEditIndex(-1);
    setEditedSongTitle("");
    setEditedSongAlbum("");
    setEditedSongArtist("");
    setEditedSongGenre("");
    if (errors !== "") {
      toast.error("Failed Updating song!");
    }
  };

  const handleDeleteSong = (songId: string) => {
    dispatch(deleteSongAction(songId));
  };

  return (
    <div className="wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="table-header">
          <h2>Song List</h2>
          <Button onClick={() => setIsModalOpen(true)} color="#a8329e">
            Add Song
          </Button>
          <AddSongModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <ComponentWrapper headerTitle="" errors={errors} isLoading={isLoading}>
          <Table>
            <thead>
              <tr>
                <Th> Title </Th>
                <Th> Alibum </Th>
                <Th> Artist </Th>
                <Th> Genre </Th>
                <Th> Actions </Th>
              </tr>
            </thead>
            <tbody>
              {songsList &&
                songsList.map((song, index) => (
                  <tr key={song._id}>
                    <Td>
                      {editIndex === index ? (
                        <Input
                          type="text"
                          value={editedSongTitle || song.title}
                          onChange={(e) =>
                            setEditedSongTitle(e.target.value || song.title)
                          }
                        />
                      ) : (
                        song.title
                      )}
                    </Td>
                    <Td>
                      {editIndex === index ? (
                        <Input
                          type="text"
                          value={editedSongAlbum || song.album}
                          onChange={(e) =>
                            setEditedSongAlbum(e.target.value || song.album)
                          }
                        />
                      ) : (
                        song.album
                      )}
                    </Td>
                    <Td>
                      {editIndex === index ? (
                        <Input
                          type="text"
                          value={editedSongArtist || song.artist}
                          onChange={(e) =>
                            setEditedSongArtist(e.target.value || song.artist)
                          }
                        />
                      ) : (
                        song.artist
                      )}
                    </Td>
                    <Td>
                      {editIndex === index ? (
                        <Input
                          type="text"
                          value={editedSongGenre || song.genre}
                          onChange={(e) =>
                            setEditedSongGenre(e.target.value || song.genre)
                          }
                        />
                      ) : (
                        song.genre
                      )}
                    </Td>
                    <Td>
                      {editIndex === index ? (
                        <>
                          <Button onClick={(e) => handleSaveEditSong(e, song)}>
                            Save
                          </Button>
                          <Button onClick={(e) => setEditIndex(-1)}>
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button onClick={() => setEditIndex(index)}>
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDeleteSong(song._id)}
                            color="red"
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </ComponentWrapper>
      </motion.div>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default SongHomePage;
