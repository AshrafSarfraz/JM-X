import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Category = () => {
  return (
    <View style={styles.Main_Cont} >
     <TouchableOpacity  style={styles.Btn}>
     <Text style={styles.Txt} >Republicans</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Category

const  styles=StyleSheet.create({
 
    Main_Cont:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
    }

})