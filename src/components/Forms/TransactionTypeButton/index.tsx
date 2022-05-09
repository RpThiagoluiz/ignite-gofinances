import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles'

interface Props extends TouchableOpacityProps {
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
    <Container isActive={isActive} type={type} {...rest}>
      <Icon name={Icons[type]} type={type} isActive={isActive} />
      <Title isActive={isActive}>{title}</Title>
    </Container>
  )
}
