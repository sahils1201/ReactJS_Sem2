import React from 'react';
import Track from './Track';

const TrackList = ({ tracks, onSelect }) => {
  return (
    <div className="track-list">
      {tracks.map(track => (
        <Track key={track.id} track={track} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TrackList;
