import heroAvatar from "../../assets/hero-avatar.png";
import goblinAvatar from "../../assets/goblin-avatar.jpg";
import castleIcon from "../../assets/castle-icon.png";
import mapIcon from "../../assets/map-icon.png";
import { AttributesItem, AttributesList, AvatarIcon, CastleIcon, HeaderContainer, UnitBox } from "./Header.styled.jsx";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getPlayerParams } from "../../redux/slices/HeroSlice.js";
// import { getEnemyParams } from "../../redux/slices/EnemySlice.js";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isCastlePage = location.pathname === "/castle";

  // const dispatch = useDispatch();
  const playerInfo = useSelector((state) => (state.hero.players.length > 0 ? state.hero.players[0] : null));
  const enemyInfo = useSelector((state) => state.enemy.enemyInfo);

  // useEffect(() => {
  //   dispatch(getPlayerParams());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getEnemyParams());
  // }, [dispatch]);
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
