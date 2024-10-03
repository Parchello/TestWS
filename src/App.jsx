import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import StartPage from "./Pages/StartPage/StartPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import HomeLayout from "./components/HomeLayout/HomeLayout.jsx";
import CastlePage from "./Pages/CastlePage/CastlePage.jsx";
import WelcomePage from "./Pages/WelcomePage/WelcomePage.jsx";
import OptionsPage from "./Pages/OptionsPage/OptionsPage.jsx";
import NewGamePage from "./Pages/NewGamePage/NewGamePage.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route element={<Layout />}>
				<Route path="/start" element={<StartPage />} />
				<Route path="/castle" element={<CastlePage />} />
			</Route>
			<Route element={<HomeLayout />}>
				<Route path="/home" element={<HomePage />} />
				<Route path="/newgame" element={<NewGamePage />} />
				<Route path="/options" element={<OptionsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
