import React from 'react'
import Background from '../../components/background/Background'
import Logo from '../../components/logo/Logo'
import Header from '../../components/header/Header'
import Paragraph from '../../components/header/Header'
import Button from '../../components/button/Button'
import DashboardStyle from './DashboardStyle'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Coin Price Rank - Dashboard</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
