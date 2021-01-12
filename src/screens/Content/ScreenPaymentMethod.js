import React, { useContext } from 'react'
import * as Parent from '../../Style/ParentStyle'
import { styles } from '../../Style/ContentStyle'

import { View, ScrollView, Text } from 'react-native'
import { Appbar, Divider, RadioButton, TouchableRipple } from 'react-native-paper'

import { store } from '../../Config/Contex/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useBackHandler } from '@react-native-community/hooks'


const DataPaymentMethod = [
    {
        id: 1,
        namaPembayaran: "Dana",
    },
    {
        id: 2,
        namaPembayaran: "OVO",
    },
    {
        id: 3,
        namaPembayaran: "GO-PAY",
    }
];

const ScreenPaymentMethod = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation()

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
    })

    const [checked, setChecked] = React.useState(state.metodePembayaran);

    function pilihPembayaran(id)
    {
        setChecked(id);
        dispatch({ type: 'METODE_PEMBAYARAN', payload: id });
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
    }

    return (
    <View style={{flex: 1}}>

        <View style={Parent.styles.headerView}>
            <Appbar.Header style={Parent.styles.headerBody}>
                <Appbar.BackAction onPress={() => { 
                    navigation.goBack()
                    dispatch({ type: 'IS_HIDE', payload: true })
                }}
                style={Parent.styles.headerIcon} />
                <Appbar.Content title="Pilih Metode Pembayaran" style={Parent.styles.headerText} />
            </Appbar.Header>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            <View style={Parent.styles.headerMargin}/>

            <View style={{padding:10}}>
                {DataPaymentMethod.map(item => {
                return (
                    <TouchableRipple
                        key={item.id}
                        onPress={() => pilihPembayaran(item.id)}
                        rippleColor = {Parent.colorRipple}
                        >
                        <View>
                            <View style={styles.rowContainer}>
                                <View style={{marginTop: 8}}>
                                    <RadioButton
                                    value={item.id}
                                    status={ checked === item.id ? 'checked' : 'unchecked' }
                                    color={Parent.colorBlueMax}
                                    />
                                </View>
                                <Text style={styles.paymentMethodText}>
                                    {item.namaPembayaran}
                                </Text>
                            </View>
                            <Divider />
                        </View>
                    </TouchableRipple>
                );
                })}
            </View>

        </ScrollView>
    </View>
    )
}

export default ScreenPaymentMethod