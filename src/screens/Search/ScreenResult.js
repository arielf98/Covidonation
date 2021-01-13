import React, { useContext, useEffect, useState } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/SearchStyle'

import { View, ScrollView, Text } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { ItemLoader, ItemCardContent } from '../../components'

import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'

import database from '@react-native-firebase/database'

const ScreenResult = () => {

    const globalState = useContext(store)
    const { state, dispatch } = globalState
    const navigation = useNavigation()

    const onChangeSearch = query => {
        dispatch({ type: 'SEARCH_TEXT', payload: query })
    }

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: false })
    })

    useEffect(() => {
        setLoading(true)
        database()
            .ref('/contents')
            .once('value')
            .then(snapshot => {
                setDataContent(snapshot.val())
                setLoading(false)
            }
        );
    }, []);

    if (isLoading)
    {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: Parent.colorWhite
            }}>
                <ItemLoader />
            </View>
        );
    }

    return (
        <View style={{
            flex: 1
        }}>
    
            { /* Search Bar */ }
            <View style={Parent.styles.headerView, {
                padding: 10,
                backgroundColor: 'white'
            }}>
                <Searchbar
                    style={styles.searchBarView}
                    inputStyle={styles.searchBarText}
                    placeholder="Pencarian..."
                    onChangeText={onChangeSearch}
                    value={state.searchText}
                />
            </View>
    
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:'white',
            }}
            >

                <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                }}>
                    <Text>Menampilkan hasil pencarian untuk:</Text>
                    <Text style={{fontWeight:'bold'}}>{state.searchText}</Text>
                </View>
    
                <View style={{backgroundColor: Parent.colorWhite2}}>
                    {dataContent.map(item => {
                        if (item == null)
                        {
                            console.log("NULL content skipped (ScreenKontenTerbaru)")
                        }
                        else
                        {
                            return (
                                <ItemCardContent
                                key={item.id || '1'}
                                id={item.id || '1'}
                                title={item.title || 'Title'}
                                authorName={item.author.name || 'Author name'}
                                priceTotal={item.price.total || 'Total price'}
                                thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                                tag={item.tag}
                                navigasi="ScreenContent"
                                />
                            );
                        }
                    })}
                </View>
                
            </ScrollView>
    
        </View>
    )
}

export default ScreenResult