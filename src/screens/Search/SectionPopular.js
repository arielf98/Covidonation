import React from 'react'
import { ScrollView } from 'react-native'
import { ItemMiniContent } from '../../components'
import SectionTag from './SectionTag';

const DataSectionPopular = [
    {  
        id: 1,
        judulKonten: "Rolling in The Deep",
        namaKreator: "Adele",
    },
    {  
        id: 2,
        judulKonten: "Kangen",
        namaKreator: "Dewa 19",
    },
    {  
        id: 3,
        judulKonten: "Dynamite",
        namaKreator: "BTS",
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
                    judulKonten={prop.judulKonten}
                    namaKreator={prop.namaKreator}
                    />
                );
            })}
        </ScrollView>
    )
}

export default SectionPopular