import { ModalBtn, ModalContainer, ModalWind } from "./StartModal.styled";

const GameModal = ({ onClose }) => {
  return (
    <ModalContainer className="modal-overlay">
      <ModalWind className="modal">
        <h2>Ласкаво просимо у гру!</h2>
        <p>Ваше завдання — досліджувати світ та відкривати нові місця.</p>
        <ModalBtn onClick={onClose}>Почати гру</ModalBtn>
      </ModalWind>
    </ModalContainer>
  );
};
export default GameModal;
