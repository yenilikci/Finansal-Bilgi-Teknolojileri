import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import BlogCard from '../../components/blogcard/BlogCard'
import CoinCardStyle from '../../components/coincard/CoinCardStyle'
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

    return (
        <>
            <View style={BlogScreenStyle.headerBox}>
            <IconButton
                icon="newspaper-variant"
                color="#777"
                size={35}
                onPress={() => console.log('Pressed')}
                style={{marginRight:0}}
            />
                <Text style={BlogScreenStyle.headerTitle}>
                    News
                </Text>
            </View>
            {blogs.map(blog => (
                <BlogCard blog={blog}/>
              
            ))}
        </>
    )
}