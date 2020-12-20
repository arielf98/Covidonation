import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { MySearchBar, MiniContent, Tag } from '../../components/'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Search = () => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor:'white'}}
        >

            { /* Search Bar */ }
            <MySearchBar />

            {/* Tag Populer */}
            <View style={styles.viewSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tag Populer</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <View>
                    <Tag warna="#65D661" teks="Webinar"/>
                    <Tag warna="#8455C2" teks="KonserOnline"/>
                    <Tag warna="#FFB97D" teks="Design"/>
                    <Tag warna="#FF7D7D" teks="Video"/>
                    <Tag warna="#61C6D6" teks="CoverSong"/>
                    <Tag warna="#55C28F" teks="Translate"/>
                </View>
            </View>

            {/* Konten teratas */}
            <View style={styles.viewSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Konten Teratas</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={true}
                style={{marginLeft:10}}
                >
                    <MiniContent judulKonten="Konser Online Isyana S..." namaKreator="We Entertainment" thumbnail="../images/thumbnail/isyana.jpg"/>
                    <MiniContent judulKonten="Commission Chibi Style" namaKreator="Bagus Tambunan" thumbnail="../images/thumbnail/taylorswift.jpg"/>
                    <MiniContent judulKonten="Webinar Dasar Adobe..." namaKreator="Den Mustopa" thumbnail="../images/thumbnail/premiere.jpg"/>
                </ScrollView>
            </View>

            {/* Terbaru */}
            <View style={styles.viewSection}>
              <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Terbaru</Text>
                    <Icon name="chevron-right" size={18} color="#4D96DE" style={{position: 'absolute', right: 0}}/>
                </View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginLeft:10}}
                >
                    <MiniContent judulKonten="Video Belajar Laravel 7" namaKreator="Okky Nadiya" thumbnail="../images/thumbnail/laravel.png"/>
                    <MiniContent judulKonten="Photopack Borobudur..." namaKreator="Den Mustopa" thumbnail="../images/thumbnail/borobudur.jpg"/>
                    <MiniContent judulKonten="Commission Chibi Style" namaKreator="Bagus Tambunan" thumbnail="../images/thumbnail/taylorswift.jpg"/>
                </ScrollView>
            </View>

        </ScrollView>
    )
}

export default Search

const styles = StyleSheet.create({

    viewSection:
    {
        marginVertical: 10
    },

    rowContainer:
    {
        flexDirection: 'row'
    },

    sectionHeader:
    {
        marginHorizontal:10,
        marginTop: 5,
        marginBottom: 15
    },
    sectionTitle:
    {
        color: '#666666',
        fontSize: 20,
        fontWeight: 'bold'
    }

})
