import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'

const Login = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    return (

        <View style={styles.viewHalaman}>
            <Icon name="arrowleft" size={30} color="#000000" />
            <View style={styles.viewDalam}>
                <Image
                    style={styles.logo}
                    source={require('./src/img/logoCovidonation/logo_a.png')} />
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

            <Text style={styles.password}>Forgot Password?
    </Text>

            <Button style={styles.button} color='blue' mode="contained" onPress={() => console.log('Pressed')}>
                LOGIN
  </Button>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                <Text style={styles.akhir}>Don't have an account? <Text style={styles.tulisan}>Sign Up</Text>
                </Text>

            </View>
        </View>
    );
}

export default App

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
        textAlign: "right",
        fontWeight: "bold",
    },
    logo: {
        width: 150,
        height: 100,
    },
    viewDalam: {
        position: "relative",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
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
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
    },
    password: {
        fontSize: 15,
        color: "#808080",
        textAlign: "right",
        fontWeight: "bold"
    },

})