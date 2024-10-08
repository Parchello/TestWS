import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { worldMap } from '../data/worldMap';

// Імпорт зображень
import forestImg from '../assets/forest.png';
import mountainImg from '../assets/mountain.png';
import grasslandImg from '../assets/grassland.png';
import villageImg from '../assets/village.png';
import startImg from '../assets/start.png';

const getTileImage = (tile) => {
    switch (tile) {
        case 'F':
            return forestImg; // Ліс
        case 'M':
            return mountainImg; // Гори
        case 'G':
            return grasslandImg; // Поле
        case 'V':
            return villageImg; // Село
        case 'S':
            return startImg; // Стартова точка
        default:
            return null;
    }
};

const WorldMap = () => {
    const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });

    const movePlayer = (direction) => {
        setPlayerPosition((prevPosition) => {
            let { row, col } = prevPosition;
            if (direction === 'up' && row > 0) row--;
            if (direction === 'down' && row < worldMap.length - 1) row++;
            if (direction === 'left' && col > 0) col--;
            if (direction === 'right' && col < worldMap[0].length - 1) col++;
            return { row, col };
        });
    };

    return (
        <div>
            <h2>World Map</h2>
            <div className="map">
                {worldMap.map((row, rowIndex) => (
                    <div key={rowIndex} className="map-row">
                        {row.map((cell, colIndex) => {
                            const isPlayerHere = playerPosition.row === rowIndex && playerPosition.col === colIndex;
                            const tileType = cell; // Тип тайлу

                            return (
                                <div key={colIndex} className={`map-cell ${isPlayerHere ? 'player' : ''}`}>
                                    {isPlayerHere ? (
                                        <span role="img" aria-label="player">🧍</span> // Іконка гравця
                                    ) : (
                                        <Link to={`/location/${tileType}`}>
                                            <img src={getTileImage(cell)} alt={cell} className="tile-image" />
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={() => movePlayer('up')}>Up</button>
                <button onClick={() => movePlayer('down')}>Down</button>
                <button onClick={() => movePlayer('left')}>Left</button>
                <button onClick={() => movePlayer('right')}>Right</button>
            </div>
        </div>
    );
};

export default WorldMap;
