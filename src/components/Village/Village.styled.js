import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px; /* Відступ між кнопками */
  justify-content: center;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  color: white;
  background: linear-gradient(45deg, #ff758c, #ff7eb3);
  box-shadow: 0 4px 10px rgba(255, 118, 118, 0.4);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(45deg, #ff9a8b, #ff6a88);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(255, 118, 118, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;
