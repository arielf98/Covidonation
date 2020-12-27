import React from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../Style/SearchStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ItemTag } from '../components'
import { TouchableRipple } from 'react-native-paper';
import { Card } from 'react-native-elements'

export default ItemCardContent = ({id, judulKonten, namaKreator, hargaKonten, gambarKonten, tag}) => {

    const navigation = useNavigation();

    return (
        <TouchableRipple onPress={() => navigation.navigate('ScreenContent')}>
        <Card containerStyle={styles.cardWrapper}>

            <View>
            
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
                            <Icon name="person" style={styles.cardContentIcon}/>
                            <Text style={styles.cardContentText}>
                                {namaKreator.length > 30 ? `${namaKreator.substring(0, 30)}...` : namaKreator }
                            </Text>
                        </View>

                        <View style={styles.cardContentTextView}>
                            <Icon name="pricetag" style={styles.cardContentIcon}/>
                            <Text style={styles.cardContentText}>
                                {hargaKonten}
                            </Text>
                        </View>

                    </View>
                    
                </View>
                

                <View style={styles.cardContentTagView}>
                    {tag.map(prop => {
                        return (
                            <ItemTag
                                key={prop.id}
                                warna={prop.warna}
                                teks={prop.teks}
                                marginBottom={0}
                            />
                        );
                    })}
                </View>

            </View>

        </Card>
        </TouchableRipple>
        
    )
}