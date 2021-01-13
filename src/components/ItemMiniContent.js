import React, { useContext, useEffect, useState } from 'react'
import * as Parent from '../Style/ParentStyle'
import { styles } from '../Style/SearchStyle'

import { Text, View, Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { store } from '../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'

export default ItemMiniContent = ({id, title, authorName, thumbnail, navigasi, willShowNavIfBack}) => {

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

            // console.log("URL IMG: " + data)

            setUrlImg(data)
        }

        getUrlImg()
    }, []);

    return (
        <TouchableRipple onPress={() => {
            
            dispatch({ type: 'IS_HIDE', payload: true })
            navigation.navigate(navigasi, {
                refContentId: id || '1',
                willShowNavIfBack: willShowNavIfBack || true,
            })

        }}
        
        rippleColor = {Parent.colorRipple}
        >
            
            <View style={styles.miniContentView}>
            
                <Image
                style={styles.miniContentImg}
                resizeMode="cover"
                source={{ uri: urlImg }}
                // source={{ uri: thumbnail }}
                />
                
                <Text style={styles.miniContentTitle}>
                    {title.length > 20 ? `${title.substring(0, 20)}...` : title }
                </Text>

                <View style={styles.rowContainer}>
                    
                    <Icon name="user-alt" style={styles.miniContentIcon}/>
                    <Text style={styles.miniContentAuthor}>
                        {authorName.length > 20 ? `$authorName.substring(0, 20)}...` : authorName }
                    </Text>
                </View>
            
            </View>
        </TouchableRipple>
    )
}