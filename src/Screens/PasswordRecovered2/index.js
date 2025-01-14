import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'

export default function PasswordRecovered2({ navigation }) {
  return (
    <View>
      <ScrollView>

        <Image source={require('../../Assets/images/SuccesState.png')}
          style={{ height: 240, width: 240, alignSelf: 'center', marginTop: '45%' }}
        />

        <Text style={styles.title}>Password Changed</Text>
        <Text style={styles.subtitle}>The password has been successfully recovered, you can log in back with a new password</Text>

        <View style={{marginTop: '29.5%'}} />
        <Button title='Continue' Press={() => navigation.navigate('Profile')} />

        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#2C2C2E',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    marginTop: '16.5%'
  },
  subtitle: {
    color: 'rgba(44, 44, 46, 0.6)',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    width: '92%',
    marginTop: '5%',
    alignSelf: 'center'
  }
})