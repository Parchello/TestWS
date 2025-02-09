import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { worldMap } from "../data/worldmap";
import { BtnContainer, MovingBtn } from "./WorldMap.styled";
import StartModal from "../components/StartModal/StartModal";
// Імпорт іконок селищь
import EvilVilImg from "../assets/villagesIconImage/evilVilIcon.jpg";
import settelmentVilIcon from "../assets/villagesIconImage/settelmentVilIcon.jpg";
import windVill from "../assets/villagesIconImage/wingVilIcon.jpg";
import fireVil from "../assets/villagesIconImage/fireVilIcon.jpg";
import forestVil from "../assets/villagesIconImage/forestVilIcon.jpg";

// Імпорт зображень
import forestImg from "../assets/groundpixelMap/forest.png";
import mountainImg from "../assets/groundpixelMap/mountain.png";
import grasslandImg from "../assets/groundpixelMap/grassland.png";
import villageImg from "../assets/groundpixelMap/village.png";
import startImg from "../assets/groundpixelMap/start.png";
import waterImg from "../assets/groundpixelMap/mapWater.jpg";
import dirt from "../assets/groundpixelMap/dirt.png";
import fire from "../assets/groundpixelMap/fire.png";

const getTileImage = (tile, uniqueId) => {
  if (tile === "V") {
    switch (uniqueId) {
      case "1-5":
        return settelmentVilIcon; // Different village image
      case "2-9":
        return forestVil;
      case "2-19":
        return windVill;
      case "9-16":
        return EvilVilImg;
      case "8-2":
        return fireVil;
      default:
        return villageImg; // Default village image
    }
  }

  switch (tile) {
    case "F":
      return forestImg; // Ліс
    case "M":
      return mountainImg; // Гори
    case "G":
      return grasslandImg; // Поле
    case "S":
      return startImg; // Стартова точка
    case "W":
      return waterImg; //вода
    case "DI":
      return dirt;
    case "FI":
      return fire;
    default:
      return null;
  }
};

// РУХ ГРАВЦЯ

const WorldMap = () => {
  const [playerPosition, setPlayerPosition] = useState({ row: 1, col: 1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstVisit");

    if (!isFirstVisit) {
      setIsModalOpen(true);
      localStorage.setItem("firstVisit", "true"); // Зберігаємо прапорець, що вікно вже показували
    }
  }, []);

  return (
    <div>
      <div>{isModalOpen && <StartModal onClose={() => setIsModalOpen(false)} />}</div>
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
                      <img src={getTileImage(cell, uniqueId)} alt={cell} className="tile-image" />
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
