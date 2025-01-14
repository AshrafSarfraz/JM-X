import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
    <TouchableOpacity style={{
        height: 48,
        width: '90%',
        borderWidth: 1,
        borderColor: '#E2E4E9',
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%'
      }} >
        <Image source={require('../Assets/icons/SearchIcon.png')} style={{ height: 24, width: 24 }} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={'#979797'}
          style={{ fontFamily: 'Montserrat-Regular', width: '70%', color: '#979797', padding: 8 }} />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})