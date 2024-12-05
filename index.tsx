import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CentralImg from './app/components/CentralImg'
import Description from './app/components/Description'
import Value from './app/components/Value'
import Button from './app/components/Button'
import { AppProvider } from './app/contexts/Context'
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