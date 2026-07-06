import { create } from "zustand";
import Song from "../models/song";
import { persist } from "zustand/middleware";

interface RepertoireState {
  songs: Song[];
  setRepertoire: (songs: Song[]) => void;
  addSong: (song: Song) => void;
  removeSong: (songId: string) => void;
}

export const useRepertoireStore = create<RepertoireState>()(
  persist(
    (set) => ({
      songs: [],
      setRepertoire: (songs) => set({ songs }),
      addSong: (song) => set((state) => ({ songs: [...state.songs, song] })),
      removeSong: (songId) =>
        set((state) => ({ songs: state.songs.filter((s) => s.id !== songId) })),
    }),
    {
      name: "repertorie-storage",
    },
  ),
);
