import SlCard from "@shoelace-style/shoelace/dist/react/card";
import SlBadge from "@shoelace-style/shoelace/dist/react/badge";
import isMajorKey from "../../../core/utils/functions/isMajorKey";
import Song from "../../../core/models/song";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

interface SongCardProps {
  song: Song;
}
export default function SongCard({ song }: SongCardProps) {
  return (
    <>
      <SlCard key={song.id} className="card">
        <strong>{song.title}</strong>
        {!song.isCover ? (
          <p>Own</p>
        ) : (
          song.author && <p>Author: {song.author}</p>
        )}
        <SlBadge variant={isMajorKey(song.key) ? "success" : "neutral"}>
          {song.key}
        </SlBadge>
        <br />
        <SlButton variant="primary" size="small">
          <SlIcon slot="prefix" name="play-circle-fill"></SlIcon>
          Play Session
        </SlButton>
      </SlCard>
      <style>{styles}</style>
    </>
  );
}

const styles = `
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid var(--sl-color-neutral-200);
    borderRadius: 0.5rem;
    boxShadow: var(--sl-shadow-x-small);
    backgroundColor: var(--sl-panel-background-color);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
  .card:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
