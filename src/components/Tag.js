import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Tag = ({warna, teks, tinggi, lebar , margin}) => {
    return (
        <TouchableOpacity style={{
            alignSelf: 'flex-start',
            borderColor: warna,
            borderWidth: 2,
            borderRadius: 12,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            marginVertical: 5,
            height: tinggi || null,
            width: lebar || null,
            marginHorizontal: margin || null
        }}>
            <Text style={{
                color: warna,
            }}>
                {teks}
            </Text>
        </TouchableOpacity>
        
        
    )
}

export default Tag

const styles = StyleSheet.create({
    myTag:
    {
        
    }
})
