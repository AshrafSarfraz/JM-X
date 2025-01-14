import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../../Constants/imagePath'
import styles from './styles'

export default function Splash() {

  const navigation = useNavigation()
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate("Onboarding")
        }, 2000)
    })
  return (
    
    <View style={styles.container}>
      <View style={styles.redContainer} ></View>
      <View style={styles.blueContainer} ></View>
      
      <View style={styles.subcontainer}>
        <Image source={imagePath.SplashLogo} style={styles.logo} />
      </View>
    </View>
  )
}

