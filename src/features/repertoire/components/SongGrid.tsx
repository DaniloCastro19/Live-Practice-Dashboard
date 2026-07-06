import SongCard from "./SongCard";
import { mockSongs } from "../../../core/utils/mock/songs";
export default function SongGrid() {
  return (
    <div style={styles.grid}>
      {mockSongs.map((song) => (
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
