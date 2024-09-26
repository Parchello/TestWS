import React, { useState } from 'react';

const Battle = ({ player, setPlayer, enemy, setEnemy }) => {
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    const attackEnemy = () => {
        if (gameOver) return;

        setEnemy(prevEnemy => {
            const newHealth = prevEnemy.health - player.attack;
            if (newHealth <= 0) {
                setGameOver(true);
                setWinner('Player');
                // Нараховуємо досвід гравцеві
                setPlayer(prevPlayer => ({
                    ...prevPlayer,
                    experience: prevPlayer.experience + prevEnemy.experienceReward,
                }));
            }
            return { ...prevEnemy, health: newHealth };
        });

        if (!gameOver && enemy.health - player.attack > 0) {
            attackPlayer();
        }
    };

    const attackPlayer = () => {
        setPlayer(prevPlayer => {
            const newHealth = prevPlayer.health - enemy.attack;
            if (newHealth <= 0) {
                setGameOver(true);
                setWinner('Enemy');
            }
            return { ...prevPlayer, health: newHealth };
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
