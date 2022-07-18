import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    texto: string
    route: string
    navigation: any
    personaje: string | {}
}

export const ButtonCustom = ({texto, route, navigation, personaje}: Props) => {
    return (
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(`${route}`, {
        personaje
      })}>
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
    );
  }


  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  