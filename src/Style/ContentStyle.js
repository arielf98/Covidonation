import { StyleSheet } from 'react-native'
import * as Parent from './ParentStyle'

export const styles = StyleSheet.create({

    rowContainer:
    {
        flexDirection: 'row'
    },

    // Top Bar
    topBarView:
    {
        backgroundColor: 'white',
    },
    topBarIcon:
    {
        color: Parent.greyColorLow,
    },
    topBarText:
    {
        color: Parent.greyColorMid,
    },

    // Top Carousel
    previewImg:
    {
        height:250
    },

    // Section
    sectionTitle:
    {
        color: Parent.defBlue,
        fontSize: Parent.titleFontSize-2,
        marginVertical: 10,
    },

    // Content
    contentType:
    {
        backgroundColor: '#B3B3B3',
        fontSize: Parent.defFontSize-2,
        color: 'white',
        marginVertical: 10,
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    contentTitle:
    {
        fontSize: Parent.titleFontSize,
        color: Parent.greyColorMost,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    contentDesc:
    {
        fontSize: Parent.defFontSize,
        color: Parent.greyColorLow,
    },

    // Author
    authorImg:
    {
        width:50,
        height:50,
        borderRadius:100,
    },
    authorName:
    {
        fontWeight: 'bold',
        fontSize: Parent.defFontSize+2,
        marginTop: 10,
        marginLeft: 10,
        color: Parent.greyColorMost
    },

    // Purchase Bar (Fixed Bottom)
    purchaseBarView:
    {
        backgroundColor: '#5885AF',
        height: 60,
        flexDirection: 'row',
    },
    purchaseBarPrice:
    {
        fontSize: Parent.titleFontSize-2,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },
    purchaseBarAction:
    {
        backgroundColor: 'white',
        fontSize: Parent.titleFontSize-2,
        color: '#5885AF',
        marginVertical: 10,
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        position: 'absolute',
        right: 0,
        fontWeight: 'bold',
        marginRight: 20,
    },


})
