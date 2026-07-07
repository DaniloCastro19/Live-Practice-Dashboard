import {
  SlButton,
  SlInput,
  SlOption,
  SlSelect,
  SlSwitch,
  SlCard,
  SlBadge,
  SlIcon,
  SlIconButton,
} from "@shoelace-style/shoelace/dist/react";
import { Link } from "react-router-dom";
import { majorKeys } from "../../../core/models/keys";
import isMajorKey from "../../../core/utils/functions/isMajorKey";
import Song from "../../../core/models/song";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";
import { useState } from "react";

interface SongCardProps {
  song: Song;
}
export default function SongCard({ song }: SongCardProps) {
  const setActiveSong = useRepertoireStore((state) => state.setActiveSongId);
  const removeSong = useRepertoireStore((state) => state.removeSong);
  const updateSong = useRepertoireStore((state) => state.updateSong);

  const [isEditing, setIsEditing] = useState(false);
  const [isCover, setIsCover] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`Delete "${song.title}" from repertoire?`)) {
      removeSong(song.id);
    }
  };

  const handleUpdate = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title =
      formData.get("title") == ""
        ? song.title
        : (formData.get("title") as string);
    const key =
      formData.get("key") == "" ? song.key : (formData.get("key") as string);

    const author =
      (formData.get("author") as string) == ""
        ? song.author
        : (formData.get("author") as string);

    const isMinor = formData.get("isMinor") === "on";
    const finalKey = isMinor ? `${key}m` : key;

    updateSong(song.id, {
      title,
      key: finalKey,
      author,
      isCover
    });

    setIsEditing(false);
  };
  return (
    <>
      <SlCard key={song.id} className="card">
        {isEditing ? (
          // Edit Form
          <form className="edit-form" onSubmit={handleUpdate}>
            <SlInput
              name="title"
              size="small"
              defaultValue={song.title}
              placeholder="Title"
            />
            <div className="rowGroup">
              <SlSelect
                name="key"
                size="small"
                placeholder="Key"
                defaultValue={song.key}
                className="flex1"
              >
                {majorKeys.map((key) => (
                  <SlOption key={key} value={key}>
                    {key}
                  </SlOption>
                ))}
              </SlSelect>

              <SlSwitch name="isMinor" className="switchModifier" size="small">
                Is minor (m)
              </SlSwitch>
            </div>

            <SlInput
              name="author"
              placeholder="Author"
              size="small"
              disabled={!isCover}
            ></SlInput>

            <SlSwitch
              name="isCover"
              className="switchModifier"
              size="small"
              checked={isCover}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSlChange={(e: any) => setIsCover(e.target.checked)}
            >
              Is a Cover
            </SlSwitch>

            <div className="edit-actions">
              <SlButton type="submit" variant="success" size="small" pill>
                <SlIcon slot="prefix" name="check2"></SlIcon>
                Save
              </SlButton>
              <SlButton size="small" pill onClick={() => setIsEditing(false)}>
                Cancel
              </SlButton>
            </div>
          </form>
        ) : (

          // Actual song card
          <div className="card-body">
            <div className="card-controls">
              <SlIconButton
                name="pencil"
                label="Edit"
                onClick={() => setIsEditing(true)}
              />
              <SlIconButton
                name="trash"
                label="delete"
                onClick={handleDelete}
                style={{ color: "var(--sl-color-danger-600)" }}
              />
            </div>

            <div className="card-content">
              <strong className="song-title">{song.title}</strong>
              <div className="song-meta">
                <SlBadge variant={isMajorKey(song.key) ? "success" : "neutral"}>
                  {song.key}
                </SlBadge>
                <span className="author-text">
                  {!song.isCover ? "Own" : `Author: ${song.author}`}
                </span>
              </div>
              <em className="time-text">
                Time practiced: {song.secondsPracticed}s
              </em>
            </div>

            <Link to={`liveSession/${song.id}`} style={{ width: "100%" }}>
              <SlButton
                variant="primary"
                className="play-button"
                onClick={() => setActiveSong(song.id)}
              >
                <SlIcon slot="prefix" name="play-circle-fill"></SlIcon>
                Play Session
              </SlButton>
            </Link>
          </div>
        )}
      </SlCard>

      <style>{styles}</style>
    </>
  );
}

const styles = `
  .card {
    width: 100%;
  }

  .card::part(body) {
    padding: 1rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }

  .card-controls {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    display: flex;
    gap: 0.25rem;
    background: var(--sl-panel-background-color);
    border-radius: 4px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .song-title {
    font-size: 1.125rem;
    color: var(--sl-color-neutral-900);
  }

  .song-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .author-text {
    font-size: 0.875rem;
    color: var(--sl-color-neutral-600);
  }

  .time-text {
    font-size: 0.875rem;
    color: var(--sl-color-neutral-500);
  }

  .play-button {
    width: 100%;
    margin-top: 0.5rem;
  }

  /* Estilos del modo edición */
  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .edit-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;
