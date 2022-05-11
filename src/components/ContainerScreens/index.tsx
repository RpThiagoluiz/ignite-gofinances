import React from 'react'
import { Keyboard, Platform } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Container, Header, Title, InnerView } from './styles'

interface Props {
  title: string
  children: React.ReactNode
}

export const ContainerScreens = ({ title, children }: Props) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} containerStyle={{ flex: 1 }} style={{ flex: 1 }}>
        <InnerView>{children}</InnerView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
