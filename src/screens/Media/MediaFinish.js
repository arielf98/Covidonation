import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { styles } from '../../Style/MediaStyle'

export default function MediaContent() {
    return (

        <>
        <View style={{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        }}>
            <Text style={{top:250,fontSize:20}}>
               Terbitkan Sekarang ?
            </Text>
        </View>
        <Button 
            mode="contained" 
            color= "#478DB5"
            style={{top:280,width:120,left:120}} 
            >
        <Text style={{
            color: 'white',
            fontSize: 9
        }}> Terbitkan
        </Text> 
        </Button>
        <Button 
            mode="contained" 
            color= "#808080"
            style={{top:290,width:120,left:120}} 
            >
        <Text style={{
            color: 'white',
            fontSize: 9
        }}> Simpan Draft
        </Text> 
        </Button>
        </>
    )
}
