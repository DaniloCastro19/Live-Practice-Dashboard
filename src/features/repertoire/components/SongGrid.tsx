import SongCard from "./SongCard";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";
import AddFloatingButton from "./AddFloatingButton";

export default function SongGrid() {
  const songs = useRepertoireStore((state) => state.songs);

  return (
    <>
      <div className="grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
        <div className="floating-btn-container">
          <AddFloatingButton />
        </div>
      </div>
      <style>{styles}</style>
    </>
  );
}

const styles = `
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;
