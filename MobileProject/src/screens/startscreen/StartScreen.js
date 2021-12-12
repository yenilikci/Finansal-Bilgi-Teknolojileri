import React from 'react'
import Background from '../../components/background/Background'
import Logo from '../../components/logo/Logo'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import Paragraph from '../../components/paragraph/Paragraph'
import StartScreenStyle from './StartScreenStyle'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Coin Price Rank</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('HomeScreen')}
      >
        Continue Without Login
      </Button>
    </Background>
  )
}
