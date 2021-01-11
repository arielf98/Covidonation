import React, {useContext} from 'react'
import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/SearchStyle'
import * as Parent from '../../Style/ParentStyle'
import { ItemCardContent } from '../../components'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'

const DataKontenTerbaru = [
    {  
        id: 1,
        judulKonten: "Dynamite",
        namaKreator: "BTS",
        hargaKonten: "Rp 120.000",
        gambarKonten: "https://picsum.photos/600",
        tag: [
            {
                id: 1,
                teks: "Mencuci",
                warna: "#65D661",
            },
            {
                id: 2,
                teks: "JalanNinja",
                warna: "#8455C2",
            },
            {
                id: 3,
                teks: "Anjay",
                warna: "#FFB97D",
            }
        ],
    },
    {  
        id: 2,
        judulKonten: "Rolling in The Deep",
        namaKreator: "Adele",
        hargaKonten: "Rp 35.000",
        gambarKonten: "https://picsum.photos/800",
        tag: [
            {
                id: 1,
                teks: "Mencuci",
                warna: "#65D661",
            },
            {
                id: 2,
                teks: "JalanNinja",
                warna: "#8455C2",
            },
            {
                id: 3,
                teks: "Anjay",
                warna: "#FFB97D",
            }
        ],
    },
    {  
        id: 3,
        judulKonten: "Kangen",
        namaKreator: "Dewa 19",
        hargaKonten: "Gratis",
        gambarKonten: "https://picsum.photos/700",
        tag: [
            {
                id: 1,
                teks: "Mencuci",
                warna: "#65D661",
            },
            {
                id: 2,
                teks: "JalanNinja",
                warna: "#8455C2",
            },
            {
                id: 3,
                teks: "Anjay",
                warna: "#FFB97D",
            }
        ],
    },
    {  
        id: 4,
        judulKonten: "Rolling in The Deep",
        namaKreator: "Adele",
        hargaKonten: "Rp 35.000",
        gambarKonten: "https://picsum.photos/900",
        tag: [
            {
                id: 1,
                teks: "Mencuci",
                warna: "#65D661",
            },
            {
                id: 2,
                teks: "JalanNinja",
                warna: "#8455C2",
            },
            {
                id: 3,
                teks: "Anjay",
                warna: "#FFB97D",
            }
        ],
    },
    {  
        id: 5,
        judulKonten: "Kangen",
        namaKreator: "Dewa 19",
        hargaKonten: "Gratis",
        gambarKonten: "https://picsum.photos/500",
        tag: [
            {
                id: 1,
                teks: "Mencuci",
                warna: "#65D661",
            },
            {
                id: 2,
                teks: "JalanNinja",
                warna: "#8455C2",
            },
            {
                id: 3,
                teks: "Anjay",
                warna: "#FFB97D",
            }
        ],
    },
];

const ScreenKontenTerbaru = () => {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation();

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: false })
    })

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: Parent.colorWhite2}}
        >

            <Appbar.Header style={styles.topBarView}>
            <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: false })
                }}

                     style={styles.topBarIcon} />
                <Appbar.Content title="Konten Terbaru"  style={styles.topBarText} />
            </Appbar.Header>

            <View>
                {DataKontenTerbaru.map(prop => {
                return (
                    <ItemCardContent
                    key={prop.id}
                    id={prop.id}
                    judulKonten={prop.judulKonten}
                    namaKreator={prop.namaKreator}
                    hargaKonten={prop.hargaKonten}
                    gambarKonten={prop.gambarKonten}
                    tag={prop.tag}
                    />
                );
                })}
            </View>

        </ScrollView>
    )
}

export default ScreenKontenTerbaru