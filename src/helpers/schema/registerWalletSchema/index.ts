import * as Yup from 'yup'

export const registerWalletSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .transform((_value, originalValue) => Number(originalValue.replace(/,/, '.')))
    .typeError('Informe um valor númerico')
    .positive('Preço deve ser positivo')
})
