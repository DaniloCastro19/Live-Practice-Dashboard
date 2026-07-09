import { useState, useEffect } from "react";
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";
import { SlButton, SlIcon, SlBadge } from "@shoelace-style/shoelace/dist/react";
import { Link } from "react-router-dom";
import { formatTime } from "../../../core/utils/functions/formatTime";
import LyricsPanel from "./LyricsPanel";

export default function PracticeTracker() {
  const songs = useRepertoireStore((state) => state.songs);
  const activeSongId = useRepertoireStore((state) => state.activeSongId);
  const setActiveSongId = useRepertoireStore((state) => state.setActiveSongId);
  const addTimeToSong = useRepertoireStore((state) => state.addTimeToSong);

  const currentSong = songs.find((song) => song.id === activeSongId);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let interval: any | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleTogglePractice = () => {
    if (isPlaying) {
      addTimeToSong(currentSong!.id, seconds);
      setIsPlaying(false);
      setSeconds(0);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <>
      {currentSong ? (
        <div className="tracker-container">
          <Link to="/">
            <button
              className="back-button"
              onClick={() => setActiveSongId(null)}
              disabled={isPlaying}
            >
              <SlIcon name="arrow-left" /> Volver
            </button>
          </Link>

          <div className="tracker-header">
            <span className="live-indicator">
              <span className={`dot ${isPlaying ? "pulse" : ""}`}></span>
              {isPlaying ? "LIVE SESSION" : "PAUSED SESSION"}
            </span>

            <h2 className="tracker-title">{currentSong.title}</h2>

            <div className="meta-badges">
              <SlBadge variant="primary">{currentSong.key}</SlBadge>
              {currentSong.isCover && (
                <SlBadge variant="neutral">{currentSong.author}</SlBadge>
              )}
            </div>
          </div>

          <div className="tracker-body">
            <div className={`time-display ${isPlaying ? "active" : ""}`}>
              {formatTime(seconds)}
            </div>

            <SlButton
              variant={isPlaying ? "danger" : "success"}
              onClick={handleTogglePractice}
              className="control-button"
              pill
              size="large"
            >
              <SlIcon
                slot="prefix"
                name={isPlaying ? "stop-fill" : "play-fill"}
              />
              {isPlaying ? "Stop and save" : "Start practice"}
            </SlButton>

            <LyricsPanel
              songId={currentSong.id}
              currentLyrics={currentSong.lyrics}
            />
          </div>

          <style>{styles}</style>
        </div>
      ) : (
        <div className="tracker-container">
          <p className="tracker-subtitle">No songs selected for practice.</p>
          <Link to="/">
            <SlButton
              variant="default"
              onClick={() => setActiveSongId(null)}
              style={{ marginTop: "1rem" }}
            >
              Go back to repertoire
            </SlButton>
          </Link>
          <style>{styles}</style>
        </div>
      )}
    </>
  );
}

const styles = `
  .tracker-container {
    position: relative;
    max-width: 540px;
    margin: 2rem auto;
    padding: 3rem 2rem 2.5rem 2rem;
    background-color: var(--sl-panel-background-color);
    border-radius: 12px;
    border: 1px solid var(--sl-color-neutral-200);
    box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.08);
    font-family: var(--sl-font-sans);
    text-align: center;
  }

  .back-button {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: var(--sl-color-neutral-500);
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .back-button:hover:not(:disabled) {
    color: var(--sl-color-neutral-900);
  }

  .back-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tracker-header {
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .live-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: var(--sl-color-neutral-500);
  }

  .dot {
    width: 6px;
    height: 6px;
    background-color: var(--sl-color-neutral-400);
    border-radius: 50%;
  }

  .dot.pulse {
    background-color: var(--sl-color-danger-600);
    animation: blink 1.2s infinite ease-in-out;
  }

  @keyframes blink {
    0% { opacity: 0.4; }
    50% { opacity: 1; }
    100% { opacity: 0.4; }
  }

  .tracker-title {
    margin: 0.25rem 0;
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--sl-color-neutral-900);
    letter-spacing: -0.02em;
  }

  .meta-badges {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .tracker-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .time-display {
    font-size: 4rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: var(--sl-color-neutral-300);
    transition: color 0.3s ease;
    letter-spacing: 0.02em;
  }

  .time-display.active {
    color: var(--sl-color-success-600);
  }

  .control-button {
    width: 220px;
  }

  .tracker-subtitle {
    font-size: 1rem;
    color: var(--sl-color-neutral-500);
    margin: 0;
  }
`;
