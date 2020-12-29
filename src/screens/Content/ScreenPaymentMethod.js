import React, {useContext, useEffect} from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Appbar } from 'react-native-paper';
import { styles } from '../../Style/ContentStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Divider, RadioButton, TouchableRipple } from 'react-native-paper';
import { store } from '../../Config/Contex/store'
import { useBackHandler } from '@react-native-community/hooks'
import * as Parent from '../../Style/ParentStyle'

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

const ScreenPaymentMethod = () => {

    const globalState = useContext(store)
    const {state, dispatch} = globalState
    const navigation = useNavigation();

    useBackHandler(()=> {
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
        return true
    });

    const [checked, setChecked] = React.useState(state.metodePembayaran);

    function pilihPembayaran(metodePembayaran)
    {
        setChecked(metodePembayaran);
        dispatch({ type: 'METODE_PEMBAYARAN', payload: metodePembayaran });
        navigation.goBack()
        dispatch({ type: 'IS_HIDE', payload: true })
    }

    return (
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
                <Appbar.Content title="Pilih Metode Pembayaran" style={styles.topBarText2} />
            </Appbar.Header>

            <View style={{padding:10}}>
                {DataPaymentMethod.map(item => {
                return (
                    <TouchableRipple key={item.id} onPress={() => pilihPembayaran(item.metodePembayaran)}>
                        <View>
                            <View style={styles.rowContainer}>
                                <View style={{marginTop: 8}}>
                                    <RadioButton
                                    value={item.metodePembayaran}
                                    status={ checked === item.metodePembayaran ? 'checked' : 'unchecked' }
                                    color={Parent.colorBlueMax}
                                    />
                                </View>
                                
                                <Text
                                style={styles.paymentMethodText}
                                >
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
    )
}

export default ScreenPaymentMethod