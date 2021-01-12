import React, { useContext, useState, useEffect } from 'react'
import * as Parent from '../Style/ParentStyle'
import { styles } from '../Style/SearchStyle'

import { Text, View, Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { ItemTag } from '../components'

import { store } from '../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'

export default ItemCardContent = ({id, title, authorName, priceTotal, thumbnail, tag, navigasi}) => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    const [urlImg, setUrlImg] = useState('https://firebasestorage.googleapis.com/v0/b/covidonation.appspot.com/o/contents%2Fthumbnail%2Fdefault.png?alt=media&token=9cb3ed3a-84b8-4b20-a843-a325582c00f2');

    useEffect( () => {
        async function getUrlImg ()
        {
            const data = await storage()
                .ref('contents/thumbnail/' + thumbnail)
                .getDownloadURL();

            setUrlImg(data)
        }
        getUrlImg()
    }, []);

    return (
        <TouchableRipple onPress={() => {
            dispatch({ type: 'SELECTED_CONTENT_ID', payload: id || '1' })
            navigation.navigate(navigasi)

            state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) : null
            dispatch({ type: 'IS_FROM_MINI_CONTENT', payload: false })
        }}
        
        rippleColor = {Parent.colorRipple}
        >

            <Card containerStyle={styles.cardWrapper}>
            
                <View style={styles.cardContentView}>
                    
                    <View>
                        <Image
                        style={styles.cardContentImg}
                        resizeMode="cover"
                        source={{ uri: urlImg }}
                        />
                    </View>

                    <View style={styles.cardContentDetailView}>

                        <Text style={styles.cardContentTitle}>
                            {title.length > 30 ? `${title.substring(0, 30)}...` : title }
                        </Text>

                        <View style={styles.cardContentTextView}>
                            <Icon name="person" style={styles.cardContentIcon}/>
                            <Text style={styles.cardContentText}>
                                {authorName.length > 30 ? `${authorName.substring(0, 30)}...` : authorName }
                            </Text>
                        </View>

                        <View style={styles.cardContentTextView}>
                            <Icon name="pricetag" style={styles.cardContentIcon}/>
                            <Text style={styles.cardContentText}>
                                {priceTotal}
                            </Text>
                        </View>

                    </View>
                    
                </View>
                

                <View style={styles.cardContentTagView}>
                    {tag.map(item => {
                        if (item == null)
                        {
                            console.log("NULL tag skipped (ItemCardContent)")
                        }
                        else
                        {
                            return (
                                <ItemTag key={item.name} warna={item.color} teks={item.name}/>
                            );
                        }
                    })}
                </View>

            </Card>

        </TouchableRipple>
    )
}