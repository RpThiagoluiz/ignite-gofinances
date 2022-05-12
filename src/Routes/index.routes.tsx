import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { NavigationRef } from 'helpers'

export const Routes = () => (
  <NavigationContainer ref={NavigationRef}>
    <AppRoutes />
  </NavigationContainer>
)
