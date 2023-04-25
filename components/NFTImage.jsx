import { View, Text, Image, StyleSheet } from 'react-native'

const NFTImage = ({image, imageStyle}) => {
  return (
    <View style={styles.container}>
      <Image source={image} />
    </View>
  )
}

export default NFTImage

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    }
})