import React from 'react'

import { Container, Header, Title } from './styles'

interface Props {
  title: string
  children: React.ReactNode
}

export const ContainerScreens = ({ title, children }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>

      {children}
    </Container>
  )
}
