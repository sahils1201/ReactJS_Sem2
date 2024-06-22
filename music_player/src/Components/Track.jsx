import React from 'react';

const Track = ({ track, onSelect }) => {
  return (
    <div className="track" onClick={() => onSelect(track)}>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </div>
  );
};

export default Track;
