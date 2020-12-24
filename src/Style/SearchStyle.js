import { StyleSheet } from 'react-native'
import * as Parent from './ParentStyle'

export const styles = StyleSheet.create({

    rowContainer:
    {
        flexDirection: 'row'
    },

    //Touchable
    touchableView:
    {
        borderRadius: 15
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
        color: Parent.greyColorMid,
        fontSize: Parent.titleFontSize,
        fontWeight: 'bold',
    },
    sectionIcon:
    {
        fontSize: Parent.defFontSize+2,
        color: Parent.defBlue,
        position: 'absolute',
        right: 0,
        marginRight: 5,
        marginTop: 7,
    },

    // Mini Content
    miniContentView:
    {
        width: 210,
        marginLeft: 10,
    },
    miniContentImg:
    {
        width: 180,
        height: 150,
        marginBottom: 10,
        borderRadius: 15,
    },
    miniContentTitle:
    {
        fontSize: Parent.defFontSize+2,
        color: Parent.greyColorMost,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    miniContentAuthor:
    {
        fontSize: Parent.defFontSize-1,
        color: Parent.greyColorLow,
        marginLeft: 5,
    },

    // Search Bar
    searchBarView:
    {
        backgroundColor: '#EAF1F8',
        borderRadius: 10,
    },
    searchBarText:
    {
        color: Parent.greyColorMid,
    },

    // Card Content
    cardContentView:
    {
        flexDirection: 'row',
        padding: 10,
    },
    cardContentImg:
    {
        width: 90,
        height: 90,
        borderRadius: 15,
    },
    cardContentDetailView:
    {
        marginLeft: 15,
    },
    cardContentTitle:
    {
        fontSize: Parent.titleFontSize,
        color: Parent.greyColorMost,
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 5,
    },
    cardContentTextView:
    {
        flexDirection: 'row',
        marginVertical: 2,
    },
    cardContentText:
    {
        fontSize: Parent.defFontSize,
        color: Parent.greyColorLow,
        marginLeft: 5,
    },


})
