import heroAvatar from "../../assets/hero-avatar.png";
import goblinAvatar from "../../assets/goblin-avatar.jpg";
import castleIcon from "../../assets/castle-icon.png";
import mapIcon from "../../assets/map-icon.png";
import { AttributesItem, AttributesList, AvatarIcon, CastleIcon, HeaderContainer, UnitBox } from "./Header.styled.jsx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import HealthBar from "../HealthBar/HealthBar.jsx";

const Header = () => {
  const location = useLocation();

  const isCastlePage = location.pathname === "/castle";

  const playerInfo = useSelector((state) => (state.hero.players.length > 0 ? state.hero.players[0] : null));
  const enemyInfo = useSelector((state) => state.enemy.enemyInfo);

  return (
    <HeaderContainer>
      <UnitBox>
        <Link to={"/hero"}>
          <AvatarIcon src={heroAvatar} alt="Avatar" />
        </Link>
        {playerInfo && (
          <AttributesList>
            <AttributesItem>Name: {playerInfo.name}</AttributesItem>
            <AttributesItem>Health: {playerInfo.health}</AttributesItem>
            <HealthBar currentHealth={playerInfo.health} maxHealth={playerInfo.maxHealth} />
            <AttributesItem>Attack: {playerInfo.attack}</AttributesItem>
          </AttributesList>
        )}
      </UnitBox>

      <Link to={isCastlePage ? "/start" : "/castle"}>
        <div>
          <CastleIcon style={{ width: "75px" }} src={isCastlePage ? mapIcon : castleIcon} alt={isCastlePage ? "Map" : "Castle"} />
        </div>
      </Link>

      <UnitBox>
        <AvatarIcon src={goblinAvatar} alt="Avatar" />
        <AttributesList>
          <AttributesItem>Name: {enemyInfo.name}</AttributesItem>
          <AttributesItem>Health: {enemyInfo.health}</AttributesItem>
          <AttributesItem>Attack: {enemyInfo.attack}</AttributesItem>
        </AttributesList>
      </UnitBox>
    </HeaderContainer>
  );
};

export default Header;
