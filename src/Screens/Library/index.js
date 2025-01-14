import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../Components/MainHeader'
import SearchBar from '../../Components/SearchBar'
import CategoryFlatList from '../../Components/CategoryFlatList'

export default function Library({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <MainHeader Press={() => navigation.navigate('Notification')} />

        <View style={{ marginTop: '6%' }} />
        <SearchBar />

        <CategoryFlatList/>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})