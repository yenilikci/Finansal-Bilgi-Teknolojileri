import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView,StyleSheet,Button } from 'react-native'
import { Appbar,Card,Title,Paragraph, Badge } from 'react-native-paper'

export default function HomeScreen() {
    return (
        <>
           <Text>
               HomeScreen
           </Text>
        </>
    )
}

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        maxHeight: 150,
    },   
})  