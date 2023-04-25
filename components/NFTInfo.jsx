import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'
import Button from './Button'

const NFTInfo = ({comments, views, price, love}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContent}>
        <Feather name="eye" size={20} color={COLORS.white} />
        <Text style={styles.infoText}>{views}</Text>
      </View>
      <View style={styles.infoContent}>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={17}
          color={COLORS.white}
        />
        <Text style={styles.infoText}>{comments}</Text>
      </View>
      <View style={styles.infoContent}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white" />
        <Text style={styles.infoText}>{price}</Text>
      </View>
      {love && 
        <View>
          <Button
            Icon={<AntDesign name="heart" size={18} color={COLORS.second} />}
            stylesButton={styles.buttonHeart}
          />
        </View>
      }
    </View>
  )
}

export default NFTInfo

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoContent: {
    backgroundColor: COLORS.second,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 3,
    gap: 5,
  },
  infoText: {
    color: COLORS.white,
    fontSize: 16
  },

  buttonHeart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bg,
    width: 33,
    height: 33,
    borderRadius: 50
  }

})