import { useState, useEffect } from "react";
import {
  SlTextarea,
  SlButton,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";

interface LyricsPanelProps {
  songId: string;
  currentLyrics?: string;
}

export default function LyricsPanel({
  songId,
  currentLyrics = "",
}: LyricsPanelProps) {
  const updateSong = useRepertoireStore((state) => state.updateSong);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<string>(currentLyrics);

  // Syncs the local state with parent if this last change
  useEffect(() => {
    const setLyricsAsync = async () => {
      setLyrics(currentLyrics);
    };
    setLyricsAsync();
  }, [currentLyrics]);

  const handleSave = () => {
    updateSong(songId, { lyrics });
    setIsEditing(false);
  };

  return (
    <>
      <div className="lyrics-panel">
        <div className="panel-header">
          <span className="panel-title">Lyrics & Chords</span>
          <SlButton
            size="small"
            variant={isEditing ? "neutral" : "default"}
            onClick={() => setIsEditing(!isEditing)}
            pill
          >
            <SlIcon slot="prefix" name={isEditing ? "eye" : "pencil"} />
            {isEditing ? "Modo Vista" : "Editar"}
          </SlButton>
        </div>

        {isEditing ? (
          <div className="edit-container">
            <SlTextarea
              value={lyrics}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSlInput={(e: any) => setLyrics(e.target.value)}
              rows={12}
              placeholder="Write here something like: 🎶 Imagine all the people..."
              className="lyrics-textarea"
            />
            <SlButton
              size="small"
              variant="success"
              onClick={handleSave}
              className="save-button"
              pill
            >
              <SlIcon slot="prefix" name="check-lg" />
              Save
            </SlButton>
          </div>
        ) : (
          <div className="display-container">
            {lyrics.trim() ? (
              <pre className="lyrics-content">{lyrics}</pre>
            ) : (
              <p className="no-lyrics">
                No lyrics. Clic on "Edit" to add structure to the section.
              </p>
            )}
          </div>
        )}
      </div>
      <style>{css}</style>
    </>
  );
}

const css = `
  .lyrics-panel {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--sl-color-neutral-200);
    text-align: left;
    width: 100%;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .panel-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--sl-color-neutral-800);
    letter-spacing: -0.01em;
  }

  .edit-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .lyrics-textarea::part(textarea) {
    font-family: var(--sl-font-mono);
    font-size: 0.9rem;
    line-height: 1.5;
    tab-size: 4;
  }

  .save-button {
    align-self: flex-end;
  }

  .display-container {
    background-color: var(--sl-color-neutral-50);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid var(--sl-color-neutral-100);
    max-height: 350px;
    overflow-y: auto;
  }

  .lyrics-content {
    margin: 0;
    font-family: var(--sl-font-mono);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--sl-color-neutral-800);
    white-space: pre-wrap;
    word-break: break-word;
  }

  .no-lyrics {
    margin: 0;
    font-size: 0.875rem;
    color: var(--sl-color-neutral-400);
    text-align: center;
    font-style: italic;
    padding: 1rem 0;
  }
`;
