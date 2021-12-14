import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { IconButton } from 'react-native-paper'
import BlogCard from '../../components/blogcard/BlogCard'
import BlogScreenStyle from './BlogScreenStyle'
import Firebase from '../../config/firebase'

export default function BlogScreen () {

    const firestore = Firebase.firestore()

    const [blogs, setBlogs] = useState([])
    
    const getAllData = async () => {
        setBlogs([])
        const blogsData = []
        firestore.collection('Blogs')
        .get()
        .then(collectionSnapshot => {
            collectionSnapshot.forEach((documentSnapshot) => {
                blogsData.push(documentSnapshot.data())
                console.log(documentSnapshot.data());
            })
            setBlogs(blogsData)
        })
    }

    useEffect(async ()=> {
        await getAllData()
    }, [])

    const renderItem = ({item}) => (
        <BlogCard blog={item}/>
    )

    return (
        <>
        <View style={{backgroundColor: '#484848'}}>
            <View style={BlogScreenStyle.headerBox}>
            <IconButton
                icon="newspaper-variant"
                color="#fff"
                size={30}
                onPress={() => console.log('Pressed')}
                style={{marginRight:0}}
            />
                <Text style={BlogScreenStyle.headerTitle}>
                    News
                </Text>
            </View>
        </View>
         <FlatList
         style={{backgroundColor: '#484848'}}
         data={blogs}
         renderItem={renderItem}
         keyExtractor={(item,index) => index}
     />
     </>
    )
}