import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import Button from '../../Components/Button'

export default function EditProfile({ navigation }) {
    return (
        <View>
            <CustomHeader text='Edit Profile' Press={() => navigation.goBack()} />

            <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                <ImageBackground source={require('../../Assets/images/Profilemage.png')} style={{ height: 100, width: 100 }} >
                    <Image source={require('../../Assets/icons/Camera.png')} style={{ height: 22, width: 22, top: 75, left: 75 }} />
                </ImageBackground>
            </View>


            <View style={{
                height: 48,
                width: '90%',
                borderWidth: 1,
                borderColor: '#2C2C2E',
                borderRadius: 5,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: '2%',
                marginBottom: 22,
                marginTop: '12%'
            }}>
                <Image source={require('../../Assets/icons/User.png')} style={{ height: 22, width: 22 }} />
                <TextInput placeholder='Lisa Brook' placeholderTextColor={'#2C2C2E'} style={styles.textinput}/>
            </View>

            <View style={{
                height: 48,
                width: '90%',
                borderWidth: 1,
                borderColor: '#2C2C2E',
                borderRadius: 5,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: '2%',
                marginBottom: 22
            }}>
                <Image source={require('../../Assets/icons/Phonered.png')} style={{ height: 22, width: 22 }} />
                <TextInput placeholder='(208) 555-0112' placeholderTextColor={'#2C2C2E'} style={styles.textinput} />
            </View>

            <View style={{
                height: 48,
                width: '90%',
                borderWidth: 1,
                borderColor: '#2C2C2E',
                borderRadius: 5,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: '2%'
            }}>
                <Image source={require('../../Assets/icons/Mailred.png')} style={{ height: 22, width: 22 }} />
                <TextInput placeholder='lisa_brook12@gmail.com' placeholderTextColor={'#2C2C2E'} style={styles.textinput} />
            </View>

            <View style={{marginTop: '72%'}}>
                <Button title='Save' Press={() => navigation.navigate('Profile')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textinput: {
        color: '#2C2C2E', 
        paddingLeft: '3%', 
        fontFamily: 'Montserrat-Regular', 
        width: '70%'
    }
})