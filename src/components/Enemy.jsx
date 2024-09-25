import React from 'react';

const Enemy = ({ enemy }) => {
    return (
        <div className="enemy">
            <h2>Enemy: {enemy.name}</h2>
            <p>Health: {enemy.health}</p>
            <p>Attack: {enemy.attack}</p>
        </div>
    );
};

export default Enemy;
