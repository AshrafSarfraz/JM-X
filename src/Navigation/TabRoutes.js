import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddLiveScreen, Headline, Home, Library, Profile, } from '../Screens';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Debates2 from '../Screens/Library/Debates2';


const Tab = createBottomTabNavigator();

const CustomTabBar = ({ childern, onPress }) => (
  <TouchableOpacity style={{
    top: -20,
    justifyContent: 'center',
    alignItems: 'center'
  }}
    onPress={onPress}
  >
    <View style={{


    }} >
      <Image source={require('../Assets/images/add.png')} style={{ width: 80, height: 80 }} />
      {childern}
    </View>
  </TouchableOpacity>
)

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopStartRadius: 10, borderTopEndRadius: 10, height: 54 },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../Assets/images/Home.png')}
                style={{ height: 24, width: 24, tintColor: focused ? '#DF0B0B' : '#D2D2D2' }}
              />
              <Text style={{
                color: focused ? '#DF0B0B' : '#D2D2D2',
                fontSize: 10,
                fontFamily: 'Montserrat-Regular'
              }}>home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Headline" component={Headline}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../Assets/images/Headline.png')}
                style={{ height: 24, width: 24, tintColor: focused ? '#DF0B0B' : '#D2D2D2' }}
              />
              <Text style={{
                color: focused ? '#DF0B0B' : '#D2D2D2',
                fontSize: 10,
                fontFamily: 'Montserrat-Regular'
              }}>headline</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name='AddLiveStream' component={AddLiveScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Assets/images/add.png')}
              style={{ height: 26, width: 26, }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBar {...props} />
          )
        }}
      />
      <Tab.Screen name='joindebate' component={Debates2}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../Assets/images/Join.png')}
                style={{ height: 24, width: 24, tintColor: focused ? '#DF0B0B' : '#D2D2D2' }}
              />
              <Text style={{
                color: focused ? '#DF0B0B' : '#D2D2D2',
                fontSize: 10,
                fontFamily: 'Montserrat-Regular'
              }}>join debate</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('../Assets/images/Profile.png')}
                style={{ height: 24, width: 24, tintColor: focused ? '#DF0B0B' : '#D2D2D2' }}
              />
              <Text style={{
                color: focused ? '#DF0B0B' : '#D2D2D2',
                fontSize: 10,
                fontFamily: 'Montserrat-Regular'
              }}>profile</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({

})