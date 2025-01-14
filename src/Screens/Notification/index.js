import { StyleSheet, Text, View, ScrollView, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import NotificationComponent from '../../Components/NotificationComponent'
import SmallButton from '../../Components/SmallButton'

export default function Notification({ navigation }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CustomHeader text='Notifications' Press={() => navigation.goBack()} />

                <Text style={styles.today_text}>Today</Text>

                <View style={{ marginTop: '6%' }} />
                <NotificationComponent title="Winner!" subtitle="You are the winner of your today’s debate..." />

                <View style={styles.containerBox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%', marginTop: '4%' }}>
                        <Image source={require('../../Assets/images/GirlProfile.png')} style={{ height: 44, width: 44 }} />
                        <View style={{ marginLeft: 18, flexDirection: 'column', }}>
                            <Text style={styles.title}>Emily William</Text>
                            <Text style={styles.subtitle}>Request to join your live stream.</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '6%' }}>
                        <Text style={styles.cancel_text} >Cancel</Text>
                        <SmallButton title='Accept' bgcolor={'#DF0B0B'} textColor={'white'} />
                    </View>
                </View>

                <View style={{ marginTop: '5%' }} />
                <NotificationComponent title='Invite Sent!' subtitle='Your invite is sent to @Jeny12' />

                <Text style={styles.date}>6/8/2023</Text>

                <View style={{ marginTop: '4%' }} />
                <NotificationComponent title='Following!' subtitle='You’ve started following @henry' />
                <NotificationComponent title='New Follower!' subtitle='@Richard started following you.' />
                <NotificationComponent title='Request accepted!' subtitle='Your request has been accepted.' />
                <NotificationComponent title='Account Created!' subtitle='Your account has been created successfully.' />



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    today_text: {
        color: '#979797',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        marginLeft: '5%',
        marginTop: '8%'
    },
    title: {
        fontSize: 16,
        color: '#232323',
        fontFamily: 'Montserrat-SemiBold'
    },
    subtitle: {
        color: 'rgba(35, 35, 35, 0.6)',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },
    containerBox: {
        height: 135,
        width: '90%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        alignSelf: 'center',
    },
    date: {
        fontSize: 12,
        color: '#979797',
        fontFamily: 'Montserrat-Regular',
        marginLeft: '5%',
    },
    cancel_text: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#2C2C2E'
    },

})