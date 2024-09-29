import {Outlet} from "react-router-dom";
import Header from "../Header/Header.jsx";
import {Container, LayoutContainer} from "./Layout.styled.jsx";

const Layout = () => {
	return (
		<Container>
			<Header/>
			<LayoutContainer>
				<Outlet/>
			</LayoutContainer>
		</Container>
	);
};

export default Layout;