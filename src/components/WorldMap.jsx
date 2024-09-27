import { useState } from 'react';
import { worldMap } from '../data/worldMap';

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
                            return (
                                <div
                                    key={colIndex}
                                    className={`map-cell ${isPlayerHere ? 'player' : ''}`}
                                >
                                    {isPlayerHere ? 'P' : cell}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="controls">
                <button onClick={() => movePlayer('up')}>Вверх</button>
                <button onClick={() => movePlayer('down')}>Down</button>
                <button onClick={() => movePlayer('left')}>Left</button>
                <button onClick={() => movePlayer('right')}>Right</button>
            </div>
        </div>
    );
};

export default WorldMap;
