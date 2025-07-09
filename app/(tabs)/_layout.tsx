import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { useTheme } from 'react-native-paper'

export default function TabLayout() {
  const theme = useTheme()
  return (
    <Tabs
      initialRouteName="swiper"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tabs.Screen
        name="dislikes"
        options={{
          title: 'No me gusta',
          tabBarIcon: ({ color }) => <AntDesign name="dislike2" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="swiper"
        options={{
          title: 'Películas',
          tabBarIcon: ({ color }) => <MaterialIcons name="swipe" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          title: 'Me gusta',
          tabBarIcon: ({ color }) => <AntDesign name="like2" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
