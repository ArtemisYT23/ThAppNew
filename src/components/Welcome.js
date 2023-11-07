import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.welcome}>ThApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    margin: 7,
    fontWeight: 'bold',
    color: '#2b3d6d',
    textTransform: 'uppercase'
  }
})