import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { worldMap } from "../data/worldMap";
import { BtnContainer, MovingBtn } from "./WorldMap.styled";

// Імпорт зображень
import forestImg from "../assets/groundpixelMap/forest.png";
import mountainImg from "../assets/groundpixelMap/mountain.png";
import grasslandImg from "../assets/groundpixelMap/grassland.png";
import villageImg from "../assets/groundpixelMap/village.png";
import startImg from "../assets/groundpixelMap/start.png";
import waterImg from "../assets/groundpixelMap/mapWater.jpg";

const getTileImage = (tile) => {
  switch (tile) {
    case "F":
      return forestImg; // Ліс
    case "M":
      return mountainImg; // Гори
    case "G":
      return grasslandImg; // Поле
    case "V":
      return villageImg; // Село
    case "S":
      return startImg; // Стартова точка
    case "W":
      return waterImg; //вода
    default:
      return null;
  }
};

// РУХ ГРАВЦЯ

const WorldMap = () => {
  const [playerPosition, setPlayerPosition] = useState({ row: 1, col: 1 });

  const movePlayer = (direction) => {
    setPlayerPosition((prevPosition) => {
      let { row, col } = prevPosition;
      let newRow = row;
      let newCol = col;

      if (direction === "up" && row > 0) newRow--;
      if (direction === "down" && row < worldMap.length - 1) newRow++;
      if (direction === "left" && col > 0) newCol--;
      if (direction === "right" && col < worldMap[0].length - 1) newCol++;

      if (worldMap[newRow][newCol] !== "W" && worldMap[newRow][newCol] !== "M") {
        return { row: newRow, col: newCol };
      } else {
        return prevPosition;
      }
    });
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") movePlayer("up");
      if (event.key === "ArrowDown") movePlayer("down");
      if (event.key === "ArrowLeft") movePlayer("left");
      if (event.key === "ArrowRight") movePlayer("right");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h2>World Map</h2>

      <div className="map">
        {worldMap.map((row, rowIndex) => (
          <div key={rowIndex} className="map-row">
            {row.map((cell, colIndex) => {
              const isPlayerHere = playerPosition.row === rowIndex && playerPosition.col === colIndex;
              const tileType = cell; // Тип тайлу
              const uniqueId = `${rowIndex}-${colIndex}`;

              return (
                <div key={uniqueId} className={`map-cell ${isPlayerHere ? "player" : ""}`}>
                  {isPlayerHere ? (
                    <span role="img" aria-label="player">
                      🧍
                    </span> // Іконка гравця
                  ) : (
                    <Link to={tileType === "V" ? `/village/${uniqueId}` : `/location/${tileType}`}>
                      <img src={getTileImage(cell)} alt={cell} className="tile-image" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* <h3>{cell}</h3> */}
      <BtnContainer className="controls">
        <MovingBtn onClick={() => movePlayer("up")}>Up</MovingBtn>
        <MovingBtn onClick={() => movePlayer("left")}>Left</MovingBtn>
        <MovingBtn onClick={() => movePlayer("down")}>Down</MovingBtn>
        <MovingBtn onClick={() => movePlayer("right")}>Right</MovingBtn>
      </BtnContainer>
    </div>
  );
};

export default WorldMap;
