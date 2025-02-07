import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroHealth } from "../redux/slices/HeroSlice.js";
import { enemyHealth } from "../redux/slices/EnemySlice.js";

const Battle = () => {
  const dispatch = useDispatch();

  const playerInfo = useSelector((state) => state.hero.players[0]);
  const enemyInfo = useSelector((state) => state.enemy.enemyInfo);

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const attackEnemy = () => {
    if (gameOver) return;

    const newEnemyHealth = enemyInfo.health - playerInfo.attack + enemyInfo.defense;
    dispatch(enemyHealth(newEnemyHealth));

    if (newEnemyHealth <= 0) {
      setGameOver(true);
      setWinner("Player");
      return;
    }

    attackPlayer(); // Ворог атакує гравця після удару
  };

  const attackPlayer = () => {
    if (gameOver) return;

    const newPlayerHealth = playerInfo.health - enemyInfo.attack + playerInfo.defense;
    dispatch(heroHealth(newPlayerHealth));

    if (newPlayerHealth <= 0) {
      setGameOver(true);
      setWinner("Enemy");
    }
  };

  return <div className="battle">{gameOver ? <h2>{winner} Wins!</h2> : <button onClick={attackEnemy}>Attack Enemy</button>}</div>;
};

export default Battle;
