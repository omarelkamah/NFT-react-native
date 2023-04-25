import { View, StyleSheet, TouchableOpacity } from 'react-native'
import NFTImage from './NFTImage'
import NFTAvatars from './NFTAvatars'

const NFTCard = ({NFTItem}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <NFTImage image={NFTItem.image} imageStyle={styles.imageStyle} /> 
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NFTAvatars avatars={NFTItem.avatars} />
        </View>
    </View>
  )
}

export default NFTCard

const styles = StyleSheet.create({
    container : {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.xLarge,
        marginVertical: SIZES.small - 5,
        marginHorizontal: 14,
        padding: 12,
    },
    imageStyle : {
        height: 300,
        width: '100%',
        borderRadius: 30
    },
    cardTop: {

    }
})