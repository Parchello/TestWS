import {useSelector} from "react-redux";



const Enemy = () => {
  const {enemyInfo} = useSelector((state) => state.enemy);
    return (
        <div className="enemy">
            <h2>Enemy: {enemyInfo[0].name}</h2>
            <p>Health: {enemyInfo[0].health}</p>
            <p>Attack: {enemyInfo[0].attack}</p>
        </div>
    );
};

export default Enemy;
