import { KeyboardAvoidingView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const InnerView = styled.View`
  flex: 1;
  justify-content: space-around;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(30)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
