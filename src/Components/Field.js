import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Field({ title, image, keyboardType }) {
    const [Input,setInput]=useState('')
    return (
        <View style={[styles.container,Input!==''?styles.ActiveCont:null]}>
            <Image source={image} style={[styles.Img,Input!==''?styles.Active:null]} />
            <TextInput
                placeholder={title}
                placeholderTextColor={'#CDCDCD'}
                keyboardType={keyboardType}
                style={[styles.InputStyle,Input!==''?styles.Active:null]}
                value={Input}
                onChangeText={(txt)=>{setInput(txt)}}
            />
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
        paddingLeft: 14,
        marginBottom: 22
    },
    Img:{
      width:22,height:22,
    },
    Active:{
      tintColor:"#DF0B0B"
    },
    InputStyle:{
         color: '#000000', 
         fontFamily: 'Montserrat-Regular', 
         width: '80%',
        fontSize:14
        },
        ActiveCont:{
            borderColor:'red',
            borderWidth:1
        }
})