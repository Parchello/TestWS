
import { useSelector} from "react-redux";


const Player = () => {
 const {playerInfo} = useSelector((state) => state.hero);



    return (
        <div className="player">
            <h2>Player: {playerInfo.name}</h2>
            <p>Health: {playerInfo.health}</p>
            <p>Attack: {playerInfo.attack}</p>
            <p>Level: {playerInfo.level}</p>
        </div>
    );
};

export default Player;
