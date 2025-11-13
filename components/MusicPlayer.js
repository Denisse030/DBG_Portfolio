import { useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error('Audio play failed:', error);
      });
  };

  const togglePause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="music-player">
      <h3>🎶 Lo-fi Chill    <audio ref={audioRef} src="/music/lofi.mp3" preload="auto" />
      <button onClick={isPlaying ? togglePause : togglePlay} className="music-btn">
        {isPlaying ? '⏸ Pause' : '▶️ Play'}
      </button></h3>   
    </div>
  );
}
