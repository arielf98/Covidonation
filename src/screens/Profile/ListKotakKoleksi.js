import React from 'react'
import { View, FlatList, SafeAreaView } from 'react-native'
import ItemKoleksi from './ItemKoleksi'


const DATA = [
    {
        id: 1,
        judulKonten: "Too Much to Ask",
        namaKreator: "Niall Horan",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: 2,
        judulKonten: "Again",
        namaKreator: "YUI",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: 3,
        judulKonten: "Stuck with U",
        namaKreator: "Ariana Grande & Justin Bieber",
        gambarKonten: "https://picsum.photos/700",
    },
]



export default function ListKotakKoleksi() {

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

            <SafeAreaView style={{ marginTop: 10 }}>
                <FlatList
                    data={DATA}
                   renderItem={renderItem}
                   keyExtractor={item => item.id} />
            </SafeAreaView>
            
        </View>
    )
}
