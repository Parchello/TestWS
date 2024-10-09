import {IMAGES, POSITIONS, TEXTS, WIDTHS} from '../../constants/introDialog.js';

import { useState } from "react";
import { BackgroundContainer, Button, SpeechBox } from "./IntroPage.styled.jsx";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {


	const [step, setStep] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	const navigate = useNavigate();

	const handleNext = () => {
		setIsVisible(false);
		setTimeout(() => {
			if (step < IMAGES.length - 1) {
				setStep(step + 1);
			}
			setIsVisible(true);
		}, 600);
	};

	return (
		<BackgroundContainer $background={IMAGES[step]} $isVisible={isVisible}>
			<SpeechBox
				$top={POSITIONS[step].top}
				$left={POSITIONS[step].left}
				$width={WIDTHS[step]}
			>
				<p>{TEXTS[step]}</p>
			</SpeechBox>
				{step < IMAGES.length - 1 ? (
				<Button onClick={handleNext}>Next</Button>
			) : (
				<Button onClick={() => navigate("/start")}>Wake up</Button>
			)}
		</BackgroundContainer>
	);
};

export default IntroPage;
