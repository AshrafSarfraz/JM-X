import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import SearchBar from '../../Components/SearchBar'
import CategoryFlatList from '../../Components/CategoryFlatList'
import { Menu, MenuItem } from 'react-native-material-menu';

export default function Debates({ navigation }) {

    const [visible, setVisible] = useState(new Array(Debates.length).fill(false));
    const [modalVisible, setModalVisible] = useState(false);

    // const hideMenu = () => setVisible(false);

    // const showMenu = () => setVisible(true);

    const hideMenu = (index) => {
        const newVisibilities = [...visible];
        newVisibilities[index] = false;
        setVisible(newVisibilities);
      };
    
      const showMenu = (index) => {
        const newVisibilities = [...visible];
        newVisibilities[index] = true;
        setVisible(newVisibilities);
      };

    const data = [
        {
            name1: 'Lisa',
            name2: 'Emily',
            image1: require('../../Assets/images/StartDebateGirl.png'),
            image2: require('../../Assets/images/image1.png'),
            title: 'Socilalism',
            userimg2: require('../../Assets/images/GirlProfile.png'),
            userimg1: require('../../Assets/images/Profilemage.png'),
        },
        {
            name1: 'Lisa',
            name2: 'Martha',
            image1: require('../../Assets/images/StartDebateGirl.png'),
            image2: require('../../Assets/images/image2.png'),
            title: 'Fashion',
            userimg2: require('../../Assets/images/GirlProfile.png'),
            userimg1: require('../../Assets/images/Profilemage.png'),
        },
        {
            name1: 'Lisa',
            name2: 'Jeny',
            image1: require('../../Assets/images/StartDebateGirl.png'),
            image2: require('../../Assets/images/image3.png'),
            title: 'Economy',
            userimg2: require('../../Assets/images/GirlProfile.png'),
            userimg1: require('../../Assets/images/Profilemage.png'),
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CustomHeader text='Debates' Press={() => navigation.goBack()} />

                <View style={{ marginTop: '7%' }} />
                <SearchBar />

                <CategoryFlatList />


                <View style={{ marginTop: '7%' }} />

                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <View style={styles.container}>

                            <View style={{ flexDirection: 'row' }} >
                                <Image source={item.image1} style={styles.image1} />
                                <Image source={item.image2} style={styles.image2} />
                            </View>


                            <View style={{ position: 'absolute', width: '100%' }}>

                                <View style={styles.userheader}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={item.userimg1} style={styles.userimg} />
                                        <Text style={styles.username} > {item.name1}</Text>
                                        <Image source={require('../../Assets/images/Badge.png')} style={{ height: 21.711, width: 15.951 }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                                        <Image source={item.userimg2} style={styles.userimg} />
                                        <Text style={styles.username} > {item.name2}</Text>
                                    </View>

                                    <Menu
                                        visible={visible[index]}
                                        anchor={
                                            <TouchableOpacity onPress={() => showMenu(index)} >
                                                <Image source={require('../../Assets/icons/ThreeDotsVertical.png')} style={{ height: 24, width: 24 }} />
                                            </TouchableOpacity>
                                        }
                                        onRequestClose={() => hideMenu(index)}
                                    >
                                        <TouchableOpacity onPress={() => { hideMenu(index), setModalVisible(true) }} style={{}} >
                                        <Text style={styles.delete_text} >Delete</Text>
                                        </TouchableOpacity>
                                    </Menu>

                                </View>

                                <Text style={styles.title}>{item.title}</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%', marginTop: 3 }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Image source={require('../../Assets/icons/Like.png')} style={{ height: 17, width: 17 }} />
                                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'white' }} > 1k</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}>
                                        <Image source={require('../../Assets/icons/DisLike.png')} style={{ height: 20, width: 20 }} />
                                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'white' }} > 3</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.eyeView}>
                                    <Image source={require('../../Assets/icons/EyeIcon.png')} style={{ height: 16, width: 16 }} />
                                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 12 }} >1.2K</Text>
                                </View>

                            </View>
                        </View>
                    )}
                />


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 172,
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center'
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
        width: 28
    },
    userheader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '2.5%',
        marginTop: '2%'
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
    },
    delete_text: {
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6
    }
})

