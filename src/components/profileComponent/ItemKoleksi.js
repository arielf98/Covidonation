import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card } from 'react-native-paper'
import { styles } from '../../Style/ProfileStyle'


    // atur setiap tampilan pada tiap item koleksi disini
export const ItemKoleksi = ({ title }) => (
        <View style={styles.itemKoleksi}>
            <Card style={{ borderRadius: 15 }} >
                <Card.Cover
                    style={styles.kotakKoleksiCard}
                    resizeMode="cover"
                    source={{ uri: 'https://picsum.photos/700' }} />

            </Card>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}
            > {title} </Text>

            <View style={styles.kotakKoleksiAuthor} >
                <Icon
                    name="account" size={15} color="#999999" style={{ marginTop: 3 }} />
                <Text
                    style={{ position: 'absolute', marginLeft: 15 }} > den mustafa </Text>

            </View>
        </View>
    )