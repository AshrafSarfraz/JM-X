import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function FollowerComponent({ name, email, image, icon }) {

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
            marginBottom: 28
        }}>

        
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image source={image} style={{ height: 40, width: 40, borderRadius: 20 }} />
                <View style={{ marginLeft: '7%' }}>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 14, color: '#2C2C2E' }} >{name}</Text>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#2C2C2E' }} >{email}</Text>
                </View>
            </View>


            <View>
                <Image source={icon} style={{width: 24, height: 24}} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({})