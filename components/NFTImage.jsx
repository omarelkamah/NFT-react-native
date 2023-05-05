import { View, Image, StyleSheet, StatusBar } from 'react-native'
import Button from './Button'
import { AntDesign, Feather } from '@expo/vector-icons'
import { COLORS } from '../constants'

const NFTImage = ({image, imageStyle, love , arrow, pressHandler}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyle}/>
      {love && (
        <Button
          stylesButton={styles.buttonHeart}
          Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
        />
      )}
      {arrow && (
        <Button
          stylesButton={styles.buttonArrow}
          Icon={<Feather name="arrow-left" size={20} color={COLORS.second} />}
          pressHandler={pressHandler && pressHandler} 
        />
      )}
    </View>
  )
}

export default NFTImage

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    buttonHeart: {
      position: "absolute",
      top: StatusBar.currentHeight + 10,
      right: 10,
      backgroundColor: COLORS.white,
      padding: 10,
      borderRadius: 40,
    },
    buttonArrow: {
      position: "absolute",
      top: StatusBar.currentHeight + 10,
      left: 10,
      backgroundColor: COLORS.white,
      padding: 10,
      borderRadius: 40,
    },
})