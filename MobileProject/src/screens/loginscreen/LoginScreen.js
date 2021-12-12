import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/background/Background'
import Logo from '../../components/logo/Logo'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import TextInput from '../../components/textinput/Textinput'
import BackButton from '../../components/backbutton/Backbutton'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import LoginStyle from './LoginScreenStyle'
import Firebase from '../../config/firebase'


export default function LoginScreen({ navigation }) {
  const auth = Firebase.auth()
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    return new Promise((resolve, reject)=>{
      auth.signInWithEmailAndPassword(email.value, password.value)
      .then(userCredentials => {
          resolve(userCredentials)
          if(!userCredentials.additionalUserInfo.isNewUser){
            navigation.navigate('HomeScreen')
            alert('Login successful , Welcome!')
          }
      })
      .catch(error => alert(error))
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome!</Header>
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
      <View style={LoginStyle.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={LoginStyle.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={() => onLoginPressed()}>
        Login
      </Button>
      <View style={LoginStyle.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={LoginStyle.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}


