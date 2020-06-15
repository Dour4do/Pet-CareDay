import * as React from 'react'
import { View, Text, Image } from 'react-native'

// Components
import Button from '../components/Button'
import Input from '../components/Input'

// Styles
import TelaStyles from '../styles/TelaStyles'

const Hospedagem = ({ navigation }) => {

    return (
        <View style={TelaStyles.container}>

            <View style={TelaStyles.containerFora}>
            <View style={TelaStyles.linha}>
                <View style = {TelaStyles.containerFora}>
                <Image style={TelaStyles.tinyLogo} source={{
                    uri: 'https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170404956/75868863-cat-house-pet-icon-image-vector-illustration-design-black-and-white.jpg'
                }} />
                <Text style={TelaStyles.textNormal}>Cuidador</Text>
                </View>
                <View style={TelaStyles.containerDentro}>
                    <Text style={TelaStyles.textSombra}>Endereço</Text>
                    <Text style={TelaStyles.textSombra}>Contatos</Text>
                    <View style={TelaStyles.linhaDentro}>
                        <Image style={TelaStyles.estrelinha} source={{
                            uri: 'https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry.png'
                        }} />
                        <Text style={TelaStyles.textSombra}>Nota</Text>
                    </View>
                </View>
            </View>
            </View>

            <View style={TelaStyles.containerFora}>
            <View style={TelaStyles.linha}>
                <View style = {TelaStyles.containerFora}>
                <Image style={TelaStyles.tinyLogo} source={{
                    uri: 'https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170404956/75868863-cat-house-pet-icon-image-vector-illustration-design-black-and-white.jpg'
                }} />
                <Text style={TelaStyles.textNormal}>Cuidador</Text>
                </View>
                <View style={TelaStyles.containerDentro}>
                    <Text style={TelaStyles.textSombra}>Endereço</Text>
                    <Text style={TelaStyles.textSombra}>Contatos</Text>
                    <View style={TelaStyles.linhaDentro}>
                        <Image style={TelaStyles.estrelinha} source={{
                            uri: 'https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry.png'
                        }} />
                        <Text style={TelaStyles.textSombra}>Nota</Text>
                    </View>
                </View>
            </View>
            </View>

            <View style={TelaStyles.containerFora}>
            <View style={TelaStyles.linha}>
                <View style = {TelaStyles.containerFora}>
                <Image style={TelaStyles.tinyLogo} source={{
                    uri: 'https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170404956/75868863-cat-house-pet-icon-image-vector-illustration-design-black-and-white.jpg'
                }} />
                <Text style={TelaStyles.textNormal}>Cuidador</Text>
                </View>
                <View style={TelaStyles.containerDentro}>
                    <Text style={TelaStyles.textSombra}>Endereço</Text>
                    <Text style={TelaStyles.textSombra}>Contatos</Text>
                    <View style={TelaStyles.linhaDentro}>
                        <Image style={TelaStyles.estrelinha} source={{
                            uri: 'https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry.png'
                        }} />
                        <Text style={TelaStyles.textSombra}>Nota</Text>
                    </View>
                </View>
            </View>
            </View>         

            <View style={TelaStyles.containerFora}>
            <View style={TelaStyles.linha}>
                <View style = {TelaStyles.containerFora}>
                <Image style={TelaStyles.tinyLogo} source={{
                    uri: 'https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170404956/75868863-cat-house-pet-icon-image-vector-illustration-design-black-and-white.jpg'
                }} />
                <Text style={TelaStyles.textNormal}>Cuidador</Text>
                </View>
                <View style={TelaStyles.containerDentro}>
                    <Text style={TelaStyles.textSombra}>Endereço</Text>
                    <Text style={TelaStyles.textSombra}>Contatos</Text>
                    <View style={TelaStyles.linhaDentro}>
                        <Image style={TelaStyles.estrelinha} source={{
                            uri: 'https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry.png'
                        }} />
                        <Text style={TelaStyles.textSombra}>Nota</Text>
                    </View>
                </View>
            </View>
            </View> 

            <View style={TelaStyles.containerFora}>
            <View style={TelaStyles.linha}>
                <View style = {TelaStyles.containerFora}>
                <Image style={TelaStyles.tinyLogo} source={{
                    uri: 'https://previews.123rf.com/images/jemastock/jemastock1704/jemastock170404956/75868863-cat-house-pet-icon-image-vector-illustration-design-black-and-white.jpg'
                }} />
                <Text style={TelaStyles.textNormal}>Cuidador</Text>
                </View>
                <View style={TelaStyles.containerDentro}>
                    <Text style={TelaStyles.textSombra}>Endereço</Text>
                    <Text style={TelaStyles.textSombra}>Contatos</Text>
                    <View style={TelaStyles.linhaDentro}>
                        <Image style={TelaStyles.estrelinha} source={{
                            uri: 'https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry.png'
                        }} />
                        <Text style={TelaStyles.textSombra}>Nota</Text>
                    </View>
                </View>
            </View>
            </View> 
            
                

            <View >
                <Button  onPress={() => navigation.navigate('Principal')} text='Voltar' />
            </View>

        </View>

    )
}

export default Hospedagem