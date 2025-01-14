import { Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import PasswordField from '../../Components/PasswordField'
import Field from '../../Components/Field'

export default function AccountScreen({ navigation, route }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);

  const signup = route.params
  useEffect(() => {
    if (signup) {
      setSelectedTab(1)
    }
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground source={require('../../Assets/images/Seaction.png')} style={{ height: 400, width: '100%' }}>
          <View style={styles.logobox}>
            <Image source={require('../../Assets/images/image26.png')} style={{ height: 68.799, width: 86.53 }} />
            <Image source={require('../../Assets/images/image31.png')} style={{ height: 71.1, width: 133.663 }} />
          </View>
        </ImageBackground>


        {selectedTab == 0 ? (
          <View style={{
            width: '90%',
            height: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            bottom: '17%'
          }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 14 }}>
              <TouchableOpacity onPress={() => { setSelectedTab(0); }} style={{ flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ color: selectedTab == 0 ? '#DF0B0B' : 'rgba(44, 44, 46, 0.4)', fontSize: 16, fontFamily: 'Montserrat-SemiBold' }}>Sign in</Text>
                <View style={{ height: 5, width: 5, borderRadius: 2.5, backgroundColor: '#DF0B0B', marginTop: 2 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setSelectedTab(1); }} >
                <Text style={{ color: selectedTab == 1 ? '#DF0B0B' : 'rgba(44, 44, 46, 0.4)', fontSize: 16, fontFamily: 'Montserrat-SemiBold' }}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 38 }} />
            <Field title='Email Address' image={require('../../Assets/icons/Mail.png')} />

            <PasswordField image={require('../../Assets/icons/Lock.png')} title='Password' />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                  style={{
                    height: 18,
                    width: 18,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    borderWidth: 1,
                    borderColor: rememberMe ? '#DF0B0B' : '#B1B1B1',
                  }}>
                  {rememberMe && (
                    <Image
                      source={require('../../Assets/images/tick1.png')}
                      style={{ height: 16, width: 16 }}
                    />
                  )}
                </TouchableOpacity>
                <Text style={{ color: '#2C2C2E', fontSize: 14, fontFamily: 'Montserrat-Medium' }}> Remember me</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={{ color: '#DF0B0B', fontSize: 14, fontFamily: 'Montserrat-Medium' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('TabRoutes')}
              style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', top: 35 }}>
              <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#DF0B0B', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../Assets/icons/ArrowRight.png')} style={{ height: 44, width: 44 }} />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{
            width: '90%',
            height: 390,
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            bottom: '15.2%'
          }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 14 }}>
              <TouchableOpacity onPress={() => { setSelectedTab(0); }}  >
                <Text style={{ color: selectedTab == 0 ? '#DF0B0B' : 'rgba(44, 44, 46, 0.4)', fontSize: 16, fontFamily: 'Montserrat-SemiBold' }}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setSelectedTab(1); }} style={{ flexDirection: 'column', alignItems: 'center' }} >
                <Text style={{ color: selectedTab == 1 ? '#DF0B0B' : 'rgba(44, 44, 46, 0.4)', fontSize: 16, fontFamily: 'Montserrat-SemiBold' }}>Sign up</Text>
                <View style={{ height: 5, width: 5, borderRadius: 2.5, backgroundColor: '#DF0B0B', marginTop: 2 }} />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 38 }} />
            <Field title='Lisa Brook' image={require('../../Assets/icons/User1.png')}  />
            <Field title='Phone no.' image={require('../../Assets/icons/Vector.png')} keyboardType={'number-pad'} />
            <Field title='Email Address' image={require('../../Assets/icons/Mail.png')} keyboardType={'email-address'} />
            <PasswordField image={require('../../Assets/icons/Lock.png')} title='Password' />

            <TouchableOpacity
              onPress={() => navigation.navigate('OTPVerification2')}
              style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>
              <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#DF0B0B', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../Assets/icons/ArrowRight.png')} style={{ height: 44, width: 44 }} />
              </View>
            </TouchableOpacity>
          </View>
        )}





        <View style={{ bottom: 70 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
            <View style={styles.line}></View>
            <Text style={styles.ortext}> OR </Text>
            <View style={styles.line}></View>
          </View>

          <View style={{
            height: 56,
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 34
          }}>
            <Image source={require('../../Assets/images/Google.png')} style={{ height: 26, width: 26 }} />
            <Text style={{ color: '#232323', fontSize: 16, paddingLeft: '3.5%', fontFamily: 'Montserrat-SemiBold' }}>Continue with Google</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}



