import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function NotificationComponent({ title, subtitle, }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginBottom: '4%' }}>
            <View style={{ height: 44, width: 44, borderRadius: 22, backgroundColor: 'rgba(223, 11, 11, 0.16)', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/icons/Bell.png')} style={{ height: 20, width: 20 }} />
            </View>
            <View style={{ marginLeft: 18, flexDirection: 'column', }}>
                <Text style={{ fontSize: 16, color: '#232323', fontFamily: 'Montserrat-SemiBold' }}>{title}</Text>
                <Text style={{ color: 'rgba(35, 35, 35, 0.6)', fontSize: 12, fontFamily: 'Montserrat-Regular' }}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})