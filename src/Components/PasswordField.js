import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function PasswordField({ image, title }) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [Input, setInput] = useState('')
    return (
        <View style={[styles.container, Input !== '' ? styles.ActiveCont : null]}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={image} style={[styles.Img, Input !== '' ? styles.Active : null]} />
                <TextInput
                    placeholder={title}
                    placeholderTextColor={'#CDCDCD'}
                    secureTextEntry={!isPasswordShown}
                    style={styles.InputStyle}
                    value={Input}
                    onChangeText={(txt) => { setInput(txt) }}
                />
            </View>

            <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
                {
                    isPasswordShown == false ? (
                        <Ionicons name="eye-off" size={19} color={Input === '' ? '#BDBDBD' : '#000000'} />
                    ) : (
                        <Ionicons name="eye" size={19} color={Input === '' ? '#BDBDBD' : '#000000'} />
                    )
                }
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 48,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E2E4E9',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        marginBottom: 22
    },
    Img: {
        width: 22, height: 22,
    },
    Active: {
        tintColor: "#DF0B0B"
    },
    InputStyle: {
        color: '#000000',
        fontFamily: 'Montserrat-Regular',
        width: '70%',
        fontSize: 14
    },
    ActiveCont: {
        borderColor: 'red',
        borderWidth: 1
    }
})