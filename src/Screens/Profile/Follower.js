import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import SearchBar from '../../Components/SearchBar'
import FollowerComponent from '../../Components/FollowerComponent'

export default function Follower({ navigation }) {
    return (
        <View>
            <ScrollView>
                <CustomHeader text='Follower' Press={() => navigation.goBack()} />

                <View style={{ marginTop: '7%' }} />
                <SearchBar />

                <View style={{ flexDirection: 'row', marginHorizontal: '5%', marginTop: '6%' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={styles.Follower_text}>Follower</Text>
                        <View style={{ height: 4, width: 4, borderRadius: 2, backgroundColor: '#DF0B0B' }} ></View>
                    </View>
                    <View style={{ marginLeft: '10%' }}>
                        <Text style={styles.Following_text}>Following</Text>
                    </View>
                </View>

                <View style={{ marginTop: '8.5%' }} />
                <FollowerComponent
                    name='Jeny Wilson'
                    email='jeny_wilson@gmail.com'
                    image={require('../../Assets/images/Invite1.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Emily'
                    email='emily@gmail.com'
                    image={require('../../Assets/images/Invite2.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Henry'
                    email='henry12@gmail.com'
                    image={require('../../Assets/images/MenVector.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Albert'
                    email='albert153@gmail.com'
                    image={require('../../Assets/images/Invite3.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Martha'
                    email='martha58@gmail.com'
                    image={require('../../Assets/images/Invite4.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Liana'
                    email='liana11@gmail.com'
                    image={require('../../Assets/images/Invite5.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />
                <FollowerComponent
                    name='Richard'
                    email='richard0@gmail.com'
                    image={require('../../Assets/images/Invite6.png')}
                    icon={require('../../Assets/icons/UserAdd.png')}
                />


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