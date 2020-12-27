import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ItemTag = prop => {
    return (
        <TouchableOpacity style={{
            alignSelf: 'flex-start',
            borderColor: prop.warna,
            borderWidth: 2,
            borderRadius: 12,
            paddingVertical: 4,
            paddingHorizontal: 8,
            marginBottom: prop.marginBottom || 10,
            marginRight: 10,
        }}>
            <Text style={{
                color: prop.warna,
                fontSize: 14,
            }}>
                {prop.teks}
            </Text>
        </TouchableOpacity>
        
        
    )
}