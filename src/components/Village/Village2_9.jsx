import { Village15Container } from "./Village1_5.styled";
import knightVillage from "../../assets/bgvillagesImages/knightVillage.jpg";

import { StyledLink, StyledNav } from "./Village.styled";

const Village2_9 = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Village15Container>
        <img src={knightVillage} alt="village 1-5" />
        <h1>Knight Village</h1>
        <p>this is large village, where living good people</p>
        <p>they need your help</p>
        <StyledNav>
          <StyledLink to="/tavern29">Tavern</StyledLink>
          <StyledLink to="/market29">Market</StyledLink>
          <StyledLink to="/armory29">Armory</StyledLink>
        </StyledNav>
      </Village15Container>
    </div>
  );
};

export default Village2_9;
