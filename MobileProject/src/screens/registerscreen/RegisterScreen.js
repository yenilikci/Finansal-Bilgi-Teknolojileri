import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/background/Background'
import Logo from '../../components/logo/Logo'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import TextInput from '../../components/textinput/Textinput'
import BackButton from '../../components/backbutton/Backbutton'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import RegisterScreenStyle from './RegisterScreenStyle'
import Firebase from '../../config/firebase'
export default function RegisterScreen({ navigation }) {



  const auth = Firebase.auth()

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onRegisterPress =  () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    return new Promise((resolve, reject)=>{
      auth.createUserWithEmailAndPassword(email.value, password.value)
      .then(userCredentials => {
          resolve(userCredentials)
          if(userCredentials.additionalUserInfo.isNewUser){
            navigation.navigate('HomeScreen')
            alert('Registration successful, Welcome!')
          }
      })
      .catch(error => alert(error))
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => onRegisterPress()}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={RegisterScreenStyle.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={RegisterScreenStyle.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}