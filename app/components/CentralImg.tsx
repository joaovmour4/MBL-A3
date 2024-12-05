import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContext } from '../contexts/Context'

export default function CentralImg() {
  const { sharedState, setSharedState } = React.useContext(AppContext)
  const dolar = require(`../../assets/images/dolar.png`)
  const euro = require(`../../assets/images/euro.png`)

  return (
    <Image style={styles.image}
      source={sharedState.moeda === 'dolar' ? dolar : euro}
    />
  )
}

const styles = StyleSheet.create({

  image: {
    height: 200,
    resizeMode: 'contain'
  }

})