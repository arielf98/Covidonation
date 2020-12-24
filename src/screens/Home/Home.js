
import React from 'react'
import { SectionList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../Style/HomeStyle'
import  HeaderLists  from './HeaderLists'
import ListItems from './ListItems'

// data dari database 
const DATA = [ 
    {
        data: [
             {  
                id: 1,
                title : "Mencuci adalah jalan ninjaku",
                author: "Ariel Febrian",
                price: 15000,
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
                title : "cara bikin kue bolu",
                author: "Inggi ci Imutt ",
                price: 12000,
                tag: [
                    {
                        id: 1,
                        teks: "Memasak",
                        warna: "#65D661",
                    },
                    {
                        id: 2,
                        teks: "Kue",
                        warna: "#8455C2",
                    },
                    {
                        id: 3,
                        teks: "Cooking",
                        warna: "#FFB97D",
                    }
                ],
            },
             {  
                id: 3,
                title : "belajar laravel pemula",
                author: "Bagus Si tambunan",
                price: 13000,
                tag: [
                    {
                        id: 1,
                        teks: "Pemrograman",
                        warna: "#65D661",
                    },
                    {
                        id: 2,
                        teks: "Laravel",
                        warna: "#8455C2",
                    },
                    {
                        id: 3,
                        teks: "Newbie",
                        warna: "#FFB97D",
                    }
                ],
            },
             {  
                id: 4,
                title : "memasak adalah jalan ninjaku",
                author: "okky Si nadiya",
                price: 14000,
                tag: [
                    {
                        id: 1,
                        teks: "MemasakLagi",
                        warna: "#65D661",
                    },
                    {
                        id: 2,
                        teks: "JalanNinjaLagi",
                        warna: "#8455C2",
                    },
                    {
                        id: 3,
                        teks: "Anjaaaay",
                        warna: "#FFB97D",
                    }
                ],
            },
        ]
    }
]

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <SectionList 
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ListItems  // setiap item yang ada di list ada di component ListItems
                                            key={item.id}
                                            title ={item.title}
                                            author={item.author}
                                            price={item.price}
                                            tag={item.tag}
                                               />}
                                            
                                            // component header list berisikan component carousel dan logo covidonation
                renderSectionHeader={() => <HeaderLists/> }
            />

        </SafeAreaView>

        
    )
}
