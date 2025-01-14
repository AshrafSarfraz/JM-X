import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import SearchBar from '../../Components/SearchBar'
import CategoryFlatList from '../../Components/CategoryFlatList'
import DebatesList2 from '../../Components/DebatesList2'
import MainHeader from '../../Components/MainHeader'
import { DummyData } from './DummyData'

export default function Debates2({ navigation }) {

    const RenderItem = ({ item }) => (
        <TouchableOpacity style={styles.Cart} onPress={() => {
            if (item.Id === 1) {
                navigation.navigate('liveStream1')
            }
            else {
                navigation.navigate('liveStream1')
            }

        }} >
            <ImageBackground style={styles.BgImg} source={item.BgImg} imageStyle={{ borderRadius: 20 }} >
                <View style={styles.Head}>
                   <View> 
                     <Text style={styles.Title}>{item.Title}</Text>
                    <Text style={styles.Subtitle}>{item.Subtitle}</Text>
                    </View>   
                    <View style={styles.View_Cont} >
                        <Image source={require('../../Assets/images/eye.png')} style={styles.eye} />
                        <Text style={styles.View} >{item.View}</Text>
                    </View>
                </View>

                <View style={styles.Bottom} >
                    <View style={styles.Img_Cont}>
                        <Image source={item.UserImg} style={styles.User_Img} />
                        <View style={styles.Name_Cont} >
                            <Text style={styles.Name}>{item.UserName}</Text>
                            <Text style={styles.Followers}>{item.Followers}Follower</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.Btn} >
                        <Image source={item.Req} style={styles.Req} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </TouchableOpacity>
    )

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
            <ScrollView>
                <MainHeader Press={() => navigation.navigate('Notification')} />

                <CategoryFlatList />


                <View style={{ marginTop: '7%' }} />
                <View>
                    <FlatList
                        data={DummyData}
                        renderItem={RenderItem}
                    />
                </View>



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Cart: {
        marginVertical: '1%',
        borderRadius: 10,
        overflow: "hidden",
        width: '100%',
    },
    BgImg: {
        width: '100%',
        height: 170,
        borderRadius: 20

    },
    Head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginTop:"3%"
    },
    Title: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold.ttf',
        color: '#FFFFFF',
        lineHeight: 22
    },
    Subtitle: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular.ttf',
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
        width: 54,
     
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
        marginTop: "13%",
        marginHorizontal: "5%",
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
        width: 40, height: 40
    }

})