import React from 'react'
import { Text, View } from 'react-native'
import { Card , Title, Paragraph, Avatar, IconButton} from 'react-native-paper'
import BlogCardStyle from './BlogCardStyle'

const BlogCard = ({blog}) => {
    return (
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
    )
}

export default BlogCard
