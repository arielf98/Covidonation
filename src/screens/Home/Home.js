
import React from 'react'
import { SectionList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../Style/HomeStyle'
import  HeaderLists  from './HeaderLists'
import ListItems from './ListItems'




const DATA = [ 
    {
        data: [
             {  
                title : "Mencuci adalah jalan ninjaku",
                author: "Ariel Febrian",
                price: 15000,
            },
             {  
                title : "cara bikin kue bolu",
                author: "Inggi ci Imutt ",
                price: 12000,
            },
             {  
                title : "belajar laravel pemula",
                author: "Bagus Si tambunan",
                price: 13000,
            },
             {  
                title : "memasak adalah jalan ninjaku",
                author: "okky Si nadiya",
                price: 14000,
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
                                            title ={item.title}
                                            author={item.author}
                                            price={item.price}   />}
                                            
                                            // component header list berisikan component carousel dan logo covidonation
                renderSectionHeader={() => <HeaderLists/> }
            />

        </SafeAreaView>

        
    )
}
