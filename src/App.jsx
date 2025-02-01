import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import StartPage from "./Pages/StartPage/StartPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import HomeLayout from "./components/HomeLayout/HomeLayout.jsx";
import CastlePage from "./Pages/CastlePage/CastlePage.jsx";
import WelcomePage from "./Pages/WelcomePage/WelcomePage.jsx";
import OptionsPage from "./Pages/OptionsPage/OptionsPage.jsx";
import NewGamePage from "./Pages/NewGamePage/NewGamePage.jsx";
import HeroPage from "./Pages/HeroPage/HeroPage.jsx";
import IntroPage from "./Pages/IntroPage/IntroPage.jsx";
import VillagePage from "./Pages/VillagePage/VillagePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route element={<Layout />}>
        <Route path="/start" element={<StartPage />} />
        <Route path="/castle" element={<CastlePage />} />
        <Route path="/village/:id" element={<VillagePage />} />
        <Route path="/location/:type" element={<h1>Location</h1>} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/newgame" element={<NewGamePage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/hero" element={<HeroPage />} />
      </Route>
    </Routes>
  );
}

export default App;
