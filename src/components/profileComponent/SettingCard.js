import React from 'react'
import { View, Text } from 'react-native'
import { Card , Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../Style/ProfileStyle'

export default function SettingCard({icon, nama}) {
    return (
        <View style={styles.settingCard}>
            <Card>
                <Card.Content >
                    <Icon
                        name={icon}
                       size={15} />
                       <Title style={styles.settingCardTitle}> {nama} </Title>
                </Card.Content>
            </Card>
        </View>
    )
}
