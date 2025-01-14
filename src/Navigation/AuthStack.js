import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AccountScreen,
  ChangePassword,
  DebateThis,
  Debates,
  EditProfile,
  Follower,
  Following,
  ForgetPassword,
  ForgetPassword2,
  Interest,
  InviteDebater,
  NewPassword,
  NewPassword2,
  NewPassword3,
  Notification,
  NotificationSetting,
  OTPVerification,
  OTPVerification2,
  OTPVerification3,
  Onboarding,
  PasswordRecovered3,
  PrivacyPolicy,
  Splash,
  StartDebate,
  TermsOfUse
}
  from '../Screens';
import TabRoutes from './TabRoutes';
import LiveStream1 from '../Screens/LiveStream1';
import JoinStream from '../Screens/JoinStream';
import LiveStream2 from '../Screens/LiveStream2';
import Winner from '../Screens/Winner';
import Debates2 from '../Screens/Profile/Debates';
import LibraryStream from '../Screens/LibraryStream';
import PasswordRecovered1 from '../Screens/PasswordRecovered1';
import PasswordRecovered2 from '../Screens/PasswordRecovered2';
import LibraryStream2 from '../Screens/LibraryStream2';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>



    

      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='AccountScreen' component={AccountScreen} />
      <Stack.Screen name='NewPassword' component={NewPassword} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
      <Stack.Screen name='OTPVerification' component={OTPVerification} />
      <Stack.Screen name='Interest' component={Interest} />
      <Stack.Screen name='TabRoutes' component={TabRoutes} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
      <Stack.Screen name='NotificationSetting' component={NotificationSetting} />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
      <Stack.Screen name='TermsOfUse' component={TermsOfUse} />
      <Stack.Screen name='Notification' component={Notification} />
      <Stack.Screen name='DebateThis' component={DebateThis} />
      <Stack.Screen name='InviteDebater' component={InviteDebater} />
      <Stack.Screen name='StartDebate' component={StartDebate} />
      <Stack.Screen name='Follower' component={Follower} />
      <Stack.Screen name='Following' component={Following} />
      <Stack.Screen name='Debates' component={Debates} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
      <Stack.Screen name='liveStream1' component={LiveStream1} />
      <Stack.Screen name='liveStream2' component={LiveStream2} />
      <Stack.Screen name='JoinStream' component={JoinStream} />
      <Stack.Screen name='LibraryStream' component={LibraryStream} />
      <Stack.Screen name='LibraryStream2' component={LibraryStream2} />
      <Stack.Screen name='Winner' component={Winner} />
      <Stack.Screen name='Debates2' component={Debates2} />
      <Stack.Screen name='OTPVerification2' component={OTPVerification2} />
      <Stack.Screen name='NewPassword2' component={NewPassword2} />
      <Stack.Screen name='PasswordRecovered1' component={PasswordRecovered1} />
      <Stack.Screen name='PasswordRecovered2' component={PasswordRecovered2} />
      <Stack.Screen name='PasswordRecovered3' component={PasswordRecovered3} />
      <Stack.Screen name='ForgetPassword2' component={ForgetPassword2} />
      <Stack.Screen name='OTPVerification3' component={OTPVerification3} />
      <Stack.Screen name='NewPassword3' component={NewPassword3} />
      

    
      </Stack.Navigator>
  )
}
