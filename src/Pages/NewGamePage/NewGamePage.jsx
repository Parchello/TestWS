import { useState } from "react";
import { GameContainer, InputField, StartButton, Form } from "./NewGamePage.styled.jsx";
import {useNavigate} from "react-router-dom";

const NewGamePage = () => {
	const [playerName, setPlayerName] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/start");
		console.log(playerName);
	}

	const handleChangeValue = (e) => {
		setPlayerName(e.target.value);
	};

	return (
		<GameContainer>
			<h1>Enter Player Name</h1>
			<Form onSubmit={handleSubmit}>
				<InputField
					type="text"
					placeholder="Enter your name"
					value={playerName}
					onChange={handleChangeValue}
					required
				/>
				<StartButton type={"submit"}>Start</StartButton>
			</Form>
		</GameContainer>
	);
};

export default NewGamePage;
