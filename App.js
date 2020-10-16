import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './screens/HomeScreen'
import { PatientScreen } from './screens/PatientScreen'
import {View, Text} from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patient" component={PatientScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}