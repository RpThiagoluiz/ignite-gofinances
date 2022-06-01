import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
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
import { getTransactions } from 'localStorage'
import { formatedAmount, formatedDate } from '@utils/index'
import { sumValues } from '@utils/sumValues'

export const Dashboard = () => {
  const [data, setData] = useState<Datalist[]>([])
  const [loading, setLoading] = useState(false)
  const [highLightData, setHighLightData] = useState({
    totalEntries: '',
    totalExpenses: '',
    totalBalance: ''
  })

  const getData = async () => {
    const response = await getTransactions(setLoading)

    const { entriesSum, expensesSum } = sumValues(response)
    const total = entriesSum - expensesSum

    const formatedTotal = formatedAmount(total)
    const formatedEntries = formatedAmount(entriesSum)
    const formatedExpenses = formatedAmount(expensesSum)

    setHighLightData({
      totalEntries: formatedEntries,
      totalExpenses: formatedExpenses,
      totalBalance: formatedTotal
    })

    const formatedResult: Datalist[] = response.map((item: Datalist) => {
      const amount = formatedAmount(item.amount)
      const date = formatedDate(item.date)

      return {
        ...item,
        amount,
        date
      }
    })

    setData(formatedResult)
  }

  useFocusEffect(
    useCallback(() => {
      getData()
    }, [])
  )

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
          <HighLightCard
            title="Entradas"
            amount={highLightData.totalEntries}
            lastTransaction="Ultima entrada dia 13"
            type="up"
          />
          <HighLightCard title="Saidas" amount={highLightData.totalExpenses} lastTransaction="Onti" type="down" />
          <HighLightCard
            title="Total"
            amount={highLightData.totalBalance}
            lastTransaction="Balanco geraldo"
            type="total"
          />
        </HighLightCards>
        <Transactions>
          <TransactionsTitle>Listagem</TransactionsTitle>
          <TransactionsList
            data={data}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              Platform.OS === 'android' ? { paddingBottom: 30 } : { paddingBottom: getBottomSpace() + 2 }
            }
            renderItem={({ item }) => (loading ? null : <TransactionCard data={item} />)}
          />
        </Transactions>
      </Container>
    </FadeInView>
  )
}
