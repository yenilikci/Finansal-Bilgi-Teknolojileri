import React from 'react'
import { Text, View } from 'react-native'
import { Appbar, IconButton, Avatar} from 'react-native-paper'
import CustomAppbarStyle from './CustomAppbarStyle'
import Firebase from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';

export default function CustomAppbar() {
    const auth = Firebase.auth()
    const logout = () => {
        auth.signOut()
        .then(() => {
            navigation.replace("LoginScreen")
            alert('Logout Successful!')
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
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Avatar.Image size={24} source={require('../../assets/coinflip.gif')} />
                <Text style={CustomAppbarStyle.text}>
                        Coin Price Rank
                </Text>
            </View>
            <IconButton
                icon="account-arrow-right-outline"
                color="#ddd"
                size={30}
                onPress={() => logout()}
            />
            </>
            :
            <>
                <Avatar.Image size={24} source={require('../../assets/coinflip.gif')} />
                <Text style={CustomAppbarStyle.text}>
                        Coin Price Rank
                </Text>
            </>}
        </Appbar.Header>
    )
}