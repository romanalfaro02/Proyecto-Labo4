const SongItem = ({ song, onPlay, onDelete }) => {
  return (
    <ul className="song-list">
      
      <li className="song-item">
        <span className="span-1">{song.name}</span>
        <button className="button-3"  onClick={() => onPlay(song)}>Play</button>
        <button className="button-2" onClick={() => onDelete(song)}>Eliminar</button>
        <span className="span-2">Reproducciones: {song.plays}</span>
      </li>
        
      
      
      
    </ul>
  );
};

export default SongItem;
