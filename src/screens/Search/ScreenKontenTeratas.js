import React, { useContext } from 'react'
import * as Parent from '../../Style/ParentStyle'

import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { ContainerTabPopular } from '../Search'

import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'

const ScreenKontenTeratas = () => {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation()

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: false })
    })

    return (
    <View style={{flex: 1}}>

        <View style={Parent.styles.headerView}>
            <Appbar.Header style={Parent.styles.headerBody}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: false })
                }}
                style={Parent.styles.headerIcon} />
                <Appbar.Content title="Konten Teratas" style={Parent.styles.headerText} />
            </Appbar.Header>
        </View>
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

            <View style={Parent.styles.headerMargin}/>

            <View>
                <ContainerTabPopular />
            </View>

        </ScrollView>

    </View>
    )
}

export default ScreenKontenTeratas