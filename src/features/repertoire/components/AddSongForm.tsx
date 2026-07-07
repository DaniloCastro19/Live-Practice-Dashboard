import React, { useState } from "react"; // 1. Importamos useState
import { useRepertoireStore } from "../../../core/store/useRepertoireStore";
import {
  SlButton,
  SlInput,
  SlOption,
  SlSelect,
  SlSwitch,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import { majorKeys } from "../../../core/models/keys";
import { useNavigate } from "react-router-dom";

export default function AddSongForm() {
  const addSong = useRepertoireStore((state) => state.addSong);
  const navigate = useNavigate();

  const [isCover, setIsCover] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const baseKey = formData.get("key") as string;
    const isMinor = formData.get("isMinor") === "on";
    const finalKey = isMinor ? `${baseKey}m` : baseKey;

    const newSong = {
      id: crypto.randomUUID(),
      title: formData.get("title") as string,
      key: finalKey,
      lyrics: formData.get("lyrics") as string,
      isCover: isCover,
      author: isCover ? (formData.get("author") as string) : "(Own)",
      secondsPracticed: 0,
    };

    addSong(newSong);

    e.currentTarget.reset();
    setIsCover(false);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Add to repertoire</h2>
        <p className="subtitle">
          Enter the details of the new piece to practice.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <SlInput
          name="title"
          label="Song title"
          placeholder="Ej. Little Wing"
          required
        />

        <div className="rowGroup">
          <SlSelect
            name="key"
            label="Key"
            placeholder="Pick the key"
            required
            className="flex1"
          >
            {majorKeys.map((key) => (
              <SlOption key={key} value={key}>
                {key}
              </SlOption>
            ))}
          </SlSelect>
          <SlSwitch name="isMinor" className="switchModifier">
            Is minor (m)
          </SlSwitch>
        </div>

        <SlTextarea
          name="lyrics"
          label="Lyrics / Chords / Structure"
          placeholder="Write the lyrics, chords, and structure of the song here..."
          rows={4}
        ></SlTextarea>

        <div className="footerOptions">
          <div className="rowGroup">
            <SlSwitch
              name="isCover"
              className="switchModifier"
              checked={isCover}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSlChange={(e: any) => setIsCover(e.target.checked)}
            >
              Is a Cover
            </SlSwitch>

            <SlInput
              name="author"
              label="Author (if it's a cover)"
              placeholder="Ej. Jimi Hendrix"
              className="flex1"
              disabled={!isCover}
              required={isCover}
            ></SlInput>
          </div>
        </div>

        <SlButton type="submit" variant="primary" className="submitButton">
          Save song
        </SlButton>
      </form>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  .container {
    max-width: 480px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid var(--sl-color-neutral-200);
    box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.08);
    font-family: var(--sl-font-sans);
  }
  .header { margin-bottom: 2rem; }
  .title { margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 600; color: var(--sl-color-neutral-900); letter-spacing: -0.02em; }
  .subtitle { margin: 0; font-size: 0.875rem; color: var(--sl-color-neutral-500); }
  .form { display: flex; flex-direction: column; gap: 1.5rem; }
  .rowGroup { display: flex; gap: 1.5rem; align-items: flex-end; }
  .flex1 { flex: 1; }
  .switchModifier { padding-bottom: 0.4rem; }
  .footerOptions { padding-top: 1rem; border-top: 1px solid var(--sl-color-neutral-100); }
  .submitButton { margin-top: 0.5rem; width: 100%; }
`;
