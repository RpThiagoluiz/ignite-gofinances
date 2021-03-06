import styled from 'styled-components/native'
import { Platform, FlatList, FlatListProps, ActivityIndicator } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Feather } from '@expo/vector-icons'
import { Datalist } from '@components/interface'
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler'
// lembra que aq vc ezta desestruturando de props.

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: flex-start;
  flex-direction: row;
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFPercentage(5) : RFPercentage(5)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`
export const User = styled.View`
  margin-left: 18px;
`
export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const LogoutButton = styled(BorderlessButton)``

export const IconPower = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(28)}px;
`
export const HighLightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(22)}px;
`
export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(8)}px;
`
export const TransactionsTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFPercentage(1)}px;
`

//Esse aq de baixo nao deu certo nao.
export const TransactionsList = styled(FlatList as new (props: FlatListProps<Datalist>) => FlatList<Datalist>).attrs(
  {}
)``

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoadingData = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.success};
`
