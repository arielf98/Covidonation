import React from 'react'
import { View, Text, Platform, Alert } from 'react-native'
import { Appbar } from 'react-native-paper'
import { styles } from '../../Style/MediaStyle'
import MediaContent from './MediaContent'



export default function Media() {


    return (
        <View>
            <Appbar.Header style={ styles.appbarHeader } >
                <Appbar.Content 
                            title="Tambah Konten" 
                            color = "white"
                            />
            </Appbar.Header>

            <MediaContent/>
        </View>
    )
}

