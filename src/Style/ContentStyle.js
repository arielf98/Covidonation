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
        backgroundColor: Parent.colorWhite,
    },
    topBarIcon:
    {
        color: Parent.colorGreyMin,
    },
    topBarText:
    {
        color: Parent.colorGreyMid,
    },
    topBarView2:
    {
        backgroundColor: Parent.colorBlueMax,
    },
    topBarIcon2:
    {
        
    },
    topBarText2:
    {
        
    },

    // Top Carousel
    previewImg:
    {
        height:250
    },

    // Section
    sectionTitle:
    {
        color: Parent.colorBlueMax,
        fontSize: Parent.sizeFontMax-2,
        marginVertical: 10,
    },

    // Content
    contentType:
    {
        backgroundColor: Parent.colorGreyMin,
        fontSize: Parent.sizeFontMin,
        color: Parent.colorWhite,
        marginVertical: 10,
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    contentTitle:
    {
        fontSize: Parent.sizeFontMax,
        color: Parent.colorGreyMax,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    contentDesc:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
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
        fontSize: Parent.sizeFontMid,
        marginTop: 10,
        marginLeft: 10,
        color: Parent.colorGreyMax
    },

    // Purchase Bar (Fixed Bottom)
    purchaseBarView:
    {
        backgroundColor: Parent.colorBlueMid,
        height: 60,
        flexDirection: 'row',
    },
    purchaseBarPrice:
    {
        fontSize: Parent.sizeFontMid,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },
    purchaseBarAction:
    {
        backgroundColor: Parent.colorWhite,
        fontSize: Parent.sizeFontMid,
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

    textDef:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMid,
    },
    textBold:
    {
        fontWeight: 'bold',
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMax,
    },
    paymentImg:
    {
        // width:150,
    }


})
