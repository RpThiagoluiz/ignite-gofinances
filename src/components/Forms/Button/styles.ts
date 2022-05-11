import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_light};
  align-items: center;
  padding: ${RFValue(10)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`
