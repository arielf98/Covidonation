import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper'

const Overview = () => {
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.viewHalaman}>
            <Image
                style={styles.gambar}
                source={require('./src/img/logoCovidonation/newnew.png')} />
            <View style={styles.viewHalaman}>
                <View style={styles.posisi}>
                    <View style={styles.viewDalam}>
                        <Image
                            style={styles.logo}
                            source={require('./src/img/logoCovidonation/logo_a.png')} />
                    </View>


                    <Text style={styles.akhir}> Platform that aims to collect donations to accelerate COVID-19 mitigation in Indonesia
    </Text>

                    <Button style={styles.button} color="blue" mode="contained" onPress={() => console.log('Pressed')}>
                        LOGIN
  </Button>
                    <Button style={styles.button} color="blue" mode="Outlined" onPress={() => console.log('Pressed')}>
                        SIGN UP
  </Button>
                </View>
            </View>
        </View>
    );

}

export default App

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
        marginBottom: 1,
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
        marginLeft: 30,
        marginTop: 10,
        color: "#808080",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
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