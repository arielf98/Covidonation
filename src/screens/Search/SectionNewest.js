import React from 'react'
import { ScrollView } from 'react-native'
import { ItemMiniContent } from '../../components'

const DataSectionNewest = [
    {  
        id: 1,
        judulKonten: "Too Much to Ask",
        namaKreator: "Niall Horan",
        gambarKonten: "https://picsum.photos/600",
    },
    {  
        id: 2,
        judulKonten: "Again",
        namaKreator: "YUI",
        gambarKonten: "https://picsum.photos/700",
    },
    {  
        id: 3,
        judulKonten: "Stuck with U",
        namaKreator: "Ariana Grande & Justin Bieber",
        gambarKonten: "https://picsum.photos/800",
    },
];

const SectionNewest = () => {
    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        style={{marginLeft:10}}
        >
            {DataSectionNewest.map(prop => {
                return (
                    <ItemMiniContent
                    key={prop.id}
                    id={prop.id}
                    judulKonten={prop.judulKonten}
                    namaKreator={prop.namaKreator}
                    gambarKonten={prop.gambarKonten}
                    navigasi="ScreenContent"
                    />
                );
            })}
        </ScrollView>
    )
}

export default SectionNewest