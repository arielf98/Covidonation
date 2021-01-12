import React, { useEffect, useState, useContext } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/ContentStyle'

import { View, ScrollView, Text, Image, Alert, Dimensions } from 'react-native'
import { Appbar, DataTable, Button } from 'react-native-paper'
import { ItemLoader } from '../../components'

import database from '@react-native-firebase/database'
import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'

const DataPaymentMethod = [
    {
        id: 1,
        namaPembayaran: "Dana",
        imgPembayaran: require('../../img/paymentMethod/dana.png'),
    },
    {
        id: 2,
        namaPembayaran: "OVO",
        imgPembayaran: require('../../img/paymentMethod/ovo.png'),
    },
    {
        id: 3,
        namaPembayaran: "GO-PAY",
        imgPembayaran: require('../../img/paymentMethod/gopay.png'),
    }
];

const ScreenPurchase = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
    })

    const DataPilihPembayaran = DataPaymentMethod[state.metodePembayaran-1]

    useEffect(() => {
        database()
            .ref('/contents/' + state.selectedContentId)
            .once('value')
            .then(snapshot => {
                setDataContent(snapshot.val())
                setLoading(false)
            }
        );
    }, []);

    // console.log("Content Id: " + state.selectedContentId)
    // console.log(dataContent.price)

    if (isLoading)
    {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: Parent.colorWhite
            }}>
                <ItemLoader />
            </View>
        );
    }
    
    return (
    <View style={{flex: 1}}>
        {/* <Text>Cek terminal gan...</Text> */}
        <View style={Parent.styles.headerView}>
            <Appbar.Header style={Parent.styles.headerBody}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: true })
                }}
                style={Parent.styles.headerIcon} />
                <Appbar.Content title="Pembelian Konten" style={Parent.styles.headerText} />
            </Appbar.Header>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <View style={Parent.styles.headerMargin}/>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk donasi</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>{dataContent.price.total - dataContent.price.forAuthor}</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk kreator</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>{dataContent.price.forAuthor}</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textBold}>Total</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textBold}>{dataContent.price.total}</Text></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
                <View style={{height:10}}/>
                <View style={styles.rowContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.paymentImg}
                        source={DataPilihPembayaran.imgPembayaran}
                    />
                    <Button
                        style={{
                            backgroundColor: Parent.colorSecondary,
                            position: 'absolute',
                            right: 0,
                            marginBottom: 10,
                        }}
                        labelStyle={styles.buttonTextSecondary}
                        mode="contained"
                        onPress={() => navigation.navigate('ScreenPaymentMethod')}
                    >
                        Ubah
                    </Button>
                </View>

            </View>

            <View style={{height:100}}/>

        </ScrollView>

        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Button
                style={{
                    backgroundColor: Parent.colorBlueMax,
                    position: 'absolute',
                    zIndex: 2,
                    bottom: 0,
                    marginBottom: 10,
                    width: (Dimensions.get('window').width)-(Dimensions.get('window').width*0.075)
                }}
                labelStyle={styles.purchaseBarActionText}
                mode="contained"
                onPress={ () => Alert.alert('Pembayaran dengan '+ DataPilihPembayaran.namaPembayaran +' berhasil') }
            >
                Lanjutkan
            </Button>
        </View>

    </View>
    )
}

export default ScreenPurchase