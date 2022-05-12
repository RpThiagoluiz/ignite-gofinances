import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
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
  } catch (error) {
    console.log(error)
    Alert.alert(`Não foi possível salvar.`)
  } finally {
    setTimeout(() => {
      setLoading(false)
    }, 1525)
  }
}
