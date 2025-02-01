import { Village15Container } from "./Village1_5.styled";
import peasantVillage from "../../assets/bgvillagesImages/peasantVillage.jpg";

const Village1_5 = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Village15Container>
        <img src={peasantVillage} alt="Село 1-5" />
        <h1>Peasant Village</h1>
        <p>Це маленьке село, розташоване на пагорбах.</p>
        <p>
          Тут живуть доброзичливі жителі, які потребують допомоги мандрівників.
        </p>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </Village15Container>
    </div>
  );
};

export default Village1_5;
