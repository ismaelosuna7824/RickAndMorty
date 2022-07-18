import React from 'react'
import {   Image, PushNotificationIOS, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { Result } from '../interfaces/RickMortyInterface'



export interface PropsCharacter {   
    character: Result,
    navigation: any
}

export const CardComponent = ({character, navigation}: PropsCharacter) => {

  return (
    
   <View style={style.container}>
    <TouchableOpacity onPress={()=> navigation.navigate(`DetailPage`, {
        character
      })}>
        <View style={style.position}>
            <Image style={style.image} source={{uri: character.image}}></Image>
            <View style={{...style.genderCont, backgroundColor: (character.gender === "Male" ? "#32C0FE" : "#FF5BF5")}}>
                <Text>
                    <Text style={style.aliveText}>{character.gender}</Text>
                </Text>
             </View>
             <View style={{...style.aliveCont, backgroundColor: (character.status === "Alive" ? "#6AEC3A" : character.status === "Dead" ? "#FB4E33": "black")}}>
                <Text>
                    <Text style={style.aliveText}>{character.status}</Text>
                </Text>
             </View>
             <View style={style.textoCont}>
                <Text style={style.texto} >{character.name}</Text>
             </View>
        </View>
        </TouchableOpacity>
   </View>
   
  )
}


const style = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    position: {
        position: "relative"
    },
    image: {
       width: 300,
       height: 300,
       borderRadius: 20,
    },
    textoCont:{
        position: "absolute",
        backgroundColor: "white",
        padding: 6,
        bottom: 10,
        left: 20,
        borderRadius: 10,
    },
    texto: {
        fontSize: 19
    },
    aliveCont: {
        position: "absolute",
        backgroundColor: "white",
        padding: 6,
        top: 10,
        right: 20,
        borderRadius: 10,
    },
    aliveText: {
        color: "white",
        fontSize: 17
    },
    genderCont: {
        position: "absolute",
        backgroundColor: "white",
        padding: 6,
        top: 10,
        left: 20,
        borderRadius: 10,
    },
})

