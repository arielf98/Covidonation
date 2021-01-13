import React, { useContext, useEffect, useState } from 'react'
import { styles } from '../../Style/ProfileStyle'

import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ItemLoader, ItemMiniContent } from '../../components'

import database from '@react-native-firebase/database'
import { store } from '../../Config/Contex/store'
import { useNavigation } from '@react-navigation/native'

export default function KotakKoleksiItem() {

    const globalState = useContext(store)
    const {dispatch} = globalState
    const navigation = useNavigation()

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);
    
    useEffect(() => {
        database()
            .ref('/contents')
            .once('value')
            .then(snapshot => {
                setDataContent(snapshot.val())
                setLoading(false)
            }
        );
    }, []);

    return (
     
        <SafeAreaView style={styles.safeAreaViewKotakKoleksi}>
        <View style={styles.itemKotakKoleksi}>

           
                    <TouchableRipple  
                    onPress={() => {
                        navigation.navigate("Kotak Koleksi")
                        dispatch({ type: 'IS_HIDE', payload: true })
                    }}

                        rippleColor="rgba(0, 0, 0, .32)"
                        style={{ marginBottom: 10 }}
                        borderless= {true}  >
                        
                        <View style>
                            <Icon   style={styles.kotakKoleksiIcon}
                                    name="chevron-right"
                                    size={15} />
                                <Text style={styles.titleKotakKoleksi } > Kotak Koleksi </Text>
                            </View>
                    </TouchableRipple>

                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={true}
                    >
                
      
                    {isLoading ? <ItemLoader /> : 
                    (
                        dataContent.map(item => {

                            if (item == null)
                            {
                                console.log("NULL content skipped (SectionNewest)")
                            }
                            else
                            {
                                return (
                                    <ItemMiniContent
                                    key={item.id || '1'}
                                    id={item.id || '1'}
                                    title={item.title || 'Title'}
                                    authorName={item.author.name || 'Author name'}
                                    thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                                    navigasi="DetailKotakKoleksi"
                                    willShowNavIfBack={true}
                                    />
                                );
                            }

                        })
                    )}

                    </ScrollView>

        </View>
        </SafeAreaView>
      
    )
}
