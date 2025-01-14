import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeButton({ title, textColor, bgColor, onPress}) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{
        height: 41,
        width: '43%',
        backgroundColor: bgColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: textColor
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})