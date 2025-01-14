import { StyleSheet, Text, View, ScrollView,TextInput, Image, ImageBackground, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SmallButton from '../../Components/SmallButton'
import { Comments } from './DummyData'

export default function LiveStream1({ navigation }) {
    const [showModal, setShowModal] = useState(false)


    const Handle = () => {

        setTimeout(() => {
            navigation.navigate('JoinStream')
        }, 2000);



    }
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
                <View style={{ flexDirection: 'row-reverse' , justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '10%' }}>
                 <View>  
                <View style={{ flexDirection: 'row-reverse' }} >
                        <View style={{ width: 58, height: 35, backgroundColor: '#AC32D7', borderRadius: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                            <Image source={require('../../Assets/icons/EyeIcon.png')} style={{ height: 18, width: 18 }} />
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Regular', fontSize: 14 }} >1.1k</Text>
               </View>
                        <View style={{ marginLeft: 10 }} />
                        <TouchableOpacity
                            onPress={() => { setShowModal(true), Handle() }}
                            style={{ width: 67, height: 35, backgroundColor: '#DF0B0B', borderRadius: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                            <Text style={{ color: '#fff', fontFamily: 'Montserrat-Regular', fontSize: 14 }} >Join</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 29, width: 180, borderWidth: 1, borderColor: '#DF0B0B', borderRadius: 52, alignItems: 'center', justifyContent: 'center', marginTop:'8%' }}>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'white' }}>Total Time Left: 13:35</Text>
                </View>
                </View> 

                    <TouchableOpacity
                        // onPress={() => setShowModal(true)}
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image source={require('../../Assets/images/back.png')} style={{width:30,height:30}} />
                    </TouchableOpacity>
                </View>
                <Text  style={{fontSize:16,fontWeight:'Montserrat-SemiBold',color:'white',alignSelf:"center",marginTop:'8%'}} >Classical Music</Text>

                

                <ImageBackground
                    source={require('../../Assets/images/video1.png')} imageStyle={{ width: '100%', height: "100%", }}
                    style={{ height: 360, width: '100%', marginTop: '2%' }}
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
                            <Image source={require('../../Assets/images/tick.png')} style={{ width: 60, height: 60, alignSelf: "center", marginTop: "5%" }} />
                            <Text style={{ alignSelf: 'center', width: '70%', fontSize: 16, fontFamily: 'Montserrat-SemiBold', color: '#2C2C2E', textAlign: 'center', marginTop: '4%' }}>
                                Request Sent
                            </Text>
                            <Text style={{ alignSelf: 'center', width: '70%', fontSize: 14, fontFamily: 'Montserrat-Regular', color: 'rgba(44, 44, 46, 0.7)', textAlign: 'center', marginTop: '3%' }} >Your request for joining live stream has sent.</Text>
                        </View>
                    </View>
                </Modal>


            </ScrollView>
            <View>
            <View style={styles.Comments_Conts} >
                <View style={{ width: '60%' }}>
                    <FlatList
                        data={Comments}
                        renderItem={RenderItem}
                    />
                </View>

                <View style={{ width: '40%', alignItems: 'flex-end',marginBottom:"21%", justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.Accept_Btn}>
                        <Image source={require('../../Assets/images/accept.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >1.1k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Like_Btn}>
                        <Image source={require('../../Assets/images/like.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >1k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Like_Btn}>
                        <Image source={require('../../Assets/images/dislike.png')} style={styles.Accept} />
                        <Text style={styles.Frnd} >3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Image source={require('../../Assets/images/live.png')} style={styles.live} />
                    </TouchableOpacity>
        </View>
        </View>
        <View style={{
            height: 48,
            width: '90%',
            borderWidth: 1,
            borderColor: 'white',
            alignSelf: 'center',
            marginBottom: '5%',
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
        width: 65, height: 65,
        resizeMode:"contain"
    }


})