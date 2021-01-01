import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { Card, Title, TouchableRipple} from 'react-native-paper'
import {styles} from '../../Style/ProfileStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'



export default function ItemKoleksi({ namaKreator, judul, gambarKonten, clickable}) {

    const navigation = useNavigation()

    return (
    
        <View style={{ marginBottom: 10 }}>
          <Card style={styles.itemKoleksiCard}>
         
             <TouchableRipple
                    onPress = {() => {
                        
                        navigation.navigate('DetailKotakKoleksi', {
                            namaKreator,
                            judul,
                            gambarKonten
                        })

                    }}
                    rippleColor="rgba(0, 0, 0, .32)">

                    <Card.Content style={{ marginVertical: 15 }}>
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
         </TouchableRipple>
                </Card>
        </View>
    )
       
}
