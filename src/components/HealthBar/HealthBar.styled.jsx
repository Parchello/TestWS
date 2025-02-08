import styled from "styled-components";

export const HealthBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HealthBarContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

export const HealthBarFill = styled.div`
  height: 15px;
  background-color: ${(props) => (props.percentage > 50 ? "#31bb2a" : props.percentage > 20 ? "#f0ad4e" : "#d9534f")};
  transition: width 0.3s ease-in-out;
`;

export const HealthBarText = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  left: 0;
  font-size: 12px;
  color: black;
`;
