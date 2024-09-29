import {Route, Routes} from "react-router-dom";
import StartPage from "./Pages/StartPage.jsx";
import VillagePage from "./Pages/VillagePage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route element={<Layout/>}>
				<Route path="/start" element={<StartPage/>}/>
				<Route path="/village" element={<VillagePage/>}/>
			</Route>
		</Routes>
	);
}

export default App;
