import React, {useContext, useEffect} from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import { Card, Title, TouchableRipple, Appbar } from 'react-native-paper'
import ItemKoleksi from './ItemKoleksi'
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigation } from '@react-navigation/native'
import { store } from '../../Config/Contex/store'
import * as Parent from '../../Style/ParentStyle'

const DATA = [
    {
        id: "1",
        judulKonten: "Too Much to Ask",
        namaKreator: "Niall Horan",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: "2",
        judulKonten: "Again",
        namaKreator: "YUI",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: "3",
        judulKonten: "Stuck with U",
        namaKreator: "Ariana Grande & Justin Bieber",
        gambarKonten: "https://picsum.photos/700",
    },
]



export default function ListKotakKoleksi() {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation()

    useBackHandler(() => {
        dispatch({ type: 'IS_HIDE', payload: false })
        navigation.goBack()
        return true
    })

    const renderItem = ({item}) => {
        return(
        
            <ItemKoleksi
                namaKreator = {item.namaKreator}
                judul={item.judulKonten} 
                gambarKonten= { item.gambarKonten }/>
        )
        
    }


    return (
        <View style={{ backgroundColor: 'white', height: '100%' }} >
            <Appbar style={{ backgroundColor: Parent.colorBlueMax }} >
                <Appbar.BackAction onPress={() => {
                    navigation.goBack('profile')
                    dispatch({ type: 'IS_HIDE', payload: false })
                    }}/>
                    <Title style={{ color: 'white' }}> Kotak Koleksi </Title>
            </Appbar>

            <SafeAreaView style={{ marginTop: 10, marginBottom: 58 }}>
                <FlatList
                    data={DATA}
                   renderItem={renderItem}
                   keyExtractor={item => item.id} />
            </SafeAreaView>
            
        </View>
    )
}
