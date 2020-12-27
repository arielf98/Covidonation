import React from 'react'
import { View, ScrollView, SafeAreaView} from 'react-native'
import KotakKoleksiItem from '../../components/profileComponent/KotakKoleksiItem'
import SettingCard from '../../components/profileComponent/SettingCard'
import HeaderProfile from './HeaderProfile'



export default function Profile() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView 
            showsVerticalScrollIndicator={false} >
                <View style={{ backgroundColor:"white" }} >
                    <HeaderProfile/>
                    <KotakKoleksiItem/>

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
                            nama="Tentang" />
                        </View>

                            {/* Keluar */}
 {/* --------------------------------------------------------------------------------------- */}
                        <View style={{ marginTop: 20, marginBottom: 20 }} >
                            <SettingCard
                                icon="sign-out-alt"
                                nama="Tentang" />
                        </View>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
