import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between; /* Розміщуємо блоки по краях */
    align-items: center;
    background-color: rgba(138, 138, 138, 0.6); /* Прозорий фон */
    padding: 10px 20px; /* Відступи */
    position: fixed; /* Зафіксувати заголовок */
    top: 0; /* Розмістити на верху */
    left: 0; /* Розмістити зліва */
    width: 100%; /* Ширина 100% */
    z-index: 1000; /* Забезпечити, що заголовок буде поверх інших елементів */
`;

export const UnitBox = styled.div`
    display: flex;
    align-items: center;
    
`;

export const AvatarIcon = styled.img`
  width: 75px; /* Встановіть ширину вашого логотипу */
  height: 75px; /* Встановіть висоту вашого логотипу */
  border-radius: 50%; /* Кругла форма */
  margin-right: 10px; /* Відступ між логотипом і текстом */
`;

export const CastleIcon = styled.img`
  width: 75px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Ефект при наведенні */
  &:hover {
    transform: scale(1.1); /* Трохи збільшується */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Додається тінь */
  }

  /* Ефект при кліку */
  &:active {
    transform: scale(1.05); /* Зменшене збільшення при кліку */
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.7); /* Тінь стає більш насиченою */
  }
`;

export const AttributesList = styled.ul`
  list-style: none; /* Без стандартних маркерів */
  padding: 0; /* Без внутрішніх відступів */
  margin: 0; /* Без зовнішніх відступів */
  display: flex; /* Розмістити список горизонтально */
  flex-direction: column; /* Вертикальне вирівнювання */
`;

export const AttributesItem = styled.li`
  font-size: 18px; /* Встановіть розмір шрифту */
  color: #333; /* Встановіть колір тексту */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Тінь */
  margin: 2px 0; /* Відступи між елементами списку */
`;




