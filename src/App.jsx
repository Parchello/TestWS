import React, { useState } from 'react';
import Player from './components/Player';
import Enemy from './components/Enemy';
import Battle from './components/Battle';
import WorldMap from './components/WorldMap';
import { playerData, enemiesData } from './data/characters';

function App() {
    const [player, setPlayer] = useState(playerData);
    const [enemy, setEnemy] = useState(enemiesData[0]);

    return (
        <div className="App">
            <h1>RPG Game</h1>
            <div className="game-area">
                <Player player={player} />
                <Enemy enemy={enemy} />
            </div>
            <Battle player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} />
            <WorldMap />
        </div>
    );
}

export default App;
