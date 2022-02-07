import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Dashboard } from '@screens/Dashboard'
import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

import lightTheme from '@theme/lightTheme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar style="light" />
      <Dashboard />
    </ThemeProvider>
  )
}
