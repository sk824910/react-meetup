import React from "react";
import Modal from "react-modal";
import styled from "styled-components";




const ModalStyle = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
`;
export const CloseButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: red;
`;
export const TestButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: green;
`;
// const ModalShadow = styled.div`
//   position: fixed;
//   height: 100%;
//   width: 100%;
//   top: 0px;
//   background-color: black;
//   opacity: 0.7;
//   z-index: 4;
// `;
// const ModalBanner = styled.div`
//   margin-bottom: 20px;
//   background-color: blue;
//   color: white;
//   padding: 10px;
// `;

const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;







export function ModalExample(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(props) {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <ConfirmButton onClick={closeModal}>close</ConfirmButton>
        <ModalStyle>I am a modal</ModalStyle>
        <form>
          <Input />
          <ConfirmButton>tab navigation</ConfirmButton>
          <CloseButton onClick={closeModal}>stays</CloseButton>
          <TestButton>inside</TestButton>
          <TestButton>the modal</TestButton>
        </form>
      </Modal>
    </div>
  );
}
