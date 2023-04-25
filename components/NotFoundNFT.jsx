import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const NotFoundNFT = () => {
  return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Opps... ! </Text>
        <Text style={styles.notFoundText}> Not found the NFT</Text>
      </View>
  )
}

export default NotFoundNFT

const styles = StyleSheet.create({
    notFoundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.xLarge,
    },
    notFoundText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
    },
})