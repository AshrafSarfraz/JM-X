import { StyleSheet, Text, View,TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SmallButton from '../../Components/SmallButton'
import { Comments } from './DummyData'

export default function LibraryStream({ navigation }) {
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '10%' }}>
                    <TouchableOpacity
                        onPress={() => setShowModal(true)}
                        
                    >
                        <Image source={require('../../Assets/images/back.png')} style={{height: 20, width: 24}} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ width: 58, height: 28, backgroundColor: '#AC32D7', borderRadius: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                            <Image source={require('../../Assets/icons/EyeIcon.png')} style={{ height: 18, width: 18 }} />
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Regular', fontSize: 14 }} >1.1k</Text>
                        </View>

                        <View style={{ marginLeft: 10 }} />

                    </View>


                </View>

                <View style={{ height: 29, width: 146, borderWidth: 1, borderColor: '#DF0B0B', borderRadius: 52, alignItems: 'center', justifyContent: 'center', marginTop: '4%', marginBottom: '10%', alignSelf: 'flex-end', marginRight: '7%' }}>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'white' }}>Total Time Left: 13:35</Text>
                </View>

                <View>
                    <Text style={{fontSize: 16, color: 'white', fontFamily: 'Montserrat-SemiBold', textAlign: 'center'}}>Classical Music</Text>
                </View>

                <ImageBackground
                    source={require('../../Assets/images/video3.png')} imageStyle={{ width: '100%', height: "100%", }}
                    style={{ height: 390, width: '100%', marginTop: '4%' }}
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
                                height: 280,
                                width: '90%',
                                borderRadius: 10,
                                padding: "5%",

                            }}>
                            <Text style={{ fontSize: 14, color: '#2C2C2C', textAlign: "center", fontFamily: 'Montserrat-Medium' }} >
                                The debate session has ended, please vote on the winner of the debate.</Text>

                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: "7%", width: '70%', alignSelf: 'center' }} >
                                <View style={{ alignItems: "center", marginTop: '4%' }} >
                                    <Image source={require('../../Assets/images/e.png')} style={{ width: 45, height: 45, resizeMode: "contain" }} />
                                    <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: "5%", color: "#000000" }} >Emily</Text>
                                    <TouchableOpacity style={{ flexDirection: 'row', borderColor: 'red', height: 25, width: 65, justifyContent: "center", alignItems: 'center', marginTop: "5%", backgroundColor: '#FADBDB', borderRadius: 5 }} >
                                        <Image source={require('../../Assets/images/tick1.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        <Text style={{ fontSize: 14, color: 'red', marginLeft: "5%", }} >Vote</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: "#000000", marginTop: "-5%" }} >00:57</Text>
                                <View style={{ alignItems: "center" }} >
                                    <Image source={require('../../Assets/images/v.png')} style={{ width: 50, height: 50, }} />
                                    <Text style={{ fontSize: 16, fontWeight: "500", marginVertical: "5%", color: "#000000" }} >Henry</Text>
                                    <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#B7B7B7', borderWidth: 1, height: 25, width: 65, justifyContent: "center", alignItems: 'center', marginTop: "5%", backgroundColor: '#FFFFFF', borderRadius: 5 }} >
                                        <Text style={{ fontSize: 14, color: '#B7B7B7', marginLeft: "5%", }} >Vote</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginTop: '8%', flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <TouchableOpacity style={{ width: '48%', alignItems: "center", justifyContent: "center" }} onPress={() => { navigation.navigate('Winner') }}>
                                    <Text style={{ fontSize: 16, color: "#000000", fontWeight: "600", fontFamily: 'Montserrat-SemiBold' }} >Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ height: 50, borderRadius: 10, backgroundColor: "#DF0B0B", width: '48%', alignItems: "center", justifyContent: "center" }} onPress={() => { navigation.navigate('Winner') }}>
                                    <Text style={{ fontSize: 16, color: "#FFFFFF", fontWeight: "600", fontFamily: 'Montserrat-SemiBold' }} >Submit</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </Modal>


            </ScrollView>
            <View style={styles.Comments_Conts} >
                <View style={{ width: '60%',marginBottom:'12%' }}>
                    <FlatList
                        data={Comments}
                        renderItem={RenderItem}
                    />
                </View>



            </View>
            <View style={{
                height: 48,
                width: '90%',
                borderWidth: 1,
                borderColor: 'white',
                alignSelf: 'center',
                marginBottom: '2%',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: '3%',
            }}>
                <TextInput
                    placeholder='Comment here'
                    placeholderTextColor={'#979797'}
                    style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#979797', width: '70%' }} />
                <Image source={require('../../Assets/images/smile.png')} style={{ height: 24, width: 24 }} />
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