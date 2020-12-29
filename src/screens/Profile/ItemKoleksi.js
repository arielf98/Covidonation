import React from 'react'
import { View, Text } from 'react-native'
import { Card, Title} from 'react-native-paper'
import {styles} from '../../Style/ProfileStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function ItemKoleksi({ namaKreator, judul, gambarKonten}) {
    return (
        <View style={{ marginBottom: 10 }}>

            <Card style={styles.itemKoleksiCard} >

                <Card.Content>
                    <Title 
                     style={styles.itemKoleksiTitle} > {judul} </Title>
                     <Icon
                     style={styles.itemKoleksiIcon}
                        name="user-alt"
                        size={15}
                        color="#999999" />
                        <Text
                           style={styles.itemKoleksiAuthor} > {namaKreator} </Text>
                    <Card.Cover
                        style={{ width: 100, height: 100, borderRadius: 20 }}
                        resizeMode='cover'
                        source={{uri :gambarKonten}} />
                </Card.Content>
            </Card>
            
        </View>
    )
}
