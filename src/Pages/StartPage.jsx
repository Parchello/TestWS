import {useState} from 'react';
import Battle from '../components/Battle';
import WorldMap from '../components/WorldMap';
import {playerData, enemiesData} from '../data/characters';
// import Hero from "../components/Hero/Hero.jsx";

const StartPage = () => {
    const [player, setPlayer] = useState(playerData);
    const [enemy, setEnemy] = useState(enemiesData[2]);
    return (
        <div style={{marginTop: '120px'}}>
            <div className="App">
                <Battle player={player} setPlayer={setPlayer} enemy={enemy} setEnemy={setEnemy}/>
                {/*<Hero/>*/}
                <WorldMap/>
            </div>
        </div>
    );
};

export default StartPage;