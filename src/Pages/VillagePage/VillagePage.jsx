import { useParams } from "react-router-dom";

import Village1_5 from "../../components/Village/Village1_5";
import Village2_9 from "../../components/Village/Village2_9";

const VillagePage = () => {
  const { id } = useParams(); // Отримуємо ID села з URL

  // Перевіряємо, яке село відкрите, і підключаємо відповідний компонент
  const renderVillageContent = () => {
    switch (id) {
      case "1-5":
        return <Village1_5 />;
      case "2-9":
        return <Village2_9 />;
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
