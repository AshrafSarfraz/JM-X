import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SmallButton from './SmallButton';

export default function RepubliciansFlatlist({ Press }) {
    const Republicans = [
        {
            title: 'House Republicans Probe Fulton County DAs Pros...',
            image: require('../Assets/images/Republic.png')
        },
        {
            title: 'House Republicans Probe Fulton County DAs Pros...',
            image: require('../Assets/images/Republic2.png')
        }
    ];
    return (
        <FlatList
            horizontal
            data={Republicans}
            contentContainerStyle={{ paddingRight: 15 }}
            renderItem={({ item }) => (
                <View
                    style={{
                        marginTop: 16,
                        height: 292,
                        width: 294,
                        borderRadius: 12,
                        marginLeft: 15,
                        backgroundColor: 'white'
                    }}>
                    <Image source={item.image} style={{ height: 148, width: 280, borderRadius: 6, alignSelf: 'center', marginTop: '2%' }} />
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#B4B4B4', marginLeft: 6, marginTop: '1.5%' }}>Last Week</Text>
                    <Text style={{ fontSize: 18, color: '#2C2C2E', paddingHorizontal: 6, fontFamily: 'Montserrat-SemiBold' }}>{item.title}</Text>
                    <View style={{ alignItems: 'flex-end', paddingRight: '2%', paddingTop: '3.5%' }}>
                        <SmallButton title='Debate This' Press={Press} bgcolor={'#DF0B0B'} textColor={'white'} />
                    </View>

                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({})