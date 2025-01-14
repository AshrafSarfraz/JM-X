import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MainHeader({ Press }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '5%' }}>
            <View>
                <Text style={{ fontSize: 24, color: '#DF0B0B', fontFamily: 'Montserrat-Bold' }}>dbate</Text>
                <Text style={{ fontSize: 16, color: '#909090', fontFamily: 'Montserrat-Regular' }}>you vs me</Text>
            </View>
            <TouchableOpacity onPress={Press}>
                <Image source={require('../Assets/icons/Bell.png')} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})