import React from 'react'
import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/SearchStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ItemCardContent } from '../../components'

const DataKontenTeratas = [
    {  
        id: 1,
        judulKonten: "Rolling in The Deep",
        namaKreator: "Adele",
        hargaKonten: "Rp 35.000",
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
        id: 2,
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
        id: 3,
        judulKonten: "Dynamite",
        namaKreator: "BTS",
        hargaKonten: "Rp 120.000",
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
        id: 5,
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
];

const ScreenKontenTeratas = () => {

    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <Appbar.Header style={styles.topBarView}>
                <Appbar.BackAction onPress={() => { navigation.goBack();}} style={styles.topBarIcon} />
                <Appbar.Content title="Konten Teratas"  style={styles.topBarText} />
            </Appbar.Header>

            <View>
                {DataKontenTeratas.map(prop => {
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

export default ScreenKontenTeratas