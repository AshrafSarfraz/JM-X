import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../Components/MainHeader'
import CategoryFlatList from '../../Components/CategoryFlatList'
import { DummyData } from './DummyData'
import DebatesList2 from '../../Components/DebatesList2'
import HomeButton from '../../Components/HomeButton'
import SearchBar from '../../Components/SearchBar'
import OngoingDebates from '../../Components/OngoingDebates'

export default function Home({ navigation }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>

        <MainHeader Press={() => navigation.navigate('Notification')} />



        {selectedTab == 0 ? (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
              <HomeButton
                title='Ongoing Debates'
                textColor={selectedTab === 0 ? 'white' : '#929292'}
                bgColor={selectedTab === 0 ? 'red' : 'white'}
                onPress={() => setSelectedTab(0)}
              />
              <HomeButton
                title='Past Debates'
                textColor={selectedTab === 1 ? 'white' : '#929292'}
                bgColor={selectedTab === 1 ? 'red' : 'white'}
                onPress={() => setSelectedTab(1)}
              />
            </View>

            <CategoryFlatList />

            <View style={{ marginTop: '6%' }} >
              <OngoingDebates
                name1='Emily'
                name2='Henry'
                image1={require('../../Assets/images/image1.png')}
                image2={require('../../Assets/images/pic14.png')}
                title='Music'
                userimg2={require('../../Assets/images/live2.png')}
                userimg1={require('../../Assets/images/live.png')}
                Badgeimg1={require('../../Assets/images/req1.png')}
                Badgeimg2={require('../../Assets/images//req2.png')}
              />
              <OngoingDebates
                name1='Emily'
                name2='Henry'
                image1={require('../../Assets/images/image3.png')}
                image2={require('../../Assets/images/image2.png')}
                title='Fashion'
                userimg2={require('../../Assets/images/live3.png')}
                userimg1={require('../../Assets/images/live2.png')}
                Badgeimg1={require('../../Assets/images/req1.png')}
                Badgeimg2={require('../../Assets/images/req2.png')}
              />
              <OngoingDebates
                name1='Henry'
                name2='Henry'
                image1={require('../../Assets/images/StartDebateGirl.png')}
                image2={require('../../Assets/images/pic13.png')}
                title='Socilalism'
                userimg2={require('../../Assets/images/live4.png')}
                userimg1={require('../../Assets/images/live.png')}
                Badgeimg1={require('../../Assets/images/req2.png')}
                Badgeimg2={require('../../Assets/images/req2.png')}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
              <HomeButton
                title='Ongoing Debates'
                textColor={selectedTab === 0 ? 'white' : '#929292'}
                bgColor={selectedTab === 0 ? 'red' : 'white'}
                onPress={() => setSelectedTab(0)}
              />
              <HomeButton
                title='Past Debates'
                textColor={selectedTab === 1 ? 'white' : '#929292'}
                bgColor={selectedTab === 1 ? 'red' : 'white'}
                onPress={() => setSelectedTab(1)}
              />
            </View>

            <View style={{ marginTop: '4%' }} />
            <SearchBar />

            <View style={{ marginTop: '6%' }} >
              <DebatesList2
                name1='Emily'
                name2='Henry'
                image1={require('../../Assets/images/image1.png')}
                image2={require('../../Assets/images/pic14.png')}
                title='Music'
                userimg2={require('../../Assets/images/MenVector.png')}
                userimg1={require('../../Assets/images/GirlProfile.png')}
                Badgeimg1={require('../../Assets/images/Badge.png')}
                Badgeimg2={''}
              />
              <DebatesList2
                name1='Jeny'
                name2='Liana'
                image1={require('../../Assets/images/image3.png')}
                image2={require('../../Assets/images/image2.png')}
                title='Fashion'
                userimg2={require('../../Assets/images/Invite4.png')}
                userimg1={require('../../Assets/images/Invite1.png')}
                Badgeimg1={''}
                Badgeimg2={require('../../Assets/images/Badge.png')}
              />
              <DebatesList2
                name1='Lisa'
                name2='Jeny'
                image1={require('../../Assets/images/StartDebateGirl.png')}
                image2={require('../../Assets/images/pic13.png')}
                title='Socilalism'
                userimg2={require('../../Assets/images/Invite5.png')}
                userimg1={require('../../Assets/images/Profilemage.png')}
                Badgeimg1={require('../../Assets/images/Badge.png')}
                Badgeimg2={''}
              />
            </View>
          </View>
        )}




      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2C2C2E',
    marginLeft: '5%',
    marginTop: '6%'
  },
  Cart: {
    marginVertical: '1%',
    borderRadius: 10,
    overflow: "hidden",
    width: '100%',
    paddingHorizontal: '3%'

  },
  BgImg: {
    width: '100%',
    height: 230,
    borderRadius: 20

  },
  Head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: "3%",
    marginTop: '7%'
  },
  Title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold.ttf',
    color: '#FFFFFF',
    lineHeight: 22
  },
  View_Cont: {
    backgroundColor: '#CCCBCD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderRadius: 20,
    justifyContent: "space-between",
    width: 54
  },
  eye: {
    width: 15, height: 15,
  },
  View: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold.ttf',
    color: '#FFFFFF',
    lineHeight: 25,
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "20%",
    marginHorizontal: "4%",
    alignItems: "center"
  },
  Img_Cont: {
    flexDirection: "row",
    alignItems: 'center',


  },
  User_Img: {
    width: 50, height: 50, marginRight: "4%",
    resizeMode: "contain",

  },
  Name_Cont: {

  },
  Name: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold.ttf',
    color: '#FFFFFF',
    lineHeight: 20,
  },
  Followers: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular.ttf',
    color: '#FFFFFF',
    lineHeight: 17,
  },
  Req: {
    width: 40, height: 40,
  
  }

})