import heroAvatar from "../../assets/hero-avatar.jpg";
import {AttributesItem, AttributesList, AvatarIcon, HeaderContainer} from "./Header.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPlayerParams} from "../../redux/slices/HeroSlice.js";


const Header = () => {
	const dispatch = useDispatch();
	const {health, attack, level} = useSelector((state) => state.hero.playerInfo);

	useEffect(() => {
		dispatch(getPlayerParams())
	},[dispatch])
	return (
		<HeaderContainer>
			<AvatarIcon src={heroAvatar} alt="Avatar" />
			<AttributesList>
				<AttributesItem>Health:	{health}</AttributesItem>
				<AttributesItem>Attack: {attack}</AttributesItem>
				<AttributesItem>Level: {level}</AttributesItem>
			</AttributesList>
		</HeaderContainer>
	);
};

export default Header;