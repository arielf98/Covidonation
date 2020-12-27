import React, {useContext} from 'react'
import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/SearchStyle'
import * as Parent from '../../Style/ParentStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ContainerTabPopular } from '../Search'
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'

const ScreenKontenTeratas = () => {


    //mengambil data dari global state 
    // untuk lebih jelasnya baca tentang context pada react
    const globalState = useContext(store)
    const { dispatch } = globalState


    const navigation = useNavigation();

    useBackHandler(()=> {
        navigation.goBack()

        //melakukan dispatch pada action IS_HIDE di komponen item list kontent teratas...
        dispatch({ type: 'IS_HIDE', payload: false })
        return true
    })


    return (
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        
        >

            <Appbar.Header style={styles.topBarView}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()

                    //melakukan dispatch pada action IS_HIDE di komponen item list kontent teratas...
                    return dispatch({ type: 'IS_HIDE', payload: false })
                }}

                     style={styles.topBarIcon} />
                <Appbar.Content title="Konten Teratas"  style={styles.topBarText} />
            </Appbar.Header>

            <View>
                <ContainerTabPopular />
            </View>

        </ScrollView>

    )
}

export default ScreenKontenTeratas