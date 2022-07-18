import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PropsCharacter } from '../components/CardComponent'

interface Props extends StackScreenProps<any, any>{}

export const DetailPage = ({route, navigation}: Props) => {
  const {character} = route.params as PropsCharacter;
 //console.log(params)
  return (
    <View style={style.container}>
        <View style={style.imageCon}>
            <Image style={style.image} source={{uri: character.image}} resizeMode="contain"></Image>
        </View>
        <View style={style.information}>
              <View style={style.informationCon}>
                  <Text style={style.title}>Name:</Text>
                  <Text style={style.title}>{character.name}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Gender:</Text>
                  <Text style={style.title}>{character.gender}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Status:</Text>
                  <Text style={style.title}>{character.status}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Species:</Text>
                  <Text style={style.title}>{character.species}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Type:</Text>
                  <Text style={style.title}>{character.type}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Location:</Text>
                  <Text style={style.title}>{character.location?.name}</Text>
              </View>
              <View style={style.informationCon}>
                  <Text style={style.title}>Episodes:</Text>
                  <View style={{ alignItems: 'flex-end', marginRight: 10, width: "80%"}}>
                    <Text style={style.title}>{character.episode?.map((data)=>{
                      let res = data.split('/')
                      return(
                      `${res[5].replace('', ' ')}`

                    )})}</Text>
                  </View>
              </View>

        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    imageCon: {
      width: "60%",
      height: "35%",
      //backgroundColor: "red"
    },
    image: {
      width: "100%",
      height: 300,
      borderRadius: 30
    },
    information: {
      width: "100%",
      
      
    },
    informationCon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 25
    }
});
