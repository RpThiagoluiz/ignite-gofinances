import { TransactionData } from './TransactionData'

export interface Datalist extends TransactionData {
  id: number
}

export interface DataListItem {
  item: Datalist
}
