import React from 'react'
import { Text, View } from 'react-native'
import { Appbar, IconButton} from 'react-native-paper'
import CustomAppbarStyle from './CustomAppbarStyle'
import Firebase from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';

export default function CustomAppbar() {
    const auth = Firebase.auth()
    const logout = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("LoginScreen")
        })
        .catch(error  => alert(error.message))
    }
    const navigation = useNavigation()
    
    return (
        <Appbar.Header style={auth.currentUser ? CustomAppbarStyle.header : CustomAppbarStyle.headerNoAuth}>
             {auth.currentUser 
             ?
             <>
             <IconButton
                icon="menu"
                color="#ddd"
                size={30}
                onPress={() => console.log('Pressed')}
            />
            <Text style={CustomAppbarStyle.text}>
                Coin Price Rank
            </Text>
            <IconButton
                icon="account-arrow-right-outline"
                color="#ddd"
                size={30}
                onPress={() => logout()}
            />
            </>
            :
            <>
             <Text style={CustomAppbarStyle.text}>
                Coin Price Rank
             </Text>
            </>}
        </Appbar.Header>
    )
}
