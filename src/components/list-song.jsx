import SongItem from './item-song';

function SongList  ({ songs, onPlay, onDelete }) {
  return (
    <div className="song-container">
      <ul className="task-list">
        {songs.map((song, index) => (
          <SongItem
            key={index}
            song={song}
            onPlay={onPlay}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongList;

