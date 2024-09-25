import  { useState } from 'react';
import Player from './components/Player';
import Enemy from './components/Enemy';
import Battle from './components/Battle';
import { playerData, enemiesData } from './data/characters'; // Імпортуємо дані

function App() {
    const [player, setPlayer] = useState(playerData);  // Використовуємо імпортовані дані гравця
    const [enemy, setEnemy] = useState(enemiesData[0]);  // Вибираємо першого ворога

    return (
        <div className="App">
            <h1>Text RPG Game</h1>
            <div className="game-area">
                <Player player={player} />
                <Enemy enemy={enemy} />
            </div>
            <Battle player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy} />
        </div>
    );
}

export default App;
