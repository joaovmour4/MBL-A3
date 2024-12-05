import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppContext, { Context } from '../contexts/Context'

export default function Button() {
  const { refreshFn } = React.useContext(AppContext)

  return (
    <TouchableOpacity style={styles.button} onPress={refreshFn}>
      <Text style={styles.text}>ATUALIZAR</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    paddingHorizontal:10,
    paddingVertical: 5,
    backgroundColor: "#0B1C2C"
  },
  text: {
    fontSize: 28,
    color: "white"
  }

})