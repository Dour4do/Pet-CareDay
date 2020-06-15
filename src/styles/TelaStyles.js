import { StyleSheet } from 'react-native'

const TelaStyles = StyleSheet.create({
    textNormal: {
        color: 'black',
        fontSize: 20,
    },
    textSombra: {
        color: '#756464',
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        //justifyContent:'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingTop: 20,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20
    },
    containerFora:{
        flex:1,
        backgroundColor: '#F4F4F4',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignContent:'flex-start',

    },
    containerDentro:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 20,
    },
    linha: {
        flex:1,
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-start',
        //justifyContent: 'space-around',
        //alignItems: 'center',
    },
    linhaDentro: {
        flex:1,
        flexDirection:'row',
        //alignItems: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    estrelinha:{

        width:20,
        height:20,
        alignItems:'center',
    },
});

export default TelaStyles;