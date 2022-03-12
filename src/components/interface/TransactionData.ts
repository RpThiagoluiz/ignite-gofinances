interface ICategory {
  name: string
  icon: string
}

export interface TransactionData {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: ICategory
  date: string
}
