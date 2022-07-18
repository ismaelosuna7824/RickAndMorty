import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ErrorPage = () => {
  return (
   <View>
       <Image style={style.image} source={require('../assets/3804935.jpg')}></Image>

   </View>
  )
}


const style = StyleSheet.create({
  image: {
    width: 400,
    height: 400
  }
})