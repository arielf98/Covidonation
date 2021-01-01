import React from 'react'
import { View, Text } from 'react-native'
import { Card, Title, TouchableRipple, Appbar } from 'react-native-paper'
import { styles } from '../../Style/ProfileStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import * as Parent from '../../Style/ParentStyle'

export default function AttachmentCard() {
    return (
        <View>
            <Card.Content
                style={styles.attachmentCard} >
                <Icon
                    name="file-pdf"
                    size={25}
                    color="#e5383b" />

                <View style={styles.attachmentKotakKoleksiText} >
                    <Text> Buku Panduan.pdf </Text>
                    <Text style={{ fontSize: 12, color: Parent.colorBlueMax }} > 7mb </Text>
                </View>

                <Icon
                    style={styles.attachmentKotakKoleksiIcon}
                    name="download"
                    size={20}
                    color="#999999"
                    onPress={() => console.log("icon donwload ditekan")} />
            </Card.Content>
        </View>
    )
}
