import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ItemTag = prop => {
    return (
        <TouchableOpacity style={{
            alignSelf: 'flex-start',
            borderColor: prop.warna,
            borderWidth: 2,
            borderRadius: 12,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginBottom:10,
            marginRight: 10,
        }}>
            <Text style={{
                color: prop.warna,
            }}>
                {prop.teks}
            </Text>
        </TouchableOpacity>
        
        
    )
}