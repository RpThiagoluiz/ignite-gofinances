import React from 'react'
import { Animated } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

interface Props {
  children: React.ReactNode
}

export const FadeInView = ({ children }: Props) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true
      }).start()
    }
  })

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim
      }}
    >
      {children}
    </Animated.View>
  )
}
