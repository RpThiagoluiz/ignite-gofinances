import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

interface typeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<typeProps>`
  background-color: ${({ theme, type }) => (type !== 'total' ? theme.colors.shape : theme.colors.secondary)};
  width: ${RFValue(250)}px;
  border-radius: 8px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: ${RFValue(16)}px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<typeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => (type !== 'total' ? theme.colors.text_dark : theme.colors.shape)};
`

export const Icon = styled(Feather)<typeProps>`
  font-size: ${RFValue(40)}px;

  ${(props) =>
    props.type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${(props) =>
    props.type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

   ${(props) =>
    props.type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`

export const Footer = styled.View``

export const Amount = styled.Text<typeProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, type }) => (type !== 'total' ? theme.colors.text_dark : theme.colors.shape)};
  margin-top: 18px;
`

export const LastTransaction = styled.Text<typeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => (type !== 'total' ? theme.colors.text : theme.colors.shape)};
`
