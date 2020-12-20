
import React from 'react'
import { Alert, SectionList, View, StyleSheet, Text, Image } from 'react-native'
import { Avatar, Card, Paragraph, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../Style/HomeStyle'
import  HeaderLists  from './HeaderLists'
import ListItems from './ListItems'



const DATA = [
    {
        data: [
             {  
                title : "judul 1",
                author: "Ariel Febrian",
                price: 15000,
            },
             {  
                title : "judul 2",
                author: "Inggi ci Imutt ",
                price: 12000,
            },
             {  
                title : "judul 3",
                author: "Bagus Si tambunan",
                price: 13000,
            },
             {  
                title : "judul 4",
                author: "okky Si nadiya",
                price: 14000,
            },
        ]
    },

]

export function HomeScreen() {

    return (
        <SafeAreaView style={styles.containerSafeArea}>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ListItems 
                                            title ={item.title}
                                            author={item.author}
                                            price={item.price}   />}

                renderSectionHeader={() => <HeaderLists/> }
            />

        </SafeAreaView>

        
    )
}
