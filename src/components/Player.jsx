
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPlayerParams} from "../redux/slices/HeroSlice.js";


const Player = () => {
    const dispatch = useDispatch();
 const {name, health, attack, level} = useSelector((state) => state.hero.playerInfo);

 useEffect(() => {
     dispatch(getPlayerParams())
 },[dispatch])


    return (
        <div className="player">
            <h2>Player: {name}</h2>
            <p>Health: {health}</p>
            <p>Attack: {attack}</p>
            <p>Level: {level}</p>
        </div>
    );
};

export default Player;
