import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemCardContent } from '../../components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Parent from '../../Style/ParentStyle'

const DataTabHarian = [
    {  
        id: 1,
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
        id: 2,
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
];

const DataTabMingguan = [
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

const DataTabBulanan = [
    {  
        id: 1,
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
        id: 2,
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
];

function TabHarian() {
    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {DataTabHarian.map(prop => {
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
    );
  }
  
function TabMingguan() {
    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {DataTabMingguan.map(prop => {
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
    );
}

function TabBulanan() {
    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {DataTabBulanan.map(prop => {
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
    );
}

const Tab = createMaterialTopTabNavigator();

const ContainerTabPopular = () => {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Harian" component={TabHarian} />
        <Tab.Screen name="Mingguan" component={TabMingguan} />
        <Tab.Screen name="Bulanan" component={TabBulanan} />
      </Tab.Navigator>
    )
}

export default ContainerTabPopular