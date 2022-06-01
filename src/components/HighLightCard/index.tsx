import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'

interface Props {
  title: string
  amount: string
  lastTransaction: string
  type: 'up' | 'down' | 'total'
  loading: boolean
}

export function HighLightCard({ title, amount, lastTransaction, type, loading }: Props) {
  const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
  }

  const theme = useTheme()

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.attention} />
        ) : (
          <>
            <Amount type={type}> {amount}</Amount>
            <LastTransaction type={type}>{lastTransaction}</LastTransaction>
          </>
        )}
      </Footer>
    </Container>
  )
}
