import React from 'react'
import { Text, View } from 'react-native'
import { Card , Title, Paragraph, Avatar, IconButton} from 'react-native-paper'
import CoinCardStyle from './CoinCardStyle'

export default function CoinCard() {
    return (
        <>
            <Card style={CoinCardStyle.card}>
                <Card.Content>
                    <Card.Title
                        style={{padding:20}}
                        title="BTC"
                        titleStyle={CoinCardStyle.title}
                        subtitle="Card Subtitle"
                        subtitleStyle={CoinCardStyle.subtitle}
                        left={(props) =>  <Avatar.Image size={50} source={{uri : ('https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/2x/external-btc-bitcoin-cryptocurrency-electronic-cash-logotype-layout-logo-tritone-tal-revivo.png')}} />}
                        leftStyle={{marginRight: 30}}
                    />
                </Card.Content>
            </Card>
        </>
    )
}