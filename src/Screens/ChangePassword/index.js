import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'
import PasswordField from '../../Components/PasswordField'
import Button from '../../Components/Button'

export default function ChangePassword({ navigation }) {
  return (
    <View>
      <ScrollView>
        <CustomHeader text='Change Password' Press={() => navigation.goBack()} />

        <Text style={styles.title}>Enter the previous password.</Text>

        <Text style={styles.password_text}>Password</Text>
        <PasswordField title='Password' image={require('../../Assets/icons/Lock.png')} />

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword2')} >
          <Text style={styles.forget_text}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{marginTop: '50%'}}  />
        <Button title='Continue' Press={() => navigation.navigate('NewPassword2')}  />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#959595',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: '5%',
    marginTop: '10%'
  },
  password_text: {
    color: '#2C2C2E',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginLeft: '6%',
    marginTop: '12%'
  },
  forget_text: {
    fontSize: 14,
    color: '#AC32D7',
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'flex-end',
    marginRight: '5%'
  }
})