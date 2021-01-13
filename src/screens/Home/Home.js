import React, { useContext, useState, useEffect } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/HomeStyle'

import { View, ScrollView } from 'react-native'
import { ScreenResult } from '../Search/'
import { ScreenContent, ScreenPaymentMethod, ScreenPurchase } from '../Content'
import { ItemLoader, ItemCardContent } from '../../components'
import HeaderLists  from './HeaderLists'

import database from '@react-native-firebase/database'
import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

export const HomeApp = () => {

    const globalState = useContext(store)
    const { state, dispatch } = globalState
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
        <ScrollView>

            <HeaderLists/>

            {dataContent.map(item => {

                if (item == null)
                {
                    console.log("NULL content skipped (Home)")
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
                        willShowNavIfBack={true}
                        />
                    );
                }

            })}

        </ScrollView>
        
    )
}

const Stack = createStackNavigator();

function HomeScreen() {

    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="HomeApp"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="HomeApp" component={HomeApp} />
          <Stack.Screen name="ScreenResult" component={ScreenResult} />
          <Stack.Screen name="ScreenContent" component={ScreenContent} />
          <Stack.Screen name="ScreenPaymentMethod" component={ScreenPaymentMethod} />
          <Stack.Screen name="ScreenPurchase" component={ScreenPurchase} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default HomeScreen;