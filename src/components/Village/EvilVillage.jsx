import { Village15Container } from "./Village1_5.styled";
import evilVillage from "../../assets/bgvillagesImages/evilVillage.jpg";

import { StyledLink, StyledNav } from "./Village.styled";

const EvilVillage = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <Village15Container>
        <img src={evilVillage} alt="village 1-5" />
        <h1>Evil Village</h1>
        <p>
          this is large village, where living not realy good people, but maybe
          you will find some god stuff here
        </p>
        <p>they dont need your help, and they can help you find your end...</p>
        <StyledNav>
          <StyledLink to="/tavern35">Tavern</StyledLink>
          <StyledLink to="/market35">Market</StyledLink>
          <StyledLink to="/armory35">Armory</StyledLink>
        </StyledNav>
      </Village15Container>
    </div>
  );
};

export default EvilVillage;
