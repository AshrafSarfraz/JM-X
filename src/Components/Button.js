import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({Press, title}) {
  return (
    <TouchableOpacity
    onPress={Press}
     style={{
        height: 45,
        width: '90%',
        backgroundColor: '#DF0B0B',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text style={{
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})