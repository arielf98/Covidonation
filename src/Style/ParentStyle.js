import { StyleSheet, Dimensions } from 'react-native'

const sizeFontMin = 12
const sizeFontMid = 14
const sizeFontMax = 18
const colorGreyMax = '#333333'
const colorGreyMid = '#6D6D6D'
const colorGreyMin = '#A6A6A6'
const colorBlueMax = '#1081B5'
const colorBlueMid = '#93C0D7'
const colorBlueMin = '#DDE9F1'
const colorWhite = '#FFFFFF'
const colorWhite2 = '#F2F2F2'
const colorSecondary = '#FFD47F'
const colorRipple = colorBlueMid
const colorStatusBar = colorBlueMax

export{
    sizeFontMin,
    sizeFontMid,
    sizeFontMax,
    colorGreyMax,
    colorGreyMid,
    colorGreyMin,
    colorBlueMax,
    colorBlueMid,
    colorBlueMin,
    colorWhite,
    colorWhite2,
    colorSecondary,
    colorRipple,
    colorStatusBar
}

export const styles = StyleSheet.create({

    headerView:
    {
        zIndex: 5,
        position: 'absolute',
        top: 0,
        width: Dimensions.get('window').width,
    },
    headerBody:
    {
        backgroundColor: colorBlueMax,
    },
    headerIcon:
    {
        
    },
    headerText:
    {
        
    },
    headerMargin:
    {
        height:55,
    }

})
