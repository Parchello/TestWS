import styled from "styled-components";
import heroBackground from "../../assets/HeroPageBg.jpg";
import emptySlot from "../../assets/empty-slot.png";

export const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${heroBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const HeroContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1200px;
    gap: 2vw; /* Відстань між героєм і слотами залежить від ширини екрану */
`;

export const HeroContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 50%; /* Пропорційна ширина щодо контейнера */
`;

export const HeroImage = styled.img`
    width: 100%; /* Зробимо зображення героя масштабованим */
    max-width: 750px; /* Максимальна ширина */
`;

export const SlotContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1vw; /* Відстань між слотами залежить від ширини екрану */
    width: 30%; /* Пропорційна ширина контейнера слотів */
    max-width: 300px;
    height: auto; /* Додано для адаптації висоти */
`;

export const StyledSlot = styled.div`
    background-image: url(${emptySlot});
    background-size: cover;
    background-position: center;
    width: 100%; /* Залишається 100% */
    aspect-ratio: 1; /* Зберігаємо квадратну форму */
    display: flex; /* Додаємо flex для управління вмістом */
    justify-content: center; /* Центруємо вміст по горизонталі */
    align-items: center; /* Центруємо вміст по вертикалі */
    position: relative; /* Додаємо relative для можливого позиціонування внутрішніх елементів */
    overflow: hidden; /* Сховаємо все, що виходить за межі слоту */

    /* Застосування для вмісту */
    & > * {
        max-width: 70%; /* Максимальна ширина вмісту */
        max-height: 70%; /* Максимальна висота вмісту */
        width: auto; /* Автоматичне масштабування */
        height: auto; /* Автоматичне масштабування */
        color: red; /* Додано для забезпечення видимості тексту */
        font-size: 1.5rem; /* Встановлено розмір шрифту */
        text-align: center; /* Центруємо текст по горизонталі */
    }
`;

// Elements container під героєм
export const ElementsContainer = styled.div`
    display: flex;
    gap: 1.76vw;
    position: absolute;
    bottom: 11%; /* Відносна відстань від низу */
`;

export const IconWrapper = styled.div`
  font-size: 1.25vw; /* Пропорційна величина іконок відносно ширини екрану */
  color: white; /* Можна налаштувати колір іконок */
  display: flex;
  justify-content: center;
  align-items: center;
    transition: transform 0.3s ease, color 0.3s ease; /* Додаємо плавний перехід */

    &:hover {
        transform: scale(1.3); /* Збільшуємо іконку при наведенні */
        color: ${(props) => props.color};
    }
`;
