import { useParams } from "react-router-dom";

import Village1_5 from "../../components/Village/Village1_5";
import Village2_9 from "../../components/Village/Village2_9";
import WindVillage from "../../components/Village/WindVillage";
import EvilVillage from "../../components/Village/EvilVillage";
import FireVillage from "../../components/Village/fireVillage";

const VillagePage = () => {
  const { id } = useParams(); // Отримуємо ID села з URL

  const renderVillageContent = () => {
    switch (id) {
      case "1-5":
        return <Village1_5 />;
      case "2-9":
        return <Village2_9 />;
      case "2-19":
        return <WindVillage />;
      case "9-16":
        return <EvilVillage />;
      case "8-2":
        return <FireVillage />;
      default:
        return (
          <div>
            <h1>Село {id}</h1>
            <p>Ласкаво просимо до села з ID {id}!</p>
            <p>Поки що тут немає унікального контенту.</p>
          </div>
        );
    }
  };

  return <div>{renderVillageContent()}</div>;
};

export default VillagePage;
