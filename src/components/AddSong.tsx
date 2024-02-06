import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import {
  Input,
  ModalContent,
  ModalOverlay,
  Button,
  Table,
  Th,
  Td,
  Spacer,
} from "../styledSystem/StyledSystemComponents";
import { addSongAction } from "../features/song/songSlice";
import { SongType } from "../store/types";
import { capitalizeFirstLetter } from "../utils";

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [newSongTitle, setNewSongTitle] = useState<string>("");
  const [newSongAlbum, setNewSongAlbum] = useState<string>("");
  const [newSongArtist, setNewSongArtist] = useState<string>("");
  const [newSongGenre, setNewSongGenre] = useState<string>("");

  const handleAddSong = () => {
    if (
      newSongTitle !== "" &&
      newSongAlbum !== "" &&
      newSongArtist !== "" &&
      newSongGenre !== ""
    ) {
      const newSong: SongType = {
        title: capitalizeFirstLetter(newSongTitle),
        album: capitalizeFirstLetter(newSongAlbum),
        artist: capitalizeFirstLetter(newSongArtist),
        genre: capitalizeFirstLetter(newSongGenre),
        _id: "",
      };
      dispatch(addSongAction(newSong));
      setNewSongTitle("");
      setNewSongArtist("");
      setNewSongAlbum("");
      setNewSongGenre("");
      toast.success("New song is successfully added!");
    } else {
      toast.error("Adding new song faild!");
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3>Add New Song</h3>
            <Table>
              <thead>
                <tr>
                  <Th> Title </Th>
                  <Th> Alibum </Th>
                  <Th> Artist </Th>
                  <Th> Genre </Th>
                </tr>
              </thead>
              <tbody>
                <Td>
                  <Input
                    type="text"
                    placeholder="Enter new song title"
                    value={newSongTitle}
                    onChange={(e) => setNewSongTitle(e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Enter new Album"
                    value={newSongAlbum}
                    onChange={(e) => setNewSongAlbum(e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Enter Artist name"
                    value={newSongArtist}
                    onChange={(e) => setNewSongArtist(e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    type="text"
                    placeholder="Enter gener name"
                    value={newSongGenre}
                    onChange={(e) => setNewSongGenre(e.target.value)}
                  />
                </Td>
              </tbody>
            </Table>
            <Spacer />
            <Spacer />
            <Button onClick={() => handleAddSong()} color="#a8329e">
              Add Song
            </Button>
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default AddSongModal;
