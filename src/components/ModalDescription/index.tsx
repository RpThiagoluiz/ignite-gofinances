import React from 'react'
import { Modal } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import {
  ModalContainer,
  ModalTitle,
  ModalIconContainer,
  ModalDescriptionContainer,
  ModalDescription as Description,
  ButtonDescription,
  ButtonContainer
} from './styles'

interface Props {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  content: string[]
}

export const ModalDescription = ({ showModal, setShowModal, content }: Props) => {
  const {
    colors: { attention }
  } = useTheme()

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Modal
      isVisible={showModal}
      animationInTiming={400}
      animationOutTiming={400}
      backdropOpacity={0.8}
      onBackdropPress={() => handleCloseModal()}
    >
      <ModalContainer>
        <ModalTitle>{content.title}</ModalTitle>

        <ModalIconContainer>
          <Entypo name={content.icon.name} size={content.icon.size} color={attention} />
        </ModalIconContainer>

        <ModalDescriptionContainer>
          {content.description.map((description, index) => (
            <Description key={String(index)}>{description}</Description>
          ))}
        </ModalDescriptionContainer>

        <ButtonContainer onPress={handleCloseModal}>
          <ButtonDescription>{content.buttonDescription}</ButtonDescription>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}
