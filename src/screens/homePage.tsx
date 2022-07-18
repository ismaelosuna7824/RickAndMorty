import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { ButtonCustom } from '../components/ButtomComponent'
import { useCustomState } from '../hooks/customNavigate'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const HomePage = ({navigation}:Props) => {

  const [text, onChangeText] = useCustomState(navigation, '')

  return (
    <View style={styles.fondo}>
        <View style={styles.containInput}>
          <TextInput 
            style={styles.input} 
            maxLength={30}
            value={text}
            onChangeText={onChangeText}
            placeholder={'Buscar...'}
            ></TextInput>
        </View>
        <ButtonCustom texto='Buscar' route='ListPage' navigation={navigation} personaje={text.toLowerCase()}  />
    </View>
  )
}
