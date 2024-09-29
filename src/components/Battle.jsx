import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {heroHealth, heroLevel} from "../redux/slices/HeroSlice.js";


const Battle = ({ player, setPlayer, enemy, setEnemy }) => {
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const dispatch = useDispatch();


    const attackEnemy = () => {
        if (gameOver) return;

        setEnemy(prevEnemy => {
            const newHealth = prevEnemy.health - playerInfo.attack;
            if (newHealth <= 0) {
                setGameOver(true);
                setWinner('Player');
                const newLevel = playerInfo.level + 1;
                dispatch(heroLevel(newLevel))
                // setPlayer(prevPlayer => ({
                //     ...prevPlayer,
                //     experience: prevPlayer.experience + prevEnemy.experienceReward,
                // }));
            }
            return {...prevEnemy, health: newHealth};
        });

        if (!gameOver && enemy.health - playerInfo.attack > 0) {
            attackPlayer();
        }
    };

    const attackPlayer = () => {
        setPlayer(prevPlayer => {
            const newHealth = playerInfo.health - enemy.attack;
            dispatch(heroHealth(newHealth));

            if (newHealth <= 0) {
                setGameOver(true);
                setWinner('Enemy');
            }
            return {...prevPlayer, health: newHealth};
        });
    };

    return (
        <div className="battle">
            {gameOver ? (
                <h2>{winner} Wins!</h2>
            ) : (
                <button onClick={attackEnemy}>Attack Enemy</button>
            )}
        </div>
    );
};

export default Battle;
