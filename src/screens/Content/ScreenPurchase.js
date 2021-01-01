import React, {useContext, useEffect} from 'react'
import { View, ScrollView, Text, Image, Alert, Dimensions } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/ContentStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { DataTable, Button } from 'react-native-paper';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'
import * as Parent from '../../Style/ParentStyle'

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

const DataPurchase = 
{
    untukDonasi: "Rp 170.000",
    untukKreator: "Rp 30.000",
    totalBayar: "Rp 200.000",
}

const ScreenPurchase = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    const DataPilihPembayaran = DataPaymentMethod[state.metodePembayaran-1]

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
        return true
    })
    
    return (
    <View style={{flex: 1}}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <Appbar.Header style={styles.topBarView2}>
            <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: true })
                }}
                style={styles.topBarIcon2} />
                <Appbar.Content title="Pembelian Konten" style={styles.topBarText2} />
            </Appbar.Header>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Rincian Pembayaran</Text>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk donasi</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>{DataPurchase.untukDonasi}</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk kreator</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>{DataPurchase.untukKreator}</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textBold}>Total</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textBold}>{DataPurchase.totalBayar}</Text></DataTable.Cell>
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

            <View style={{height:60}}/>

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