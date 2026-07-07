import SlCard from "@shoelace-style/shoelace/dist/react/card";
import SlBadge from "@shoelace-style/shoelace/dist/react/badge";
import isMajorKey from "../../../core/utils/functions/isMajorKey";
import Song from "../../../core/models/song";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import { Link } from "react-router-dom";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";

interface SongCardProps {
  song: Song;
}
export default function SongCard({ song }: SongCardProps) {
  const setActiveSong = useRepertoireStore((state) => state.setActiveSongId);
  return (
    <>
      <SlCard key={song.id} className="card">
        <div className="card-body">
          <strong>{song.title}</strong>

          {!song.isCover ? (
            <p>Own</p>
          ) : (
            song.author && <p>Author: {song.author}</p>
          )}
          <em>Time practiced: {song.secondsPracticed}s</em>
          <SlBadge variant={isMajorKey(song.key) ? "success" : "neutral"}>
            {song.key}
          </SlBadge>

          <Link to={`liveSession/${song.id}`}>
            <SlButton
              variant="primary"
              size="small"
              onClick={() => setActiveSong(song.id)}
            >
              <SlIcon slot="prefix" name="play-circle-fill"></SlIcon>
              Play Session
            </SlButton>
          </Link>
        </div>
      </SlCard>
      <style>{styles}</style>
    </>
  );
}

const styles = `
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid var(--sl-color-neutral-200);
    borderRadius: 0.5rem;
    boxShadow: var(--sl-shadow-x-small);
    backgroundColor: var(--sl-panel-background-color);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
  .card-body:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
