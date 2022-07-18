import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackMainNavigator } from './src/navigator/StackNavigator';


export const App = () => {
  return (
    <NavigationContainer >
      <StackMainNavigator />
    </NavigationContainer>
    
  )
}

export default App;