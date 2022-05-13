export const formatedAmount = (amount: string | number) => {
  const formated = Number(amount).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return formated
}
