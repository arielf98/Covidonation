import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../Style/ProfileStyle'
import { Avatar } from 'react-native-paper'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

export default function HeaderProfile() {

    const user =  auth().currentUser

    return (
        <View style={styles.headerContent} >

            <View style={{ 
                width: '90%', 
                position: 'absolute', 
                marginLeft: 15 }}
             >
                <Text style={styles.profileName}
                > {user.email.length > 20 ? `${user.email.substring(0, 20)}...`: user.email }</Text>
                <Text style={styles.profileEmail}
                > @{ user.email } </Text>
            </View>

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
