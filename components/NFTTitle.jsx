import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { SIZES, COLORS, FONTS } from '../constants'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NFTDate from './NFTDate';

const NFTTitle = ({NFTName, creator, date}) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
            <Text style={styles.NFTName}>{NFTName}</Text>
        </View>
        <View style={styles.creator}>
            <Text style={styles.creatorTitle}>{creator}</Text>
            <MaterialCommunityIcons
            name="check-decagram"
            size={20}
            color="white"
          />
        </View>
      </View>
      <View>
        <NFTDate date={date} />
      </View>
    </View>
  )
}

export default NFTTitle

const styles = StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end"},
    NFTName: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        marginBottom: 5
    },
    creator: {
        flexDirection: 'row',
        gap: SIZES.small
    },
    creatorTitle : {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: 16, 
    }
})