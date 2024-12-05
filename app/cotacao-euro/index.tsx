import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CentralImg from '../components/CentralImg'
import Description from '../components/Description'
import Value from '../components/Value'
import Button from '../components/Button'
import { AppProvider } from '../contexts/Context'
export default function index() {
  return (
    <AppProvider>
      <View style={styles.main}>
        <CentralImg />
        <Description />
        <Value />
        <Button />
      </View>
    </AppProvider>
  )
}

const styles = StyleSheet.create({

  main: {
    backgroundColor: "#0B1C2C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

})