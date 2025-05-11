import { useState, useEffect } from "react";
import AddSongForm from "./components/add-song";
import SongList from "./components/list-song";
import VideoModal from "./components/video-modal";
import "./CSS/DeleteSong.css";
import "./CSS/AddSong.css";

const App = () => {
  const [songs, setSongs] = useState(() => {
    return JSON.parse(localStorage.getItem("songs")) || [];
  });
  const [selectedSong, setSelectedSong] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(savedSongs);
  }, []);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]); // Se ejecuta cada vez que 'songs' cambia

  const handleAddSong = (newSong) => {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  };

  const handlePlaySong = (song) => {
    const updatedSongs = songs.map((s) =>
      s.url === song.url ? { ...s, plays: s.plays + 1 } : s
    );
    setSongs(updatedSongs);
    localStorage.setItem("songs", JSON.stringify(updatedSongs));
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleSortSongs = () => {
    if (isSorted) {
      setSongs((prevSongs) => [...prevSongs].sort(() => Math.random() - 0.5));
    } else {
      setSongs((prevSongs) => [...prevSongs].sort((a, b) => b.plays - a.plays));
    
    }
    setIsSorted(!isSorted);
  };

  const handleDeleteSong = (songToDelete) => {
    const updatedSongs = songs.filter((song) => song.url !== songToDelete.url);
    setSongs(updatedSongs);
    localStorage.setItem("songs", JSON.stringify(updatedSongs));
  };

  const filteredSongs = songs.filter(song => song.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div className="app-container"> 
      
      {!modalOpen && (
        <>
          <h1 className="title">Reproductor de Youtube</h1>
          <AddSongForm onAddSong={handleAddSong} />        
          <div className="buscar-cancion">
            <input
             className="input-3"
             type="text"
             placeholder="Buscar canción"
             value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />         
          <button className="button-4" onClick={handleSortSongs}>
            {isSorted ? "Desordenar" : "Ordenar por reproducciones"}
          </button>
          </div>
          <SongList songs={filteredSongs} onPlay={handlePlaySong} onDelete={handleDeleteSong} /> 
                  
                           
        </>
      )}

      <VideoModal song={selectedSong} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
