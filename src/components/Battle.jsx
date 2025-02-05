import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroHealth, heroLevel } from "../redux/slices/HeroSlice.js";
import { enemyHealth } from "../redux/slices/EnemySlice.js";

const Battle = () => {
  const dispatch = useDispatch();

  const playerInfo = useSelector((state) => state.hero);
  const enemyInfo = useSelector((state) => state.enemy);

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  if (!enemyInfo || !playerInfo) {
    return <p>Loading...</p>;
  }

  const attackEnemy = () => {
    if (gameOver) return;

    const newEnemyHealth = enemyInfo.health - playerInfo.attack;
    dispatch(enemyHealth(newEnemyHealth));

    if (newEnemyHealth <= 0) {
      setGameOver(true);
      setWinner("Player");
      dispatch(heroLevel(playerInfo.level + 1));
      return;
    }

    setTimeout(() => {
      attackPlayer(); // Ворог атакує гравця після удару
    }, 500);
  };

  const attackPlayer = () => {
    if (gameOver) return;

    const newPlayerHealth = playerInfo.health - enemyInfo.attack;
    dispatch(heroHealth(newPlayerHealth));

    if (newPlayerHealth <= 0) {
      setGameOver(true);
      setWinner("Enemy");
    }
  };

  return <div className="battle">{gameOver ? <h2>{winner} Wins!</h2> : <button onClick={attackEnemy}>Attack Enemy</button>}</div>;
};

export default Battle;
