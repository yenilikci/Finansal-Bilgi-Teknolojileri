import React, { useState } from 'react'
import Background from '../../components/background/Background'
import BackButton from '../../components/backbutton/Backbutton'
import Logo from '../../components/logo/Logo'
import Header from '../../components/header/Header'
import TextInput from '../../components/textinput/Textinput'
import Button from '../../components/button/Button'
import { emailValidator } from '../../helpers/emailValidator'
import ResetPasswordScreenStyle from './ResetPasswordScreenStyle'
import Firebase from '../../config/firebase'

export default function ResetPasswordScreen({ navigation }) {
  
  const firestore = Firebase.auth()

  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

    firestore.sendPasswordResetEmail(email.value)
    .then((user) => {
      alert('Please check your email...')
      navigation.navigate('LoginScreen')
    }).catch(() => {
      alert('We not found your email...')
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}