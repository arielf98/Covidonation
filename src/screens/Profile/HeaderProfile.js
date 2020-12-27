import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../Style/ProfileStyle'
import { Avatar } from 'react-native-paper'
import { Button } from 'react-native-paper'

export default function HeaderProfile() {
    return (
        <View style={styles.headerContent} >

            <Text style={styles.profileName}
            > Covidonation untuk kita semua </Text>
            <Text style={styles.profileEmail}
            > @Covidonation </Text>

            <Avatar.Image   style={styles.avatarProfile}
                            size = {100}
                            source = {require('../../img/logoCovidonation/logo_a.png')
                             }/>

            <Button 
                    mode="outlined" 
                    color= "white"
                    style={styles.btnEditProfile} 
                    >
                    Edit Profile
            </Button>

            <Button 
                    mode="contained" 
                    color= "white"
                    style={styles.btnHalamanKreator} 
                    >
                <Text style={{
                    color: '#0096c7'
                }}> Halaman Kreator
                </Text> 
            </Button>


         
        </View>
    )
}
