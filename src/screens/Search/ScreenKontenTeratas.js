import React from 'react'
import { View, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/SearchStyle'
import * as Parent from '../../Style/ParentStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ContainerTabPopular } from '../Search'
import { colorGreyMin } from '../../Style/ParentStyle';

const ScreenKontenTeratas = () => {

    const navigation = useNavigation();

    return (
        
        <ScrollView
        showsVerticalScrollIndicator={false}
        
        >

            <Appbar.Header style={styles.topBarView}>
                <Appbar.BackAction onPress={() => { navigation.goBack();}} style={styles.topBarIcon} />
                <Appbar.Content title="Konten Teratas"  style={styles.topBarText} />
            </Appbar.Header>

            <View>
                <ContainerTabPopular />
            </View>

        </ScrollView>

    )
}

export default ScreenKontenTeratas