import React from 'react'
import { Platform } from 'react-native'
import { FadeInView, HighLightCard, TransactionCard } from '@components/index'
import { Datalist } from '@components/interface'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  IconPower,
  HighLightCards,
  Transactions,
  TransactionsTitle,
  TransactionsList
} from './styles'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const Dashboard = () => {
  const data: Datalist[] = [
    {
      id: 1,
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.001,01',
      category: { name: 'vendas', icon: 'dollar-sign' },
      date: '13/06/2020'
    },
    {
      id: 2,
      type: 'negative',
      title: 'Burger PIX',
      amount: 'R$ 1.001,01',
      category: { name: 'vendas', icon: 'coffee' },
      date: '13/06/2020'
    },
    {
      id: 3,
      type: 'positive',
      title: 'Desenvolvimento',
      amount: 'R$ 12.001,01',
      category: { name: 'vendas', icon: 'dollar-sign' },
      date: '13/06/2020'
    }
  ]

  return (
    <FadeInView>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: 'https://github.com/RpThiagoluiz.png' }} />
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserName>Thiago</UserName>
              </User>
            </UserInfo>
            <GestureHandlerRootView>
              <LogoutButton
                onPress={() => {
                  console.log(`thiago`)
                }}
              >
                <IconPower name="power" />
              </LogoutButton>
            </GestureHandlerRootView>
          </UserWrapper>
        </Header>
        <HighLightCards>
          <HighLightCard title="Entradas" amount="R$ 170.400,00" lastTransaction="Ultima entrada dia 13" type="up" />
          <HighLightCard title="Saidas" amount="R$ 5.999,00" lastTransaction="Onti" type="down" />
          <HighLightCard title="Total" amount="R$ 11.599,00" lastTransaction="Balanco geraldo" type="total" />
        </HighLightCards>
        <Transactions>
          <TransactionsTitle>Listagem</TransactionsTitle>
          <TransactionsList
            data={data} // ???
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              Platform.OS === 'android' ? { paddingBottom: 30 } : { paddingBottom: getBottomSpace() + 2 }
            }
            renderItem={({ item }) => <TransactionCard data={item} />}
          />
        </Transactions>
      </Container>
    </FadeInView>
  )
}
