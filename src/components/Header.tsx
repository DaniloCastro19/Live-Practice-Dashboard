import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import SlButton from '@shoelace-style/shoelace/dist/react/button';

import "@shoelace-style/shoelace/dist/components/button/button.js";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <SlIcon name="music-note-list" style={styles.icon}></SlIcon>
        <div>
          <h1 style={styles.title}>Live Practice Board</h1>
          <span style={styles.subtitle}>Band Sessions</span>
        </div>
      </div>

      <div style={styles.actions}>
        <SlButton variant="primary" size="small" pill>
          <SlIcon slot="prefix" name="play-circle-fill"></SlIcon>
          Quick Session
        </SlButton>
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.5rem",
    backgroundColor: "var(--sl-panel-background-color)",
    borderBottom: "1px solid var(--sl-color-neutral-200)",
    boxShadow: "var(--sl-shadow-x-small)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  icon: {
    fontSize: "2rem",
    color: "var(--sl-color-primary-600)",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--sl-color-neutral-900)",
  },
  subtitle: {
    fontSize: "0.75rem",
    color: "var(--sl-color-neutral-500)",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
  },
};
