import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import PasswordField from '../../Components/PasswordField'
import Button from '../../Components/Button'

export default function NewPassword3({ navigation }) {
  return (
    <View>
      <CustomHeader text='Create New Password' Press={() => navigation.goBack()} />
      <Text style={{
        color: '#989898',
        fontSize: 14,
        marginLeft: '5%',
        width: '85%',
        marginTop: '10%',
        fontFamily: 'Montserrat-Regular'
      }}>Create a new password that is safer and easier to remember.</Text>

      <Text style={{
        color: '#2C2C2E',
        fontWeight: '600',
        marginLeft: '7%',
        marginTop: '11%',
        fontFamily: 'Montserrat-SemiBold'
      }}>Password</Text>
      <View style={{marginTop: 5}}/>
      <PasswordField image={require('../../Assets/icons/Lock.png')} title='Password' />

      <Text style={{
        color: '#2C2C2E',
        fontWeight: '600',
        marginLeft: '7%',
        fontFamily: 'Montserrat-SemiBold'
      }}>Confimr Password</Text>
      <View style={{marginTop: 5}}/>
      <PasswordField image={require('../../Assets/icons/Lock.png')} title='Password' />

      <View style={{marginTop: '22%'}} />
      <Button title='Recover Password' Press={() => navigation.navigate('PasswordRecovered3')}/>

    </View>
  )
}

const styles = StyleSheet.create({})