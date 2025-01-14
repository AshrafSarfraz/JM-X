import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import ProfileList from '../../Components/ProfileList'
import MainHeader from '../../Components/MainHeader'
import SmallButton from '../../Components/SmallButton'

export default function Profile({ navigation }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <MainHeader Press={() => navigation.navigate('Notification')} />

        <View style={{
          height: 84,
          width: '88%',
          backgroundColor: '#DF0B0B',
          alignSelf: 'center',
          borderRadius: 12,
          marginTop: '6.5%',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={require('../../Assets/images/Profilemage.png')} style={{ height: 56, width: 56, marginLeft: '4%' }} />
          <View style={{ paddingLeft: '3%' }}>
            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Montserrat-SemiBold' }}>Lisa Brook</Text>
            <Text style={{ fontSize: 14, color: 'white', marginTop: '4%', fontFamily: 'Montserrat-Medium' }}>lisa_brook12@gmail.com</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '6%' }}>

          <TouchableOpacity onPress={() => navigation.navigate('Follower')} style={styles.followerList} >
            <Text style={styles.followerNum}>1.1k</Text>
            <Text style={styles.follower}>Follower</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Following')} style={styles.followerList} >
            <Text style={styles.followerNum}>400</Text>
            <Text style={styles.follower}>Following</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Debates')} style={styles.followerList} >
            <Text style={styles.followerNum}>100</Text>
            <Text style={styles.follower}>Debates</Text>
          </TouchableOpacity>

        </View>

        <View style={{ marginTop: '7%' }}>
          <ProfileList title='Edit Profile' Press={() => navigation.navigate('EditProfile')} />
          <ProfileList title='Notification' Press={() => navigation.navigate('NotificationSetting')} />
          <ProfileList title='Change Password' Press={() => navigation.navigate('ChangePassword')} />
          <ProfileList title='Privacy Policy' Press={() => navigation.navigate('PrivacyPolicy')} />
          <ProfileList title='Terms of Use' Press={() => navigation.navigate('TermsOfUse')} />
        </View>

        <TouchableOpacity onPress={() => setShowModal(true)}
          style={styles.signout_box}>
          <Text style={styles.signout_text}>Sign out</Text>
        </TouchableOpacity>

        <Modal
          animationType='slide'
          visible={showModal}
          transparent={true}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 245,
                width: '90%',
                borderRadius: 8,
              }}>
              <Text style={{ fontSize: 24, fontFamily: 'Montserrat-Bold', color: '#DA0606', textAlign: 'center', marginTop: 18 }}>Sign out</Text>
              <View style={{ height: 1, width: '90%', backgroundColor: '#DDDDDD', alignSelf: 'center', marginTop: 16 }}></View>
              <Text style={{ fontSize: 18, fontFamily: 'Montserrat-Bold', color: '#2C2C2E', textAlign: 'center', marginTop: 16, width: '70%', alignSelf: 'center' }}>You are attempting to sign out.</Text>
              <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Regular', color: 'rgba(44, 44, 46, 0.7)', textAlign: 'center', marginTop: 14, width: '70%', alignSelf: 'center' }}>Are you sure?</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 22 }}>
                <SmallButton title='Cancel' bgcolor={'white'} textColor={'#2C2C2E'} Press={() => [setShowModal(false)]} />
                <SmallButton title='Sign out' bgcolor={'#DA0606'} textColor={'white'} Press={() => navigation.navigate('AccountScreen')} />
              </View>

            </View>
          </View>
        </Modal>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  followerNum: {
    fontSize: 24,
    color: '#DF0B0B',
    fontFamily: 'Montserrat-SemiBold'
  },
  follower: {
    fontSize: 14,
    color: '#878787',
    fontFamily: 'Montserrat-Regular'
  },
  followerList: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  signout_box: {
    height: 54,
    width: '88%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    marginBottom: '4%'
  },
  signout_text: {
    fontSize: 16,
    color: '#DA0606',
    fontFamily: 'Montserrat-Medium'
  }
})