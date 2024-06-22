import React, { useState, useRef } from 'react';
import tracks from '../data/Tracks';
import TrackList from './TrackList';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (direction) => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % tracks.length;
    } else {
      newIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    }
    setCurrentTrack(tracks[newIndex]);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentTrack.src} onEnded={() => handleSkip('next')} />
      <div className="controls">
        <button onClick={() => handleSkip('prev')}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={() => handleSkip('next')}>Next</button>
      </div>
      <TrackList tracks={tracks} onSelect={handleSelectTrack} />
    </div>
  );
};

export default MusicPlayer;
