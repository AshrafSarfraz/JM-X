import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SmallButton from './SmallButton';

export default function DemocratsFlatlist({ Press }) {
    
    const democrats = [
        {
            title: 'Arizona Election Chief on 14th Amendment in Trump Eli...',
            image: require('../Assets/images/TrumpImage.png')
        },
        {
            title: 'Trump Addresses Hurricane Idalia Aftermath, Critic...',
            image: require('../Assets/images/Trump.png')
        },
        {
            title: 'House Republicans Probe Fulton County DAs Pros...',
            image: require('../Assets/images/Republic.png')
        },

    ];

    return (
        <FlatList
            data={democrats}
            renderItem={({ item }) => (
                <View style={styles.Flatlist_box}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.last_text}>Last Week</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <View
                        onPress={Press}
                        style={styles.button}>
                        <SmallButton title='Debate This' bgcolor={'#DF0B0B'} textColor={'white'}  Press={Press}/>
                    </View>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    Flatlist_box: {
        marginTop: '4%',
        height: 292,
        width: '90%',
        borderRadius: 12,
        backgroundColor: 'white',
        alignSelf: 'center',
        elevation: 5
    },
    image: {
        height: 148,
        width: '95%',
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: '2%'
    },
    last_text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#B4B4B4',
        marginLeft: '2.5%',
        marginTop: '1.5%'
    },
    title: {
        fontSize: 18,
        color: '#2C2C2E',
        marginHorizontal: '2.5%',
        fontFamily: 'Montserrat-SemiBold'
    },
    button: {
        alignItems: 'flex-end',
        paddingRight: '2%',
        paddingTop: '3.5%'
    }
})