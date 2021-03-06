import React, { useState } from 'react'
import { Alert } from 'react-native'
import { FieldValues, useForm } from 'react-hook-form'
import uuid from 'react-native-uuid'
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
import { setTransactions } from 'localStorage'

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

  const [loading, setLoading] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: resetForm
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

  const resetAllData = () => {
    setSelectedTransactionType(TransactionTypeEnum.income)
    setCategory({
      key: 'category',
      name: 'Categoria'
    })
    resetForm()
  }

  const handleRegister = async (form: FieldValues) => {
    if (category.key === 'category') {
      return Alert.alert(`Selecione a categoria.`)
    }

    const formatedData = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: selectedTransactionType,
      category: category.key,
      date: new Date()
    }

    await setTransactions(setLoading, formatedData)

    setTimeout(() => {
      resetAllData()
    }, 750)
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
              placeholder="Pre??o"
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
                title="Sa??das"
                isActive={selectedTransactionType === TransactionTypeEnum.outcome}
                onPress={() => handleSelectedTransactionType(TransactionTypeEnum.outcome)}
              />
            </ContainerTransactionTypeButton>
            <ContainerSelectedType>
              <CategorySelectButton title={category.name} onPress={handleOpenSelectedCategoryModal} />
            </ContainerSelectedType>
          </Fields>
          <ContainerButton>
            <Button title="Enviar" loading={loading} loadingColor="shape" onPress={handleSubmit(handleRegister)} />
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
