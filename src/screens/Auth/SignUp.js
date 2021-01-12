import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const SignUp = () => {
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

 const handleSignUp = () => {

     
     if( text && password != ''){
         auth().createUserWithEmailAndPassword(text, password)
             .then(() => {
                 console.log('User account created & signed in!');
             })
             .catch(error => {

                 switch (error.code) {
                     case 'auth/email-already-in-use':
                         ToastAndroid.show("Alamat Email sudah digunakan oleh akun lain",
                             ToastAndroid.SHORT)
                         break
                     case 'auth/invalid-email':
                         ToastAndroid.show("Email tidak valid",
                             ToastAndroid.SHORT)
                         break
                     case 'auth/weak-password':
                         ToastAndroid.show("Password Terlalu lemah mininal 6 karakter",
                             ToastAndroid.SHORT)
                         break
                     case 'auth/too-many-requests':
                         ToastAndroid.show("password salah terlalu sering Acces sementara kami diblokir",
                             ToastAndroid.SHORT)
                         break
                     default:
                         ToastAndroid.show("Email dan Password tidak boleh kosong",
                             ToastAndroid.SHORT)
                 }
                 
                 // TODO hapus ketika sudah masuk tahap production
                 console.error(error);
             });
     } 
     else 
     {
         ToastAndroid.show("Email dan Password tidak boleh kosong", ToastAndroid.SHORT)
     }

 }


    return (
        <View style={styles.viewHalaman}>
            <Icon name="arrowleft" size={30} color="#000000" />
            <View style={styles.viewDalam}>
                <Image
                    style={styles.logo}
                    source={require('../../img/logoCovidonation/logo_a.png')} />
            </View>

            <View style={styles.email}>
                <TextInput
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>

            <TextInput
                label="Password"
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
            />

            <Button style={styles.button} 
                color="blue" 
                mode="contained" 
                onPress={() => handleSignUp() }>
                SIGN UP
  </Button>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.akhir}>Already have an account?
                 <Text 
                 onPress={ () => navigation.navigate('Login') }
                 style={styles.tulisan}>Sign In</Text>
                </Text>

            </View>

          
        </View>
    );
}

export default SignUp

const styles = StyleSheet.create({
    judulHalaman: {
        fontSize: 20,
        color: "red",
    },
    viewHalaman: {
        padding: 10,
        position: "absolute",
        backgroundColor: "pink",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    tulisan: {
        fontSize: 15,
        color: "#0000FF",
        fontWeight: "bold",
    },
    logo: {
        width: 150,
        height: 100,
    },
    viewDalam: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    email: {
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
    },
    akhir: {
        fontSize: 15,
        color: "#808080",
        textAlign: "center",
        marginTop: 150,
    }
})

