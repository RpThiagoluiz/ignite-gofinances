import AsyncStorage from '@react-native-async-storage/async-storage'
import { noficationMessage } from 'helpers'
import { LocalStorageTransactionKey } from '../../interface'

export const getTransactions = async (setLoading: (loading: boolean) => void) => {
  const dataKey = LocalStorageTransactionKey.transactions
  try {
    setLoading(true)
    const data = await AsyncStorage.getItem(dataKey)

    const transactions = data ? JSON.parse(data) : []
    return transactions
  } catch (error) {
    console.log(error)
    noficationMessage({
      type: 'danger',
      message: 'Falha na recuperação de dados.',
      duration: 2000
    })
    return null
  } finally {
    setTimeout(() => {
      setLoading(false)
    }, 320)
  }
}
