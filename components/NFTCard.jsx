import { View, StyleSheet, TouchableOpacity } from 'react-native'
import NFTImage from './NFTImage'
import NFTAvatars from './NFTAvatars'
import { COLORS, SIZES } from '../constants'
import NFTTitle from './NFTTitle'
import NFTInfo from './NFTInfo'
import { useNavigation } from '@react-navigation/native'

const NFTCard = ({NFTItem}) => {
  const navigate = useNavigation()

  const handelPress = () => {
    navigate.navigate('NFT-details', {NFTItem})
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handelPress}>
            <NFTImage image={NFTItem.image} imageStyle={styles.imageStyle} /> 
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NFTAvatars avatars={NFTItem.avatars} />
        </View>
        <View style={styles.cardBottom}>
          <NFTTitle
            NFTName={NFTItem.name}
            creator={NFTItem.creator}
            date={NFTItem.date}
          />
          <View style={{ marginTop: SIZES.small + 5 }}>
            <NFTInfo
              comments={NFTItem.comments}
              views={NFTItem.views}
              price={NFTItem.price}
              love
            />
          </View>
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
      marginTop: -20
    }
})