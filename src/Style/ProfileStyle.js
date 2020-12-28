import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({
    
    avatarProfile: {
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 30
      
    },

    btnEditProfile: {
        width: '35%',
        marginLeft: 30,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10
    },

    btnHalamanKreator: {
        width: '50%',
        marginLeft: '48%',
        marginTop: '-10%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        color: 'blue'
        
    },

    profileName: {
        position: 'absolute',
        marginLeft: '35%',
        marginTop: '10%',
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },

    headerContent: {
        backgroundColor: '#0096c7',
        height: 230,

    },

    itemKoleksi: {
        marginHorizontal: 5,
        width: 180,
    },

    itemKotakKoleksi: {
        // backgroundColor: 'pink',
        height: 260
    },

    kotakKoleksiCard: {
        borderRadius: 15,
        height: 150,
    },

    kotakKoleksiAuthor: {
        flex:1,
        // backgroundColor: 'yellow',
        marginBottom: 10,
        justifyContent: 'space-evenly',
        alignItems: 'baseline'
    },

    kotakKoleksiIcon: {
        position: 'absolute',
        marginLeft: '96%',
        marginTop: 7,
        // marginBottom: 30,
        // backgroundColor: 'yellow'
    },

    profileEmail: {
        position: 'absolute',
        marginLeft: '35%',
        marginTop: '18%',
        fontSize: 14,
        color: 'white'
    },

    safeAreaViewKotakKoleksi: {
        // flex: 1,
        marginTop: 10
    },

    settingCard: {
        marginTop: 10,
        borderColor: 'black',
        marginHorizontal: 20
    },

    settingCardTitle: {
        position: 'absolute',
        marginLeft: 38,
        marginTop: 6
    },

    titleKotakKoleksi: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 30,
        color: 'grey',
        // backgroundColor: 'yellow'

    },
 

})