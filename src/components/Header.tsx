import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <SlIcon name="music-note-list" className="icon"></SlIcon>
          </Link>
          <div>
            <h1 className="title">Live Practice Board</h1>
            <span className="subtitle">Band Sessions</span>
          </div>
        </div>
      </header>

      <style>{css}</style>
    </>
  );
}

const css = `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--sl-panel-background-color);
    border-bottom: 1px solid var(--sl-color-neutral-200);
    box-shadow: var(--sl-shadow-x-small);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .icon {
    font-size: 2rem;
    color: var(--sl-color-primary-600);
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--sl-color-neutral-900);
  }

  .subtitle {
    font-size: 0.75rem;
    color: var(--sl-color-neutral-500);
  }
`;
