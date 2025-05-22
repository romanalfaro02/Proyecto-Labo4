import "../CSS/VideoModal.css";
function VideoModal ({ song, isOpen, onClose }) {
  if (!isOpen || !song) return null;

  return (  
      
      
      <div className="modal">
        <iframe
        className="iframe-1"
        src={`https://www.youtube.com/embed/${song.url.split("v=")[1] || song.url}`}
        title={song.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button className="button-modal" onClick={onClose}>X</button>
      </div>
    
  );
}

export default VideoModal;