import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, FlatList} from 'react-native'
import {Button, List, IconButton} from 'react-native-paper'
import Firebase from '../../config/firebase'
import ProfileScreenStyle from './ProfileScreenStyle'

export default function ProfileScreen() {

    const [authInfo, setauthInfo] = useState(false)
    const [uid, setUid] = useState('')
    const [refresh, setRefresh] = useState(0)
    const [watchList, setWatchList] = useState([])
    const [deleteAction, setDeleteAction] = useState(false)

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
    }, [uid,refresh,deleteAction])

    const deleteWatchItem = (price,baseCurrency,quoteCurrency,stockMarketName,date) => {
        var ref = firestore.collection('WatchList')
        .where("baseCurrency","==",baseCurrency)
        .where("quoteCurrency","==",quoteCurrency)
        .where("price","==",price)
        .where("stockMarketName","==",stockMarketName)
        .where("date","==",date)

        ref.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete().then(()=> {
                    setDeleteAction(!deleteAction)
                    alert('Watch Item Deleted!')
                }).catch(() => {
                    alert('Watch Item Not Deleted!')
                })
            })
        })
    }

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
            left={props =>  <IconButton
                icon="delete"
                color='#fff'
                size={35}
                onPress={() => deleteWatchItem(item.price,item.baseCurrency,item.quoteCurrency,item.stockMarketName,item.date)}
              />
            }
        />
            <Text style={{
                color: '#fff',
                marginLeft: 80,
                marginBottom: 20,
                marginTop: 0
            }}>
                {`${new Date(
                item.date.seconds * 1000 + item.date.nanoseconds / 1000000,
                ).toString().split(' ')[0]} ${new Date(
                    item.date.seconds * 1000 + item.date.nanoseconds / 1000000,
                    ).toString().split(' ')[1]} ${new Date(
                        item.date.seconds * 1000 + item.date.nanoseconds / 1000000,
                        ).toString().split(' ')[2]} ${new Date(
                            item.date.seconds * 1000 + item.date.nanoseconds / 1000000,
                            ).toString().split(' ')[3]} ${new Date(
                                item.date.seconds * 1000 + item.date.nanoseconds / 1000000,
                                ).toString().split(' ')[4]}`}
            </Text>
        </View>
    )

    return (
        <>
                {authInfo ? 
                    <>
                        <Button icon="refresh" mode="contained" onPress={() => setRefresh(refresh + 1)} 
                        style={{
                            borderRadius: 0,
                            backgroundColor: '#333333'
                        }}>
                            Refresh
                        </Button>
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

