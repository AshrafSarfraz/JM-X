import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ProfileList({title, Press}) {
  return (
    <TouchableOpacity 
    onPress={Press}
    style={{
        height: 54, 
        width: '88%', 
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        marginBottom: '4%'
      }}>
        <Text style={{fontSize: 16, color: '#2C2C2E', fontFamily: 'Montserrat-Medium'}}>{title}</Text>
        <Image source={require('../Assets/icons/PepiconsPencilangleLeft.png')} style={{height: 20, width: 20}} />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})