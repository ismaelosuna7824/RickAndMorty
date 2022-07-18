import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { CardComponent } from '../components/CardComponent';
import Rickmorty, { Result } from '../interfaces/RickMortyInterface';
import { styles } from '../theme/appTheme';
import { ErrorPage } from './errorPage';

interface RouterParams {
  personaje: string
}


interface Props extends StackScreenProps<any, any>{}

export const ListPage = ({route, navigation}: Props) => {
  const params = route.params as RouterParams;
  const [rickMority, setRickMority] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [validate404, setValidate404] = useState(false)
  useEffect(()=>{

    const fechDta = async () => {
      setLoading(true);
      const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${params.personaje}`)
      const resp = await data.json() 
        if(data.status >= 400){
          setValidate404(true)
          // setRickMority([])
        }
      setRickMority(resp.results);
      setLoading(false);
    }
    fechDta()
  }, [])
  return (
    <ScrollView>
      <View style={styles.listPage}>
       {
        loading ? <ActivityIndicator></ActivityIndicator>: 
        validate404 ? <ErrorPage /> : rickMority.map((data)=>{
          return(
            
            <CardComponent key={data.id} character={data} navigation ={navigation} />
          )
        })
       }
    </View>
    </ScrollView>
  )
}
