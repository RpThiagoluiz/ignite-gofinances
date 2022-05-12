import { Colors } from '@components/interface'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { LoadingButton } from './components/LoadingButton'

import { Container, Title } from './styles'

type Color = keyof Colors

interface Props extends TouchableOpacityProps {
  title: string
  loading?: boolean
  loadingSize?: number
  loadingColor?: Color
}

export const Button = ({ title, loading, loadingSize, loadingColor, ...rest }: Props) => {
  return (
    <Container {...rest} activeOpacity={0.8}>
      {loading ? <LoadingButton size={loadingSize} color={loadingColor} /> : <Title>{title}</Title>}
    </Container>
  )
}
