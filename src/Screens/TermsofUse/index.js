import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../Components/CustomHeader'

export default function TermsOfUse({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
            <ScrollView>
                <CustomHeader text='Terms of Use' Press={() => navigation.goBack()} />

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '11%' }} >
                    <Image source={require('../../Assets/images/image26.png')} style={{ width: 73.64, height: 58.549 }} />
                    <Image source={require('../../Assets/images/image31.png')} style={{ width: 113.477, height: 60.964 }} />
                </View>

                <View style={{marginTop: '12%'}}>
                    <Text style={{ color: '#2C2C2E', width: '90%', alignSelf: 'center' }} >
                        Lorem ipsum dolor sit amet consectetur. Aliquam mattis consectetur vitae ornare nunc feugiat nulla. Mi lectus mauris ac cursus suspendisse. Nunc aliquet tincidunt mauris id sed euismod sed. Integer nulla velit luctus dictum donec duis tellus nibh. Lacus vitae sollicitudin molestie tellus. Id egestas scelerisque fames mauris viverra.
                    </Text>
                    <Text style={{ color: '#2C2C2E', width: '90%', alignSelf: 'center', marginTop: '5%' }}>
                        Eu volutpat massa id eu et sapien aliquam condimentum. Lobortis sed tempor et viverra pulvinar egestas ipsum magna sed. Id proin elementum lobortis mi. Nisi et amet vehicula non. Dolor ullamcorper nisl urna lorem et leo a massa quis. Phasellus pharetra consequat eget eu blandit adipiscing ut.
                    </Text>
                    <Text style={{ color: '#2C2C2E', width: '90%', alignSelf: 'center', marginTop: '5%' }}>
                        Et ac eget vivamus est pulvinar amet. Eu id suspendisse eu sed porttitor ornare faucibus orci. Sed mauris id lorem risus in diam lacus nunc sit. Nunc quisque tempus vulputate nec lacus malesuada.
                    </Text>


                    <Text style={{ color: '#2C2C2E', width: '90%', alignSelf: 'center', marginTop: '5%' }}>
                        Condimentum tortor enim eget convallis. Massa eget sit est neque tempus nascetur. Porta malesuada ut maecenas purus eros facilisi. Eget odio commodo porta sed. Tempor at tincidunt et est sit viverra neque pretium semper.
                    </Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: '5%', marginTop: '7%'}}>
                    <View style={{height: 14, width: 14, backgroundColor: '#DF0B0B'}}>
                        <Image source={require('../../Assets/icons/Tick.png')} style={{height: 14, width: 14}} />
                    </View>
                    <Text style={{color: '#2C2C2E', fontSize: 12}}>    I agree to the Privacy Policy</Text>
                </View>



            </ScrollView>

        </View>
  )
}

const styles = StyleSheet.create({})