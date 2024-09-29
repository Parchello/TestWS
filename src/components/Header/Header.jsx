import heroAvatar from "../../assets/hero-avatar.jpg";
import goblinAvatar from "../../assets/goblin-avatar.jpg";
import {AttributesItem, AttributesList, AvatarIcon, HeaderContainer, UnitBox} from "./Header.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPlayerParams} from "../../redux/slices/HeroSlice.js";
import {getEnemyParams} from "../../redux/slices/EnemySlice.js";


const Header = () => {
	const dispatch = useDispatch();
	const playerInfo = useSelector((state) => state.hero.playerInfo);
	const enemyInfo = useSelector((state) => state.enemy.enemyInfo);

	useEffect(() => {
		dispatch(getPlayerParams())
	},[dispatch])

	useEffect(() => {
		dispatch(getEnemyParams())
	},[dispatch])
	return (
		<HeaderContainer>
			<UnitBox><AvatarIcon src={heroAvatar} alt="Avatar"/>
				<AttributesList>
					<AttributesItem>Health: {playerInfo.health}</AttributesItem>
					<AttributesItem>Attack: {playerInfo.attack}</AttributesItem>
					<AttributesItem>Level: {playerInfo.level}</AttributesItem>
				</AttributesList></UnitBox>

			<UnitBox><AvatarIcon src={goblinAvatar} alt="Avatar"/>
				<AttributesList>
					<AttributesItem>Health: {enemyInfo.health}</AttributesItem>
					<AttributesItem>Attack: {enemyInfo.attack}</AttributesItem>
					<AttributesItem>Level: {enemyInfo.level || 1}</AttributesItem>
				</AttributesList></UnitBox>
		</HeaderContainer>
	);
};

export default Header;