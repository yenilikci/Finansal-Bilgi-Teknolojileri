import React, { useEffect,useState } from 'react'
import { Text, View } from 'react-native'
import { Card , Title, Paragraph, Avatar, IconButton} from 'react-native-paper'
import CoinCardStyle from './CoinCardStyle'
import axios from 'axios'

export default function CoinCard({baseCurrency,quoteCurrency,price,stockMarketName}) {

    const [img, setimg] = useState('https://img.icons8.com/external-prettycons-lineal-color-prettycons/2x/external-coin-business-and-finance-prettycons-lineal-color-prettycons-3.png')

    useEffect(async()=> {
        await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
        .then(res => {
            res.data.map(el => {
                if(el.symbol === baseCurrency.toLowerCase()){
                    el.image == ('' || null || undefined ) ? 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/2x/external-coin-business-and-finance-prettycons-lineal-color-prettycons-3.png' 
                    : 
                    setimg(el.image)
                }
            })
        })
    }, [baseCurrency,quoteCurrency,stockMarketName])

    return (
        <>
            <Card style={CoinCardStyle.card}>
                <Card.Content>
                    <Text style={CoinCardStyle.stockMarketName}>{stockMarketName}</Text>
                    <Card.Title
                        style={{padding:20}}
                        title={`${baseCurrency}/${quoteCurrency}`}
                        titleStyle={CoinCardStyle.title}
                        subtitle={price}
                        subtitleStyle={CoinCardStyle.subtitle}
                        left={(props) =>  <Avatar.Image size={50} source={{uri : (img)}} style={{backgroundColor:'#ddd'}}/>}
                        leftStyle={{marginRight: 30}}
                    />
                </Card.Content>
            </Card>
        </>
    )
}