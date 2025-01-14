import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import SearchBar from '../../Components/SearchBar'
import InviteComponent from '../../Components/InviteComponent'
import Button from '../../Components/Button'

export default function InviteDebater({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CustomHeader text='Invite a debater' Press={() => navigation.navigate('AddLiveStream')} />

                <View style={{ marginTop: '7%' }} />
                <SearchBar />


                <View style={{ flexDirection: 'row', marginHorizontal: '6%', marginTop: '6%' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={styles.Follower_text}>All</Text>
                        <View style={{ height: 4, width: 4, borderRadius: 2, backgroundColor: '#DF0B0B' }} ></View>
                    </View>
                    <View style={{ marginLeft: '10%' }}>
                        <Text style={styles.Following_text}>Follower</Text>
                    </View>
                    <View style={{ marginLeft: '10%' }}>
                        <Text style={styles.Following_text}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: '10%' }} />
                <InviteComponent
                    name='Jeny Wilson'
                    email='jeny_wilson@gmail.com'
                    image={require('../../Assets/images/Invite1.png')}
                />
                <InviteComponent
                    name='Emily'
                    email='emily@gmail.com'
                    image={require('../../Assets/images/Invite2.png')}
                />
                <InviteComponent
                    name='Henry'
                    email='henry12@gmail.com'
                    image={require('../../Assets/images/MenVector.png')}
                />
                <InviteComponent
                    name='Albert'
                    email='albert153@gmail.com'
                    image={require('../../Assets/images/Invite3.png')}
                />
                <InviteComponent
                    name='Martha'
                    email='martha58@gmail.com'
                    image={require('../../Assets/images/Invite4.png')}
                />
                <InviteComponent
                    name='Liana'
                    email='liana11@gmail.com'
                    image={require('../../Assets/images/Invite5.png')}
                />
                <InviteComponent
                    name='Richard'
                    email='richard0@gmail.com'
                    image={require('../../Assets/images/Invite6.png')}
                />

                <View style={{ marginTop: '14%' }} />
                <Button title='Send Invite' Press={() => navigation.navigate('AddLiveStream')} />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Follower_text: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#DF0B0B',
        fontSize: 14
    },
    Following_text: {
        fontFamily: 'Montserrat-Regular',
        color: '#ADADAD',
        fontSize: 14
    }
})