import { Village15Container } from "./Village1_5.styled";
import windVillage from "../../assets/bgvillagesImages/windVillage.jpg";

import { StyledLink, StyledNav } from "./Village.styled";

const Village3_5 = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Village15Container>
        <img src={windVillage} alt="village 1-5" />
        <h1>Wind Village</h1>
        <p>this is large village, where living good people</p>
        <p>they need your help</p>
        <StyledNav>
          <StyledLink to="/tavern35">Tavern</StyledLink>
          <StyledLink to="/market35">Market</StyledLink>
          <StyledLink to="/armory35">Armory</StyledLink>
        </StyledNav>
      </Village15Container>
    </div>
  );
};

export default Village3_5;
