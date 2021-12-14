import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text,StyleSheet, TouchableOpacity, View} from 'react-native'
import { Card,Title,Paragraph, Badge } from 'react-native-paper'
import Firebase from '../../config/firebase';
import CoinCard from '../../components/coincard/CoinCard';

export default function HomeScreen({navigation}) {
    const auth = Firebase.auth()
    return (
        <>
            <CoinCard/>
           <StatusBar style="light" />
        </>
    )
}

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
    },   
    button: {
        backgroundColor: '#000',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 16
    }
})  