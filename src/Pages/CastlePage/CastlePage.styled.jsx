import styled from "styled-components";
import castleLockedDoorsImg from "../../assets/locked-castle-door.jpg"

export const CastlePageContainer = styled.div`
  height: 100vh; /* Висота 100% від вікна */
  width: 100vw; /* Ширина 100% від вікна */
  background-image: url(${castleLockedDoorsImg});
  background-size: cover; /* Фон покриває всю сторінку */
  background-position: center; /* Центрування фону */
  background-repeat: no-repeat; /* Не повторювати фон */
  display: flex;
  justify-content: center; /* Вирівнювання по центру */
  align-items: center; /* Вирівнювання по вертикалі */
  color: white; /* Колір тексту */
  font-size: 24px; /* Розмір шрифту */
  font-weight: bold;
    overflow: hidden; /* Вимкнення скролу */
`;