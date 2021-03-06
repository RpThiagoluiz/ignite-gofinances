import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

enum TypeTransaction {
  income = 'income',
  outcome = 'outcome'
}

type ContainerProps = {
  isActive: boolean
  type: 'income' | 'outcome'
}

type IconsProps = ContainerProps
type TitleProps = Omit<ContainerProps, 'type'>

export const Container = styled.View<ContainerProps>`
  border-width: ${({ isActive }) => (isActive ? 0 : 1.25)}px;
  border-color: ${({ theme }) => theme.colors.gray_light};
  border-radius: 5px;
  width: 48%;

  ${({ isActive, type }) =>
    isActive &&
    TypeTransaction[type] === TypeTransaction.income &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    TypeTransaction[type] === TypeTransaction.outcome &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(12)}px 0;
`

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ type, theme, isActive }) =>
    isActive ? theme.colors.iconsRegister[type] : theme.colors.iconsRegister_disabled[type]};
`

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.text_dark : theme.colors.gray_light)};
`
