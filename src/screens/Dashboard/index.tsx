import React from 'react'
import { HighLightCard } from '@components/HighLightCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  IconPower,
  HighLightCards
} from './styles'

export const Dashboard = () => {
  return (
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
          <IconPower name="power" />
        </UserWrapper>
      </Header>
      <HighLightCards horizontal showsHorizontalScrollIndicator={false}>
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
      </HighLightCards>
    </Container>
  )
}
