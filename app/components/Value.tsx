import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContext } from '../contexts/Context'

export default function Value() {
  const { sharedState, setSharedState } = React.useContext(AppContext)

  React.useEffect(()=> {

  }, [sharedState.moeda])

  return (
    <View>
      <Text style={styles.text}>R$ {sharedState.moeda === 'dolar' ? 
          sharedState.dolar
          : 
          sharedState.euro
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

  text: {
    color: 'white',
    fontSize: 56
  }

})