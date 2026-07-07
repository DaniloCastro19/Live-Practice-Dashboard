import SongCard from "./SongCard";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";

export default function SongGrid() {
  const songs = useRepertoireStore((state) => state.songs);

  return (
    <div style={styles.grid}>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
    padding: "1rem",
  },
};
