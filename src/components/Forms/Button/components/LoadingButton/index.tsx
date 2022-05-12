import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'
import { Colors } from '@components/interface'

type Color = keyof Colors

interface Props extends ActivityIndicatorProps {
  sizeLoading?: number
  colorLoading?: Color
}

export const LoadingButton = ({ sizeLoading, colorLoading, ...rest }: Props) => {
  const { colors, loadingSize } = useTheme()
  const loadingButtonData = {
    color: colorLoading ? colors[colorLoading] : colors.shape,
    size: sizeLoading || loadingSize
  }

  return <ActivityIndicator size={loadingButtonData.size} color={loadingButtonData.color} {...rest} />
}

LoadingButton.defaultProps = {
  color: '#fdfdfd',
  size: 30
}

LoadingButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}
