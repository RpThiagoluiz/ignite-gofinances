import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title, Icon, Button } from './styles'

interface Props extends RectButtonProps {
  title: string
  type: 'income' | 'outcome'
  isActive: boolean
}

enum Icons {
  income = 'arrow-up-circle',
  outcome = 'arrow-down-circle'
}

export const TransactionTypeButton = ({ title, type, isActive, ...rest }: Props) => {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={Icons[type]} type={type} isActive={isActive} />
        <Title isActive={isActive}>{title}</Title>
      </Button>
    </Container>
  )
}
