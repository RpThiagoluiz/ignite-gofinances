import React from 'react'
import { TransactionData } from '@components/interface'
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles'

interface Props {
  data: TransactionData
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data?.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '-'} {data?.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data?.category?.icon} />
          <CategoryName>{data?.category?.name}</CategoryName>
        </Category>
        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  )
}
