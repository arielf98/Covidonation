import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Tag = (props) => {
    return (
        <TouchableOpacity style={{
            alignSelf: 'flex-start',
            borderColor: props.warna,
            borderWidth: 2,
            borderRadius: 12,
            paddingVertical: 5,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            marginVertical: 5
        }}>
            <Text style={{
                color: props.warna,
            }}>
                {props.teks}
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
