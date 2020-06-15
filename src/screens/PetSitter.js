import * as React from 'react'
import { View, Text } from 'react-native'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

// Styles
import TelaStyles from '../styles/TelaStyles'

const PetSitter = ({navigation}) => {

    return (
        <View style={TelaStyles.container}>
            <View>
                <Text style={TelaStyles.textSombra}>Sobre</Text>
                <Text style={TelaStyles.textNormal}>Versão 1.0</Text>
            </View>
            <View style={TelaStyles.container}>
                <Button  onPress={() => navigation.navigate('Principal')} text='Voltar' />
            </View>
        </View>

    )
}

export default PetSitter