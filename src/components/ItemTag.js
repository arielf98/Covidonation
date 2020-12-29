import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import * as Parent from '../Style/ParentStyle'

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
                fontSize: Parent.sizeFontMin,
            }}>
                {prop.teks}
            </Text>
        </TouchableOpacity>
        
        
    )
}