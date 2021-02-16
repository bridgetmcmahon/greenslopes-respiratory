import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { md } from "../../../utils/breakpoints"

const ModalBackground = styled.div`
  position: fixed;
  z-index: 11;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: fit-content;
  max-width: 95%;
  height: fit-content;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    height: 96%;
    object-fit: contain;
    margin: 0 auto;
  }

  @media ${md} {
    max-width: 90rem;
  }
`

const CloseIcon = styled(FontAwesomeIcon)`
  color: #d62a1e;
  font-size: 2.2rem;

  &:hover {
    cursor: pointer;
  }
`

const Modal = ({ children, closeModal }) => {
  const modalRef = React.createRef()

  const handleClickOutside = event => {
    if (
      modalRef &&
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      closeModal()
    }
  }
  console.log(modalRef)

  return (
    <ModalBackground onClick={handleClickOutside}>
      <ModalContent ref={modalRef}>
        <CloseIcon icon={faTimes} onClick={closeModal} />
        {children}
      </ModalContent>
    </ModalBackground>
  )
}

export default Modal