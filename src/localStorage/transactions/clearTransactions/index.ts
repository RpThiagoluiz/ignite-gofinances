import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import { LocalStorageTransactionKey } from '../../interface'

export const clearTransactions = async (setLoading: (loading: boolean) => void) => {
  const dataKey = LocalStorageTransactionKey.transactions
  try {
    setLoading(true)
    await AsyncStorage.removeItem(dataKey)
  } catch (error) {
    console.log(error)
    Alert.alert(`Não foi possível remover.`)
  } finally {
    setLoading(false)
  }
}
