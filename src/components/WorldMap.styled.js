import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;

  & > *:nth-child(1) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const MovingBtn = styled.button`
  background: linear-gradient(
    45deg,
    #ff69b4,
    #ff8c00
  ); /* Рожевий → Оранжевий */
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(255, 140, 0, 0.5); /* Тінь при наведенні */
  }
`;
