import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/Routes'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Routes/>
    </View>
  )
}

const styles = StyleSheet.create({})