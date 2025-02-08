import { useSelector } from "react-redux";
import { HealthBarContainer, HealthBarFill, HealthBarText, HealthBarWrapper } from "./HealthBar.styled.jsx";

const HealthBar = () => {
  const playerInfo = useSelector((state) => (state.hero.players.length > 0 ? state.hero.players[0] : null));

  if (!playerInfo) return null;

  const healthPercentage = (playerInfo.health / playerInfo.maxHealth) * 100;

  return (
    <HealthBarWrapper>
      <HealthBarContainer>
        <HealthBarFill percentage={healthPercentage} style={{ width: `${healthPercentage}%` }} />
        <HealthBarText>
          {playerInfo.health}/{playerInfo.maxHealth}
        </HealthBarText>
      </HealthBarContainer>
    </HealthBarWrapper>
  );
};

export default HealthBar;
