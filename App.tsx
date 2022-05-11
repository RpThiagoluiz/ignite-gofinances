import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Routes } from 'Routes/index.routes'
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={lightTheme}>
        <StatusBar style="light" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
