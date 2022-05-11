import React, { useState } from 'react'
import {
  Button,
  CategorySelectButton,
  Input,
  TransactionTypeButton,
  ContainerScreens,
  CustomModal
} from '@components/index'
import { ContainerForm, Fields, ContainerTransactionTypeButton, ContainerSelectedType } from './styles'
import { CategorySelect } from '@screens/CategorySelect'

enum TransactionTypeEnum {
  income = 'income',
  outcome = 'outcome'
}

export const Register = () => {
  const [selectedTransactionType, setSelectedTransactionType] = useState<
    TransactionTypeEnum.income | TransactionTypeEnum.outcome
  >(TransactionTypeEnum.income)

  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const handleSelectedTransactionType = (type: TransactionTypeEnum.income | TransactionTypeEnum.outcome) => {
    setSelectedTransactionType(type)
  }

  const handleOpenSelectedCategoryModal = () => {
    setCategoryModalOpen(true)
  }

  const handleCloseSelectedCategoryModal = () => {
    setCategoryModalOpen(false)
  }

  return (
    <ContainerScreens title="Cadastro">
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
          <ContainerSelectedType>
            <CategorySelectButton title={category.name} onPress={handleOpenSelectedCategoryModal} />
          </ContainerSelectedType>
        </Fields>

        <Button title="Enviar" />
      </ContainerForm>

      <CustomModal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectedCategoryModal}
        />
      </CustomModal>
    </ContainerScreens>
  )
}
