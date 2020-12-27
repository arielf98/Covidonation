import React, {useContext, useEffect} from 'react'
import { View, ScrollView, Text, Image, Alert } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/ContentStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { DataTable, Button } from 'react-native-paper';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'

const ScreenPurchase = () => {

    const globalState = useContext(store)
    const { dispatch } = globalState
    const navigation = useNavigation();

    useBackHandler(()=> {
        navigation.goBack()

        //melakukan dispatch pada action IS_HIDE di komponen item list kontent teratas...
        dispatch({ type: 'IS_HIDE', payload: true })
        return true
    })
    
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <Appbar.Header style={styles.topBarView2}>
            <Appbar.BackAction onPress={() => { 
                    navigation.goBack()

                    //melakukan dispatch pada action IS_HIDE di komponen item list kontent teratas...
                    return dispatch({ type: 'IS_HIDE', payload: true })
                }}

                     style={styles.topBarIcon2} />
                <Appbar.Content title="Rincian Pembelian"  style={styles.topBarText2} />
            </Appbar.Header>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Rincian pembayaran</Text>
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk donasi</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>Rp 170.000</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textDef}>Untuk kreator</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textDef}>Rp 30.000</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text style={styles.textBold}>Total</Text></DataTable.Cell>
                        <DataTable.Cell><Text style={styles.textBold}>Rp 200.000</Text></DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>

            <View style={{padding:10}}>
                <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
                <View style={styles.rowContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.paymentImg}
                        source={require('../../img/dana.png')}
                    />
                    <Button mode="contained" onPress={ () => Alert.alert('Ganti metode pembayaran') }>Ubah</Button>
                </View>
            </View>

        </ScrollView>
    )
}

export default ScreenPurchase