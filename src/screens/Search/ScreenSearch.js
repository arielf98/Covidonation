import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../../Style/SearchStyle'
import { SectionTag, SectionPopular, SectionNewest } from '../Search'
import { ItemSearchBar } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default ScreenSearch = () => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            { /* Search Bar */ }
            <ItemSearchBar />

            {/* Tag Populer */}
            <View style={styles.sectionView}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tag Populer</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <SectionTag />
            </View>

            {/* Konten teratas */}
            <View style={styles.sectionView}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Konten Teratas</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <SectionPopular />
            </View>

            {/* Terbaru */}
            <View style={styles.sectionView}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Konten Terbaru</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <SectionNewest />
            </View>

        </ScrollView>
    )
}