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
        backgroundColor: Parent.colorBlueMax,
    },
    topBarIcon:
    {
        
    },
    topBarText:
    {
        
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
        color: Parent.colorGreyMid,
        fontSize: Parent.sizeFontMax,
        fontWeight: 'bold',
    },
    sectionIcon:
    {
        fontSize: Parent.sizeFontMin,
        color: Parent.colorBlueMid,
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
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMax,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    miniContentAuthor:
    {
        fontSize: Parent.sizeFontMin,
        color: Parent.colorGreyMin,
        marginLeft: 5,
    },
    miniContentIcon:
    {
        marginTop: 3,
        color: Parent.colorGreyMin,
        fontSize: Parent.sizeFontMin-1,
    },

    // Search Bar
    searchBarView:
    {
        backgroundColor: Parent.colorBlueMin,
        borderRadius: 10,
    },
    searchBarText:
    {
        color: Parent.colorGreyMid,
    },

    // Card Content
    cardWrapper:
    {
        borderRadius: 15,
        backgroundColor: Parent.colorWhite,
        padding: 10,
        margin: 10,
    },
    cardContentView:
    {
        flexDirection: 'row',
    },
    cardContentImg:
    {
        width: 85,
        height: 85,
        borderRadius: 15,
    },
    cardContentDetailView:
    {
        marginLeft: 15,
    },
    cardContentTitle:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMax,
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
        fontSize: Parent.sizeFontMid,
        color: Parent.colorGreyMin,
        marginLeft: 5,
    },
    cardContentTagView:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    cardContentIcon:
    {
        marginTop: 5,
        color: Parent.colorGreyMin,
        fontSize: Parent.sizeFontMin-1,
    },


})
