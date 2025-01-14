import { StyleSheet, Text, View, ScrollView, TextInput, Modal, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../Components/CustomHeader'
import Button from '../../Components/Button'
import MainHeader from '../../Components/MainHeader'

export default function AddLiveStream({ navigation }) {

  const [showModal, setShowModal] = useState(false)
  const [showModalSegment, setShowModalSegment] = useState(false)
  const [showModalTime, setShowModalTime] = useState(false)
  const [selectedItems, setSelectedItems] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  };


  const data = [
    { name: 'Republicans' },
    { name: 'Polotics' },
    { name: 'Race' },
    { name: 'National Security' },
    { name: 'Sports' },
    { name: 'Women' },
    { name: 'Religion' },
    { name: 'Justice' },
    { name: '2nd Ammendment' },
    { name: 'Relationships' },
    { name: 'Parenting' },
    { name: 'The Economy' },
    { name: 'Immigration' },
    { name: 'Kids' },
    { name: 'Music' },
    { name: 'Democracy' },
    { name: 'Social Issues' },
    { name: 'The Environment' },
    { name: 'Education' },
    { name: 'Fashion' },
    { name: 'Sociallism' },
    { name: 'Freedom' },
    { name: 'Other' },
  ];


  const [selectedCategory, setSelectedCategory] = useState('');

  const handleItemSelection = (itemName) => {
    const alreadySelected = selectedItems[0] === itemName;

    if (alreadySelected) {
      setSelectedItems([]);
      setSelectedCategory('');
    } else {
      setSelectedItems([itemName]);
      setSelectedCategory(itemName);
      setShowModal(false);
    }
  };



  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <MainHeader Press={() => navigation.navigate('Notification')} />
        <Text style={styles.enter_text}>Enter the title of your  Live Stream.</Text>

        <View style={{ marginTop: '7%' }} />
        <Text style={styles.title}>Title</Text>
        <View style={styles.field}>
          <TextInput
            placeholder='Enter Title'
            placeholderTextColor={'#CDCDCD'}
            style={styles.textinput} />
        </View>

        <View style={{ marginTop: '5%' }} />
        <Text style={styles.title} >Category</Text>
        <View style={styles.field}>
          <TextInput
            value={selectedCategory}
            placeholder='Enter Category'
            placeholderTextColor={'#CDCDCD'}
            style={styles.textinput} />
          <TouchableOpacity onPress={() => setShowModal(true)} >
            <Image source={require('../../Assets/icons/DropDown.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '5%' }} />
        <Text style={styles.title} >Description</Text>
        <View style={styles.field}>
          <TextInput
            placeholder='Enter Description'
            placeholderTextColor={'#CDCDCD'}
            style={styles.textinputDescription} />
        </View>


        <View style={{ marginTop: '3.5%' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
          <Text style={styles.title} >Segmented time limit</Text>
          <TouchableOpacity onPress={() => setShowModalSegment(true)}>
            <Image source={require('../../Assets/icons/Question.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.field}>
          <TextInput
            placeholder='Enter Time'
            placeholderTextColor={'#CDCDCD'}
            style={styles.textinput} />
        </View>
        {/* Segmented time limit Modal */}
        <Modal
          animationType='slide'
          visible={showModalSegment}
          transparent={true}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 172,
                width: '90%',
                borderRadius: 12,
              }}>
              <TouchableOpacity
                onPress={() => [setShowModalSegment(false)]}
                style={{ marginRight: '3%', marginTop: '3%' }}>
                <Image source={require('../../Assets/icons/Cross.png')} style={styles.modalimage} />
              </TouchableOpacity>
              <Text style={styles.modaltitle}>Segmented time limit</Text>
              <Text style={styles.modalsubtitle} >The segmented time limit represents how long one person can speak at a time at which point the microphone automatically switches over to the other debater.</Text>
            </View>
          </View>
        </Modal>




        <View style={{ marginTop: '3.5%' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
          <Text style={styles.title} >Total time limit</Text>
          <TouchableOpacity onPress={() => setShowModalTime(true)} >
            <Image source={require('../../Assets/icons/Question.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.field}>
          <TextInput
            placeholder='Enter Time'
            placeholderTextColor={'#CDCDCD'}
            style={styles.textinput} />
        </View>
        {/* Time time limit Modal  */}
        <Modal
          animationType='slide'
          visible={showModalTime}
          transparent={true}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 172,
                width: '90%',
                borderRadius: 12,
              }}>
              <TouchableOpacity
                onPress={() => [setShowModalTime(false)]}
                style={{ marginRight: '3%', marginTop: '3%' }}>
                <Image source={require('../../Assets/icons/Cross.png')} style={styles.modalimage} />
              </TouchableOpacity>
              <Text style={styles.modaltitle}>Time time limit</Text>
              <Text style={styles.modalsubtitle} >The total time limit represents how much time the speaker has left to speak in the whole debate. Once this time limit runs out, the speaker can no longer talk for the rest of the debate.</Text>
            </View>
          </View>
        </Modal>


        {/* Add Ellipse */}
        <TouchableOpacity
          onPress={() => navigation.navigate('InviteDebater')}
          style={styles.ellipse}>
          <Image source={require('../../Assets/icons/PlusRed.png')} style={{ height: 26, width: 26 }} />
        </TouchableOpacity>

        {/* Button */}
        <View style={{ marginTop: '7%', }} />
        <Button title='Start Debate' Press={() => navigation.navigate('StartDebate')} />
        <View style={{ marginTop: '10%' }} />


        {/* Category */}
        <Modal
          animationType='slide'
          visible={showModal}
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <TouchableOpacity
              onPress={() => [setShowModal(false)]}
              style={{
                backgroundColor: 'white',
                height: 522,
                width: '90%',
                borderRadius: 8,
              }}>
              <FlatList
                data={data}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleItemSelection(item.name)}
                    style={{
                      marginTop: 14,
                      backgroundColor: selectedItems[0] === item.name ? '#DF0B0B' : 'white',
                      height: 37,
                      borderRadius: 100,
                      paddingHorizontal: 16,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#CCCCCC',
                      marginLeft: 12
                    }}>
                    <Text
                      style={{
                        color: selectedItems[0] === item.name ? 'white' : '#929292',
                        fontSize: 14,
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </TouchableOpacity>
          </View>
        </Modal>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  enter_text: {
    fontSize: 14,
    color: '#959595',
    fontFamily: 'Montserrat-Regular',
    marginLeft: '5%',
    marginTop: '10%'
  },
  title: {
    color: '#2C2C2E',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: '5%',
  },
  field: {
    height: 48,
    width: '90%',
    borderColor: '#E2E4E9',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: '2.2%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  textinput: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#2C2C2E',
    width: '80%'
  },
  ellipse: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(223, 11, 11, 0.34)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginRight: '5%'
  },
  modaltitle: {
    color: '#2C2C2E',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginTop: '4%'
  },
  modalsubtitle: {
    color: '#2C2C2E',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 12,
    textAlign: 'center',
    marginTop: '4%',
    lineHeight: 19
  },
  modalimage: {
    height: 16,
    width: 16,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  textinputDescription: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#3E7DE9',
    width: '80%',
    textDecorationLine: 'underline'
  }
})

