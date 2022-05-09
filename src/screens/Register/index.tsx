import React, { useState } from 'react'
import { Button, Input, TransactionTypeButton } from '@components/index'

import { Container, Header, Title, ContainerForm, Fields, ContainerTransactionTypeButton } from './styles'

enum TransactionTypeEnum {
  income = 'income',
  outcome = 'outcome'
}

export const Register = () => {
  const [selectedTransactionType, setSelectedTransactionType] = useState<
    TransactionTypeEnum.income | TransactionTypeEnum.outcome
  >(TransactionTypeEnum.income)

  const handleSelectedTransactionType = (type: TransactionTypeEnum.income | TransactionTypeEnum.outcome) => {
    setSelectedTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <ContainerForm>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <ContainerTransactionTypeButton>
            <TransactionTypeButton
              type={TransactionTypeEnum.income}
              title="Entradas"
              isActive={selectedTransactionType === TransactionTypeEnum.income}
              onPress={() => handleSelectedTransactionType(TransactionTypeEnum.income)}
            />
            <TransactionTypeButton
              type={TransactionTypeEnum.outcome}
              title="Saídas"
              isActive={selectedTransactionType === TransactionTypeEnum.outcome}
              onPress={() => handleSelectedTransactionType(TransactionTypeEnum.outcome)}
            />
          </ContainerTransactionTypeButton>
        </Fields>

        <Button title="Enviar" />
      </ContainerForm>
    </Container>
  )
}
