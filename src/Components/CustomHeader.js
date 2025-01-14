import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomHeader({ text, Press }) {
    return (
        <View style={{
            flexDirection: 'row',
            marginLeft: '5%',
            marginTop: '8%',
            alignItems: 'center'
        }}>
            <TouchableOpacity onPress={Press}>
                <Image source={require('../Assets/icons/ArrowLeft.png')} style={{ height: 18, width: 18 }} resizeMode='contain' />
            </TouchableOpacity>
            <Text style={{
                color: '#2C2C2E',
                fontSize: 16,
                flex: 1,
                textAlign: 'center',
                fontFamily: 'Montserrat-SemiBold',
                marginRight: '3%'
            }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})