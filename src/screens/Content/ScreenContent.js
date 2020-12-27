import React, {useContext, useEffect} from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Paragraph, Appbar } from 'react-native-paper';
import { styles } from '../../Style/ContentStyle'
import { ItemTag } from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'

const DataContent = 
    {
        judulKonten: "Webinar Dasar Adobe Premiere",
        tipeKonten: "Produk Digital",
        hargaKonten: "200.000",
        deskripsiKonten: "Webinar Dasar Adobe Premiere oleh Den Mustopa. Diadakan pada Kamis, 01 Oktober 2020 jam 11:00 sampai 15:00 WIB. Webinar diadakan di platfrom Zoom. Peserta yang mengikuti webinar akan memperoleh sertifikat elektronik.",
        tag: [
            {  
                id: 1,
                warna: "#65D661",
                teks: "Webinar",
            },
            {  
                id: 2,
                warna: "#FF7D7D",
                teks: "AdobePremiere",
            },
            {  
                id: 3,
                warna: "#8455C2",
                teks: "VideoEditing",
            },
        ],
        author:
        {
            nama: "Ariel Febrian",
        },
    }
;




export default ScreenContent = () => {

    //ambil kondisi dari globalstate
    //mengambil data dari global state 
    // untuk lebih jelasnya baca tentang context pada react
    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation();
    

    useBackHandler(()=> {
        navigation.goBack()

        //apakah card d klik dari mini card ? jika true akan menjalankan logic yang pertama dan sebaliknya...
        if (state.isFromMiniContent){
            state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: false }) :
                dispatch({ type: 'IS_HIDE', payload: true })
        } else {
            state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) :
                dispatch({ type: 'IS_HIDE', payload: false })
        }
        return true
    })

    
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <Appbar.Header style={styles.topBarView}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()

                    //apakah card d klik dari mini card ? jika true akan menjalankan logic yang pertama dan sebaliknya...
                    if (state.isFromMiniContent) {
                        return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: false }) :
                            dispatch({ type: 'IS_HIDE', payload: true })
                    } else {
                       return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) :
                            dispatch({ type: 'IS_HIDE', payload: false })
                    }

                    }}
                     style={styles.topBarIcon} />


                <Appbar.Content title="Detail Konten"  style={styles.topBarText} />
                <Appbar.Action icon="dots-vertical" style={styles.topBarIcon} />
            </Appbar.Header>

            <View>
                <Image
                    style={styles.previewImg}
                    resizeMode="cover"
                    source={require('../../img/preview/borobudur.jpg')}
                />
            </View>

            <View style={{padding:10}}>
                <Text style={styles.contentType}>{DataContent.tipeKonten}</Text>

                <Text style={styles.contentTitle}>{DataContent.judulKonten}</Text>

                <Text style={styles.sectionTitle}>Deskripsi</Text>

                <Paragraph style={styles.contentDesc}>{DataContent.deskripsiKonten}</Paragraph>
               
                {/* Tag */}
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical:10,
                }}>
                    {DataContent.tag.map(prop => {
                    return (
                        <ItemTag key={prop.id} warna={prop.warna} teks={prop.teks}/>
                    );
                    })}
                </View>
                

                <Text style={styles.sectionTitle}>Konten oleh</Text>
                <TouchableOpacity style={styles.rowContainer}>
                    <Image
                        style={styles.authorImg}
                        resizeMode="cover"
                        source={require('../../img/profile/ariel.jpg')}
                    />
                    <Text style={styles.authorName}>{DataContent.author.nama}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.purchaseBarView}>
                <Text style={styles.purchaseBarPrice}>Rp {DataContent.hargaKonten}</Text>
                <Text style={styles.purchaseBarAction}>BELI</Text>
            </View>

        </ScrollView>
    )
}