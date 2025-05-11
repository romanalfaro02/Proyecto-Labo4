import { useState } from "react";

const AddSongForm = ({ onAddSong }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const isValidYouTubeUrl = (url) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url || !isValidYouTubeUrl(url)) {
      alert("Por favor, ingresa un nombre y una URL válida de YouTube.");
      return;
    }

    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    if (savedSongs.some((song) => song.url === url || song.name === name)) {
      alert("Esta canción ya ha sido agregada o el nombre ya está registrado.");
      return;
    }

    const newSong = { name, url, plays: 0 };
    localStorage.setItem("songs", JSON.stringify([...savedSongs, newSong]));
    onAddSong(newSong);
    setName("");
    setUrl("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <input className="input-1" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de la canción" required />
      <input className="input-2" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de YouTube" required />
      <button className="button-1" type="submit">Agregar</button>
      </div>
      
    </form>
  );
};

export default AddSongForm;