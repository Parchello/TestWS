import React from 'react';

const Player = ({ player }) => {
    return (
        <div className="player">
            <h2>Player: {player.name}</h2>
            <p>Health: {player.health}</p>
            <p>Attack: {player.attack}</p>
        </div>
    );
};

export default Player;
