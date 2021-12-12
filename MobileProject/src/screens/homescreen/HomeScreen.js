import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text,StyleSheet, TouchableOpacity, View} from 'react-native'
import { Card,Title,Paragraph, Badge } from 'react-native-paper'
import CustomAppbar from '../../components/appbar/CustomAppbar'; 
import Firebase from '../../config/firebase';

export default function HomeScreen({navigation}) {
    const auth = Firebase.auth()

    const logout = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("LoginScreen")
        })
        .catch(error  => alert(error.message))
    }

    return (
        <>
           <CustomAppbar/>
           <View style={styles.container}>
           <Text>
               {auth.currentUser?.email}
           </Text>
           <TouchableOpacity
           onPress={logout}
           style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
           </TouchableOpacity>
           </View>
           <StatusBar style="light" />
        </>
    )
}

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center'
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