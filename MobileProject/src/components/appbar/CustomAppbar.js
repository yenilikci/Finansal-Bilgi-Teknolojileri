import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import CustomAppbarStyle from './CustomAppbarStyle'

export default function CustomAppbar() {
    return (
        <Appbar.Header style={CustomAppbarStyle.header}>
            <Text style={CustomAppbarStyle.text}>
                Coin Price Rank
            </Text>
        </Appbar.Header>
    )
}
