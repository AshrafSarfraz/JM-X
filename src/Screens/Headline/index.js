import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import MainHeader from '../../Components/MainHeader'
import SearchBar from '../../Components/SearchBar'
import SmallButton from '../../Components/SmallButton';
import DemocratsFlatlist from '../../Components/DemocratsFlatlist';
import RepubliciansFlatlist from '../../Components/RepubliciansFlatlist';

export default function Headline({ navigation }) {

  


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>

        <MainHeader Press={() => navigation.navigate('Notification')} />

        <View style={{marginTop: '7%'}} />
        <SearchBar />

        <View style={styles.container}>
          <Text style={styles.title}>News</Text>
          
        </View>

        <DemocratsFlatlist Press={() => navigation.navigate('DebateThis')} />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#DF0B0B'
  },
  see_text: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#2C2C2E'
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginHorizontal: '5%', 
    marginTop: '4%'
  }
})