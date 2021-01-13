import React, { useContext, useEffect, useState } from 'react'
import * as Parent from '../../Style/ParentStyle'

import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { ItemLoader, ItemCardContent } from '../../components'

import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'

import database from '@react-native-firebase/database'

const ScreenKontenTerbaru = () => {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation()

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: false })
    })

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
    <View style={{flex: 1}}>

        <View style={Parent.styles.headerView}>
            <Appbar.Header style={Parent.styles.headerBody}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: false })
                }}
                style={Parent.styles.headerIcon} />
                <Appbar.Content title="Konten Terbaru" style={Parent.styles.headerText} />
            </Appbar.Header>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        style={{backgroundColor: Parent.colorWhite2}}
        >

            <View style={Parent.styles.headerMargin}/>

            <View>
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
                            willShowNavIfBack={false}
                            />
                        );
                    }
                })}
            </View>

        </ScrollView>

    </View>
    )
}

export default ScreenKontenTerbaru