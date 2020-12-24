import React from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../Style/SearchStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ItemTag } from '../components'
import { Divider, TouchableRipple } from 'react-native-paper';

export default ItemCardContent = ({id, judulKonten, namaKreator, hargaKonten, gambarKonten, tag}) => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableRipple onPress={() => navigation.navigate('ScreenContent')} style={styles.touchableView}>
                <View style={styles.cardContentView}>
                    
                        <View>
                            <Image
                            style={styles.cardContentImg}
                            resizeMode="cover"
                            source={{ uri: gambarKonten }}
                            />
                        </View>

                        <View style={styles.cardContentDetailView}>

                            <Text style={styles.cardContentTitle}>
                                {judulKonten.length > 30 ? `${judulKonten.substring(0, 30)}...` : judulKonten }
                            </Text>

                            <View style={styles.cardContentTextView}>
                                <Icon name="person" size={15} color="#999999" style={{marginTop:3}}/>
                                <Text style={styles.cardContentText}>
                                    {namaKreator.length > 30 ? `${namaKreator.substring(0, 30)}...` : namaKreator }
                                </Text>
                            </View>

                            <View style={styles.cardContentTextView}>
                                <Icon name="pricetag" size={15} color="#999999" style={{marginTop:3}}/>
                                <Text style={styles.cardContentText}>
                                    {hargaKonten}
                                </Text>
                            </View>

                        </View>
                    
                </View>
                </TouchableRipple>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: 10,
                    marginVertical: 5,
                }}>
                    {tag.map(prop => {
                        return (
                            <ItemTag key={prop.id} warna={prop.warna} teks={prop.teks}/>
                        );
                    })}
                </View>
            

        <Divider style={{
            marginBottom: 5,
        }}/>

        </View>
        
    )
}