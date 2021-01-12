import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UnderLine from '../../components/NotifComponent/UnderLine'
import { styles } from '../../Style/NotifStyle'



export default function NotifList() {
    return (

        <>
        <View style={styles.iconContainer}>
          
           <View style={styles.notifContent}>
                <Text style={styles.iconTextTitle}>
                    Update Aplikasi
                </Text>
                <Text style={styles.iconText}>
                    Versi baru telah tersedia. Segera Update aplikasi 
                    anda untuk mendapatkan versi terbaru.
                    
                </Text>
                <Text style={styles.iconTextTime}>
                    18 september 2020 12:34
                </Text>
           </View>
            <View style={styles.notifIcon}>
                <Icon
                    name="bell"
                    size={30} />

            </View>
        </View>

     <UnderLine/>


        </>
    )
}
