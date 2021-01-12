import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const SignUp = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

 const handleSignUp = () => {

     auth()
         .createUserWithEmailAndPassword(text, password)
         .then(() => {
             console.log('User account created & signed in!');
         })
         .catch(error => {
             if (error.code === 'auth/email-already-in-use') {
                 console.log('That email address is already in use!');
             }

             if (error.code === 'auth/invalid-email') {
                 console.log('That email address is invalid!');
             }

             console.error(error);
         });
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

