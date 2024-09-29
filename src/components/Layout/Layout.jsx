import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";

const Layout = () => {
	return (
		<>
			<Header/>
			<main className="main">
				<Outlet/>
			</main>
		</>
	);
};

export default Layout;