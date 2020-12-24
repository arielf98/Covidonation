import React from 'react'
import { View } from 'react-native'
import { ItemTag } from '../../components'

const DataSectionTag = [
    {  
        id: 1,
        warna: "#65D661",
        teks: "Webinar",
    },
    {  
        id: 2,
        warna: "#8455C2",
        teks: "KonserOnline",
    },
    {  
        id: 3,
        warna: "#FFB97D",
        teks: "Design",
    },
    {  
        id: 4,
        warna: "#FF7D7D",
        teks: "Video",
    },
    {  
        id: 5,
        warna: "#61C6D6",
        teks: "CoverSong",
    },
    {  
        id: 6,
        warna: "#55C28F",
        teks: "Translate",
    },
];

const SectionTag = () => {
    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            {DataSectionTag.map(prop => {
                return (
                    <ItemTag key={prop.id} warna={prop.warna} teks={prop.teks}/>
                );
            })}
        </View>
    )
}

export default SectionTag