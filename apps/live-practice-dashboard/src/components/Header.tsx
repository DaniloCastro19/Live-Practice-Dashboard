import { SlIcon, SlIconButton } from "@shoelace-style/shoelace/dist/react";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("sl-theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("sl-theme-dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
        <SlIconButton
          name={isDark ? "sun-fill" : "moon-fill"}
          label="Change Session Theme"
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
        />
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

  .theme-toggle {
    font-size: 1.25rem;
    color: var(--sl-color-neutral-600);
    transition: transform 0.2s ease;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
  }
`;
