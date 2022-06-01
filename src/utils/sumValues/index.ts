import { Datalist } from '@components/interface'

enum Types {
  INCOME = 'income',
  OUTCOME = 'outcome'
}

export const sumValues = (itens: Datalist[]) => {
  let entriesSum = 0
  let expensesSum = 0

  for (const item of itens) {
    if (item.type === Types.INCOME) {
      entriesSum += Number(item.amount)
    }
    if (item.type === Types.OUTCOME) {
      expensesSum += Number(item.amount)
    }
  }

  return {
    entriesSum,
    expensesSum
  }
}
