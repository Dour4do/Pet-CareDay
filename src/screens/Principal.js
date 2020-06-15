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

const Principal = ({ navigation }) => {

    return (
        <View style={HomeStyles.container}>
            <Formik
               
            >
                
                    <View style={HomeStyles.tpForm}>
                        <Text>Digite o endereço:</Text>
                        <Input/>
                        <Text>Informe a Data</Text>
                        <Input/>
                        <View style={HomeStyles.row}>
                        <Button onPress={() => navigation.navigate('Hospedagem')} text='Hospedagem' />
                        <Button onPress={() => navigation.navigate('Creche')} text='Creche' />
                        <Button onPress={() => navigation.navigate('PetSitter')} text='Pet Sitter' />
                        <Button onPress={() => navigation.navigate('Passeios')} text='Passeios' />
                        </View>
                    </View>
                    
                
            </Formik>
        </View>
    );
}
export default Principal