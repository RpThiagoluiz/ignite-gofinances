import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import { LocalStorageTransactionKey } from '../../interface'

export const getTransactions = async (setLoading: (loading: boolean) => void) => {
  const dataKey = LocalStorageTransactionKey.transactions
  try {
    setLoading(true)
    const data = await AsyncStorage.getItem(dataKey)
    if (data) {
      const transactions = JSON.parse(data)
      return transactions
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    Alert.alert(`Não foi possível recuperar.`)
    return null
  } finally {
    setLoading(false)
  }
}
