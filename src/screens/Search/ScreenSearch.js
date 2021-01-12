import React, { useContext, useState } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/SearchStyle'

import { Text, View, ScrollView, StatusBar } from 'react-native'
import { TouchableRipple, Searchbar } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScreenKontenTeratas, ScreenKontenTerbaru, SectionTag, SectionPopular, SectionNewest, SectionHasil, ScreenResult } from '../Search'
import { ScreenContent, ScreenPaymentMethod, ScreenPurchase } from '../Content'

import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

export const SearchApp = () => {

    const globalState = useContext(store)
    const { state, dispatch } = globalState
    const navigation = useNavigation()

    const goToResult = () => {
        navigation.navigate('ScreenResult')
        dispatch({ type: 'IS_HIDE', payload: true })
    }

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            backgroundColor:'white',
        }}
        >

                <StatusBar backgroundColor={Parent.colorStatusBar}/>

                <View style={{padding:10}}>
                    <Searchbar
                        style={styles.searchBarView}
                        inputStyle={styles.searchBarText}
                        placeholder="Pencarian..."
                        onFocus={goToResult}
                        value={state.searchText}
                    />
                </View>

                <View style={{padding:10}}>

                    {/* Tag Populer */}
                    <View style={styles.sectionView}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Tag Populer</Text>
                        </View>
                        <SectionTag />
                    </View>
                
                    {/* Konten teratas */}
                    <View style={styles.sectionView}>
                        <TouchableRipple onPress={() => {
                            navigation.navigate('ScreenKontenTeratas')
                            dispatch({ type: 'IS_HIDE', payload: true })
                            }}
                            rippleColor = {Parent.colorRipple}
                            >
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Konten Teratas</Text>
                                {/* <Icon name="chevron-right" style={styles.sectionIcon}/> */}
                                <Text style={styles.sectionMore}>Lihat semua</Text>
                            </View>
                        </TouchableRipple>
                        <SectionPopular />
                    </View>

                    {/* Terbaru */}
                    <View style={styles.sectionView}>
                    <TouchableRipple onPress={() => {
                        navigation.navigate('ScreenKontenTerbaru')
                        dispatch({ type: 'IS_HIDE', payload: true })
                        }}
                        rippleColor = {Parent.colorRipple}
                        >
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
        initialRouteName="SearchApp"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="SearchApp" component={SearchApp} />
          <Stack.Screen name="ScreenContent" component={ScreenContent} />
          <Stack.Screen name="ScreenKontenTeratas" component={ScreenKontenTeratas} />
          <Stack.Screen name="ScreenKontenTerbaru" component={ScreenKontenTerbaru} />
          <Stack.Screen name="ScreenPaymentMethod" component={ScreenPaymentMethod} />
          <Stack.Screen name="ScreenPurchase" component={ScreenPurchase} />
          <Stack.Screen name="ScreenResult" component={ScreenResult} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default ScreenSearch;