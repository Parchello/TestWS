import { Village15Container } from "./Village1_5.styled";
import peasantVillage from "../../assets/bgvillagesImages/peasantVillage.jpg";

import { StyledLink, StyledNav } from "./Village.styled";

const Village1_5 = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Village15Container>
        <img src={peasantVillage} alt="Село 1-5" />
        <h1>Peasant Village</h1>
        <p>this is small village, where living good people</p>
        <p>they need your help</p>
        <StyledNav>
          <StyledLink to="/tavern15">Tavern</StyledLink>
          <StyledLink to="/market15">Market</StyledLink>
          <StyledLink to="/armory15">Armory</StyledLink>
        </StyledNav>
      </Village15Container>
    </div>
  );
};

export default Village1_5;
