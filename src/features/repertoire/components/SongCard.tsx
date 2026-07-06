import SlCard from "@shoelace-style/shoelace/dist/react/card";
import Song from "../../../core/models/song";

interface SongCardProps {
  song: Song;
}
export default function SongCard({ song }: SongCardProps) {
  return (
    <>
      <SlCard key={song.id}>
        <h2>{song.title}</h2>
        {!song.isCover ? (
          <p>Own</p>
        ) : (
          song.author && <p>Author: {song.author}</p>
        )}

        <p>Key: {song.key}</p>
      </SlCard>
    </>
  );
}
