import React from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../Style/SearchStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';

export default ItemMiniContent = ({id, judulKonten, namaKreator, gambarKonten}) => {

    const navigation = useNavigation();

    return (
        <TouchableRipple onPress={() => navigation.navigate('ScreenContent')} style={styles.touchableView}r>
            <View style={styles.miniContentView}>
            
                <Image
                style={styles.miniContentImg}
                resizeMode="cover"
                // source={require('../img/klee.jpg')}
                source={{ uri: gambarKonten }}
                />
                
                <Text style={styles.miniContentTitle}>
                    {judulKonten.length > 20 ? `${judulKonten.substring(0, 20)}...` : judulKonten }
                </Text>

                <View style={styles.rowContainer}>
                    
                    <Icon name="user-alt" size={13} color="#999999" style={{marginTop:3}}/>
                    <Text style={styles.miniContentAuthor}>
                        {namaKreator.length > 20 ? `${namaKreator.substring(0, 20)}...` : namaKreator }
                    </Text>
                </View>
            
            </View>
        </TouchableRipple>
    )
}