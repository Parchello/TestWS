import styled from "styled-components";
import speechBubble from "../../assets/speech-bubble.png";

export const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(p) => p.$background});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-image 0.8s ease-in-out, opacity 0.8s ease-in-out;
    opacity: ${(p) => (p.$isVisible ? 1 : 0)};
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ffcc00;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ffaa00;
    }
`;

export const SpeechBox = styled.div`
    width: ${(p) => p.$width}; 
    height: auto;
    padding: 20px;
    background-image: url(${speechBubble});
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: black;

    position: absolute; 
    top: ${(p) => p.$top}; 
    left: ${(p) => p.$left}; 
    transform: translate(-50%, -50%);
    transition: top 0.8s ease-in-out, left 0.8s ease-in-out, width 0.8s ease-in-out, background-size 0.8s ease-in-out; 
`;
