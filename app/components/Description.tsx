import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContext } from '../contexts/Context'

export default function Description() {
  const { sharedState, setSharedState } = React.useContext(AppContext)
  const text = sharedState.moeda === 'dolar' ? 'dólar americano' : 'euro'

  return (
    <View>
      <Text style={styles.text}>O { text } está:</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'thin'
  }

})