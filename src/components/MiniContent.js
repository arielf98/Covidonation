import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

const MiniContent = (props) => {
    return (
        <TouchableOpacity style={styles.contentBox}>

                <Image
                style={styles.contentImg}
                resizeMode="cover"
                source={require('../img/klee.jpg')}
                />
                
                <Text style={styles.contentTitle}>
                    {props.judulKonten}
                </Text>

                <View style={styles.rowContainer}>
                    
                    <Icon name="user-alt" size={13} color="#999999" style={{marginTop:3}}/>
                    <Text style={styles.creatorName}>
                        {props.namaKreator}
                    </Text>
                </View>
            
        </TouchableOpacity>
    )
}

export default MiniContent

const styles = StyleSheet.create({

    rowContainer:
    {
        flexDirection: 'row'
    },

    contentImg:
    {
        width: 180,
        height: 150,
        marginBottom: 10,
        borderRadius: 20
    },

    contentBox:
    {
        width:210,
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: 7,
    },
    contentTitle:
    {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    creatorName:
    {
        fontSize: 15,
        color: '#666666',
        marginLeft: 5
    }


})
