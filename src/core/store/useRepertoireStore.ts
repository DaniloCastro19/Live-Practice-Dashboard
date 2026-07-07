import { create } from "zustand";
import Song from "../models/song";
import { persist } from "zustand/middleware";

interface RepertoireState {
  songs: Song[];
  activeSongId: string | null; // Follow up the song currently in session, if any
  setRepertoire: (songs: Song[]) => void;
  addSong: (song: Song) => void;
  updateSong: (songId: string, updatedData: Partial<Song>) => void;
  removeSong: (songId: string) => void;
  setActiveSongId: (songId: string | null) => void; // Change or reset the active song in session
  addTimeToSong: (songId: string, seconds: number) => void;
}

export const useRepertoireStore = create<RepertoireState>()(
  persist(
    (set) => ({
      songs: [],
      activeSongId: null,

      setRepertoire: (songs) => set({ songs }),

      addSong: (song) => set((state) => ({ songs: [...state.songs, song] })),

      removeSong: (songId) =>
        set((state) => ({
          songs: state.songs.filter((s) => s.id !== songId),
          // If the song being removed is the active one, reset activeSongId to null
          activeSongId:
            state.activeSongId === songId ? null : state.activeSongId,
        })),

      setActiveSongId: (songId) => set({ activeSongId: songId }),

      addTimeToSong: (songId, seconds) =>
        set((state) => ({
          songs: state.songs.map((song) =>
            song.id === songId
              ? { ...song, secondsPracticed: song.secondsPracticed + seconds }
              : song,
          ),
        })),
      updateSong: (songId, updatedData) =>
        set((state) => ({
          songs: state.songs.map((song) =>
            song.id === songId ? { ...song, ...updatedData } : song,
          ),
        })),
    }),
    {
      name: "repertoire-storage",
    },
  ),
);
