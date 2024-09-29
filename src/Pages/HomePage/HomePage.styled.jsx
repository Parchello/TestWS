import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props => props.theme.colors.mainBg};
`;

export const StartButton = styled(Link)`
  display: inline-block;
  padding: 20px 40px;
  font-size: 2rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;