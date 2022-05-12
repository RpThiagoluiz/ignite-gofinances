import React from 'react'
import { FlashMessageProps } from 'react-native-flash-message'
import { NotifyFlashMessageContainer } from './styles'

export const NotifyFlashMessage = ({ position, ...rest }: FlashMessageProps) => {
  return <NotifyFlashMessageContainer position={position || 'top'} {...rest} style={{}} />
}
