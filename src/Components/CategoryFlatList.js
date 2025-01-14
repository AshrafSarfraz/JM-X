import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function CategoryFlatList() {
    const [selectedBox, setSelectedBox] = useState("All")

    const data = [
        {
            name: 'All',
        },
        {
            name: 'E-sports',
        },
        {
            name: 'Music',
        },
        {
            name: 'Socialism',
        },
    ];

    return (
        <FlatList
            horizontal
            data={data}
            contentContainerStyle={{ paddingRight: 15 }}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => setSelectedBox(item.name)}
                    style={{
                        marginTop: 18,
                        backgroundColor: 'white',
                        borderRadius: 100,
                        marginLeft: 15,
                        paddingHorizontal: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: selectedBox == item.name ? '#DF0B0B' : '#CCCCCC',
                        paddingVertical: 12
                    }}>
                    <Text style={{
                        color: selectedBox == item.name ? '#DF0B0B' : '#929292',
                        fontSize: 14,
                        fontFamily: 'Montserrat-Regular'
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({})