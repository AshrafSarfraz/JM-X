import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function DebatesList2({ image1, image2, name1, name2, title, userimg1, userimg2, Badgeimg1, Badgeimg2 }) {
    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }} >
                <Image source={image1} style={styles.image1} />
                <Image source={image2} style={styles.image2} />
            </View>

            
            <View style={{ position: 'absolute', width: '100%' }}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('LibraryStream2')}}>
                <View style={styles.userheader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={userimg1} style={styles.userimg} />
                        <Text style={styles.username} > {name1}</Text>
                        <Image source={Badgeimg1} style={{ height: 21.711, width: 15.951 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '26%' }}>
                        <Image source={userimg2} style={styles.userimg} />
                        <Text style={styles.username} > {name2}</Text>
                        <Image source={Badgeimg2} style={{ height: 21.711, width: 15.951 }} />
                    </View> 
                </View>

                <Text style={styles.title}>{title}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%', marginTop: 3 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../Assets/icons/Like.png')} style={{ height: 17, width: 17 }} />
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'white' }} > 1k</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                        <Image source={require('../Assets/icons/DisLike.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'white' }} > 3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.eyeView}>
                    <Image source={require('../Assets/icons/EyeIcon.png')} style={{ height: 16, width: 16 }} />
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 12 }} >1.2K</Text>
                </View>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 172,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        // backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image1: {
        height: 172,
        width: '50%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    image2: {
        height: 172,
        width: '50%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    username: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'white'
    },
    userimg: {
        height: 28,
        width: 28,
        borderRadius:20
    },
    userheader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2.5%',
        marginTop: '2%',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        marginLeft: '3%',
        marginTop: 79
    },
    eyeView: {
        height: 28,
        width: 54,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 47,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        left: '80%',
        top: 125
    }
})