import styled from "styled-components";

// Стилізована шкала здоров'я героя
export const HealthBarContainer = styled.div`
  width: 120px; /* Змінений розмір ширини шкали */
  height: 20px; /* Змінена висота шкали */
  background-color: #ddd; /* Задній фон */
  border-radius: 10px; /* Згладжені краї */
  overflow: hidden;
  position: relative; /* Додаємо, щоб текст знаходився всередині */
`;

export const HealthBarFill = styled.div`
  height: 100%;
  width: ${({ currentHealth, maxHealth }) => (currentHealth / maxHealth) * 100}%; /* Динамічна ширина шкали */
  background-color: ${({ currentHealth, maxHealth }) =>
    (currentHealth / maxHealth) * 100 > 75
      ? "green"
      : (currentHealth / maxHealth) * 100 > 50
      ? "yellow"
      : (currentHealth / maxHealth) * 100 > 25
      ? "orange"
      : "red"}; /* Зміна кольору в залежності від рівня здоров'я */
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out; /* Плавна анімація зміни ширини і кольору */
`;

export const HealthBarText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Текст займає всю ширину контейнера */
  height: 100%; /* Вирівнювання тексту по висоті шкали */
  display: flex; /* Використовуємо flex для вирівнювання тексту */
  justify-content: center; /* Центрування тексту по горизонталі */
  align-items: center; /* Центрування тексту по вертикалі */
  color: black;
  font-weight: bold;
  font-size: 14px; /* Оптимальний розмір тексту для маленької шкали */
  pointer-events: none; /* Запобігає взаємодії з текстом, дозволяючи натискати через нього */
`;

export const HealthBarWrapper = styled.div`
  width: 100%;
`;
