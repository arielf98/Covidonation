import React from 'react'
import { View, Text, FlatList, SafeAreaView} from 'react-native'
import { styles } from '../../Style/ProfileStyle'
import { ItemKoleksi } from './ItemKoleksi'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableRipple } from 'react-native-paper'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
]



export default function KotakKoleksiItem() {

    const renderItem = ({ item }) => (
        
        <ItemKoleksi title={item.title} />
    )

    return (
     
        <SafeAreaView style={styles.safeAreaViewKotakKoleksi}>
        <View style={styles.itemKotakKoleksi}>

           
                    <TouchableRipple                    
                    rippleColor="rgba(0, 0, 0, .32)"
                    style={{ marginBottom: 10 }}
                    borderless= {true}  >
                        
                        <View style>
                            <Icon   style={styles.kotakKoleksiIcon}
                                    name="chevron-right"
                                    size={15} />
                                <Text style={styles.titleKotakKoleksi } > Kotak Koleksi </Text>
                            </View>
                    </TouchableRipple>
                
      
                    {/* flatlist card untuk setiap card yang ada pada kotak Koleksi */}
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />

        </View>
        </SafeAreaView>
      
    )
}
