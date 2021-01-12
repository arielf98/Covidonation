import React from 'react'
import { View, Text } from 'react-native'
import { Card , Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../Style/ProfileStyle'
import { TouchableRipple } from 'react-native-paper';


export default function SettingCard({icon, nama, handler}) {

 
    return (
        <View style={styles.settingCard}>
            <Card style={styles.cardSetting}>
                <TouchableRipple
                    onPress={() => { 

                        if (typeof handler == 'undefined'){
                            console.log('Pressed')
                        } else {
                            handler() 
                        } 
                    }}

                    rippleColor="rgba(0, 0, 0, .3</TouchableRipple>2)"
                    style={{ height: 50 }}>
                <Card.Content >
                    <Icon
                        style={{ marginTop: 13 }}
                        name={icon}
                       size={15} />
                       <Title style={styles.settingCardTitle}> {nama} </Title>
                </Card.Content>
                  </TouchableRipple>
            </Card>
        </View>
    )
}
