import React from 'react'
import { Text, View } from 'react-native'
import { Card , Title, Paragraph, Avatar, IconButton, TouchableRipple} from 'react-native-paper'
import BlogCardStyle from './BlogCardStyle'

const BlogCard = ({blog}) => {
    return (
        <TouchableRipple
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0)"
       >
        <Card style={BlogCardStyle.card}>
            <Card.Content>
                <Text style={BlogCardStyle.title}>{blog.title}</Text>
                <Text style={BlogCardStyle.text}>
                    {blog.text}
                </Text>
                <Text style={BlogCardStyle.newsTitle}>
                    -{blog.author}
                </Text>
            </Card.Content>
        </Card>
        </TouchableRipple>
    )
}

export default BlogCard