import React from 'react'
import { ScrollView } from 'react-native'
import { ItemMiniContent } from '../../components'

const DataSectionNewest = [
    {  
        id: 1,
        judulKonten: "Too Much to Ask",
        namaKreator: "Niall Horan",
    },
    {  
        id: 2,
        judulKonten: "Again",
        namaKreator: "YUI",
    },
    {  
        id: 3,
        judulKonten: "Stuck with U",
        namaKreator: "Ariana Grande & Justin Bieber",
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
                    judulKonten={prop.judulKonten}
                    namaKreator={prop.namaKreator}
                    />
                );
            })}
        </ScrollView>
    )
}

export default SectionNewest