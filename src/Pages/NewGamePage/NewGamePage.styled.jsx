import styled from "styled-components";


export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
    background-color: ${props => props.theme.colors.mainBg};
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }
`;

// Form group for centering input and button
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

// Styled input field
export const InputField = styled.input`
  width: 300px;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

// Styled start button
export const StartButton = styled.button`
  width: 300px;
  padding: 15px;
  font-size: 1.5rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
