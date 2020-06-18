import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Styles
import TelaStyles from '../styles/TelaStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const Deslogar = ({ navigation }) => {
    return (
        <View style={TelaStyles.container}>
            <Text style={TelaStyles.textSombra}>Deslogou</Text>
            
            <Button onPress={() => navigation.goBack()} text='Voltar' />
        </View>
    )
}

export default Deslogar