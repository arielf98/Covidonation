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
export const styles =  StyleSheet.create({
    containerSafeArea: {
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

    // surface: {
    //     padding: 8,
    //     height: 80,
    //     width: 80,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     elevation: 4,
    //     margin: 5,
    // },

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

    imageLogo: {

        height: 200,
        width: 200,
    },

    container: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        padding: 5,
        marginVertical: 2,
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    // title: {
    //     fontSize: 24
    // },

    // title: {
    //     fontSize: 32,
    // },
    cardItem: {
        borderRadius: 9,
    },
    cardItemImage: {
        width: '25%',
        height: 100,
        borderRadius: 9,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 10,
    },

    detailContainer: {
        marginStart: 125,
        marginTop: 20,
        marginBottom: -130,
    },
    titleCardItem: {
        marginLeft: 5
    },
    // paragraph: {
    //     overflow: 'hidden',
    //  },


})