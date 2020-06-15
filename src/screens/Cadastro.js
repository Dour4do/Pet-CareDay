import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

// Api
import filasApi from '../axios/Axios'
import { getFila, incQtd } from '../axios/Axios'

// Styles
import HomeStyles from '../styles/HomeStyles'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

const Cadastro = ({ navigation }) => {

    return (
        <View style={HomeStyles.container}>
            <Formik>
                <View style={HomeStyles.tpForm}>
                    <Text>Email:</Text>
                    <Input />
                    <Text>Nome:</Text>
                    <Input />
                    <Text>Sobrenome:</Text>
                    <Input />
                    <Text>Senha</Text>
                    <Input />
                    <Button onPress={() => navigation.navigate('Home')} text='Cadastrar' />
                    <Button onPress={() => navigation.navigate('Home')} text='Voltar' />
                </View>
            </Formik>
        </View>
    );
}
export default Cadastro