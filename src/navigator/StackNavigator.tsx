import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailPage } from '../screens/detailPage';
import { ErrorPage } from '../screens/errorPage';
import { HomePage } from '../screens/homePage';
import { ListPage } from '../screens/listPage';

const Stack = createStackNavigator();

export const  StackMainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomePage'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: "white",
        }
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ListPage" options={{title: "List"}} component={ListPage} />
      <Stack.Screen name="DetailPage" options={{title: "Detail Page"}} component={DetailPage} />
      <Stack.Screen name="ErrorPage" options={{title: "Error Page"}} component={ErrorPage} />
    </Stack.Navigator>
  );
}