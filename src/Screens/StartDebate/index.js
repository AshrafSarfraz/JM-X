import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import SmallButton from '../../Components/SmallButton'
import { Comments } from './DummyData'

export default function StartDebate({ navigation }) {
    const [showModal, setShowModal] = useState(false)
    const RenderItem = ({ item }) => (
        <View style={styles.Cart}>
            <Image source={item.Img} style={styles.Img} />
            <View style={styles.Info_Cont}>
                <View style={styles.Time_Cont} >
                    <Text style={styles.Name}>{item.Name}</Text>
                    <Text style={styles.Time}>{item.Time}</Text>
                </View>
                {item.Detail !== '' ?
                    <Text style={styles.Details} >{item.Detail}</Text>
                    : null}
                {
                    item.Img2 !== '' ?
                        <Image source={item.Img2} style={styles.Img2} />
                        : null
                }
            </View>
        </View>
    )


    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView  >

                <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '10%' }}>
                    <View style={{ flexDirection: 'row-reverse' }} >
                        <View style={{ width: 45, height: 28, backgroundColor: '#AC32D7', borderRadius: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                            <Image source={require('../../Assets/icons/EyeIcon.png')} style={{ height: 18, width: 18 }} />
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Regular', fontSize: 14 }} >0</Text>
                        </View>

                        <View style={{ marginLeft: 10 }} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('InviteDebater')}
                            style={{ width: 67, height: 28, backgroundColor: '#DF0B0B', borderRadius: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Image source={require('../../Assets/icons/PlusWhite.png')} style={{ height: 16, width: 16 }} />
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Regular', fontSize: 14 }} >Invite</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => setShowModal(true)}
                    >
                        <Image source={require('../../Assets/images/back.png')} style={{width:25,height:25}} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 29, width: 146, borderWidth: 1, borderColor: '#DF0B0B', borderRadius: 52, alignItems: 'center', justifyContent: 'center', marginTop: '3%' ,alignSelf:'flex-end',marginRight:"5%",marginBottom:"10%"}}>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'white' }}>Total Time Left: 13:35</Text>
                </View>

                <ImageBackground
                    source={require('../../Assets/images/StartDebateGirl.png')}
                    style={{ height: 340, width: '100%', marginTop: '2%' }}
                />








                <Modal
                    animationType='slide'
                    visible={showModal}
                    transparent={true}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 181,
                                width: '90%',
                                borderRadius: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-SemiBold', color: '#2C2C2E', textAlign: 'center', marginTop: '4%' }}>
                                You are attempting to end your debate.
                            </Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Regular', color: 'rgba(44, 44, 46, 0.7)', textAlign: 'center', marginTop: '3%' }} >Are you sure?</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 31 }}>
                                <SmallButton title='No' bgcolor={'white'} textColor={'black'} Press={() => setShowModal(false)} />
                                <SmallButton title='Yes' bgcolor={'#DF0B0B'} textColor={'white'} Press={() => navigation.navigate('Home')} />
                            </View>

                        </View>
                    </View>
                </Modal>


            </ScrollView>
            <View style={styles.Comments_Conts} >
                <View style={{ width: '60%' }}>
                    <FlatList
                        data={Comments}
                        renderItem={RenderItem}
                    />
                </View>

                <View style={{ width: '40%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.Accept_Btn}>
                        <Image source={require('../../Assets/images/accept.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >1.1k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Like_Btn}>
                        <Image source={require('../../Assets/images/like.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >1k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Like_Btn}>
                        <Image source={require('../../Assets/images/dislike2.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Image source={require('../../Assets/images/live2.png')} style={styles.live} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Comments_Conts: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: '3%',
        flexDirection: "row",

    },
    Cart: {
        flexDirection: 'row',
        marginBottom: "2%",
        alignItems: 'center',


    },
    Img: {
        width: 50, height: 50,
    },
    Info_Cont: {

    },
    Time_Cont: {
        flexDirection: "row",
        alignItems: 'center'
    },
    Name: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        marginLeft: '5%',
        lineHeight: 18
    },
    Details: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        marginLeft: '5%',
        lineHeight: 16
    },
    Img2: {
        width: 50,
        height: 20,
        resizeMode: 'contain',
        marginLeft: '5%'
    },
    Time: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        marginLeft: '2%',
        lineHeight: 14
    },
    Accept_Btn: {
        backgroundColor: '#9C0B0B',
        paddingHorizontal: '6%',
        paddingVertical: '4%',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        marginBottom: '6%'
    },
    Accept: {
        width: 22, height: 22, resizeMode: 'contain',
        marginRight: '3%'
    },
    Frnd: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#FFFFFF',
        marginLeft: '2%',
        lineHeight: 14
    },
    Like_Btn: {
        backgroundColor: '#999999',
        paddingHorizontal: '6%',
        paddingVertical: '4%',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        marginBottom: '6%'
    },
    live: {
        width: 65, height: 65
    }


})