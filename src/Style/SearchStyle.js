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
    topBarView2:
    {
        backgroundColor: Parent.colorWhite,
    },
    topBarIcon2:
    {
        color: Parent.colorGreyMin,
    },
    topBarText2:
    {
        color: Parent.colorGreyMid,
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
        color: Parent.colorBlueMax,
        position: 'absolute',
        right: 0,
        marginRight: 5,
        marginTop: 7,
    },
    sectionMore:
    {
        fontSize: Parent.sizeFontMid,
        color: Parent.colorBlueMax,
        position: 'absolute',
        right: 0,
        marginRight: 5,
        marginTop: 5,
    },
    sectionDivider:
    {
        height: 1,
        backgroundColor: Parent.colorWhite,
    },

    // Mini Content
    miniContentView:
    {
        width: 170,
        marginLeft: 0,
    },
    miniContentImg:
    {
        width: 155,
        height: 130,
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
        fontSize: Parent.sizeFontMid,
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
