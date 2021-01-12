import React, {useContext} from 'react'
import { View, ScrollView, SafeAreaView} from 'react-native'
import KotakKoleksiItem from '../../components/profileComponent/KotakKoleksiItem'
import SettingCard from '../../components/profileComponent/SettingCard'
import HeaderProfile from './HeaderProfile'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListKotakKoleksi from './ListKotakKoleksi'
import { ScreenContent, ScreenPurchase, ScreenPaymentMethod } from '../Content'
import { store } from '../../Config/Contex/store'
import DetailKotakKoleksi from './DetailKotakKoleksi'
import auth from '@react-native-firebase/auth';




export function ProfileRoute() {

    const handleLogOut = () => {
        auth().signOut()
    }


    // const getUser = () => {
    //     const user = auth().currentUser

    //     console.log(user.uid)
    // }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false} >
                <View style={{ backgroundColor: "white" }} >
                    <HeaderProfile />
                    <KotakKoleksiItem />

                    {/* iterate setiap setting card komponen */}
                    <SettingCard
                        icon="question-circle"
                        nama="Pusat Bantuan" />

                    <SettingCard
                        icon="cog"
                        nama="Settings" />

                    {/* Information Settings */}
                    {/* --------------------------------------------------------------------------------------- */}
                    <View style={{ marginTop: 20 }}>
                        <SettingCard
                            icon="info-circle"
                            nama="Ketentuan Layanan" />

                        <SettingCard
                            icon="info-circle"
                            nama="Kebijakan Privasi" />

                        <SettingCard
                            icon="info-circle"
                            nama="Tentang"
                            // handler={() => getUser()}
                            />
                    </View>

                    {/* Keluar */}
                    {/* --------------------------------------------------------------------------------------- */}
                    
                    
                        <View style={{ marginTop: 20, marginBottom: 20 }} >
                            
                            <SettingCard
                                icon="sign-out-alt"
                                nama="Keluar"
                                handler={() => handleLogOut() }
                                />
                        </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const Stack = createStackNavigator();

export default function Profile() {

    const globalState = useContext(store)
    const { state } = globalState

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="profile"
                screenOptions={{headerShown : false}} >

                <Stack.Screen name="profile" component={ProfileRoute} />
                <Stack.Screen name="Kotak Koleksi" component={ListKotakKoleksi} />
                <Stack.Screen name="ScreenContent" component={ScreenContent} />
                <Stack.Screen name="DetailKotakKoleksi" component={DetailKotakKoleksi} />
                <Stack.Screen name="ScreenPaymentMethod" component={ScreenPaymentMethod} />
                <Stack.Screen name="ScreenPurchase" component={ScreenPurchase} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

