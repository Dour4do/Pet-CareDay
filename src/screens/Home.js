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

const Home = ({ navigation }) => {

    return (
        <View style={HomeStyles.container}>
            <Formik>
                <View style={HomeStyles.tpForm}>
                    <Text>Email:</Text>
                    <Input />
                    <Text>senha</Text>
                    <Input />
                    <Button onPress={() => navigation.navigate('Principal')} text='Login' />
                    <Button onPress={() => navigation.navigate('Cadastro')} text='Cadastro' />
                </View>
            </Formik>
        </View>
    );
}
export default Home