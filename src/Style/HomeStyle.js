import { StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'



//make variable font here for easy maintable
const fontweight = {
    normal : '500',
    bold: 'bold'
}
const colorText = 'white'
const fontSizeText = 16




//make style home page here....
export const style =  StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCard : {
        backgroundColor: '#3a0ca3',
        borderColor: '#3a0ca3',
        borderRadius: 10,
        height: 50,
        width: '95%',
        marginTop: 20,
        padding: 10,
    },

    containerTextStyle: {
        fontWeight: fontweight.normal,
        color: colorText,
        fontSize: fontSizeText,
        marginTop: -8

    },

    containerTextStyle2 : {
        fontWeight: fontweight.bold,
        color: colorText,
        fontSize: fontSizeText,
        marginLeft: '60%',
        marginTop: -24
    },

    avatarContainer: {
        marginTop: 30, 
    },
    
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    cardContentContainer : {
        marginBottom: 30
    },

    carouselContainer: {
        marginTop: 20,
    },

    surface: {
        padding: 8,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        margin: 5,
    },

    cardListContainer: {
        marginTop:10,
        paddingBottom: 150,
        height: '29%',
        width: '95%',
    },

    cardListImage: {
        height: 40,
        width: 40
    },


})