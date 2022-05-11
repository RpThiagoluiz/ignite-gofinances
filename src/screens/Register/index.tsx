import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { CategorySelect } from '@screens/CategorySelect'
import {
  Button,
  CategorySelectButton,
  TransactionTypeButton,
  ContainerScreens,
  CustomModal,
  InputControl,
  FadeInView
} from '@components/index'
import { ContainerForm, Fields, ContainerTransactionTypeButton, ContainerSelectedType, ContainerButton } from './styles'
import { registerWalletSchema } from 'helpers'

enum TransactionTypeEnum {
  income = 'income',
  outcome = 'outcome'
}

interface FormData {
  name: string
  amount: string
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

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerWalletSchema)
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

  const handleRegister = (form: FormData) => {
    if (category.key === 'category') {
      return Alert.alert(`Selecione a categoria.`)
    }

    //const formatedNumber = Number(form.amount.replace(/,/g, '.')) * 100

    const formatedData = {
      name: form.name,
      amount: form.amount,
      type: selectedTransactionType,
      category: category.key
    }

    console.log(`formatedData`, formatedData)
  }

  return (
    <FadeInView>
      <ContainerScreens title="Cadastro">
        <ContainerForm>
          <Fields>
            <InputControl
              control={control}
              autoCapitalize="sentences"
              name="name"
              placeholder="Nome"
              autoCorrect={false}
              error={errors?.name?.message}
            />
            <InputControl
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors?.amount?.message}
            />

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
          <ContainerButton>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
          </ContainerButton>
        </ContainerForm>

        <CustomModal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectedCategoryModal}
          />
        </CustomModal>
      </ContainerScreens>
    </FadeInView>
  )
}
