import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import Field from '../../Components/Field'
import Button from '../../Components/Button'

export default function ForgetPassword({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader text='Forget Password' Press={() => navigation.goBack()} />
      <Text style={{
        color: '#959595',
        fontSize: 14,
        marginLeft: '5%',
        width: '85%',
        marginTop: '10%',
        fontFamily: 'Montserrat-Regular'
      }}>Enter the email address associated to the account. We will send an OTP to that email.</Text>

      <Text style={{
        color: '#2C2C2E',
        fontWeight: '600',
        marginLeft: '7%',
        marginTop: '11%',
        fontFamily: 'Montserrat-SemiBold'
      }}>Email Address</Text>

      <View style={{marginTop: '4%'}}/>
      <Field title='Email Address' image={require('../../Assets/icons/Mail.png')} />

      <View style={{marginTop: '52%'}} />
      <Button title='Continue' Press={() => navigation.navigate('OTPVerification')}/>

    </View>
  )
}

const styles = StyleSheet.create({})