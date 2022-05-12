import AsyncStorage from '@react-native-async-storage/async-storage'
import { noficationMessage } from 'helpers'
import { LocalStorageTransactionKey } from '../../interface'

export const clearTransactions = async (setLoading: (loading: boolean) => void) => {
  const dataKey = LocalStorageTransactionKey.transactions
  try {
    setLoading(true)
    await AsyncStorage.removeItem(dataKey)
    noficationMessage({
      type: 'success',
      message: 'Limpeza concluida com sucesso',
      duration: 2000
    })
  } catch (error) {
    console.log(error)
    noficationMessage({
      type: 'danger',
      message: 'Falha na limpeza de dados.',
      duration: 2000
    })
  } finally {
    setLoading(false)
  }
}
