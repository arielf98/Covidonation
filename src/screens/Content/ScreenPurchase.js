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

const DataPurchase = 
{
    untukDonasi: "Rp 170.000",
    untukKreator: "Rp 30.000",
    totalBayar: "Rp 200.000",
}

const DataPaymentMethod = [
    {
        id: 1,
        metodePembayaran: "dana",
        namaPembayaran: "Dana",
    },
    {
        id: 2,
        metodePembayaran: "ovo",
        namaPembayaran: "OVO",
    },
    {
        id: 3,
        metodePembayaran: "gopay",
        namaPembayaran: "GO-PAY",
    }
]

const ScreenPurchase = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    const imgPembayaran = "require('../../img/paymentMethod/" + state.metodePembayaran + ".png')"
    const namaPembayaran = DataPaymentMethod.filter(obj => {
        return obj.metodePembayaran === state.metodePembayaran
      })

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
                    return dispatch({ type: 'IS_HIDE', payload: true })
                }}

                     style={styles.topBarIcon2} />
                <Appbar.Content title="Pembelian Konten" style={styles.topBarText2} />
            </Appbar.Header>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Rincian pembayaran</Text>
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
                    {/* <Image
                        resizeMode="contain"
                        style={styles.paymentImg}
                        source={imgPembayaran}
                    /> */}
                    <Text style={styles.selectedPaymentText}>{state.metodePembayaran}</Text>
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
                onPress={ () => Alert.alert('Pembayaran berhasil') }
            >
                Lanjutkan
            </Button>
        </View>

    </View>
    )
}

export default ScreenPurchase