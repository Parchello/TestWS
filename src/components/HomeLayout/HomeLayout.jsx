import { Outlet } from "react-router-dom";
import { Container } from "../Layout/Layout.styled.jsx"; // Якщо у вас вже є стилі

const HomeLayout = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};

export default HomeLayout;
