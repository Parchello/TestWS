import { useState } from "react";
import { GameContainer, InputField, StartButton, Form } from "./NewGamePage.styled.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createNewPlayer} from "../../redux/slices/HeroSlice.js";

const NewGamePage = () => {
	const [playerName, setPlayerName] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPlayer = {
			name: playerName,
			health: 100,
			attack: 10,
			defense: 5,
			inventory: [],
			level: 1,
			experience: 0,
		};

		dispatch(createNewPlayer(newPlayer));

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
