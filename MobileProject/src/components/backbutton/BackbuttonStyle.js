import { StyleSheet } from "react-native"
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default StyleSheet.create({
    container: {
      position: 'absolute',
      top: 10 + getStatusBarHeight(),
      left: 4,
    },
    image: {
      width: 24,
      height: 24,
    },
  })
  