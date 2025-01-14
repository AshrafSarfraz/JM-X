import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function InviteComponent({ name, email, image }) {
    const [selectedBox, setSelectedBox] = useState("Invite")

    const handleInviteClick = () => {
        setSelectedBox(selectedBox === 'Invite' ? 'Cancel' : 'Invite');
    };


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

            <TouchableOpacity
                onPress={handleInviteClick}
                style={{
                    height: 33,
                    width: 67,
                    borderRadius: 52,
                    backgroundColor: selectedBox === 'Invite' ? '#DF0B0B' : 'rgba(223, 11, 11, 0.13)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {selectedBox === 'Invite' && (
                    <Image source={require('../Assets/icons/PlusWhite.png')} style={{ height: 16, width: 16 }} />
                )}
                <Text style={{
                    fontSize: 14,
                    color: selectedBox === 'Invite' ? 'white' : '#DF0B0B',
                    fontFamily: 'Montserrat-Medium'
                }}>{selectedBox}</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({})