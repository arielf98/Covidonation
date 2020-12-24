import { StyleSheet } from 'react-native'

const defFontSize = 16
const titleFontSize = 20
const primaryTextColor = '#666666'
const secondaryTextColor = '#999999'


export const styles = StyleSheet.create({

    rowContainer:
    {
        flexDirection: 'row'
    },

    // Section (Tag, Popular, Newest)
    sectionView:
    {
        marginVertical: 10,
    },
    sectionHeader:
    {
        marginHorizontal:10,
        marginTop: 5,
        marginBottom: 15,
    },
    sectionTitle:
    {
        color: primaryTextColor,
        fontSize: titleFontSize,
        fontWeight: 'bold',
    },
    sectionIcon:
    {
        // fontSize: defFontSize,
        // color: "#4D96DE",
        // position: 'absolute',
        // right: 0,
    },

    // Mini Content
    miniContentView:
    {
        width: 210,
        marginLeft: 7,
    },
    miniContentImg:
    {
        width: 180,
        height: 150,
        marginBottom: 10,
        borderRadius: 20,
    },
    miniContentTitle:
    {
        fontSize: titleFontSize,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    miniContentAuthor:
    {
        fontSize: defFontSize,
        color: secondaryTextColor,
        marginLeft: 5,
    },

})
