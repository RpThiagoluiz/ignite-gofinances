import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(30)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ContainerForm = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(20)}px;
`

export const ContainerTransactionTypeButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`

export const Fields = styled.View``
