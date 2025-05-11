const DeleteSongButton = ({ song, onDelete }) => {
    const handleDelete = () => {
      if (window.confirm(`¿Seguro que quieres eliminar "${song.name}"?`)) {
        onDelete(song);
      }
    };
  
    return <button className="button-2" onClick={handleDelete}>Eliminar</button>;
  };
  
  export default DeleteSongButton;