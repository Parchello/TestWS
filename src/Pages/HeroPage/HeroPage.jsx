import {
	HeroContainer,
	HeroContentWrapper,
	HeroContentContainer,
	HeroImage,
	SlotContainer,
	ElementsContainer, IconWrapper, StyledSlot,
} from "./HeroPage.styled.jsx";
import HeroImg from "../../assets/HeroPageImg.png";

import { GiWhirlwind } from "react-icons/gi";
import { FaFire } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { GiHighGrass } from "react-icons/gi";
import {useState} from "react";

const HeroPage = () => {
	const [isElement, setIsElement] = useState(true);

	const slots = Array(12).fill(0);

	return (
		<HeroContainer>
			<HeroContentWrapper>
				{/* Контейнер для картинки героя та елементів */}
				<HeroContentContainer>
					<HeroImage src={HeroImg} alt="Hero" />
					<ElementsContainer>
						<IconWrapper color={"#00FFFF"}><GiWhirlwind title={"Wind"} /></IconWrapper>
						<IconWrapper color={"#FF4500"}><FaFire title={"Fire"} /></IconWrapper>
						<IconWrapper color={"#FFD700"}><FaKey title={"Key"} /></IconWrapper>
						<IconWrapper color={"#1E90FF"}><IoWaterSharp title={"Water"} /></IconWrapper>
						<IconWrapper color={"#32CD32"}><GiHighGrass title={"Grass"} /></IconWrapper>
					</ElementsContainer>
				</HeroContentContainer>

				{/* Контейнер для слотів */}
				<SlotContainer>
					{slots.map((_, index) => (
						<StyledSlot key={index}>
							{index === 0 && isElement && <GiWhirlwind/>}
						</StyledSlot>

					))}
				</SlotContainer>
			</HeroContentWrapper>
		</HeroContainer>
	);
};

export default HeroPage;
