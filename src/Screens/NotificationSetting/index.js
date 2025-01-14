import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import ToggleSwitch from 'toggle-switch-react-native'

export default function NotificationSetting({ navigation }) {
    const [allToggle, setAllToggle] = useState(true)
    const [NewToggle, setNewToggle] = useState(false)
    const [StartToggle, setStartToggle] = useState(false)
    const [receiveToggle, setReceiveToggle] = useState(false)
    const [appToggle, setAppToggle] = useState(false)
    

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CustomHeader text='Notifications' Press={() => navigation.goBack()} />

                <View style={styles.subcontainer}>
                    <Text style={styles.title}>All</Text>
                    <ToggleSwitch
                        isOn={allToggle}
                        onColor="#DF0B0B"
                        offColor="#A4A4A4"
                        size='medium'
                        onToggle={() => setAllToggle(!allToggle)}
                    />
                </View>

                <View style={styles.line}/>

                <View style={styles.subcontainer}>
                    <Text style={styles.title}>New Live Stream</Text>
                    <ToggleSwitch
                        isOn={NewToggle}
                        onColor="#DF0B0B"
                        offColor="#A4A4A4"
                        size='medium'
                        onToggle={() => setNewToggle(!NewToggle)}
                    />
                </View>

                <View style={styles.subcontainer}>
                    <Text style={styles.title}>Start Live Stream</Text>
                    <ToggleSwitch
                        isOn={StartToggle}
                        onColor="#DF0B0B"
                        offColor="#A4A4A4"
                        size='medium'
                        onToggle={() => setStartToggle(!StartToggle)}
                    />
                </View>

                <View style={styles.subcontainer}>
                    <Text style={styles.title}>Receive Request</Text>
                    <ToggleSwitch
                        isOn={receiveToggle}
                        onColor="#DF0B0B"
                        offColor="#A4A4A4"
                        size='medium'
                        onToggle={() => setReceiveToggle(!receiveToggle)}
                    />
                </View>


                <View style={styles.subcontainer}>
                    <Text style={styles.title}>App Updates</Text>
                    <ToggleSwitch
                        isOn={appToggle}
                        onColor="#DF0B0B"
                        offColor="#A4A4A4"
                        size='medium'
                        onToggle={() => setAppToggle(!appToggle)}
                    />
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    subcontainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginHorizontal: '6%', 
        marginTop: '10%'
    },
    title: {
        color: '#2C2C2E', 
        fontFamily: 'Montserrat-Medium',
        fontSize: 14
    },
    line: {
        height: 1, 
        width: '90%', 
        backgroundColor: '#DDDDDD', 
        alignSelf: 'center', 
        marginTop: '5%'
    }
})