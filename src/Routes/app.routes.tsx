import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard as Home } from '@screens/Dashboard'
import { Register } from '@screens/Register'
import { RFValue } from 'react-native-responsive-fontsize'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: Platform.OS === 'ios' ? RFValue(70) : RFValue(68),
          paddingVertical: Platform.OS === 'ios' ? RFValue(2) : 0
        }
      }}
    >
      <Screen
        name="Listagem"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="format-list-bulleted" color={color} size={focused ? size * 1.05 : size} />
          )
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="attach-money" color={color} size={focused ? size * 1.05 : size} />
          )
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="pie-chart" color={color} size={focused ? size * 1.05 : size} />
          )
        }}
      />
    </Navigator>
  )
}
