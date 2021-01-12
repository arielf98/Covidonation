import React, { useEffect, useContext } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../../Style/SearchStyle'
import { ScreenKontenTeratas, ScreenKontenTerbaru, SectionTag, SectionPopular, SectionNewest } from '../Search'
import { ItemSearchBar } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScreenContent, ScreenPaymentMethod, ScreenPurchase } from '../Content'
import { TouchableRipple } from 'react-native-paper';
import { store } from '../../Config/Contex/store'

export const TheApp = () => {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            backgroundColor:'white',
        }}
        >

            { /* Search Bar */ }
            <View style={{padding:10}}>
                <ItemSearchBar />
            </View>

            {/* Tag Populer */}
            <View style={styles.sectionView}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tag Populer</Text>
                </View>
                <SectionTag />
            </View>

            <View style={styles.sectionDivider}/>

            <View style={{padding:0}}>
                {/* Konten teratas */}
                <View style={styles.sectionView}>
                    <TouchableRipple onPress={() => {
                        navigation.navigate('ScreenKontenTeratas')
                        dispatch({ type: 'IS_HIDE', payload: true })
                        }} >
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Konten Teratas</Text>
                            {/* <Icon name="chevron-right" style={styles.sectionIcon}/> */}
                            <Text style={styles.sectionMore}>Lihat semua</Text>
                        </View>
                    </TouchableRipple>
                    <SectionPopular />
                </View>

                <View style={styles.sectionDivider}/>

                {/* Terbaru */}
                <View style={styles.sectionView}>
                <TouchableRipple onPress={() => {
                    navigation.navigate('ScreenKontenTerbaru')
                    dispatch({ type: 'IS_HIDE', payload: true })
                    }} >
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Konten Terbaru</Text>
                            {/* <Icon name="chevron-right" style={styles.sectionIcon}/> */}
                            <Text style={styles.sectionMore}>Lihat semua</Text>
                        </View>
                    </TouchableRipple>
                    <SectionNewest />
                </View>
            </View>
            
        </ScrollView>
    )
}

const Stack = createStackNavigator();

function ScreenSearch() {

    return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="TheApp"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="TheApp" component={TheApp} />
          <Stack.Screen name="ScreenContent" component={ScreenContent} />
          <Stack.Screen name="ScreenKontenTeratas" component={ScreenKontenTeratas} />
          <Stack.Screen name="ScreenKontenTerbaru" component={ScreenKontenTerbaru} />
          <Stack.Screen name="ScreenPaymentMethod" component={ScreenPaymentMethod} />
          <Stack.Screen name="ScreenPurchase" component={ScreenPurchase} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default ScreenSearch;