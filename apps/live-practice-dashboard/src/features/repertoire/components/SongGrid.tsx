import { useMemo, useState } from "react";
import SongCard from "./SongCard";
import AddFloatingButton from "./AddFloatingButton";
import { SlPagination } from "@/../../../../libraries/shoelace/dist/react";
import { mockSongs } from "../../../core/utils/mock/songs";

export default function SongGrid() {
  const SONGS_PER_PAGE = 15;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockSongs.length / SONGS_PER_PAGE);

  const visibleSongs = useMemo(() => {
    const startIndex = (currentPage - 1) * SONGS_PER_PAGE;
    return mockSongs.slice(startIndex, startIndex + SONGS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="songs-container">
      <div className="grid">
        {visibleSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
        <div className="floating-btn-container">
          <AddFloatingButton />
        </div>
      </div>

      <div className="pagination-container">
        <SlPagination
          page={currentPage}
          total={totalPages}
          onSlChange={(event) => setCurrentPage(event.detail.page)}
        />
      </div>

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  .songs-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .pagination-container {
    flex: 1;
  }

  .floating-btn-container {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }


  @media (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
