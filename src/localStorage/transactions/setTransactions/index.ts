import AsyncStorage from '@react-native-async-storage/async-storage'
import { noficationMessage } from 'helpers'
import { LocalStorageTransactionKey } from '../../interface'

interface FormatedData {
  name: string
  amount: string
  type: string
  category: string
}

export const setTransactions = async (setLoading: (loading: boolean) => void, data: FormatedData) => {
  const dataKey = LocalStorageTransactionKey.transactions
  try {
    setLoading(true)

    const oldData = await AsyncStorage.getItem(dataKey)
    const newData = oldData ? JSON.parse(oldData) : []
    const formatedNewData = [...newData, data]

    await AsyncStorage.setItem(dataKey, JSON.stringify(formatedNewData))
    noficationMessage({
      type: 'success',
      message: 'Dados salvos com sucesso',
      duration: 2050
    })
  } catch (error) {
    console.log(error)
    noficationMessage({
      type: 'danger',
      message: 'Falha ao salvar os dados.',
      duration: 2000
    })
  } finally {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }
}
