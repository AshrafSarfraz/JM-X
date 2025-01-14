import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Button from '../../Components/Button';

export default function Interest({ navigation }) {
  const [selectedItems, setSelectedItems] = useState([]);

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
  ];


  const handleItemSelection = (itemName) => {
    const alreadySelected = selectedItems.includes(itemName);

    if (alreadySelected) {
      const updatedItems = selectedItems.filter((item) => item !== itemName);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>Interest</Text>
        <Text style={styles.subtitle}>Select the categories you are interested.</Text>


        <View style={{marginTop: '3%'}}  />
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
                marginTop: 18,
                backgroundColor: selectedItems.includes(item.name) ? '#DF0B0B' : 'white',
                height: 37,
                borderRadius: 100,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#CCCCCC',
                marginLeft: 20
              }}>
              <Text
                style={{
                  color: selectedItems.includes(item.name) ? 'white' : '#929292',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={{marginTop: '24.5%',}} />
        <Button title='Continue' Press={() => navigation.navigate('TabRoutes') } />
        <View style={{marginTop: '5%',}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2C2C2E',
    alignSelf: 'center',
    marginTop: '7%',
  },
  subtitle: {
    color: '#989898',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginLeft: '6%',
    marginTop: '10%',
  },
});
