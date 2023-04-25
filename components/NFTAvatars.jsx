import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const NFTAvatars = ({avatars}) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => (
        <Image source={avatar.image} key={avatar.id} style={styles.avatarImage} />
      ))}
    </View>
  )
}

export default NFTAvatars

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: "row", paddingHorizontal: 5
  },

  avatarImage: {
    width: 40,
    height: 40,
    marginLeft: -5,
    marginBottom: 10,
    borderRadius: 50
  }
})