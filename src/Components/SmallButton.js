import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

export default function SmallButton({ title, Press, bgcolor, textColor }) {
  return (
    <TouchableOpacity
    onPress={Press}
     style={{
        height: 45,
        width: 145,
        backgroundColor: bgcolor,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text style={{
        color: textColor,
        fontSize: 16, 
        fontFamily: 'Montserrat-Medium'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})