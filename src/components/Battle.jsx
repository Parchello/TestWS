import React from 'react';

const Battle = ({ player, setPlayer, enemy, setEnemy }) => {

    const attackEnemy = () => {
        setEnemy(prevEnemy => ({
            ...prevEnemy,
            health: prevEnemy.health - player.attack
        }));

        if (enemy.health - player.attack > 0) {
            attackPlayer();
        }
    };

    const attackPlayer = () => {
        setPlayer(prevPlayer => ({
            ...prevPlayer,
            health: prevPlayer.health - enemy.attack
        }));
    };

    return (
        <div className="battle">
            <button onClick={attackEnemy}>Attack Enemy</button>
        </div>
    );
};

export default Battle;
