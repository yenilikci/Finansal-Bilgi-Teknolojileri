import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text,StyleSheet } from 'react-native'
import { Card,Title,Paragraph, Badge } from 'react-native-paper'
import CustomAppbar from '../../components/appbar/CustomAppbar'; 

export default function HomeScreen() {
    return (
        <>
           <CustomAppbar/>
           <Text>
               HomeScreen
           </Text>
           <StatusBar style="light" />
        </>
    )
}

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        maxHeight: 150,
    },   
})  