import React, {useContext, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Card, Title, TouchableRipple, Appbar } from 'react-native-paper'
import * as Parent from '../../Style/ParentStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import UnderLine from '../../components/NotifComponent/UnderLine'
import { useBackHandler } from '@react-native-community/hooks'
import { store } from '../../Config/Contex/store'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../Style/ProfileStyle'
import AttachmentCard from './AttachmentCard'
import { ScrollView } from 'react-native-gesture-handler'




export default function DetailKotakKoleksi({route}) {
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

    const navigation = useNavigation()
    const globalState = useContext(store)
    const {state, dispatch } = globalState
    const { author, title, image } = route.params


    useBackHandler(() => {
        state.isFromMiniContent ?   dispatch({ type: 'IS_HIDE', payload: false }) : 
                                    dispatch({ type: 'IS_HIDE', payload: true })
        navigation.goBack()
        return true
    })


    return (
        <View>
            <Appbar
              style={{ backgroundColor: Parent.colorBlueMax }} >
                <Appbar.BackAction onPress={ ()=> {
                    navigation.goBack()
                    state.isFromMiniContent ?   dispatch({ type: 'IS_HIDE', payload: false }) : 
                                                dispatch({ type: 'IS_HIDE', payload: true })
                    }} />
                <Title style={{ color: 'white' }} > Kotak Koleksi </Title>
            </Appbar>

            <Card style={{ height: '100%' }} >
                <Card.Content style={{ marginBottom: 10 }} >

                    <Title
                        style={styles.itemKoleksiTitle} > {title} </Title>
                    <Icon
                        style={styles.itemKoleksiIcon}
                        name="user-alt"
                        size={15}
                        color="#999999" />
                    <Text
                        style={styles.itemKoleksiAuthor} > {author} </Text>

                    <Card.Cover style={{ width: 100, height: 100, borderRadius: 20 }}
                            resizeMode='cover'
                            source={{ uri: image }}/>
                </Card.Content>

                {/* ------- untuk garis bawah ------ */}
                <UnderLine/>

                    <View style={{ marginHorizontal: 20, marginVertical: 15 }} >
                        <Text style={{ fontSize: 18, fontWeight: '800' }} > 
                        silahkan download buku panduan untuk mengikuti webinar ini  
                        </Text>
                    </View>

                    {/* //TODO buatkan list untuk item yang dibuat oleh kreator */}
                    
                    <ScrollView 
                        style={{ marginBottom: 50 }}
                        showsVerticalScrollIndicator={false}     >
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                        <AttachmentCard/>
                    </ScrollView>
                    
            </Card> 
       
        </View>
    )
}
