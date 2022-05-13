import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export const formatedDate = (date: string) => {
  const newDate = new Date(date)
  const formated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(newDate)

  return formated
}
