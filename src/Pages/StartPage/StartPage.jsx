import Battle from "../../components/Battle.jsx";
import WorldMap from "../../components/WorldMap.jsx";
// import { playerData, enemiesData } from "../../data/characters.js";
// import Hero from "../components/Hero/Hero.jsx";

const StartPage = () => {
  // const [player, setPlayer] = useState(playerData);
  // const [enemy, setEnemy] = useState(enemiesData[2]);
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="App">
        <Battle />
        {/*<Hero/>*/}
        <WorldMap />
      </div>
    </div>
  );
};

export default StartPage;
