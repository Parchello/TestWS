import { useSelector } from "react-redux";
import { HealthBarContainer, HealthBarFill, HealthBarText, HealthBarWrapper } from "./HealthBar.styled.jsx";

// eslint-disable-next-line react/prop-types
const HealthBar = () => {
  const playerInfo = useSelector((state) => (state.hero.players.length > 0 ? state.hero.players[0] : null));

  return (
    <HealthBarWrapper>
      <HealthBarContainer>
        <HealthBarFill currentHealth={playerInfo.health} maxHealth={playerInfo.maxHealth} />
        <HealthBarText>
          {playerInfo.health}/{playerInfo.maxHealth}
        </HealthBarText>
      </HealthBarContainer>
    </HealthBarWrapper>
  );
};

export default HealthBar;
