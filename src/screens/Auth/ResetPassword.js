import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'


const ResetPassword = () => {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [isSendEmail, setIsSendEmail] = useState(false)


    const handleSendEmail = () => {

        if(email != ''){
            auth().sendPasswordResetEmail(email)
            setIsSendEmail(true)
        
        } else {
            ToastAndroid.show("Email tidak boleh kosong",
                ToastAndroid.SHORT)
        }
    }

    useEffect(()=> {
        setIsSendEmail(false)
        return setIsSendEmail(false)
    }, [])


    return (
        <View style={styles.viewHalaman}>

            <View style={styles.email}>
                <Text
                   style={{ marginBottom: 10 }}
                    > Masukkan Email Untuk Reset Password </Text>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>

            <Button
               style={{
                   marginTop: 220,
                   backgroundColor: 'blue',
                    width: '100%'                   
               }} 
               color="white"
               onPress={ () => handleSendEmail() } >
                    
                    reset password 
                    
                    </Button>




            <View style={styles.viewHalaman}>
                <View style={styles.posisi}>
                    <View style={styles.viewDalam}>
                        <Image
                            style={styles.logo}
                            source={require('../../img/logoCovidonation/logo_a.png')} />
                    </View>

                    <Text style={styles.akhir}> 
                        {isSendEmail ? 'Verifiksi kode sudah dikirim ke email silahkan cek email anda' : null }
                     </Text>
                     <Text
                        onPress={ () => navigation.goBack('Login') } 
                        style={styles.klikKembali} >
                        {isSendEmail ? 'klik untuk kembali' : null }
                     </Text>
                </View>
            </View>
        </View>
    );

}

export default ResetPassword

const styles = StyleSheet.create({
    judulHalaman: {
        fontSize: 20,
    },
    viewHalaman: {
        padding: 10,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    tulisan: {
        fontSize: 15,
        color: "#0000FF",
    },
    logo: {
        width: 150,
        height: 100,
    },
    viewDalam: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 210,
    },
    email: {
        marginTop: 110,
        height: 30,
        width : '100%',
        position: 'absolute',
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
    },

    akhir: {
        fontSize: 15,
        marginHorizontal: 20,
        marginTop: 30,
        color: "#808080",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    klikKembali: {

        fontSize: 15,
        marginHorizontal: 30,
        marginTop: 10,
        color: "blue",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    posisi: {
        marginTop: 0,

    },
    gambar: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})