import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../Style/SearchStyle'

export default ItemMiniContent = ({judulKonten, namaKreator}) => {
    return (
        <View style={styles.miniContentView}>

                <Image
                style={styles.miniContentImg}
                resizeMode="cover"
                source={require('../img/klee.jpg')}
                />
                
                <Text style={styles.miniContentTitle}>
                    {judulKonten}
                </Text>

                <View style={styles.rowContainer}>
                    
                    <Icon name="user-alt" size={13} color="#999999" style={{marginTop:3}}/>
                    <Text style={styles.miniContentAuthor}>
                        {namaKreator}
                    </Text>
                </View>
            
        </View>
    )
}