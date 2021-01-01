import React,{useContext} from 'react'
import { View, Text, FlatList, SafeAreaView} from 'react-native'
import { styles } from '../../Style/ProfileStyle'
// import { ItemKoleksi } from './ItemKoleksi'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableRipple } from 'react-native-paper'
import ItemMiniContent from '../ItemMiniContent'
import { useNavigation } from '@react-navigation/native';
import { store } from '../../Config/Contex/store'

const DATA = [
    {
        id: "1",
        judulKonten: "Too Much to Ask",
        namaKreator: "Niall Horan",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: "2",
        judulKonten: "Again",
        namaKreator: "YUI",
        gambarKonten: "https://picsum.photos/700",
    },
    {
        id: "3",
        judulKonten: "Stuck with U",
        namaKreator: "Ariana Grande & Justin Bieber",
        gambarKonten: "https://picsum.photos/700",
    },
]



export default function KotakKoleksiItem() {

    const globalState = useContext(store)
    const {dispatch} = globalState


    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        
        // <ItemKoleksi title={item.title} />
        <ItemMiniContent
           judulKonten = {item.judulKonten }
           namaKreator={ item.namaKreator }
           gambarKonten={item.gambarKonten} 
            navigasi="ScreenContent" />
    )

    return (
     
        <SafeAreaView style={styles.safeAreaViewKotakKoleksi}>
        <View style={styles.itemKotakKoleksi}>

           
                    <TouchableRipple  
                    onPress={() => {
                        navigation.navigate("Kotak Koleksi")
                        dispatch({ type: 'IS_HIDE', payload: true })
                    }}

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
