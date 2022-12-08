import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter} >Made by Delgado Santiago and Cavallieri Hernan.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    footer: {
        paddingVertical: 10,
        backgroundColor: "rgba(0,0,0,.606)",
      },
      textFooter: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
      }
  });
