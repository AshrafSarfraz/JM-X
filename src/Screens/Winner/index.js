import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const Winner = ({ navigation }) => {
  return (
    <ScrollView style={styles.Main_Cont}>
      <View style={styles.Body}>
        <Image source={require('../../Assets/images/winner.png')} style={styles.Winner} />
        <Text style={styles.Winner_Txt} >Winner</Text>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-between',width:'75%',marginTop:'9%'}}>
        <View  style={{alignItems:"center",justifyContent:"center"}}>
        <Image source={require('../../Assets/images/win.png')} style={styles.Profile} />
        <Text style={styles.Name_Txt} >Lisa Brook</Text>
        <Text style={styles.Vote_Txt} >107 votes</Text>
        </View>
        <View  style={{alignItems:"center",justifyContent:"center"}}>
        <Image source={require('../../Assets/images/e.png')} style={styles.Profile} />
        <Text style={styles.Name_Txt} >Lisa Brook</Text>
        <Text style={styles.Vote_Txt} >63 votes</Text>
        </View>
        </View>
        <Text style={styles.Cong_Txt} >Congratulations!</Text>
        <Text style={styles.Name_Txt} >You are the winner of your today’s debate session.</Text>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('TabRoutes') }}>
          <Text style={styles.Cont_Txt} >Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Winner

const styles = StyleSheet.create({
  Main_Cont: {
    padding: 10,
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  Body: {
    alignItems: "center",
    width: "100%"
  },
  Winner: {
    width: 170, height: 170, resizeMode: "contain",
    marginTop: "5%"
  },
  Winner_Txt: {
    color: "#DF0B0B",
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 24,
    marginVertical: "2%"
  },
  Profile: {
    width: 70, height: 70, resizeMode: "contain",
    marginTop: "5%",
    marginBottom:'3%'
  },
  Name_Txt: {
    color: "#2C2C2C",
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    marginVertical: "1%",
    textAlign:"center"
  },
  Vote_Txt: {
    color: "#2C2C2C",
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    marginVertical: "1%",
    textAlign:"center"
  },
  Cong_Txt: {
    color: "#DF0B0B",
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    lineHeight: 24,
    marginTop: "15%",
    marginBottom: '3%'
  },
  Debate: {
    color: "#2C2C2C",
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 20,
    marginVertical: "1%"
  },
  Btn: {
    backgroundColor: "#DF0B0B",
    width: "100%",
    marginTop: "20%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom:"5%"
  },
  Cont_Txt: {
    color: "#FFFFFF",
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 20,

  }

})