import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalWind = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export const ModalBtn = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #ff758c, #ff7eb3);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  :hover {
    background: linear-gradient(45deg, #ff9a8b, #ff6a88);
  }
`;
