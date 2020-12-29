import React, {useContext, useEffect} from 'react'
import { Text, View, Image, ScrollView, Dimensions, Alert } from 'react-native'
import { Paragraph, Appbar, Button } from 'react-native-paper';
import { styles } from '../../Style/ContentStyle'
import { ItemTag } from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'
import { SectionCarousel } from '../Content'
import LinearGradient from 'react-native-linear-gradient';
import * as Parent from '../../Style/ParentStyle'

const DataContent = 
    {
        judulKonten: "Webinar Dasar Adobe Premiere",
        tipeKonten: "Produk Digital",
        hargaKonten: "200.000",
        deskripsiKonten: "Sed sit amet vehicula magna, at ultricies metus. Mauris sed lobortis justo, eu sagittis ex. Aliquam tempus velit id massa cursus posuere. Sed accumsan ex tincidunt ipsum commodo, convallis tempor massa dictum. Maecenas eros felis, vehicula at pretium vel, rutrum eu nisl. Cras gravida justo dui, sed scelerisque nunc lobortis sit amet. Quisque sed neque eget libero gravida interdum sed sit amet neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vehicula ullamcorper dolor, malesuada luctus leo iaculis a. Nam pellentesque magna rhoncus condimentum auctor.",
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

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation();

    useBackHandler(()=> {
        navigation.goBack()

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
    <View style={{flex: 1}}>

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <LinearGradient
                colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    width: Dimensions.get('window').width,
                    height: 60
                }}
            >
                <Appbar.Header style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <Appbar.BackAction onPress={() => { 
                        navigation.pop()

                        if (state.isFromMiniContent) {
                            return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: false }) :
                                dispatch({ type: 'IS_HIDE', payload: true })
                        } else {
                        return state.isBottomNavHide ? dispatch({ type: 'IS_HIDE', payload: true }) :
                                dispatch({ type: 'IS_HIDE', payload: false })
                        }

                        }}
                        style={styles.topBarIcon}
                    />
                    <Appbar.Content/>
                    <Appbar.Action icon="dots-vertical" style={styles.topBarIcon} onPress={ () => Alert.alert('Pilihan') } />
                </Appbar.Header>
            </LinearGradient>

            <View>
                <SectionCarousel />
            </View>

            <View style={{padding:10}}>

                <Text style={styles.contentTitle}>{DataContent.judulKonten}</Text>

                <Text style={styles.sectionTitle}>Deskripsi</Text>

                <Paragraph style={styles.contentDesc}>{DataContent.deskripsiKonten}</Paragraph>

                <Text style={styles.contentType}>{DataContent.tipeKonten}</Text>
               
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

        </ScrollView>

        <View style={styles.purchaseBarView}>
            <Text style={styles.purchaseBarPrice}>Rp {DataContent.hargaKonten}</Text>
            <Button
                style={styles.purchaseBarAction}
                labelStyle={styles.purchaseBarActionText}
                mode="outlined"
                onPress={() => navigation.navigate('ScreenPurchase')}
                color={Parent.colorBlueMax}
            >
                Beli
            </Button>
        </View>

    </View>
    )
}