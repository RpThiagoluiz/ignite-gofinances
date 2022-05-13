export interface TransactionData {
  type: 'income' | 'outcome'
  name: string
  amount: string
  category: string
  date: string
}
