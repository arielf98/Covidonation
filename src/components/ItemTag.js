import React, { useContext } from 'react'
import * as Parent from '../Style/ParentStyle'

import { Text, TouchableOpacity } from 'react-native'

import { store } from '../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

export default ItemTag = item => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={{
            alignSelf: 'flex-start',
            borderColor: item.warna,
            borderWidth: 2,
            borderRadius: 12,
            paddingVertical: 4,
            paddingHorizontal: 8,
            marginBottom: item.marginBottom || 10,
            marginRight: 10,
        }}
        onPress={() => {
            dispatch({ type: 'SEARCH_TEXT', payload: item.teks })
            dispatch({ type: 'IS_HIDE', payload: true })
            navigation.navigate('ScreenResult')
        }}
        >
            <Text style={{
                color: item.warna,
                fontSize: Parent.sizeFontMin,
            }}>
                {item.teks}
            </Text>
        </TouchableOpacity>
        
        
    )
}