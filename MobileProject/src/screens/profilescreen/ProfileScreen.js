import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, FlatList} from 'react-native'
import {Button, List} from 'react-native-paper'
import Firebase from '../../config/firebase'
import ProfileScreenStyle from './ProfileScreenStyle'

export default function ProfileScreen() {

    const [authInfo, setauthInfo] = useState(false)
    const [uid, setUid] = useState('')
    const [watchList, setWatchList] = useState([])

    const auth = Firebase.auth()
    const firestore = Firebase.firestore()

    const navigation = useNavigation()

    const navigateLogin = () => {
        navigation.navigate('LoginScreen')
    }

    useEffect(async () => {
        await Firebase.auth().onAuthStateChanged((user)=> {
            if(user){
                setUid(user.uid)
                setauthInfo(true)
            }else {
                setauthInfo(false)
            }
        })
    }, [])

    useEffect(() => {
        getAllWatchList()
    }, [uid])

    const getAllWatchList =  () => {
        const watchListData = []
         firestore.collection('WatchList')
        .where('userId','==', uid)
        .get()
        .then(collectionSnapshot => {
            collectionSnapshot.forEach((documentSnapshot) => {
                watchListData.push(documentSnapshot.data())
                    console.log(documentSnapshot.data());
                })
            setWatchList(watchListData)
        })
    }

    const renderItem = ({item}) => (
        <View
        style={{
            backgroundColor: '#121212',
            borderBottomColor: '#fff',
            borderBottomWidth: 3
        }}
        >
        <List.Item
            style={{
                marginBottom: 0,
                paddingBottom: 0
            }}
            titleStyle={{
                fontSize: 20,
                marginBottom: 5,
                color: '#fff'
            }}
            title={`${item.price} - ${item.baseCurrency}/${item.quoteCurrency}`}
            description={`${item.stockMarketName}`}
            descriptionStyle={{
                color: '#ddd',
            }}
            left={props => <List.Icon {...props} icon="delete-outline" color='#fff'/>}
        />
        <Text style={{
            color: '#fff',
            marginLeft: 70,
            marginBottom: 20,
            marginTop: 0
        }}>
            13-12-2021 / 12:00
        </Text>
        </View>
    )

    return (
        <>
                {authInfo ? 
                    <>
                          <FlatList
                                style={{backgroundColor: '#484848'}}
                                data={watchList}
                                renderItem={renderItem}
                                keyExtractor={(item,index) => index}
                           />
                         
                    </>
                    :
                    <View style={ProfileScreenStyle.nonAuth}>
                    <Text style={ProfileScreenStyle.nonAuthText}>
                        PLEASE LOGIN TO ACCESS THIS FEATURE
                    </Text>
                    <Button
                    style={ProfileScreenStyle.nonAuthButton}
                    icon="login" mode="contained" onPress={() => navigateLogin()}>
                        LOGIN
                    </Button>
                    </View>
                }
        </>
    )
}

