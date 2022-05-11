import React from 'react'
import { Modal, ModalProps } from 'react-native'

interface Props extends ModalProps {
  children: React.ReactNode
}

export const CustomModal = ({ children, ...rest }: Props) => {
  return <Modal {...rest}>{children}</Modal>
}
