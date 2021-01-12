import React, { useEffect, useState, useContext } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/ContentStyle'

import { Text, View, Image, ScrollView, Dimensions, Alert } from 'react-native'
import { Paragraph, Appbar, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SectionCarousel } from '../Content'
import { ItemLoader, ItemTag } from '../../components'

import database from '@react-native-firebase/database'
import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'

export default ScreenContent = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);

    useBackHandler(()=> {
        navigation.goBack()

        if (state.isFromMiniContent){
            state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: false }) :
                dispatch({ type: 'IS_HIDE', payload: true })
        } else {
            state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) :
                dispatch({ type: 'IS_HIDE', payload: false })
        }
        return true
    })

    useEffect(() => {
        database()
            .ref('/contents/' + state.selectedContentId)
            .once('value')
            .then(snapshot => {
                setDataContent(snapshot.val())
                setLoading(false)
            }
        );
    }, []);

    // console.log("Length: " + dataContent.length);

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

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <LinearGradient
                colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    width: Dimensions.get('window').width,
                    height: 60
                }}
            >
                <Appbar.Header style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <Appbar.BackAction onPress={() => { 
                        navigation.pop()

                        if (state.isFromMiniContent) {
                            return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: false }) :
                                dispatch({ type: 'IS_HIDE', payload: true })
                        } else {
                        return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) :
                                dispatch({ type: 'IS_HIDE', payload: false })
                        }

                        }}
                        style={styles.topBarIcon}
                    />
                    <Appbar.Content/>
                    <Appbar.Action icon="dots-vertical" style={styles.topBarIcon} onPress={ () => Alert.alert('Pilihan') } />
                </Appbar.Header>
            </LinearGradient>

            <View>
                <SectionCarousel data={dataContent.preview} />
            </View>

            <View style={{padding:10}}>

                <Text style={styles.contentTitle}>{dataContent.title}</Text>

                <Text style={styles.sectionTitle}>Deskripsi</Text>

                <Paragraph style={styles.contentDesc}>{dataContent.desc}</Paragraph>

                <Text style={styles.contentType}>{dataContent.contentType}</Text>
            
                {/* Tag */}
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical:10,
                }}>
                    {dataContent.tag.map(item => {
                        if (item == null)
                        {
                            console.log("NULL tag skipped (ScreenContent)")
                        }
                        else
                        {
                            return (
                                <ItemTag key={item.name} warna={item.color} teks={item.name}/>
                            );
                        }
                    })}
                </View>

                <Text style={styles.sectionTitle}>Konten oleh</Text>
                <TouchableOpacity style={styles.rowContainer}>
                    <Image
                        style={styles.authorImg}
                        resizeMode="cover"
                        source={{ uri: dataContent.author.profileImg }}
                    />
                    <Text style={styles.authorName}>{dataContent.author.name || 'Loading...'}</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

        <View style={styles.purchaseBarView}>
            <Text style={styles.purchaseBarPrice}>Rp {dataContent.price.total}</Text>
            <Button
                style={styles.purchaseBarAction}
                labelStyle={styles.purchaseBarActionText}
                mode="outlined"
                onPress={() => navigation.navigate('ScreenPurchase')}
                color={Parent.colorBlueMax}
            >
                Beli
            </Button>
        </View>

    </View>
    )
}