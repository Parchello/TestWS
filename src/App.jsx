
import {Route, Routes} from "react-router-dom";
import StartPage from "./Pages/StartPage.jsx";
import VillagePage from "./Pages/VillagePage.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/start" element={<StartPage/>}/>
            <Route path="/village" element={<VillagePage/>}/>
        </Routes>
    );
}

export default App;
