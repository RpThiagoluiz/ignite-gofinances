import React from 'react'
import { TransactionData } from '@components/interface'
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles'
import { categories } from 'common'

interface Props {
  data: TransactionData
}

enum TransactionType {
  OUTCOME = 'outcome'
}

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category)

  return (
    <Container>
      <Title>{data?.name}</Title>
      <Amount type={data?.type}>
        {data.type === TransactionType.OUTCOME && '-'} {data?.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category?.icon} />
          <CategoryName>{category?.name}</CategoryName>
        </Category>
        <Date>{data?.date}</Date>
      </Footer>
    </Container>
  )
}
