import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import Button from '../../Components/Button'

export default function OTPVerification2({ navigation }) {
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader text='Verification code' Press={() => navigation.goBack()} />

      <Text style={{
        color: '#959595',
        fontSize: 14,
        marginLeft: '5%',
        width: '85%',
        marginTop: '10%'
      }}>Enter verification code sent to your entered email address.</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '29%' }}>
        <TextInput
          keyboardType='numeric'
          maxLength={1}
          style={styles.square}
          ref={firstInput}
          onChangeText={text => {
            text && secondInput.current.focus();
          }}
        />
        <TextInput
          keyboardType='numeric'
          maxLength={1}
          style={styles.square}
          ref={secondInput}
          onChangeText={text => {
            text ? thirdInput.current.focus() : firstInput.current.focus()
          }}
        />
        <TextInput
          keyboardType='numeric'
          maxLength={1}
          style={styles.square}
          ref={thirdInput}
          onChangeText={text => {
            text ? fourthInput.current.focus() : secondInput.current.focus()
          }}
        />
        <TextInput
          keyboardType='numeric'
          maxLength={1}
          style={styles.square}
          ref={fourthInput}
          onChangeText={text => {
            !text && thirdInput.current.focus();
          }}
        />
      </View>

      <View style={{marginTop: '52%'}} />
      <Button title='Confirm' Press={() => navigation.navigate('Interest')}/>



    </View>
  )
}

const styles = StyleSheet.create({

square: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#DF0B0B',
    color: '#2C2C2E',
    fontSize: 25,
    textAlign: 'center',
    borderRadius: 5
},

})