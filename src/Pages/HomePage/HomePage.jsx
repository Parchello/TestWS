
import {HomePageContainer, StartButton} from "./HomePage.styled.jsx";


const HomePage = () => {
	return (
		<HomePageContainer>
			<StartButton to="/newgame">NEW GAME</StartButton>
			<StartButton to="/start">CONTINUE</StartButton>
			<StartButton to="/options">OPTIONS</StartButton>
			<StartButton to="/">QUIT</StartButton>
		</HomePageContainer>
	);
};

export default HomePage;