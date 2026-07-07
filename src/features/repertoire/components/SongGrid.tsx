import SongCard from "./SongCard";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";
import AddFloatingButton from "./AddFloatingButton";

export default function SongGrid() {
  const songs = useRepertoireStore((state) => state.songs);

  return (
    <>
      <div style={styles.grid}>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
      <div className="floating-btn-container">
        <AddFloatingButton />
      </div>
    </>
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
