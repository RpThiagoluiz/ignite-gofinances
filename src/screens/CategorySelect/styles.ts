import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'

interface Categories {
  key: string
  name: string
  icon: string
  color: string
}

interface CategorySelectContainerProps {
  isActive: boolean
}

type CategorySelectColor = CategorySelectContainerProps

export const CategorySelectContainer = styled.TouchableOpacity<CategorySelectContainerProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary_light : theme.colors.background)};
`

export const FlatListContainer = styled(
  FlatList as new (props: FlatListProps<Categories>) => FlatList<Categories>
).attrs({})`
  width: 100%;
  padding: ${RFValue(18)}px;
  flex: 1;
`

export const Icon = styled(Feather)<CategorySelectColor>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : theme.colors.text)};
  margin-right: ${RFValue(10)}px;-
`
export const Name = styled.Text<CategorySelectColor>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary : theme.colors.text)};
`
export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`
