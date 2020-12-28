import React from 'react'
import { ScrollView } from 'react-native'
import { ItemMiniContent } from '../../components'

const DataSectionPopular = [
    {  
        id: 1,
        judulKonten: "Rolling in The Deep",
        namaKreator: "Adele",
        gambarKonten: "https://picsum.photos/900",
    },
    {  
        id: 2,
        judulKonten: "Kangen",
        namaKreator: "Dewa 19",
        gambarKonten: "https://picsum.photos/800",
    },
    {  
        id: 3,
        judulKonten: "Dynamite",
        namaKreator: "BTS",
        gambarKonten: "https://picsum.photos/500",
    },
];

const SectionPopular = () => {

    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        style={{marginLeft:10}}
        >
            {DataSectionPopular.map(prop => {
                return (
                    <ItemMiniContent
                    key={prop.id}
                    id={prop.id}
                    judulKonten={prop.judulKonten}
                    namaKreator={prop.namaKreator}
                    gambarKonten={prop.gambarKonten}
                    />
                );
            })}
        </ScrollView>
    )
}

export default SectionPopular