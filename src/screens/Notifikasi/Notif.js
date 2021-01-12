import React, { useState, useEffect } from 'react'
import { View, Text, Platform, Alert,} from 'react-native'
import { Appbar } from 'react-native-paper'
import { styles } from '../../Style/NotifStyle'
import NotifList from './NotifList'




export default function Notif() {



    return (
        <View>
            <Appbar.Header style={ styles.appbarHeader } >
                <Appbar.Content 
                            title="Notifikasi" 
                            subtitle= "2 baru"
                            color = "white"
                            />
                <Appbar.Action
                            icon= "trash-can"
                            onPress={ () => Alert.alert('tong sampah ditekan') } />
            </Appbar.Header>

            <NotifList/>
            <NotifList/>

             
        </View>
    )
}
